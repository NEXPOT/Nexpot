import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { ChevronRight, ArrowRight } from "akar-icons";
import KakaoMapScript from "../components/kakaoMapScripts";
import DetailInfoScripts from "../components/detailInfoScripts";

export default function Detail() {
  const location = useLocation();
  let { videoid } = useParams();
  const [place, setPlaces] = useState([]);
  //const [detail, setDetail] = useState([]);
  const thumbnail = useRef();
  const placeBtnList = useRef();

  const url = process.env.REACT_APP_BACKEND_URL;
	const endpoint = "/api/youtube/";
  // 첫 렌더링에 videoid로 상세 정보를 가져옵니다.
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          url + endpoint + videoid
        );

        res.data.places.sort((a, b) => a.idx - b.idx); // idx순으로 place 정렬
        DetailInfoScripts(res.data.places[0]);
        KakaoMapScript(res.data.places[0]);
        //setDetail(_detail);
        setPlaces(res.data.places);
      } catch (e) {
        console.error(e.message);
      }
    };
    getData();
  }, []);

  const setPlaceItem = () => {
    return place.map((item, idx) => (
      <button
        id={item.tourapi[0].placeid}
        key={idx}
        onClick={(e) => {
          // setMarkerPositions(item);
          KakaoMapScript(item);
          DetailInfoScripts(item);

          const parents = e.target.parentElement;

          for (const child of parents.children) {
            child.classList.remove("clicked");
            child.classList.remove("text-[#0D6EFD]");
            child.classList.add("text-[#737A7A]");
            child.classList.remove("font-semibold");
          }
          e.target.classList.toggle("clicked");
          e.target.classList.add("text-[#0D6EFD]");
          e.target.classList.add("font-semibold");
        }}
        // 페이지 로드시 첫번째 place 버튼은 클릭되어 있도록 함.
        className={
          idx === 0
            ? "clicked text-[#0D6EFD] font-semibold transition ease-in-out delay-100 hover:text-[#0D6EFD] hover:underline flex flex-wrap gap-2 place-items-center mt-6 text-sm"
            : "text-[#737A7A] font-normal transition ease-in-out delay-100 hover:text-[#0D6EFD] hover:underline flex flex-wrap gap-2 place-items-center mt-6 text-sm"
        }
      >
        {item.pname}
        <ChevronRight
          className="chevronR"
          color="#656565"
          strokeWidth={2}
          size={16}
        />
      </button>
    ));
  };

  /**썸네일 고해상도 없을 시 이미지 에러 처리 */
  const [imgSrc, setImgSrc] = useState(location.state.thumbnail);
  const handleImgError = (e) => {
    if (thumbnail.current.width <= 360) {
      setImgSrc(
        location.state.thumbnail.replace("maxresdefault.jpg", "mqdefault.jpg")
      );
    }
    e.target.classList.add("w-full");
  };

  const onClickExtend = (e) => {
    const target = document.getElementById("placeContent");
    target.classList.toggle("line-clamp-2");
    target.classList.toggle("max-h-full");

    if (e.target.innerHTML === "더보기") {
      e.target.innerHTML = "접기";
    } else {
      e.target.innerHTML = "더보기";
    }
  };

  const onClickKakaoMapInfo = () => {
    const target = document.getElementsByClassName("clicked")[0].id;
    window.open(`https://place.map.kakao.com/${target}`, "_blank");
  };

  const onClickTourInfo = () => {
    const target = document.getElementsByClassName("clicked")[0].innerText;
    window.open(
      `https://korean.visitkorea.or.kr/search/search_list.do?keyword=${target}`,
      "_blank"
    );
  };

  return (
    <div className="mx-4 my-4 text-white sm:my-0 sm:mx-16 md:mx-56">
      <div className="relative flex justify-start overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col w-10/12 gap-2 p-2 sm:w-1/2 sm:p-6 md:p-10">
          <p className="text-lg font-bold sm:text-xl channel">
            {location.state.channelname}
          </p>
          <p className="text-xs font-normal sm:text-sm title">
            {location.state.title}
          </p>
          <button
            className="w-full py-2 mt-2 text-sm font-medium rounded-lg bg-slate-50 text-slate-800"
            onClick={() => window.open(`https://youtu.be/${videoid}`, "_blank")}
          >
            영상 재생
          </button>
        </div>
        <div className="img-gr"></div>
        <img
          className="m-auto videoImg min-w-[360px]"
          alt="thumbnail"
          ref={thumbnail}
          src={imgSrc}
          onLoad={handleImgError}
        />
      </div>
      <div>
        <p className="mt-16 text-base font-bold">관광코스</p>
        <div
          id="placeList"
          className="flex flex-wrap gap-2 sm:flex-row"
          ref={placeBtnList}
        >
          {place && setPlaceItem()}
        </div>
        <div
          id="map"
          className="w-full h-[24rem] sm:h-96 z-10 rounded-lg mt-6"
        ></div>
        <p className="mt-10 text-base font-bold">여행지 정보</p>
        <div className="grid grid-flow-row gap-4 mt-4 text-sm sm:text-md sm:grid-flow-col sm:auto-cols-max">
          <button
            className="grid grid-flow-col gap-2 text-start border-white border-[0.5px] py-2 px-4"
            onClick={onClickKakaoMapInfo}
          >
            카카오지도에서 정보를 찾아보세요
            <ArrowRight
              className="justify-self-end"
              strokeWidth={1.5}
              size={20}
            />
          </button>
          <button
            className="grid grid-flow-col gap-2 text-start border-white border-[0.5px] py-2 px-4"
            onClick={onClickTourInfo}
          >
            대한민국 구석구석에서 정보를 찾아보세요
            <ArrowRight
              className="justify-self-end"
              strokeWidth={1.5}
              size={20}
            />
          </button>
        </div>
        <div
          id="placeContent"
          className="mt-8 text-sm leading-6 break-all show line-clamp-2"
        ></div>
        <button
          id="moreBtn"
          onClick={onClickExtend}
          className="mt-4 underline underline-offset-4 text-sm font-normal text-[#737A7A]"
        >
          더보기
        </button>
        <p className="mt-8 text-base font-bold">상세 정보</p>
        <div
          className="flex flex-col gap-8 mt-4 sm:flex-row sm:gap-16"
          id="detailInfo"
        ></div>
      </div>
    </div>
  );
}
