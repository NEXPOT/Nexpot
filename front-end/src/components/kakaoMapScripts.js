//* global kakao */ 
const { kakao } = window;

const KakaoMapScript = ({ item }) => {
  if (typeof item == "undefined" || item == null || item == "") {
    console.log(typeof(item)); 
    return null;}
      const container = document.getElementById("map"); 
      const pos = new kakao.maps.LatLng(item.px, item.py);
      const options = {
        center: pos,
        level: 3,
      };
      const map = new kakao.maps.Map(container.current, options);
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        pos: pos,
        title: item.pname, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });
      container.classList.add("mx-10");
      container.classList.add("mt-6");
      container.classList.add("rounded-lg");
      container.classList.add("w-full");
      container.classList.add("v-50"); 
  };

export default KakaoMapScript;
