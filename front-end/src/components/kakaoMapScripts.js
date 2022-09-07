//* global kakao */
import React, { useEffect, useState, useRef } from "react";
const { kakao } = window;

const KakaoMapScript = ({ item }) => { 
    const container = document.getElementById('map');
    const pos = new kakao.maps.LatLng(item.px, item.py);
    const options = {
        center: pos,
        level: 3,
      };
    const map = new kakao.maps.Map(container.current, options);
    console.log(item.px);
    console.log(item.py);
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        pos: pos,
        title: item.pname, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });

    container.classList.add("mx-10 mt-6 rounded-lg w-full, v-50");
};

export default KakaoMapScript;