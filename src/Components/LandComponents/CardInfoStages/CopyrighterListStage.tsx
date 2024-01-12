import React from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import landStore from "../../../Store/LandStore";
import EditIcon from "../../../Assets/Svg/EditIcon";
import CloseIcon from "../../../Assets/Svg/CloseIcon";

interface CopyrighterListStageProps {
    land: ReturnedLandType,
}

const CopyrighterListStage: React.FC<CopyrighterListStageProps> = (props: CopyrighterListStageProps) => {

    const {land} = props

    const owners = land.owners || [
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
                    owners.map((owner, ind) =>
                        <li className="cardInfo__modal-object" key={ind}>
                            <div className="object__header">
                                <h3 className="object__title">
                                    {owner.name}
                                </h3>
                                <div className="object__actions">
                                    <div className="object__edit" onClick={() => {
                                        landStore.updateIsCopyrighterListClicked()
                                        landStore.updateIsCopyrighterEditClicked(ind)
                                    }}>
                                        <EditIcon/>
                                    </div>
                                    <div className="object__close" onClick={() => console.log("Правообладатель удалён")}>
                                        <CloseIcon/>
                                    </div>
                                </div>
                            </div>
                            <div className="object__rows">
                                <div className="objects__row">
                                    <p className="object__item object__item-title">Почта</p>
                                    <a className="object__item" href={`mailto:${owner.email}`}>
                                        {owner.email}
                                    </a>
                                </div>
                                <div className="objects__row">
                                    <p className="object__item object__item-title">Номер телефона</p>
                                    <a className="object__item" href={`tel:${owner.phone_number}`}>
                                        {owner.phone_number}
                                    </a>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default CopyrighterListStage;
