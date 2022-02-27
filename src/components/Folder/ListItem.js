import React from 'react';

const ListItem = ({el, item, all, setAll}) => {


    const doneHandlerTask = (id) => {
        setAll(all.map((folder) => {
            if (folder.id === item.id){
                return {...folder, tasks: folder.tasks.map((task) => {
                        if (task.id === id){
                            return {...task, done: !task.done}
                        } else {
                            return task
                        }
                    })
                }
            }else {
                return folder
            }
        }))
    };

    const deleteHandlerTask = (id) => {
        setAll(all.map((folder) => {
            if (folder.id === item.id){
                return {...folder, tasks: folder.tasks.filter((task) => task.id !== id)}
            } else {
                return folder
            }
        }))
    };



    return (
        <li className={`${el.done ? 'active' : ''} folder__list-item`}>
            <span className={`folder__list-circle`} onClick={() => doneHandlerTask(el.id)}> </span>
            <span className="folder__list-item-text">{el.name}</span>
            <span className="folder__list-delete" onClick={() => deleteHandlerTask(el.id)}>x</span>
        </li>
    );
};

export default ListItem;