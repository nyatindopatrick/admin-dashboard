import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  const [dataDoughnut, setData] = useState({ labels: [], datasets: [] });
  useEffect(() => {
    loadData();
    // const stateUpdate = setInterval(loadData, 5000);
    // return () => {
    //   clearInterval(stateUpdate);
    // };
  }, []);

  const loadData = () => {
    setData({
      labels: [
        'Kondele Sacco',
        'Kubuntu Sacco',
        'Nyalenda Sacco',
        'Tumaini Sacco',
        'Makoma Sacco'
      ],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#4D5360'
          ],
          hoverBackgroundColor: [
            '#FF5A5E',
            '#5AD3D1',
            '#FFC870',
            '#A8B3C5',
            '#616774'
          ]
        }
      ]
    });
  };

  return (
    <div className='chart-wrapper'>
      <Doughnut
        data={dataDoughnut}
        height={300}
        options={{ responsive: true }}
      />
    </div>
  );
};

export default DonutChart;
