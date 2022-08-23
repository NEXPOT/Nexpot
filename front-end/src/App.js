import './App.css';
import SearchHeader from './components/search_header';
import VideoList from './components/video_list';

export default function App() {
  const mainRegion = ["서울", "부산", "인천"];
  
  return (
    <div className="App">
      <SearchHeader />

      <div className="mx-10 mt-20">
        <p className="mb-5 text-5xl font-bold text-white">넥스팟</p>
        <p className="mb-5 text-5xl font-bold text-white">카피 문구 카피문구</p>
        <p className="text-base font-medium text-white mb-28">넥스팟 카피 문구 카피문구 넥스팟 카피 문구 카피문구를<br /> 생각해서 넣어보면 어떠할런지요 삶은 달걀이다 삶은 여행<br />이다 라이프 이즈 트레블
        </p>
      </div>
      {mainRegion.map((regionName, idx) =>
        <div key={idx}>
          <VideoList regionName={regionName} />
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


    </div>
  );
}