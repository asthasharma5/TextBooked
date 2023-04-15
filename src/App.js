import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashoard';
import BookShelf from './Components/BookShelf';
import UserForm from './Components/UserForm';
import Details from './Components/Details';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}   />
        <Route path='/signup' element={<SignUp/>}   />
        <Route path='/dashboard' element={<Dashboard/>}   />
        <Route path='/bookshelf' element={<BookShelf/>}   />
        <Route path='/UserForm' element={<UserForm/>}   />
        <Route path='/detail/:id' element={<Details/>}   />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
