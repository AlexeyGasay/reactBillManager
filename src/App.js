import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import {Route} from "react-router-dom";
import StatisticsContainer from './components/StatisticsContainer';
import ExpensesContainer from './components/ExpensesContainer';

function App() {


  // сохранение данных в LocalStorage
  useEffect(() => {
    numTotalCost(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('categories', JSON.stringify(categories));
  })





  // Распаковка данных из LocalStorage
  const [notes, setNotes] = useState(() => {
    let saved = localStorage.getItem('notes');
    let initValue = JSON.parse(saved);
    return initValue || [];

  });

  const [categories, setCategories] = useState(() => {
    let saved = localStorage.getItem('categories');
    let initValue = JSON.parse(saved);
    if (initValue == null || initValue.length == 0) {
      return [
        { id: 0, name: 'Еда', sum: 0, },
        { id: 1, name: 'Связь', sum: 0, },
      ];
    } else return initValue


  })



  const [totalCost, setTotalCost] = useState(0);

  const [textNote, setTextNote] = useState('Taxi');
  const [price, setPriceValue] = useState(100);

  const [selectCategory, setCategory] = useState({ value: '' });
  const [newCategory, setNewCategory] = useState('newCategory');

  const sortCategories = [ 
    { value: 'Свежие' },
    { value: 'Давние' },
    { value: 'Дорогие' },
    { value: 'Дешевые' },

  ];

  const [selectSortCategory, setSelectSortCategory] = useState({ value: 'Давние' });

  const changeSortCategory = e => {
    setSelectSortCategory({ value: e });

  }




    const sortNotes = (selCategory) => {

      let Notes = [...notes];


      if(selCategory.value === "Свежие") {


        setNotes(Notes.sort(function (a, b) {

          return b.numDate - a.numDate
        }));

      } 

      else if (selCategory.value === "Давние") {

        setNotes(Notes.sort(function (a, b) {

          return a.numDate - b.numDate
        }));
      }

      else if (selCategory.value === "Дорогие") {
        setNotes(Notes.sort(function (a, b) {
          return +b.price - +a.price
        }));
      }

      else if (selCategory.value === "Дешевые") {
        setNotes(Notes.sort(function (a, b) {
          return +a.price - +b.price
        }));
      }

    }





  let [pieData, setPieData] = useState([]);

  const setData = () => {
    let newData = [];

    let copyCateg = [...categories];


    copyCateg.map(el => {
      if (el.sum > 0 & el.name.length > 0) {
        newData.push({
          x: el.name,
          y: el.sum
        }) 
      }
    })



    setPieData(newData);
  }







  const addCategory = (value) => {

    if(value.length <=0) {
      return
    }

    let copyCateg = [...categories];
    let newCateg = {
      id: Math.random(100) * 100000,
      name: value,
      price: 0,

    }

    // счетчик совпадений
    let count = 0;


    // поиск совпадений
    categories.forEach(el => {
      if (el.name == value) {
        count++;
      }

    })



    count <= 0 ? copyCateg.push(newCateg) : count = null;

    setCategories(copyCateg);
    setNewCategory("")
  }




  const numTotalCost = arr => {
    let arrIn = arr;
    let sum = 0;
    arrIn.map(el => {
      return sum += +el.price;
    })

    setTotalCost(sum);

  }

  const doSumCategory = () => {

    let copySumCateg = [...categories];


    copySumCateg.map(el => {
      return el.sum = 0;
    });

    notes.forEach(element => {
      copySumCateg.forEach(el => {
        if (element.category == el.name & el.name.length > 0) {
          return el.sum += +element.price
        }
      })


    });

    setCategories(copySumCateg);
  }



  const deleteNote = id => {
    let newArr = [...notes];
    newArr = newArr.filter(el => el.id !== id)
    setNotes(newArr);
  }




  const deleteCategory = (id, category) => {
    let newArr = [...categories];
    newArr = newArr.filter(el => el.id !== id);

    let newArr2 = [...notes];
    newArr2 = newArr2.filter(el => el.category !== category);

    setCategory({value: ""});
    setCategories(newArr);
    setNotes(newArr2);

  }

  const setText = e => {
    setTextNote(e.target.value)
  }

  const setPrice = e => {
    setPriceValue(e.target.value)
  }


  const clearNotes = () => {
    setNotes([]);
    localStorage.clear();
    doSumCategory();

  }


  const addNote = () => {
    if(categories.length <= 0 || selectCategory.value.length <=0) {
      return
    }
    let data = new Date;
    let newnote = {
      id: Math.random(100) * 100000,
      text: textNote,
      price: price,
      category: selectCategory.value,
      date: data.toLocaleString(),
      numDate: data.getTime(),

    };


    setNotes([...notes, newnote]);
    numTotalCost(notes);

    setPriceValue(10);
    setTextNote('');
    localStorage.setItem('notes', JSON.stringify(notes));
    doSumCategory();
    setData();


  }



  const changeCategory = e => {
    setCategory({ value: e.target.value })
  }





  useEffect(() => {
    doSumCategory()
    setData();
  }, [notes])

  useEffect(() => {
    sortNotes(selectSortCategory);
  }, [selectSortCategory])


  window.notes = notes;

  return (

    <div className="App">


      <Route path='*' component={Header} />



      <div className="main">


        <Route path='/statistics' render={() =>
          <StatisticsContainer
            categories={categories}
            deleteCategory={deleteCategory}
            totalCost={totalCost}
            pieData={pieData}
          />

        }
        />

        <Route path='/expenses' render={() =>
          <ExpensesContainer
            notes={notes}
            deleteNote={deleteNote}
            categories={categories}
            textNote={textNote}
            setText={setText}
            addNote={addNote}
            price={price}
            setPrice={setPrice}
            clearNotes={clearNotes}
            selectCategory={selectCategory}
            changeCategory={changeCategory}
            addCategory={addCategory}
            categories={categories}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            sortCategories={sortCategories}
            selectSortCategory={selectSortCategory}
            changeSortCategory={changeSortCategory}
            sortNotes={sortNotes}
          />

        }


        />


      </div>





    </div>
  );
}

export default App;
