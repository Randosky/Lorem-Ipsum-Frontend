import React from 'react';
import {CreatedTask} from "../../../Types/Tasks/CreatedTask";
import "../../../Styles/Land/LandItemStyles.scss"

interface TaskInfoProps {
    task: CreatedTask,
    itemBlockStyle?: string,
    itemH2: string,
    itemListTitles: string[],
    itemListValues: string[],
}

const TaskInfo: React.FC<TaskInfoProps> = (props: TaskInfoProps) => {

    const {itemBlockStyle, itemH2, itemListValues, itemListTitles, task} = props

    return (
        <div className={`item__infoBlock ${itemBlockStyle}`}>
            <div className="infoBlock__header">
                <h2 className="infoBlock__h2">
                    {itemH2}
                </h2>
            </div>
            <div className="infoBlock__rows">
                {
                    itemListTitles.map((title, ind) =>
                        <div className="infoBlock__row" key={ind}>
                            <p className="row__field">
                                {title}
                            </p>
                            <p className="row__field">
                                {itemListValues[ind]}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TaskInfo;
