import logo from './logo.svg';
import './App.css';
import Register from './components/register';
import Users from './components/users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/"  element = { <Register />} />
      <Route path="/user" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails/>} />
       </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
