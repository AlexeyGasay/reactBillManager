import React from "react";


const AddNewNote = (props) => {
    // debugger
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
            <button onClick={props.addNote} >Добавить</button>
            <button onClick={() => props.addCategory(props.newCategory)} >Добавить категорию</button>
            <button onClick={props.clearNotes}>Очистить всё</button>

            <select value={props.selectCategory.value} onChange={props.changeCategory}>
                {
                    props.categories.map((el) => {
                        // debugger
                        return  <option key={el.id} value={el.name}>{el.name}</option>
                    })
                }


            </select>



        </div>
    )
}

export default AddNewNote;