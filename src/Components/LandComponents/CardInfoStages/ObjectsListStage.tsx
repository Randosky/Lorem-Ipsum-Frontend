import React from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import CloseIcon from "../../../Assets/Svg/CloseIcon";

interface ObjectsListStageProps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const objects = [
    {
        description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
        address: "ул. Гдетотамова 17/А",
        year: "2002"
    },
    {
        description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
        address: "ул. Гдетотамова 17/А",
        year: "2002"
    },
    {
        description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
        address: "ул. Гдетотамова 17/А",
        year: "2002"
    },
    {
        description: "Текст описание объекта, сокращённый до 100 знаков, тестовое описание тестовое описание",
        address: "ул. Гдетотамова 17/А",
        year: "2002"
    },
]

const ObjectsListStage: React.FC<ObjectsListStageProps> = ({land, handleOnClose}: ObjectsListStageProps) => {
    return (
        <div className="cardInfo__modal">
            <ul className="cardInfo__modal-objects">
                {
                    objects.map((object, ind) =>
                        <li className="cardInfo__modal-object">
                            <div className="object__header">
                                <h3 className="object__title">
                                    Объект&nbsp;&nbsp;{"\"Тестовый объект\""}
                                </h3>
                                <div className="object__close" onClick={() => console.log("Объект удалён")}>
                                    <CloseIcon/>
                                </div>
                            </div>
                            <div className="object__rows" key={ind}>
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
                                    <p className="object__item object__item-title">Адрес</p>
                                    <p className="object__item">{object.address}</p>
                                </div>
                                <div className="objects__row">
                                    <p className="object__item object__item-title">Введен в эксплуатацию</p>
                                    <p className="object__item">{object.year + " г."}</p>
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
