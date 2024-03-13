import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';
import '../App.css'
const PieChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const updateChart = () => {
      const categories = data.map(product => product.category);
      const uniqueCategories = [...new Set(categories)];

      const categoryData = data.reduce((acc, product) => {
        const { category, stock_quantity } = product;
        acc[category] = (acc[category] || 0) + stock_quantity;
        return acc;
      }, {});

      const chartData = {
        labels: uniqueCategories,
        datasets: [
          {
            data: uniqueCategories.map(category => categoryData[category]),
            backgroundColor: generateColors(uniqueCategories.length),
          },
        ],
      };
      Chart.defaults.font.size=15
      Chart.defaults.color="black"
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
          plugins: {
            title : {
              text:"Quantity Analysis",
              display:true,
              position: 'top', // You can change the position to 'bottom', 'left', 'right', or 'top'
              align: 'center',
              font: {
                    size: 19, // You can adjust the font size as needed
                    family: 'Montserrat, sans-serif',
                }
            },
            legend: {
              display: true,
              position: 'bottom',
              
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          radius: 100,
        },
      });

      return myChart;
    };

    const generateColors = (numColors) => {
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
      return Array.from({ length: numColors }, (_, i) => colorScale(i));
    };

    const chart = updateChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [data]);

  return (
    <div className='piechart-container'>
      
      <div className='canvas-container'>
        <canvas className="pie-chart-canvas" ref={chartRef}></canvas>
      </div>
      
    </div>
  );
}

export default PieChart;
