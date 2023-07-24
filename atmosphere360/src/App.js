import './App.css';
import GetMorePage from './pages/GetMorePage';
import MyPage from './pages/MyPage';
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<MyPage/>} />
        <Route path='/more-info/:cityName'  element={<GetMorePage />   } />
        <Route path='/*'  element={<NoPage />   } />
      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
