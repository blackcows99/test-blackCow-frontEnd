import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, Main, Detail, SignUp, Form } from './pages';
import { Header } from './components';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/add' element={<Form mode="add" />} />
        <Route path='/update/:id' element={<Form mode="update" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<SignUp />} />
      </Routes>


    </div>
  );
}
export default App;
