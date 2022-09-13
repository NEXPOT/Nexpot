const DetailInfoScripts = (item) => {
  console.log(item);
  var btn = document.getElementById("moreBtn");
  var placeContent = document.getElementById("placeContent");

  //overview 정보 렌더링
  if (item.tourapi[0].overview !== null) {
    placeContent.innerHTML = item.tourapi[0].overview;
    if (placeContent.innerHTML.length > 50) {
      btn.style.display = "block";
    }
  } else {
    console.log("overview api 정보 없음");
    btn.style.display = "none";
    placeContent.style.display = "none";
  }

  // 상세정보 렌더링
  var detailInfo = document.getElementById("detailInfo");
  if (detailInfo.hasChildNodes() === true) {
    // 이미 상세정보가 만들어져있다면 지우고 재생성합니다.
    detailInfo.textContent = "";
  }
  var tourInfo = document.createElement("div");
  tourInfo.setAttribute("class", "grid grid-col-2 gap-2 text-sm");
  tourInfo.innerHTML = "";

  // 장소마다 tourapi 정보가 null인 칸이 있거나 없기 때문에 각각의 if문으로 value를 확인하고 element를 추가합니다.
  /**[주소] addr check */
  if (item.tourapi[0].addr !== null){
    console.log("addr 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">주소 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].addr +
      `</span></div>`;
  }

  /**[문의 및 안내] tel & infocenter check */
  if ( // infoCenter 정보가 있는 경우 -> infoCenter
    item.tourapi[0].infocenter !== null &&
    item.tourapi[0].infocenter !== undefined &&
    item.tourapi[0].infocenter !== ""
    ){
    console.log("infoCenter 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">문의 및 안내 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].infocenter +
      `</span></div>`;
  } else if ( // tel 정보가 있는 경우 -> tel
    item.tourapi[0].tel !== null &&
    item.tourapi[0].tel !== undefined &&
    item.tourapi[0].tel !== ""
    ){
    console.log("tel 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">문의 및 안내 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].tel +
      `</span></div>`;
  } else {
    console.log("infoCenter && tel api 정보 없음");
    tourInfo.remove();
  }

  /**[운영 시간] usetime check */
  if (
    item.tourapi[0].usetime !== null &&
    item.tourapi[0].usetime !== "" &&
    item.tourapi[0].usetime !== undefined
  ) {
    console.log("usetime 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">운영 시간 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].usetime +
      `</span></div>`;
  } else {
    console.log("usetime api 정보 없음");
    tourInfo.remove();
  }

  /**[쉬는 날] restdate check */
  if (
    item.tourapi[0].restdate !== null &&
    item.tourapi[0].restdate !== "" &&
    item.tourapi[0].restdate !== undefined
  ) {
    console.log("usetime 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">쉬는 날 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].restdate +
      `</span></div>`;
  } else {
    console.log("restdate api 정보 없음");
    tourInfo.remove();
  }


  /**[주차장 여부] parking check */
  if (
    item.tourapi[0].parking !== null &&
    item.tourapi[0].parking !== "" &&
    item.tourapi[0].parking !== undefined
  ) {
    console.log("parking 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">주차 여부 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].parking +
      `</span></div>`;
  } else {
    console.log("park api 정보 없음");
    tourInfo.remove();
  }
  /**[애완동물 동반 가능 여부] chkpet check */
  if (item.tourapi[0].chkpet !== null && item.tourapi[0].chkpet !== "") {
    console.log("chkpet 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">애완동물 동반 가능 여부 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkpet +
      `</span></div>`;
  } else {
    console.log("chkpet api 정보 없음");
    tourInfo.remove();
  }
  /**[유모차 대여 여부] chkbabycarriage check */
  if (
    item.tourapi[0].chkbabycarriage !== null &&
    item.tourapi[0].chkbabycarriage !== ""
  ) {
    console.log("chkbabycarriage 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">유모차 대여 여부 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkbabycarriage +
      `</span></div>`;
  } else {
    console.log("chkbabycarriage api 정보 없음");
    tourInfo.remove();
  }
  /**[신용카드 가능 여부] chkcreditcard check */
  if (
    item.tourapi[0].chkcreditcard !== null &&
    item.tourapi[0].chkcreditcard !== ""
  ) {
    console.log("chkcreditcard 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">신용카드 가능 여부 : </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkcreditcard +
      `</span></div>`;
  } else {
    console.log("chkcreditcard api 정보 없음");
    tourInfo.remove();
  }
  detailInfo.appendChild(tourInfo);


  /** 여기부터 score 점수 렌더링 부분 */
  if (item.score.length !== 0) {
    var scoreInfo = item.score[0];
    var scoreInfo = document.createElement("div");
    scoreInfo.setAttribute("id", "scoreInfoList");
    scoreInfo.setAttribute("class", "grid grid-col-2 text-sm");
    scoreInfo.innerHTML = "";
    // 장소마다 score 정보가 null인 칸이 있거나 없기 때문에 각각의 if문으로 value를 확인하고 element를 추가합니다.
    // atmosphere check
    if (
      item.score[0].atmosphere !== null &&
      item.score[0].atmosphere !== "0.00" &&
      item.score[0].atmosphere !== undefined
    ) {
      console.log("atmosphere 정보 있음");
      scoreInfo.innerHTML +=
        `<div class="flex flex-flow-row place-items-center gap-x-2"><span class="text-[#837E7E]">분위기</span><span class="text-[#D7CBCB]">` +
        (item.score[0].atmosphere * 100).toFixed(0) +
        `</span>` +
        `<div class="w-24 h-2 bg-slate-400 overflow-hidden">` +
        `<div style="width:` +
        item.score[0].atmosphere * 100 +
        `%" class="bg-[#0D6EFD] h-2">` +
        `</div>` +
        `</div>` +
        `</div>`;
    } else {
      console.log("atmosphere api 정보 없음");
      scoreInfo.remove();
    }
    // cost check
    if (
      item.score[0].cost !== null &&
      item.score[0].cost !== "0.00" &&
      item.score[0].cost !== undefined
    ) {
      console.log("cost 정보 있음");
      scoreInfo.innerHTML +=
        `<div class="flex flex-flow-row place-items-center gap-x-2"><span class="text-[#837E7E]">가성비</span><span class="text-[#D7CBCB]">` +
        (item.score[0].cost * 100).toFixed(0) +
        `</span>` +
        `<div class="w-24 h-2 bg-slate-400 overflow-hidden">` +
        `<div style="width:` +
        item.score[0].cost * 100 +
        `%" class="bg-[#0D6EFD] h-2">` +
        `</div>` +
        `</div>` +
        `</div>`;
    } else {
      console.log("cost api 정보 없음");
      scoreInfo.remove();
    }
    // service check
    if (
      item.score[0].service !== null &&
      item.score[0].service !== "0.00" &&
      item.score[0].service !== undefined
    ) {
      console.log("service 정보 있음");
      scoreInfo.innerHTML +=
        `<div class="flex flex-flow-row place-items-center gap-x-2"><span class="text-[#837E7E]">서비스</span><span class="text-[#D7CBCB]">` +
        (item.score[0].service * 100).toFixed(0) +
        `</span>` +
        `<div class="w-24 h-2 bg-slate-400 overflow-hidden">` +
        `<div style="width:` +
        item.score[0].service * 100 +
        `%" class="bg-[#0D6EFD] h-2">` +
        `</div>` +
        `</div>` +
        `</div>`;
    } else {
      console.log("service api 정보 없음");
      scoreInfo.remove();
    }
    // service check
    if (
      item.score[0].taste !== null &&
      item.score[0].taste !== "0.00" &&
      item.score[0].taste !== undefined
    ) {
      console.log("taste api 정보 있음");
      scoreInfo.innerHTML +=
        `<div class="flex flex-flow-row place-items-center gap-x-2"><span class="text-[#837E7E]">맛</span><span class="text-[#D7CBCB]">` +
        (item.score[0].taste * 100).toFixed(0) +
        `</span>` +
        `<div class="w-24 h-2 bg-slate-400">` +
        `<div style="width:` +
        item.score[0].taste * 100 +
        `%" class="bg-[#0D6EFD] h-2">` +
        `</div>` +
        `</div>`;
      // const blue = document.getElementById("blue");
      // console.log(blue);
      // console.log(blue.style);
      // blue.style.width = item.score[0].taste * 10 + "%";
    } else {
      console.log("taste api 정보 없음");
      scoreInfo.remove();
    }
    // visit check
    if (
      item.score[0].visit !== null &&
      item.score[0].visit !== "0.00" &&
      item.score[0].visit !== undefined
    ) {
      console.log("visit 정보 있음");
      scoreInfo.innerHTML +=
        `<div class="flex flex-flow-row place-items-center gap-x-2"><span class="text-[#837E7E]">재방문의사</span><span class="text-[#D7CBCB]">` +
        (item.score[0].visit * 100).toFixed(0) +
        `</span>` +
        `<div class="w-24 h-2 bg-slate-400 overflow-hidden">` +
        `<div style="width:` +
        item.score[0].visit * 100 +
        `%" class="bg-[#0D6EFD] h-2">` +
        `</div>` +
        `</div>` +
        `</div>`;
    } else {
      console.log("visit api 정보 없음");
      scoreInfo.remove();
    }
    detailInfo.appendChild(scoreInfo);
  }
};

export default DetailInfoScripts;
