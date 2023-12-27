import React from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";

interface ObjectsListStagePorps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const ObjectsListStage: React.FC<ObjectsListStagePorps> = ({land, handleOnClose}: ObjectsListStagePorps) => {
    return (
        <div className="cardInfo__modal">

        </div>
    );
};

export default ObjectsListStage;
