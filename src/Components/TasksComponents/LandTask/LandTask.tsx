import React, {useEffect} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Task/LandTaskStyles.scss"
import {useNavigate, useSearchParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import schedulerStore from "../../../Store/SchedulerStore";
import {CreatedTask} from "../../../Types/Tasks/CreatedTask";
import ListCardInfo from "../../LandComponents/ListCardInfo/ListCardInfo";
import ListCardTasksInfo from "../../LandComponents/ListCardInfo/ListCardTasksInfo";
import TaskInfo from "../TaskInfo/TaskInfo";
import ButtonContrast from "../../../UI/MyButton/ButtonContrast";
import CardInfoModal from "../../../UI/CardInfoModal/CardInfoModal";
import {getCurrentEditTitle} from "../../../Helpers/LandHelper";
import ListCardCommentsInfo from "../../LandComponents/ListCardInfo/ListCardCommentsInfo";
import TaskCommentsInfo from "../TaskInfo/TaskCommentsInfo";

const LandTask: React.FC = observer(() => {

    const [params] = useSearchParams()
    const taskId = params.get("taskId")

    const currentTask = schedulerStore.selectedAreaTask
    const navigate = useNavigate()

    useEffect(() => {
        if (taskId)
            schedulerStore.getAreaTaskById(taskId).then()
    }, [taskId]);


    return (
        <main className="landTask">
            <Header/>
            <div className="landTask__container">
                {
                    currentTask
                        ?
                        <div className="landTask__item">
                            <div className="item__head">
                                <div className="item__header-block">
                                    <h1 className="item__title">
                                        Задача {`"${currentTask.name}"`}
                                    </h1>
                                    <p className="item__status">
                                        {currentTask.status}
                                    </p>
                                </div>
                                <div className="item__header-block">
                                    <ButtonContrast btnText="Удалить"
                                                    btnStyle="item__header-btn"
                                                    handleOnClick={() => {
                                                        schedulerStore.deleteLandTask(currentTask?.id)
                                                            .then(() => navigate(`/landCard?landCardId=${currentTask?.land_area_id}`))
                                                    }}/>
                                    <ButtonContrast btnText="Редактировать"
                                                    btnStyle="item__header-btn"
                                                    handleOnClick={() => {
                                                        navigate(`/landCard?landCardId=${currentTask?.land_area_id}`)
                                                        schedulerStore.updateIsTaskEditClicked(currentTask?.id)
                                                    }}/>
                                </div>
                            </div>
                            <div className="item__row">
                                <TaskInfo task={currentTask}
                                          itemBlockStyle="item__taskInfo"
                                          itemH2="Основная информация"
                                          itemListTitles={["Описание", "Дата начала", "Дедлайн", "Статус", "Земельный участок"]}
                                          itemListValues={[currentTask.description, `${currentTask.started_at.slice(11, 16)} 
                                  ${currentTask.started_at.slice(0, 10).split("-").reverse().join(".")}`,
                                              `${currentTask.deadline.slice(11, 16)} 
                                  ${currentTask.deadline.slice(0, 10).split("-").reverse().join(".")}`,
                                              currentTask.status, currentTask.land_area.name]}/>
                                <TaskInfo task={currentTask}
                                          itemBlockStyle="item__employees"
                                          itemH2="Автор и ответственный"
                                          itemListTitles={["Автор", "Ответственный"]}
                                          itemListValues={[`${currentTask.author.last_name} ${currentTask.author.first_name}`,
                                              `${currentTask.executor.last_name} ${currentTask.executor.first_name}`]}/>
                            </div>
                            <div className="item__comments">
                                <TaskCommentsInfo task={currentTask}/>
                            </div>
                        </div>
                        : ""
                }
            </div>
        </main>
    );
});

export default LandTask;
