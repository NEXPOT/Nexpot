import './App.css';
import SearchHeader from './components/search_header';
import VideoList from './components/video_list';
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
    </BrowserRouter>

  );
}