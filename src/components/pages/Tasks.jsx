import React from 'react';
import {useSelector} from "react-redux";
import CardTask from "../cardTask";



const Tasks = () => {
    const tasks = useSelector(state => state.task.task)
    return (
        <div>
            {tasks.map((task) => {
                return <CardTask task={task}/>
            })}
        </div>
    );
};

export default Tasks;