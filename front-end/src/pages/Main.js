import React from "react";
import { Link } from "react-router-dom";
import VideoList from "../components/video_list";
import { Detail } from "./";

// 썸네일 클릭시 해당 영상의 상세 정보 페이지로 이동합니다.
const onClickHandler = (video_id) => {
  return <>{Detail(video_id)}</>;
};

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
      <div className="mx-10 mt-20 text-white mb-36">
        <p className="mb-5 text-5xl font-bol">넥스팟</p>
        <p className="mb-5 text-5xl font-bold">카피 문구 카피문구</p>
        <p className="text-base font-medium">
          넥스팟 카피 문구 카피문구 넥스팟 카피 문구 카피문구를
          <br /> 생각해서 넣어보면 어떠할런지요 삶은 달걀이다 삶은 여행
          <br />
          이다 라이프 이즈 트레블도시 여행지입니다. 넥스팟에서 <br /> 준비한
          한국의 대표 관광지 다섯곳 부터 둘러보세요.
        </p>
        <Link to="/allregion">
          <button className="font-normal py-2 px-24 mt-11 text-[#FFFFFF] bg-[#0D6EFD] rounded-xl transition ease-in-out delay-150 hover:bg-[#FFFFFF] hover:text-[#0D6EFD] hover:-translate-y-0.2 hover:scale-105">
            전국 지역 둘러보기
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
