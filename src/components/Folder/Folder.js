import React, {useState} from 'react';
import Title from "./Title";
import List from "./List";
import Form from "./Form";
import {v4 as uuidv4} from "uuid";

const Folder = ({all, setAll, status, toDate, setStatus}) => {

    const [task, setTask] = useState([]);
    const [addTask, setAddTask] = useState(false);


    const addTaskInFolder = (e, id) =>{
        e.preventDefault();
        setAll(all.map((item) => {
            if (item.id === id) {
                return{...item, tasks: [...item.tasks, {
                        name: task,
                        done: false,
                        id: uuidv4(),
                        change: false
                    }]}
            } else {
                return item
            }
        }));
        setTask('')
    };

    return (
        <>
            {
                all.filter((item) => item.folder === status).map((item) => (
                    <div className="folder">
                        <Title setStatus={setStatus} all={all} setAll={setAll} item={item} toDate={toDate}/>
                        <List  all={all} setAll={setAll} item={item}/>
                        <Form item={item} addTask={addTask} setAddTask={setAddTask} task={task} addTaskInFolder={addTaskInFolder}
                              setTask={setTask}
                        />
                    </div>
                ))
            }
        </>
    );
};

export default Folder;