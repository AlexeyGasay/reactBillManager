import React from "react";


const Notes = props => {


    return (
        <div>

            <ul className="notes btnDel">
                {!props.notes.length ? <div>Заметок нет</div> : props.notes.map(el => {
                    return (

                        <li key={el.id}>
                            <div className="noteTitle">
                                <div>{el.text}</div>
                                <div>{el.date}</div>
                                <div className="nameCategory">{el.category}</div>
                            </div>

                            <span className="noteCost">
                                <div>{el.price}</div>

                                <button onClick={() => { props.deleteNote(el.id) }}>X</button>
                            </span>

                        </li>

                    )
                })}
            </ul>

        </div>
    )
}

export default Notes;