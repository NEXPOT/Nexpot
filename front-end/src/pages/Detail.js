import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { ChevronRight } from "akar-icons";
import Map from "../components/map";

export default function Detail() {
  const location = useLocation();
  let { videoid } = useParams();
  const [place, setPlaces] = useState([]);
  const [detail, setDetail] = useState([]);
  const [markerPositions, setMarkerPositions] = useState([]);
  const thumbnail = useRef();
  // 첫 렌더링에 videoid로 상세 정보를 가져옵니다.
  console.log("detail page render");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://13.209.13.176/api/youtube/" + videoid
        );
        const _detail = [
          {
            videoid: res.data.videoid,
            title: res.data.title,
            channelname: res.data.channelname,
            views: res.data.views,
            places: res.data.places,
          },
        ];
        console.log(res);
        console.log(_detail);
        setDetail(_detail);
        setPlaces(res.data.places);
        setMarkerPositions([res.data.places[0].py, res.data.places[0].px]);
        console.log("async");
      } catch (e) {
        console.error(e.message);
      }
    };
    getData();
    console.log("init get Data");
  }, []);

  const setPlaceItem = () => {
    return place.map((item, idx) => (
      <button
        key={idx}
        onClick={() => setMarkerPositions([item.py, item.px])}
        className="transition ease-in-out delay-100 hover:text-[#0D6EFD] hover:underline grid grid-flow-col place-items-center mt-6 text-xs font-normal text-[#737A7A]"
      >
        {item.pname}
        <ChevronRight color="#656565" strokeWidth={2} size={16} />
      </button>
    ));
  };

  const setPlaceInfo = () => {
    return place.map((item, idx) => (
      <button
        key={idx}
        onClick={() => setMarkerPositions([item.py, item.px])}
        className="transition ease-in-out delay-100 hover:text-[#0D6EFD] hover:underline grid grid-flow-col place-items-center mt-6 text-xs font-normal text-[#737A7A]"
      >
        {item.pname}
        <ChevronRight color="#656565" strokeWidth={2} size={16} />
      </button>
    ));
  };

  const [imgSrc, setImgSrc] = useState(location.state.thumbnail);

  const handleImgError = (e) => {
    if (thumbnail.current.width <= 360) {
      setImgSrc(
        location.state.thumbnail.replace("maxresdefault.jpg", "mqdefault.jpg")
      );
      //e.target.classList.add("h-full");

      e.target.classList.add("w-full");
    }
    console.log(thumbnail);
    console.log(thumbnail.current);
    console.log(thumbnail.current.width);
    console.log(thumbnail.current.height);
  };

  return (
    <div className="mx-56 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-10 w-1/2 p-10">
          <p className="mt-6 text-xl font-bold channel">
            {location.state.channelname}
          </p>
          <p className="mt-2 text-sm font-normal title">
            {location.state.title}
          </p>
          <button className="px-10 py-2 mt-4 text-sm font-medium rounded-lg bg-slate-50 text-slate-800">
            영상 재생
          </button>
        </div>
        <div className="absolute w-1/2 p-10 bottom-0 inset-x-0 z-10">
          <p className="channel mt-6 text-xl font-bold">
            {location.state.channelname}
          </p>
          <p className="title mt-2 text-sm font-normal">
            {location.state.title}
          </p>
          <button className="mt-4 px-10 py-2 text-sm font-medium rounded-lg bg-slate-50 text-slate-800">
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
      {/** To-Do 이미지 위 텍스트 오버레이  */}
      <div>
        <p className="mx-10 mt-16 text-base font-bold">관광코스</p>
        <div className="grid grid-flow-col">{place && setPlaceItem()}</div>
        <Map markerPositions={markerPositions} />
        <p className="mx-10 mt-6 text-base font-bold">여행지 정보</p>
        <p className="mx-10 mt-6 text-base font-bold">상세 정보</p>
      </div>
    </div>
  );
}
