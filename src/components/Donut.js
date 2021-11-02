import React, { Component } from 'react';
import Chart from 'react-apexcharts'


const Donut = props => {
    return (
        <div className="donut">

            <Chart
                options={props.options}
                series={props.series}
                type="donut" 
                width="380" />

        </div>
    )
}



export default Donut;