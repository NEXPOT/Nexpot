//* global kakao */
import React, { useEffect, useState, useRef } from "react";
const { kakao } = window;

const Map = ({ place }) => {
  // state
  const [kakaoMap, setKakaoMap] = useState(null);
  const container = useRef();
  // 지도와 마커를 생성합니다
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37, 126.92544),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    setKakaoMap(map);
  }, [container]);

  return (
    <div
      className="mx-10 mt-6 rounded-xl"
      id="map"
      style={{ width: "inherit", height: "50vh" }}
      ref={container}
    ></div>
  );
};

export default Map;
