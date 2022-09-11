const DetailInfoScripts = (item) => {
    console.log(item);
    console.log(item.tourapi[0].overview);
    console.log(typeof(item.tourapi[0].overview));

    //overview 정보 렌더링
    if(item.tourapi[0].overview !== null){
        var placeContent = document.getElementById("placeContent");
        placeContent.innerHTML = item.tourapi[0].overview;
        placeContent.classList.add("h-48");
        placeContent.classList.add("text-ellipsis");
        placeContent.classList.add("overflow-hidden");
    } 

  // 상세정보 렌더링
  var detailInfo = document.getElementById("detailInfo");
  if (detailInfo.hasChildNodes() === true) {
    // 이미 상세정보가 만들어져있다면 지우고 재생성합니다.
    detailInfo.textContent = ""; 
  }
  var tourInfo = document.createElement("div");
  tourInfo.classList.add('grid');
  tourInfo.classList.add('grid-col-2');
  tourInfo.classList.add('gap-2');
  tourInfo.classList.add('text-sm');
  tourInfo.innerHTML = "";

  // 장소마다 tourapi 정보가 null인 칸이 있거나 없기 때문에 각각의 if문으로 value를 확인하고 element를 추가합니다.
  if (item.tourapi[0].addr !== null) {
    console.log("addr 정보 있음");
    tourInfo.innerHTML =
      `
  <div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">문의 및 안내</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].tel +
      `</span></div> 
  <div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">주차 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].parking +
      `</span></div> 
  <div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">애완동물 동반 가능 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkpet +
      `</span></div> 
  <div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">유모차 대여 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkbabycarriage +
      `</span></div> 
  <div class="flex flex-flow-row gap-2"><span class="text-[#837E7E]">신용카드 가능 여부</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkcreditcard +
      `</span></div> 
</div>`;
    detailInfo.appendChild(tourInfo);
  } else {
    console.log("addr api 정보 없음");
    tourInfo.remove(); 
  }
};

export default DetailInfoScripts;
