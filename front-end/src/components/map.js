//* global kakao */
import React, { useEffect, useState, useRef } from "react";
const { kakao } = window;

const Map = ({markerPositions}) => {
  // state, props 선언
  // const {markerPositions} = props; 
  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const container = useRef();
  const pos = new kakao.maps.LatLng(markerPositions[0], markerPositions[1]);
  
  // 지도 컨테이너를 생성합니다
  useEffect(() => {  
    window.kakao.maps.load(()=>{
      const options = {
        center: pos,
        level: 3,
      };
      const map = new kakao.maps.Map(container.current, options);
      setKakaoMap(map);
      console.log('container effect');
    });
  }, [container]); 
  
  // kakaomap rendering
  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    // save center position
    const center = kakaoMap.getCenter();
    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap]);

  // click 지역에 따른 마커 표시
  useEffect(() => {
    if (kakaoMap === null) {
      return;
    } 
    console.log('markerposition effect');
    const newPos = new kakao.maps.LatLng(markerPositions[0], markerPositions[1]);
    setMarkers(()=> {  
      return new kakao.maps.Marker({ map: kakaoMap, position: newPos });
    });  
    kakaoMap.panTo(newPos); //지도의 중심을 마커로 이동시킵니다.
  },  [markerPositions]);

  return (
    <div
      className="mx-10 mt-6 rounded-lg"
      id="map"
      style={{ width: "inherit", height: "50vh" }}
      ref={container}
    ></div>
  );
};

export default Map;