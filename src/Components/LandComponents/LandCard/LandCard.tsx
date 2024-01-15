import React, {useEffect} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import landStore from "../../../Store/LandStore";
import {useSearchParams} from "react-router-dom";
import ListCardInfo from "../ListCardInfo/ListCardInfo";
import {observer} from "mobx-react-lite";
import schedulerStore from "../../../Store/SchedulerStore";
import ListCardTasksInfo from "../ListCardInfo/ListCardTasksInfo";
import ListCardCommentsInfo from "../ListCardInfo/ListCardCommentsInfo";
import ButtonContrast from "../../../UI/MyButton/ButtonContrast";
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";

const LandCard: React.FC = observer(() => {

    const [params] = useSearchParams()
    const landCardId = params.get("landCardId")

    const land = landStore.selectedLand
    const landLegalInfoPermittedNames = landStore.selectedLandLegalInfo?.permitted_uses.map(u => u.name).join(", ") || ""
    const landLegalInfoLimitsNames = landStore.selectedLandLegalInfo?.limits.map(l => l.name).join(", ") || ""

    useEffect(() => {
        if (landCardId) {
            landStore.getLandById(landCardId).then()
            landStore.getAreaLegalInfo(landCardId).then()
            schedulerStore.getAreaTasks(landCardId).then()
        }
    }, [landCardId])

    useEffect(() => {
        if (landStore.isLandInfoEditClicked || landStore.isObjectEditClicked !== -1 || landStore.isObjectListClicked
            || landStore.isCopyrighterListClicked || landStore.isCopyrighterEditClicked !== -1
            || schedulerStore.isTaskEditClicked)
            document.body.style.overflow = 'hidden'
        else {
            document.body.style.overflowX = 'hidden'
            document.body.style.overflowY = 'auto'
        }
    }, [landStore.isLandInfoEditClicked, landStore.isObjectEditClicked, landStore.isObjectListClicked,
        landStore.isCopyrighterListClicked, landStore.isCopyrighterEditClicked, schedulerStore.isTaskEditClicked]);

    const handleOnChangeStatus = (landInfo: ReturnedLandType, statusAndStage: string[]) =>
        landStore.updateMainLandInfo(landInfo.id, {
            name: landInfo.name,
            cadastral_number: landInfo.cadastral_number,
            area_category: landInfo.area_category,
            cadastral_cost: landInfo.cadastral_cost,
            area_square: landInfo.area_square,
            address: landInfo.address,
            search_channel: landInfo.search_channel,
            working_status: statusAndStage[0],
            stage: statusAndStage[1],
        })
            .then(() => landStore.updateIsLandInfoEditClicked(""))

    const getCurrentLandStatus = (land: ReturnedLandType) => {
        switch (land.working_status) {
            case "Новый":
                return (
                    <div className="item__header-block">
                        <ButtonContrast btnText="В работу" btnStyle="item__header-btn"
                                        handleOnClick={() =>
                                            handleOnChangeStatus(land, ["В работе", land?.stage])}/>
                        <ButtonContrast btnText="Ждёт решения" btnStyle="item__header-btn"
                                        handleOnClick={() =>
                                            handleOnChangeStatus(land, ["Ждёт решения", land?.stage])}/>
                    </div>
                )
            case "В работе":
                return (
                    <div className="item__header-block">
                        <ButtonContrast btnText="Новый" btnStyle="item__header-btn"
                                        handleOnClick={() =>
                                            handleOnChangeStatus(land, ["Новый", land?.stage])}/>
                        <ButtonContrast btnText="Ждёт решения" btnStyle="item__header-btn"
                                        handleOnClick={() =>
                                            handleOnChangeStatus(land, ["Ждёт решения", land?.stage])}/>
                    </div>
                )
            case "Ждёт решения":
                return (
                    <div className="item__header-block">
                        <ButtonContrast btnText="Новый" btnStyle="item__header-btn"
                                        handleOnClick={() =>
                                            handleOnChangeStatus(land, ["Новый", land?.stage])}/>
                        <ButtonContrast btnText="В работу" btnStyle="item__header-btn"
                                        handleOnClick={() =>
                                            handleOnChangeStatus(land, ["В работе", land?.stage])}/>
                    </div>
                )
            case "В архиве":
                return ""
        }
    }
    const getCurrentLandStage = (land: ReturnedLandType) => {
        switch (land.stage) {
            case "Поиск":
                return (
                    <ButtonContrast btnText="К аналитике" btnStyle="item__header-btn"
                                    handleOnClick={() =>
                                        handleOnChangeStatus(land, ["Ждёт решения", "Аналитика"])}/>
                )
            case "Аналитика":
                return (
                    <ButtonContrast btnText="К сделке" btnStyle="item__header-btn"
                                    handleOnClick={() =>
                                        handleOnChangeStatus(land, ["Ждёт решения", "Сделка"])}/>
                )
            case "Сделка":
                return (
                    <ButtonContrast btnText="В архив" btnStyle="item__header-btn"
                                    handleOnClick={() =>
                                        handleOnChangeStatus(land, ["В архиве", "В архиве"])}/>
                )
            case "В архиве":
                return ""
        }
    }

    return (
        <main className="landCard">
            <Header/>
            <div className="landCard__container">
                {
                    land
                        ?
                        <div className="landCard__item">
                            <div className={`item__header ${land.stage === "В архиве" ? "item__header-archived" : ""}`}>
                                <h1 className="item__title">
                                    {`Земельный участок "${land.name}"`}
                                </h1>
                                {
                                    land.stage === "В архиве" ? "" :
                                        <p className="item__status">
                                            {land.working_status}
                                        </p>
                                }
                                <p className="item__stage">
                                    {land.stage}
                                </p>
                            </div>
                            {
                                land.stage === "В архиве" ? "" :
                                    <div className="item__header-btns">
                                        {
                                            getCurrentLandStatus(land)
                                        }
                                        {
                                            getCurrentLandStage(land)
                                        }
                                    </div>
                            }
                            <div className="item__row">
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__mainInfo" itemH2="Основная информация"
                                              itemListTitles={["Кадастровый номер", "Дата внесения в базу",
                                                  "Кадастровая стоимость",
                                                  "Площадь (м2)", "Адрес", "Категория",
                                                  "Статус", "Этап", "Канал поиска"]}
                                              itemListValues={[land.cadastral_number,
                                                  land.entered_at_base.slice(0, 10).split("-").reverse().join("."),
                                                  land.cadastral_cost?.toString(),
                                                  land.area_square.toString(), land.address, land.area_category,
                                                  land.working_status, land.stage, land.search_channel]}/>
                                <ListCardTasksInfo land={land}/>
                            </div>
                            <div className="item__row">
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__legalInfo" itemH2="Юридические сведения"
                                              itemListTitles={["Количество объектов",
                                                  "Количество собственников",
                                                  "Вид разрешенного использования",
                                                  "Ограничения и обременения"]}
                                              itemListValues={[land.area_buildings.length.toString(),
                                                  land.owners.length.toString(),
                                                  landLegalInfoPermittedNames, landLegalInfoLimitsNames
                                              ]}/>
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__additionalInfo" itemH2="Дополнительная информация"
                                              itemListTitles={["Наличие инженерных сетей",
                                                  "Наличие транспорта", "Экономика"]}
                                              itemListValues={[`${land.extra_data?.engineering_networks || "нет данных"}`,
                                                  `${land.extra_data?.transport || "нет данных"}`,
                                                  `${land.extra_data?.result || "нет данных"}`,]}/>
                            </div>
                            <div className="item__row">
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__objectsInfo" itemH2="Информация об объектах"
                                              itemListTitles={["Открыть список объектов"]}
                                              itemListValues={[""]}/>
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__copyrightInfo" itemH2="Данные о правообладателях"
                                              itemListTitles={["Открыть список правообладателей"]}
                                              itemListValues={[""]}/>
                            </div>
                            <div className="item__comments">
                                <ListCardCommentsInfo land={land}/>
                            </div>
                        </div>
                        : ""
                }
            </div>
        </main>
    );
});

export default LandCard;
