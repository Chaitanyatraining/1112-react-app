import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ClassComp from './ClassComp';
import Stylings from './Stylings';
import UserData from './UserData';
import FuncComp from './Components/FuncComp';

function App() {
  const Data = {
    courseName: "Reactjs",
    duration: "3 Months"
  }
  return (
    <div className="App">
      <Header Data={Data} />
      <FuncComp />
      <ClassComp Data={Data} />
      {/* <Stylings /> */}
      {/* <UserData /> */}
    </div>
  );
}

export default App;
