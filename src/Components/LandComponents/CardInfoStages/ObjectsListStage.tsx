import React from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import CloseIcon from "../../../Assets/Svg/CloseIcon";
import EditIcon from "../../../Assets/Svg/EditIcon";
import {observer} from "mobx-react-lite";
import landStore from "../../../Store/LandStore";

interface ObjectsListStageProps {
    land: ReturnedLandType,
}

const ObjectsListStage: React.FC<ObjectsListStageProps> = ({land}: ObjectsListStageProps) => {

    const objects = land.area_buildings || [
        {
            name: "Название объекта",
            description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
            commissioning_year: "2002",
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            land_area_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        },
        {
            name: "Название объекта",
            description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
            commissioning_year: "2002",
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            land_area_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        },
        {
            name: "Название объекта",
            description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
            commissioning_year: "2002",
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            land_area_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        },
        {
            name: "Название объекта",
            description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
            commissioning_year: "2002",
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            land_area_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        },
    ]

    return (
        <div className="cardInfo__modal">
            <ul className="cardInfo__modal-objects">
                {
                    objects.map((object, ind) =>
                        <li className="cardInfo__modal-object" key={ind}>
                            <div className="object__header">
                                <h3 className="object__title">
                                    Объект&nbsp;&nbsp;{`"${object.name}"`}
                                </h3>
                                <div className="object__actions">
                                    <div className="object__edit" onClick={() => {
                                        landStore.updateIsObjectListClicked()
                                        landStore.updateIsObjectEditClicked(ind)
                                    }}>
                                        <EditIcon/>
                                    </div>
                                    <div className="object__close" onClick={() => console.log("Объект удалён")}>
                                        <CloseIcon/>
                                    </div>
                                </div>
                            </div>
                            <div className="object__rows">
                                <div className="objects__row">
                                    <p className="object__item object__item-title">Описание</p>
                                    <p className="object__item">
                                        {
                                            object.description.length > 100
                                                ? object.description.slice(0, 100) + "..."
                                                : object.description
                                        }
                                    </p>
                                </div>
                                <div className="objects__row">
                                    <p className="object__item object__item-title">Введен в эксплуатацию</p>
                                    <p className="object__item">{object.commissioning_year + " г."}</p>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default ObjectsListStage;
