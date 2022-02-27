import React from 'react';
import ListItem from "../Folder/ListItem";

const All = ({all, setAll}) => {

    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            day: '2-digit',
            month: 'short',
            weekday: 'long',
        }).format(new Date(date))
    };

    return (
        <>
            { all.reduce((acc, rec) => acc + rec.tasks.length, 0) === 0
                ? <h2 className="zeroTask">Задачи отсутствуют</h2>
                : <div>
                    {all.map((item) => {
                        return (
                            <>
                                <h2 className='folder__title'>{toDate(item.folder)}</h2>
                                <div key={item.id}>
                                    <ul className="folder__list">
                                        {item.tasks.length ? '' :  <li className="folder__list-no">В данной папке отсуствуют задачи</li>}
                                        {item.tasks.map((el) => (
                                            <ListItem key={el.id} item={item} el={el} all={all} setAll={setAll}/>
                                        ))}
                                    </ul>
                                </div>

                            </>
                        )
                    })}
                </div>
            }
        </>
    );
};

export default All;