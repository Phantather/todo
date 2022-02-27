import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate, faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Title = ({item, toDate, all, setAll, setStatus}) => {

    const [change, setChange] = useState('')

    const changeHandlerFolder = (id) => {
        setAll(all.map((folder) => {
            if (folder.id === id) {
                return {...folder, change: !folder.change, folder: change.length ? change : folder.folder }
            }else {
                return folder
            }
        }));
        if (change.length) {
            setStatus(change);
            setChange('')
        }

    };


    const deleteCompletedInFolder = (id) => {
        setAll(all.map((folder) => {
            if (folder.id === id) {
                return {...folder, tasks: folder.tasks.filter((item) => !item.done)}
            } else  {
                return folder
            }
        }))
    };


    return (
        <div className="folder__folder-block">
            {
                item.change
                    ?  <input value={change} defaultValue={item.name}
                              type="date" className="folder__title-input"
                              placeholder="Изменение папки"
                              onChange={(e) => setChange(e.target.value)}
                    />
                    :   <h2 className='folder__title'>{toDate(item.folder)}</h2>
            }

            <span className="folder__title-change" onClick={() => changeHandlerFolder(item.id)}>
                    {
                        item.change
                            ? <span onClick={() => setChange('')}>
                                   <FontAwesomeIcon icon={faArrowsRotate}/>
                             </span>
                            : <span onClick={() => setChange(item.folder)}>
                                  <FontAwesomeIcon icon={faPen}/>
                            </span>
                    }

            </span>
            <span className="folder__deleteDone" onClick={() => deleteCompletedInFolder(item.id)}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </span>
        </div>


    );
};

export default Title;