import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AccountSettings from './pages/AccountSettings';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';

function App() {
  /*
    / --> is used for represents the welcome page
    /Signin --> is represents for the signin page
    /Signup --> is represents for the signup page
    /Account --> is represents for the user account page
    */
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Account' element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
