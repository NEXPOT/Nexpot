//* global kakao */
const { kakao } = window;

const KakaoMapScript = (item) => {
  console.log(item);
  var container = document.getElementById("map");
  if (container.hasChildNodes() === true) {
    container.textContent = "";
    console.log("remove child");
  }
  var info = document.getElementById("detailInfo");
  const pos = new kakao.maps.LatLng(item.py, item.px);
  // console.log(pos);
  var options = {
    center: pos,
    level: 3,
  };
  var map = new kakao.maps.Map(container, options);
  map.relayout();

  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: pos,
    title: item.pname,
  });

  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 커스텀 오버레이가 표시될 위치입니다
  var position = new kakao.maps.LatLng(33.450701, 126.570667);

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
  });

  marker.setMap(map);
  customOverlay.setMap(map);
  // 클릭한 장소에 대한 상세정보 update script
  // item.forEach((element) => {
  //   if (element.score.length !== 0) {
  //     const taste = element.score[0].taste * 100;
  //     const at = element.score[0].atmosphere * 100;
  //     const visit = element.score[0].visit * 100;
  //     console.log(taste);
  //     const scoreInfo = document.createElement("scoreInfo");
  //     scoreInfo.innerHTML = `<div class="text-xs">${taste}</div><div class="text-xs">${at}</div><div class="text-xs">${visit}</div>`;
  //     info.appendChild(scoreInfo);
  //     console.log(element.score);
  //   }
  // });
};

export default KakaoMapScript;
