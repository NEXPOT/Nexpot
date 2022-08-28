import './App.css';
import SearchHeader from './components/search_header';
import Footer from './components/footer';
import { Main, Detail, SearchResult } from './pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="contentWrapper">
          <SearchHeader />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/detail/:videoid" element={<Detail />} />      
            <Route path="/result" element={<SearchResult />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}