import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import BubbleChart from './components/BubbleChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import PolarAreaChart from './components/PolarAreaChart';
import RadarChart from './components/RadarChart';
import { UserData } from './Data';


function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Profit",
        data: UserData.map((data) => data.profit),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="mainDiv">
      <div className="chart">
        <PolarAreaChart chartData={userData} />
      </div>
      <div className="chart">
        <BarChart chartData={userData} />
      </div>
      <div className="chart">
        <BubbleChart chartData={userData} />
      </div>
      <div className="chart">
        <DoughnutChart chartData={userData} />
      </div>
      <div className="chart">
        <PieChart chartData={userData} />
      </div>
      <div className="chart">
        <LineChart chartData={userData} />
      </div>
      <div className="chart">
        <RadarChart chartData={userData} />
      </div>
      <div>Data: </div>
      <div>id: 1, year: 2016, profit: 15900, loss: 4000</div>
      <div>id: 2, year: 2017, profit: 47600, loss: 40001</div>
      <div>id: 3, year: 2018, profit: 22900, loss: 40010</div>
      <div>id: 4, year: 2019, profit: 51900, loss: 200</div>
      <div>id: 5, year: 2020, profit: 30900, loss: 5000</div>
    </div>
  );
}

export default App;
