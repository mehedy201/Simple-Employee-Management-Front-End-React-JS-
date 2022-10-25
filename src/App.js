import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeLIst from './Pages/EmployeeList/EmployeeLIst';
import AddEmployee from './Pages/AddEmployee/AddEmployee';
import EditEmployee from './Pages/EditEmployee/EditEmployee';
import EmployeeDetails from './Pages/EmployeeDetails/EmployeeDetails';

function App() {
  document.body.style.backgroundColor = "#F7F5E7";
  return (
    <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
      <Routes>
        <Route path='/' element={<EmployeeLIst></EmployeeLIst>}></Route>
        <Route path='/add-employee' element={<AddEmployee></AddEmployee>}></Route>
        <Route path='/edit-employee' element={<EditEmployee></EditEmployee>}></Route>
        <Route path='/employee-details' element={<EmployeeDetails></EmployeeDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
