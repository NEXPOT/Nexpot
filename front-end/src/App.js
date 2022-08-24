import './App.css';
import SearchHeader from './components/search_header';
import Footer from './components/footer';
import { Main, Detail } from './pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <SearchHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}