import React from 'react'
import Notes from './Notes';
import AddNewNote from './AddNewNote';


const ExpensesContainer = props => {
    return (
        <>
            <AddNewNote
                textNote={props.textNote}
                setText={props.setText}
                addNote={props.addNote}
                price={props.price}
                setPrice={props.setPrice}
                clearNotes={props.clearNotes}
                selectCategory={props.selectCategory}
                changeCategory={props.changeCategory}
                addCategory={props.addCategory}
                categories={props.categories}
                newCategory={props.newCategory}
                setNewCategory={props.setNewCategory}
                sortCategories={props.sortCategories}
                selectSortCategory={props.selectSortCategory}
                changeSortCategory={props.changeSortCategory}
                sortNotes={props.sortNotes}
            />


            <Notes notes={props.notes}
                deleteNote={props.deleteNote}
                categories={props.categories}
            />
        </>
    )
}


export default ExpensesContainer;

