import React from 'react';
import ListItem from "./ListItem";

const List = ({item, all, setAll}) => {



    return (
        <ul className="folder__list">
            {item.tasks.length ? '' :  <li className="folder__list-no">Здесь будут ваши задачи</li>}

            {
                item.tasks.map((el) => (
                    <ListItem key={el.id} item={item} el={el} all={all} setAll={setAll}/>
                    )
                )
            }
        </ul>
    );
};

export default List;