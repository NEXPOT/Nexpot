//* global kakao */
const { kakao } = window;

const KakaoMapScript = (item) => {
  console.log(item);
  console.log(item[0]);
  var container = document.getElementById("map");
  // const pos = ;
  // console.log(pos);
  var options = {
    center: new kakao.maps.LatLng(item[0].px, item[0].py),
    level: 3,
  };
  var map = new kakao.maps.Map(container, options);

  // var marker = new kakao.maps.Marker({
  //   map: map, // 마커를 표시할 지도
  //   pos: pos,
  // });
  container.classList.add("mt-6");
  console.log("왜?");
  // container.classList.add("max-w-fit");
  // container.classList.add("v-50");
  // container.classList.add("z-10");
};

export default KakaoMapScript;
