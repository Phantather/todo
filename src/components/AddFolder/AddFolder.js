import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddFolder = ({all, setAll, addFolder, setAddFolder, setFolder, folder}) => {

    let colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple'];

    const [active, setActive] = useState(0);

    const addFolderInAll = () => {
        if (all.map((item) => item.folder).includes(folder)){
            alert('Такое название  уже существует')
        } else if (folder.length) {
            setAll([...all, {
                id: uuidv4(),
                folder: folder,
                tasks: [],
                change: false,
                color: colors[active]
            }]);
            setFolder('')
        }

    };

    return (
        <div className="sidebar__add">
            <button className="sidebar__add-btn" onClick={() => setAddFolder(true)}>
                <span>+</span> Добавить папку
            </button>

            <div className="sidebar__add-form" style={{display: `${addFolder ? 'block' : 'none'}`}}>

                <input value={folder} className="sidebar__add-form-input" type="date" placeholder="Дата" onChange={(e) => setFolder(e.target.value)}/>
                <ul className="sidebar__add-form-colors">
                    {
                        colors.map((item,idx) => (
                            <li
                                style={{backgroundColor: item}}
                                key={item} className={`sidebar__add-form-circle ${idx === active ? 'active' : ''}`}
                                onClick={() => setActive(idx)}
                            >
                            </li>
                        ))
                    }
                </ul>
                <button className="sidebar__add-form-btn" type="button" onClick={addFolderInAll}>Добавить</button>


                <button type="button" className="sidebar__add-form-close" onClick={() => {
                    setAddFolder(false);
                    setFolder('')
                }}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.315 0C4.62737 0 0 4.62737 0 10.315C0 16.0026 4.62737 20.63 10.315 20.63C16.0026 20.63 20.63 16.0026 20.63 10.315C20.63 4.62737 16.0026 0 10.315 0ZM14.0497 12.928C14.1265 13.0009 14.1879 13.0885 14.2303 13.1855C14.2727 13.2826 14.2952 13.3872 14.2966 13.4931C14.298 13.599 14.2781 13.7041 14.2382 13.8022C14.1983 13.9003 14.1392 13.9894 14.0643 14.0643C13.9894 14.1392 13.9003 14.1983 13.8022 14.2382C13.7041 14.2781 13.599 14.298 13.4931 14.2966C13.3872 14.2952 13.2826 14.2727 13.1855 14.2303C13.0885 14.1879 13.0009 14.1265 12.928 14.0497L10.315 11.4373L7.70203 14.0497C7.55202 14.1922 7.35226 14.2705 7.14536 14.2679C6.93846 14.2652 6.74077 14.1819 6.59446 14.0355C6.44814 13.8892 6.36477 13.6915 6.36212 13.4846C6.35947 13.2777 6.43775 13.078 6.58028 12.928L9.19275 10.315L6.58028 7.70203C6.43775 7.55202 6.35947 7.35226 6.36212 7.14536C6.36477 6.93846 6.44814 6.74077 6.59446 6.59446C6.74077 6.44814 6.93846 6.36477 7.14536 6.36212C7.35226 6.35947 7.55202 6.43775 7.70203 6.58028L10.315 9.19275L12.928 6.58028C13.078 6.43775 13.2777 6.35947 13.4846 6.36212C13.6915 6.36477 13.8892 6.44814 14.0355 6.59446C14.1819 6.74077 14.2652 6.93846 14.2679 7.14536C14.2705 7.35226 14.1922 7.55202 14.0497 7.70203L11.4373 10.315L14.0497 12.928Z" fill="#5C5C5C"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AddFolder;