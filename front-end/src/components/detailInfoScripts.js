const DetailInfoScripts = (item) => {
    console.log(item);
    var scoreData = item.score[0];
    var btn = document.getElementById('moreBtn');
    var placeContent = document.getElementById("placeContent");

  //overview 정보 렌더링
  if(item.tourapi[0].overview !== null) {
    placeContent.innerHTML = item.tourapi[0].overview;
    // placeContent.classList.add("text-ellipsis");  
    if(placeContent.innerHTML.length > 50){
        btn.style.display = 'block';
    }
    placeContent.style.display = 'block';
} else {
    console.log("overview api 정보 없음"); 
    btn.style.display = 'none';
    placeContent.style.display = 'none';
  }

  // 상세정보 렌더링
  var detailInfo = document.getElementById("detailInfo");
  if(detailInfo.hasChildNodes() === true) {
    // 이미 상세정보가 만들어져있다면 지우고 재생성합니다.
    detailInfo.textContent = "";
  }
  var tourInfo = document.createElement("div");
  tourInfo.classList.add("grid");
  tourInfo.classList.add("grid-col-2");
  tourInfo.classList.add("gap-2");
  tourInfo.classList.add("text-sm");
  tourInfo.innerHTML = "";

  // 장소마다 tourapi 정보가 null인 칸이 있거나 없기 때문에 각각의 if문으로 value를 확인하고 element를 추가합니다.
  // tel check
  if (
    item.tourapi[0].tel !== null &&
    item.tourapi[0].tel !== "" &&
    item.tourapi[0].tel !== "있음" &&
    item.tourapi[0].tel !== undefined
  ) {
    console.log("tel 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">문의 및 안내</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].tel +
      `</span></div>`;
  } else {
    console.log("tel api 정보 없음");
    tourInfo.remove();
  }
  // parking check
  if (item.tourapi[0].parking !== null && item.tourapi[0].parking !== "" && item.tourapi[0].parking !== undefined) {
    console.log("parking 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">주차장 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].parking +
      `</span></div>`;
  } else {
    console.log("park api 정보 없음");
    tourInfo.remove();
  }
  // chkpet check
  if (item.tourapi[0].chkpet !== null && item.tourapi[0].chkpet !== "") {
    console.log("chkpet 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">애완동물 동반 가능 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkpet +
      `</span></div>`;
  } else {
    console.log("chkpet api 정보 없음");
    tourInfo.remove();
  }
  // chkpet check
  if (item.tourapi[0].chkbabycarriage !== null && item.tourapi[0].chkbabycarriage !== "") {
    console.log("chkbabycarriage 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">유모차 대여 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkbabycarriage +
      `</span></div>`;
  } else {
    console.log("chkbabycarriage api 정보 없음");
    tourInfo.remove();
  }
  // chkcreditcard check
  if (item.tourapi[0].chkcreditcard !== null && item.tourapi[0].chkcreditcard !== "") {
    console.log("chkcreditcard 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">신용카드 가능 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkcreditcard +
      `</span></div>`;
  } else {
    console.log("chkcreditcard api 정보 없음");
    tourInfo.remove();
  }
  detailInfo.appendChild(tourInfo); 
};

export default DetailInfoScripts;
