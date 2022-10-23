import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeLIst from './Pages/EmployeeList/EmployeeLIst';

function App() {
  return (
    <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
      <Routes>
        <Route path='/' element={<EmployeeLIst></EmployeeLIst>}></Route>
      </Routes>
    </div>
  );
}

export default App;
