import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';


function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Profit",
        data: UserData.map((data) => data.profit),
      },
      
    ],
  });
  return (
    <>
      <BarChart chartData={userData}/>
    </>
  );
}

export default App;
