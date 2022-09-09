import React from "react";
import { Link } from "react-router-dom";
import VideoList from "../components/video_list";

export default function Main() {
  const region2 = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "제주",
    "강릉",
    "원주",
    "속초",
    "평창",
    "양양",
    "수원",
    "용인",
    "고양",
    "가평",
    "양평",
    "대부도",
    "파주",
    "포천",
    "청주",
    "충주",
    "제천",
    "단양",
    "천안",
    "보령",
    "부여",
    "태안",
    "당진",
    "전주",
    "군산",
    "고창",
    "부안",
    "여수",
    "해남",
    "보성",
    "담양",
    "목포",
    "포항",
    "경주",
    "울릉도",
    "안동",
    "문경",
    "진주",
    "통영",
    "거제",
    "남해",
  ];

  /** 무작위 지역 5개 추출(중복없이)) */
  let mainRegion = [];
  while (mainRegion.length < 5) {
    let pickRegion = region2.splice(
      Math.floor(Math.random() * region2.length),
      1
    )[0];
    mainRegion.push(pickRegion);
  }

  return (
    <>
      <div className="flex flex-col px-4 mx-auto mt-20 text-center text-white mb-36 sm:text-start sm:px-0 sm:w-1/3 sm:mx-10">
        <p className="mb-5 text-5xl font-bold leading-tight">넥스팟 <br/> 카피 문구 카피문구</p>
        <p className="mx-4 text-base font-medium leading-normal sm:mx-0">
          넥스팟 카피 문구 카피문구 넥스팟 카피 문구 카피문구를 생각해서 넣어보면 어떠할런지요 삶은 달걀이다 삶은 여행 
          이다 라이프 이즈 트레블도시 여행지입니다. 넥스팟에서 준비한
          한국의 대표 관광지 다섯곳 부터 둘러보세요.
        </p>
        <Link to="/list/metropolitan">
          <button className="sm:w-3/4 text-sm font-normal py-2 px-24 mt-11 text-[#FFFFFF] bg-[#0D6EFD] rounded-xl transition ease-in-out delay-150 hover:bg-[#FFFFFF] hover:text-[#0D6EFD] hover:-translate-y-0.2 hover:scale-105">
            <p>전국 지역 둘러보기</p>
          </button>
        </Link>
      </div>
      {mainRegion.map((regionName, idx) => (
        <div key={idx}>
          <VideoList regionName={regionName} />
        </div>
      ))}
    </>
  );
}
