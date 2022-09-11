//* global kakao */
import { Question } from "akar-icons";
import { QuestionFill } from "akar-icons";

const { kakao } = window;

const KakaoMapScript = (item) => { 
  var container = document.getElementById("map");
  if (container.hasChildNodes() === true) {
    // 이미 지도가 만들어져있다면 지우고 새로 생성합니다.
    container.textContent = "";
  }
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
  marker.setMap(map);

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    clickable: true, // 커스텀 오버레이 클릭 시 지도에 이벤트를 전파하지 않도록 설정한다
    content:
      '<div id="customOverlay" class="flex flex-row gap-6 bg-white text-slate-800 p-6 rounded-xl">' +
      '<div class="pd-4 flex flex-col">' +
      '<div class="text-xs">' +
      item.pname +
      "</div>" +
      '<div class="text-xs">' +
      item.tourapi[0].addr +
      "</div>" +
      "</div>" +
      '<button id="question" class="self-start">?</button>' +
      "</div>",
    position: pos, // 커스텀 오버레이를 표시할 좌표
    xAnchor: 0.5, // 컨텐츠의 x 위치
    yAnchor: 1.2, // 컨텐츠의 y 위치
  });

  if (item.score.length !== 0) {
    var scoreInfo = item.score[0];
    console.log("score = ", scoreInfo);
  } 
  
  // 마커에 마우스를 호버했을 경우, 커스텀 오버레이를 표시합니다.
  // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
  // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
  (function (marker, customOverlay) {
    // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
    kakao.maps.event.addListener(marker, "mouseover", function () {
      customOverlay.setMap(map);
      // question mark mousevoer action을 추가합니다
      var questionInfo = document.getElementById("question");
      var customOverWindow = document.getElementById("customOverlay");
      var qInfoText = document.createElement("div");
      questionInfo.addEventListener("mouseover", (event) => {
        qInfoText.innerHTML =
          '<div id="qInfoText" class="w-56 p-4 h-24 bg-white break-all text-ellipsis text-xs text-slate-800"><p class="break-all">각 점수는 서비스, 분위기, 가격, 방문, 맛에 해당하는 리뷰들을 자연어 처리 및 분류하여 긍정적, 부정적 리뷰의 비율을 표기한 점수입니다.</p></div>';
        customOverWindow.parentNode.appendChild(qInfoText);
      });
      questionInfo.addEventListener("mouseout", (event) => {
        qInfoText.textContent = "";
        qInfoText.remove();
      });
    });

    // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
    kakao.maps.event.addListener(customOverlay, "mouseout", function () {
      customOverlay.setMap(null);
    });
  })(marker, customOverlay);

};

export default KakaoMapScript;
