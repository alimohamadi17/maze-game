import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPlayer from './components/loginPlayer';
import FetchPlayer from './components/fetchPlayer';


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<LoginPlayer />} />
            <Route path='/maze-game' element={<FetchPlayer />} />
          </Routes>
        </Router>
      </Provider>
    </>

  );
}

export default App;
