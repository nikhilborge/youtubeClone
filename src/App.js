
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={
          <div className='app__page'>
          <Sidebar/>
          <RecommendedVideos/>
          </div>} />
           
        {/* </Route> */}
           
       
        <Route path="/search/:serchItem" element={
          <div className='app__page'>
          <Sidebar/>
          <SearchPage/>
          </div>} />
        <Route path="/contact" element={<RecommendedVideos />} />
      </Routes>
      {/* <Header/>
      <div className='app__page'>
      <Sidebar/>
      <RecommendedVideos/>
      </div> */}
    </div>
      </BrowserRouter>
  );
}

export default App;
