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

    return (
        <main className="landCard">
            <Header/>
            <div className="landCard__container">
                {
                    land
                        ?
                        <div className="landCard__item">
                            <div className="item__header">
                                <h1 className="item__title">
                                    Земельный участок {`"${land.name}"`}
                                </h1>
                                <p className="item__status">
                                    {land.working_status}
                                </p>
                                <p className="item__stage">
                                    {land.stage}
                                </p>
                            </div>
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
