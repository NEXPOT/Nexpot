import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Map from "../components/map";

export default function Detail() { 
  const location = useLocation();
  let { videoid } = useParams();
  const [place, setPlaces] = useState([]);
  const [detail, setDetail] = useState([]); 
  const [markerPositions, setMarkerPositions] = useState([]); 
  // 첫 렌더링에 videoid로 상세 정보를 가져옵니다.
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://13.209.16.143:3306/api/youtube/" + videoid
        );
        const _detail = [
          {
            videoid: res.data.videoid,
            title: res.data.title,
            channelname: res.data.channelname,
            views: res.data.views,
          },
        ];
        setDetail(_detail);
        setPlaces(res.data.places);
        setMarkerPositions([res.data.places[0].py,res.data.places[0].px]);
      } catch (e) {
        console.error(e.message);
      }
    };
    getData();
  }, []);


  const onClickPlace = (e) => {
    
  }

  
  const setPlaceItem = () => {
    return place.map((item, idx) =>
    (
        <button
          key={idx}
          onClick={()=>setMarkerPositions([item.py, item.px])}
          className="mx-10 mt-6 text-xs font-normal text-[#737A7A]"
        >
          {item.pname}
        </button> 
    ));
  };

  return (
    <div className="mx-56 text-white">
      <div className="videoWrapper">
        <div className="img-gr"></div>
        <img
          className="videoImg m-auto"
          alt="thumbnail"
          src={location.state.thumbnail}
        />
      </div>
      {/** To-Do 이미지 위 텍스트 오버레이  */}
      <div className="overlay mx-10">
        <p className="channel mt-6 text-xl font-bold">
          {location.state.channelname}
        </p>
        <p className="title mt-2 text-sm font-normal">{location.state.title}</p>
        <button className="btn mt-8 px-10 py-2 text-sm font-medium rounded-lg bg-slate-50 text-slate-800">
          영상 재생
        </button>
      </div>
      <div>
        <p className="mx-10 text-base font-bold mt-28">관광코스</p>
        <div className="grid grid-flow-col">{place && setPlaceItem()}</div>
        <Map markerPositions={markerPositions} />
        <p className="mx-10 mt-6 text-base font-bold">여행지 정보</p>
        <p className="mx-10 mt-6 text-base font-bold">상세 정보</p>
      </div>
    </div>
  );
}
