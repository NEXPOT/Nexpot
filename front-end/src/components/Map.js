//* global kakao */
import React, { useEffect, useState, useRef } from "react";
const { kakao } = window;

const Map = ({markerPositions}) => {
  // state, props 선언
  // const {markerPositions} = props; 
  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const container = useRef();
  const pos = new kakao.maps.LatLng(36.3102, 126.513);
  
  // 지도 컨테이너를 생성합니다
  useEffect(() => {  
    const options = {
      center: pos,
      level: 3,
    };
    const map = new kakao.maps.Map(container.current, options);
    setKakaoMap(map);
  }, [container]); 

  // click 지역에 따른 마커 표시
  useEffect(() => {
    if (kakaoMap === null) {
      return;
    } 
    const newPos = new kakao.maps.LatLng(markerPositions[0], markerPositions[1]);
    setMarkers(()=> {  
      return new kakao.maps.Marker({ map: kakaoMap, position: newPos });
    });  
    kakaoMap.panTo(newPos); //지도의 중심을 마커로 이동시킵니다.
  }, [kakaoMap, markerPositions]);

  return (
    <div
      className="mx-10 mt-6"
      id="map"
      style={{ width: "inherit", height: "50vh" }}
      ref={container}
    ></div>
  );
};

export default Map;
