import React, {useCallback, useEffect, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import "../../../Styles/Comments/AreaCommentsStyles.scss"
import SendIcon from "../../../Assets/Svg/SendIcon";
import landCommentStore from "../../../Store/LandCommentStore";
import {observer} from "mobx-react-lite";
import schedulerStore from "../../../Store/SchedulerStore";
import CloseIcon from "../../../Assets/Svg/CloseIcon";
import EditIcon from "../../../Assets/Svg/EditIcon";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";

interface ListCardCommentsInfoProps {
    land: ReturnedLandType
}

const ListCardCommentsInfo: React.FC<ListCardCommentsInfoProps> = observer(({land}: ListCardCommentsInfoProps) => {

    const [commentText, setCommentText] = useState("");
    const [isEditComment, setIsEditComment] = useState(false);
    const [currentEditCommentId, setCurrentEditCommentId] = useState("");

    const handleOnCommentText = useCallback((e: string) => setCommentText(e), []);
    const handleOnIsEditComment = useCallback((e: boolean) => setIsEditComment(e), []);
    const handleOnCurrentEditCommentId = useCallback((e: string) => setCurrentEditCommentId(e), []);

    useEffect(() => {
        const comments = document.getElementById("comments")
        comments ? comments.scrollTo(0, 9999999999999) : ""
        employeeActionsStore.getEmployeeProfileInfoByAccessToken().then()
    }, []);

    const currentEmployee = employeeActionsStore.currentEmployeeInfo

    const handleOnSave = () => {
        if (commentText !== "") {
            if (isEditComment)
                landCommentStore.editAreaComment(currentEditCommentId, commentText)
                    .then(() => handleOnIsEditComment(false))
                    .then(() => handleOnCurrentEditCommentId(""))
                    .then(() => handleOnCommentText(""))
            else {
                landCommentStore.uploadAreaComment(commentText, land.id)
                    .then(() => handleOnIsEditComment(false))
                    .then(() => handleOnCurrentEditCommentId(""))
                    .then(() => handleOnCommentText(""))
                    .then(() => {
                        const comments = document.getElementById("comments")
                        comments ? comments.scrollTo(0, 9999999999999) : ""
                    })
            }
        }
    }

    return (
        <div className="comments" onKeyDown={(e) => e.key == 'Enter' ? handleOnSave() : ""}>
            <h2 className="comments__title">
                Комментарии
            </h2>
            <div className="comments__block" id="comments">
                {
                    land.comments
                        ?
                        land.comments.map((c, ind) =>
                            currentEmployee?.id === c.employee_id
                                ?
                                <div key={ind} className="comments__comment comments__comment-mySelf">
                                    <div className={`comment__delete`}
                                         onClick={() => landCommentStore.deleteAreaComment(c.id).then()}>
                                        <CloseIcon/>
                                    </div>
                                    <div className={`comment__edit ${currentEditCommentId === c.id
                                        ? "comment__edit-current" : ""}`}
                                         onClick={() => {
                                             handleOnCommentText(c.comment_text)
                                             handleOnIsEditComment(true)
                                             handleOnCurrentEditCommentId(c.id)
                                         }}>
                                        <EditIcon/>
                                    </div>
                                    <div className="comment__bottom">
                                        <p className="comment__employee">
                                            {`${c.employee.last_name} ${c.employee.first_name}`}
                                        </p>
                                        <p className="comment__time">
                                            {c.created_at.slice(11, 16)}
                                            &nbsp;
                                            {c.created_at.slice(0, 10).split("-").reverse().join(".")}
                                        </p>
                                    </div>
                                    <p className="comment__text">
                                        {c.comment_text}
                                    </p>
                                </div>
                                :
                                <div key={ind} className="comments__comment">
                                    <div className="comment__bottom">
                                        <p className="comment__employee">
                                            {`${c.employee.last_name} ${c.employee.first_name}`}
                                        </p>
                                        <p className="comment__time">
                                            {c.created_at.slice(11, 16)}
                                            &nbsp;
                                            {c.created_at.slice(0, 10).split("-").reverse().join(".")}
                                        </p>
                                    </div>
                                    <p className="comment__text">
                                        {c.comment_text}
                                    </p>
                                </div>
                        )
                        : ""
                }
            </div>
            <div className="comments__actions">
                <input className="actions__input" type="text" value={commentText}
                       onChange={e => handleOnCommentText(e.target.value)}/>
                <button className="actions__button" onClick={() => handleOnSave()}>
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
});

export default ListCardCommentsInfo;
