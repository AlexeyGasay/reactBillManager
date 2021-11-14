import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryPie } from 'victory';

const Categories = (props) => {

    let pie;

    if (props.totalCost > 0) {
        pie = <VictoryPie
            colorScale={["tomato", "orange", "gold", "cyan", "silver", "white"]}

            data={props.pieData}


            height={550}
            width={550}

            animate={{
                duration: 1150
            }}


            //   innerRadius={50}
            labelRadius={150}
            style={{ labels: { fontSize: 12, fill: "black" } }}

        // radius={({ datum }) => 20 + datum.y * 200}
        />;
    } else pie = 'Расходов нет'






    return (
        <div>

            <h2 className="totalCost">Общая сумма {props.totalCost}</h2>

            {props.categories.map(el => {
                return <h2 className="categories" key={el.id}>
                    {el.name}:
                    <span>{el.sum}</span>
                    <button className="btnDel" onClick={() => props.deleteCategory(el.id, el.name)}>X</button>
                </h2>
            })}

            <div className="pie">

                <span>
                </span>
                    

                {pie}


            </div>


        </div>
    )
}



export default Categories;
