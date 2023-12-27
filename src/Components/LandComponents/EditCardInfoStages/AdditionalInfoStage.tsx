import React from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";

interface AdditionalInfoStageProps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const AdditionalInfoStage: React.FC<AdditionalInfoStageProps> = ({land, handleOnClose}: AdditionalInfoStageProps) => {
    return (
        <div>

        </div>
    );
};

export default AdditionalInfoStage;
