import React from "react";


const AddNewNote = (props) => {


    function check(e) {
        props.changeSortCategory(e.target.value);
        props.sortNotes(e.target.value);
    }

    return (
        <div>
            <div className="inputBox">

                <input type='text'
                    value={props.textNote}
                    onChange={props.setText}
                    placeholder={'Text note'}
                />

                <input type='number'
                    placeholder={props.price}
                    value={props.price}
                    onChange={props.setPrice}
                />

                <input type='text'

                    placeholder={'enter new category'}
                    value={props.newCategory}
                    onChange={(e) => {
                        props.setNewCategory(e.target.value)
                    }

                    }

                />

            </div>



            <div className="buttonBox">

                <button className="buttonBoxItem" onClick={props.addNote} >Добавить</button>
                <button className="buttonBoxItem" onClick={() => props.addCategory(props.newCategory)} >Добавить категорию</button>
                <button className="buttonBoxItem" onClick={props.clearNotes}>Очистить всё</button>

                <select className="buttonBoxItem" value={props.selectCategory.value} onChange={props.changeCategory}>
                    {
                        props.categories.map((el) => {
                            return <option key={el.id} value={el.name}>{el.name}</option>
                        })
                    }
                    
                    <option key="empty"></option>

                </select>

            </div>

            <div className="sortBox">



                <h2 className="sort">Сортировка по ....</h2>

                <select value={props.selectSortCategory.value} onChange={check}>
                    {
                        props.sortCategories.map((el) => {
                            return <option key={el.value} value={el.value}>{el.value}</option>
                        })
                    }


                </select>

            </div>





        </div>
    )
}

export default AddNewNote;