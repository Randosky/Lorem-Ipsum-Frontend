import React, {useCallback, useEffect, useState} from 'react';
import "../../../Styles/Comments/AreaCommentsStyles.scss"
import SendIcon from "../../../Assets/Svg/SendIcon";
import {observer} from "mobx-react-lite";
import schedulerStore from "../../../Store/SchedulerStore";
import CloseIcon from "../../../Assets/Svg/CloseIcon";
import {CreatedTask} from "../../../Types/Tasks/CreatedTask";

interface TaskCommentsInfoProps {
    task: CreatedTask
}

const TaskCommentsInfo: React.FC<TaskCommentsInfoProps> = observer(({task}: TaskCommentsInfoProps) => {

    const [commentText, setCommentText] = useState("");

    const handleOnCommentText = useCallback((e: string) => setCommentText(e), []);

    useEffect(() => {
        const comments = document.getElementById("comments")
        comments ? comments.scrollTo(0, 9999999999999) : ""
    }, []);

    const handleOnSave = () => {
        if (commentText !== "") {
            schedulerStore.addTaskComment(task.id, commentText)
                .then(() => handleOnCommentText(""))
                .then(() => {
                    const comments = document.getElementById("comments")
                    comments ? comments.scrollTo(0, 9999999999999) : ""
                })
        }
    }

    return (
        <div className="comments" onKeyDown={(e) => e.key == 'Enter' ? handleOnSave() : ""}>
            <h2 className="comments__title">
                Комментарии
            </h2>
            <div className="comments__block" id="comments">
                {
                    task.task_comments
                        ?
                        task.task_comments.map((c, ind) =>
                            <div key={ind} className="comments__comment">
                                <div className="comment__head">
                                    <div className="comment__delete comment__delete-nomargin"
                                         onClick={() => schedulerStore.deleteTaskComment(c.id).then()}>
                                        <CloseIcon/>
                                    </div>
                                </div>
                                <p className="comment__text">
                                    {c.text}
                                </p>
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

export default TaskCommentsInfo;
