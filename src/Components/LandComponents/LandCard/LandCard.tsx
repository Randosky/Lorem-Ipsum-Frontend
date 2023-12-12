import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import landStore from "../../../Store/LandStore";
import {useSearchParams} from "react-router-dom";
import ActionsWithLand from "../ActionsWithLand/ActionsWithLand";
import ButtonMain from "../../../UI/MyButton/ButtonMain";

const LandCard: React.FC = () => {
    const [isEdit, setIsEdit] = useState(false);
    const handleOnEdit = useCallback(() => setIsEdit(!isEdit), [isEdit]);


    const [params] = useSearchParams()
    const landCardId = params.get("landCardId")

    useEffect(() => {
        landStore.getCardInfo(landCardId || "").then()
    }, [landCardId])

    return (
        <>
            {
                isEdit
                    ? <ActionsWithLand
                        actionType="EDIT"
                        landAddingDateProps="2023-10-12"
                        landAddressProps="adawda"
                        landCadastrialProps="123123"
                        landCategoryProps="Home"
                        landCopyrightHolderProps="adwawdawd"
                        landObjectProps="Zavod"
                        landSearchChannelProps="Test1"
                        landSquareProps="23"
                        landTitleProps="dawdadw"/>
                    :
                    <main className="landCard">
                        <Header/>
                        <div className="landCard__container">
                            <div className="landCard__item">
                                <ButtonMain btnStyle="" btnText="редактировать"
                                            handleOnClick={handleOnEdit}/>
                            </div>
                        </div>
                    </main>
            }
        </>
    );
};

export default LandCard;
