import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import RegisterStudent from './components/RegisterStudent/RegisterStudent';
import Header from './components/Header/Header';
import RegisterTeacher from './components/RegisterTeacher/RegisterTeacher';
import StudentsList from './components/StudentsList/StudentsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path='/registerstudent' element={<RegisterStudent/>}></Route>
        <Route path='/registerteacher' element={<RegisterTeacher/>}></Route>
        <Route path='/registerteacher' element={<RegisterTeacher/>}></Route>
        <Route path='/studentslist' element={<StudentsList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
