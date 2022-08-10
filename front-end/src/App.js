import './App.css';
import SearchHeader from './components/search_header';
export default function App() {
  return (
    <div className="App">
      <SearchHeader />
      <div className="mx-10 mt-20">
        <p className="mb-5 text-white text-5xl font-bold">넥스팟</p>
        <p className="mb-5 text-white text-5xl font-bold">카피 문구 카피문구</p>
        <p className="text-white text-base font-medium">넥스팟 카피 문구 카피문구 넥스팟 카피 문구 카피문구를<br/> 생각해서 넣어보면 어떠할런지요 삶은 달걀이다 삶은 여행<br/>이다 라이프 이즈 트레블
        </p>
        
      </div>
    </div>
  );
}