import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import landStore from "../../../Store/LandStore";
import {useSearchParams} from "react-router-dom";
import ListCardInfo from "../../../UI/ListCardInfo/ListCardInfo";
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";

const LandCard: React.FC = () => {

    const [params] = useSearchParams()
    const landCardId = params.get("landCardId")

    const [land, setLand] = useState<ReturnedLandType | null>(null);
    const handleOnLand = useCallback((l: ReturnedLandType) => setLand(l), [])

    useEffect(() => {
        if (landCardId)
            landStore.getLandById(landCardId).then((data) => "result" in data ? handleOnLand(data.result) : "")
    }, [handleOnLand, landCardId])

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
                                    Земельный участок "Тест"
                                </h1>
                            </div>
                            <div className="item__row">
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__mainInfo" itemH2="Основная информация"
                                              itemListTitles={["Кадастровый номер", "Дата внесения в базу",
                                                  "Площадь", "Адрес", "Категория",
                                                  "Статус", "Этап", "Канал поиска"]}
                                              itemListValues={[land.cadastral_number, land.entered_at_base,
                                                  land.area_square.toString(), land.address, land.area_category,
                                                  land.status?.status_name, land.stage?.stage_name, land.search_channel]}/>

                                <ListCardInfo land={land}
                                              itemBlockStyle="item__legalInfo" itemH2="Юридические сведения"
                                              itemListTitles={["Количество объектов",
                                                  "Количество собственников",
                                                  "Вид разрешенного использования",
                                                  "Ограничения и обременения", "Кадастровая стоимость"]}
                                              itemListValues={[land.area_buildings.length.toString(),
                                                  land.owners.length.toString(),
                                                  "нет данных", "нет данных", "20"
                                              ]}/>
                            </div>
                            <div className="item__row">
                                <ListCardInfo land={land}
                                              linkTitlesIndexes={[0]}
                                              linkTitlesHandles={[() => console.log("dad")]}
                                              itemBlockStyle="item__objectsInfo" itemH2="Информация об объектах"
                                              itemListTitles={["Открыть список объектов"]}
                                              itemListValues={[""]}/>
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__additionalInfo" itemH2="Дополнительная информация"
                                              itemListTitles={["Наличие инженерных сетей",
                                                  "Наличие транспорта", "Экономика"]}
                                              itemListValues={["нет данных", "нет данных", "нет данных"]}/>
                            </div>
                            <div className="item__row">
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__copyrightInfo" itemH2="Данные о правообладателе"
                                              itemListTitles={["Правообладатель",
                                                  "Почта", "Телефон"]}
                                              itemListValues={[land.owners[0].name,
                                                  land.owners[0].email, land.owners[0].phone_number]}/>
                                <ListCardInfo land={land}
                                              itemBlockStyle="item__tasks" itemH2="Задачи"
                                              itemListTitles={["Завершено"]}
                                              itemListValues={["нет данных"]}/>
                            </div>
                        </div>
                        : ""
                }
            </div>
        </main>
    );
};

export default LandCard;
