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
        <p className="mb-5 text-5xl font-bold leading-tight">
          넥스팟
          <br /> 다음은 어디 갈까?
        </p>
        <p className="mx-4 text-base font-medium leading-normal sm:mx-0">
          NEXPOT은 YouTube에서 본 여행지 정보를 한곳에 담은 Mash-up
          서비스입니다. 여행지를 생생하게 보여주는 영상과 함께 상세 정보, 여행
          코스, 지도를 제공합니다.
          <br />
          수많은 리뷰를 시각화한 인포그래픽으로 여행지 리뷰를 한눈에 파악할 수
          있어요. NEXPOT에서 영상에 나온 여행지를 바로바로 확인해보세요. >>>>>>>
          2f4f49b3360b0c2f99a07b5c191214506110859f
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
