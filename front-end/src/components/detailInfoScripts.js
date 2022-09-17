const DetailInfoScripts = (item) => {
  //console.log(item);
  var btn = document.getElementById("moreBtn");
  var placeContent = document.getElementById("placeContent");

  // overview 정보 렌더링
  if (item.tourapi[0].overview !== null) {
    placeContent.innerHTML = item.tourapi[0].overview;
    //console.log("overview api 정보 있음");
    //console.log(placeContent.innerHTML);

    placeContent.style.display = "";

    if (placeContent.innerHTML.length > 50) {
      btn.style.display = "block";
    }
  } else {
    //console.log("overview api 정보 없음");
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
  tourInfo.setAttribute("class", "w-4/5 sm:w-1/2 text-sm");
  tourInfo.innerHTML = "";

  // 장소마다 tourapi 정보가 null인 칸이 있거나 없기 때문에 각각의 if문으로 value를 확인하고 element를 추가합니다.
  /**[주소] addr check */
  if (item.tourapi[0].addr !== null) {
    //console.log("addr 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E] whitespace-nowrap">주소</span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].addr +
      `</span></div>`;
  }

  /**[문의 및 안내] tel & infocenter check */
  if (
    // infoCenter 정보가 있는 경우 -> infoCenter
    item.tourapi[0].infocenter !== null &&
    item.tourapi[0].infocenter !== undefined &&
    item.tourapi[0].infocenter !== ""
  ) {
    //console.log("infoCenter 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E]">문의 및 안내 </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].infocenter +
      `</span></div>`;
  } else if (
    // tel 정보가 있는 경우 -> tel
    item.tourapi[0].tel !== null &&
    item.tourapi[0].tel !== undefined &&
    item.tourapi[0].tel !== ""
  ) {
    //console.log("tel 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E]">문의 및 안내 </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].tel +
      `</span></div>`;
  } else {
    //console.log("infoCenter && tel api 정보 없음");
    tourInfo.remove();
  }

  /**[운영 시간] usetime check */
  if (
    item.tourapi[0].usetime !== null &&
    item.tourapi[0].usetime !== "" &&
    item.tourapi[0].usetime !== undefined
  ) {
    //console.log("usetime 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E] whitespace-nowrap">운영 시간 </span><span class="text-[#D7CBCB] max-w-lg">` +
      item.tourapi[0].usetime +
      `</span></div>`;
  } else {
    //console.log("usetime api 정보 없음");
    tourInfo.remove();
  }

  /**[쉬는 날] restdate check */
  if (
    item.tourapi[0].restdate !== null &&
    item.tourapi[0].restdate !== "" &&
    item.tourapi[0].restdate !== undefined
  ) {
    //console.log("restdate 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E] whitespace-nowrap">쉬는 날 </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].restdate +
      `</span></div>`;
  } else {
    //console.log("restdate api 정보 없음");
    tourInfo.remove();
  }

  /**[주차장 여부] parking check */
  if (
    item.tourapi[0].parking !== null &&
    item.tourapi[0].parking !== "" &&
    item.tourapi[0].parking !== undefined
  ) {
    //console.log("parking 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E] whitespace-nowrap">주차 여부 </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].parking +
      `</span></div>`;
  } else {
    //console.log("park api 정보 없음");
    tourInfo.remove();
  }
  /**[애완동물 동반 가능 여부] chkpet check */
  if (item.tourapi[0].chkpet !== null && item.tourapi[0].chkpet !== "") {
    //console.log("chkpet 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E] whitespace-nowrap">애완동물 동반 가능 여부 </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkpet +
      `</span></div>`;
  } else {
    //console.log("chkpet api 정보 없음");
    tourInfo.remove();
  }
  /**[유모차 대여 여부] chkbabycarriage check */
  if (
    item.tourapi[0].chkbabycarriage !== null &&
    item.tourapi[0].chkbabycarriage !== ""
  ) {
    //console.log("chkbabycarriage 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E] whitespace-nowrap">유모차 대여 여부 </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkbabycarriage +
      `</span></div>`;
  } else {
    //console.log("chkbabycarriage api 정보 없음");
    tourInfo.remove();
  }
  /**[신용카드 가능 여부] chkcreditcard check */
  if (
    item.tourapi[0].chkcreditcard !== null &&
    item.tourapi[0].chkcreditcard !== ""
  ) {
    //console.log("chkcreditcard 정보 있음");
    tourInfo.innerHTML +=
      `<div class="flex flex-flow-row gap-2 mb-1.5"><span class="text-[#837E7E] whitespace-nowrap">신용카드 가능 여부 </span><span class="text-[#D7CBCB]">` +
      item.tourapi[0].chkcreditcard +
      `</span></div>`;
  } else {
    //console.log("chkcreditcard api 정보 없음");
    tourInfo.remove();
  }
  detailInfo.appendChild(tourInfo);

  /** 여기부터 score 점수 렌더링 부분 */
  if (item.score.length !== 0) {
    //var scoreInfo = item.score[0];
    var scoreInfo = document.createElement("div");
    scoreInfo.setAttribute("id", "scoreInfoList");
    scoreInfo.setAttribute("class", "flex flex-col text-sm");
    scoreInfo.innerHTML = "";

    // 장소마다 score 정보가 null인 칸이 있거나 없기 때문에 각각의 if문으로 value를 확인하고 element를 추가합니다.

    /**[분위기] atmosphere check */
    if (
      item.score[0].atmosphere !== null &&
      item.score[0].atmosphere !== "0.00" &&
      item.score[0].atmosphere !== undefined
    ) {
      //console.log("atmosphere 정보 있음");
      if (item.score[0].atmosphere * 100 >= 70) {
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">분위기</li><div class="relative inline">😍</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].atmosphere * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].atmosphere * 100 +
          `%" class="bg-[#0D6EFD] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else if (item.score[0].atmosphere * 100 >= 40) {
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">분위기</li><div class="relative inline">🙂</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].atmosphere * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].atmosphere * 100 +
          `%" class="bg-[#E8A455] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else {
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">분위기</li><div class="relative inline">😥</div><span class="text-[#D7CBCB]">` +
          (item.score[0].atmosphere * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].atmosphere * 100 +
          `%" class="bg-[#E85C55] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      }
    } else {
      //console.log("atmosphere api 정보 없음");
      scoreInfo.remove();
    }

    /**[가성비] cost check */
    if (
      item.score[0].cost !== null &&
      item.score[0].cost !== "0.00" &&
      item.score[0].cost !== undefined
    ) {
      if (item.score[0].cost * 100 >= 70) {
        //console.log("cost 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">가성비</li><div class="relative inline">😍</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].cost * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].cost * 100 +
          `%" class="bg-[#0D6EFD] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else if (item.score[0].cost * 100 >= 40) {
        //console.log("cost 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">가성비</li><div class="relative inline">🙂</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].cost * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].cost * 100 +
          `%" class="bg-[#E8A455] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else {
        //console.log("cost 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">가성비</li><div class="relative inline">😢</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].cost * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].cost * 100 +
          `%" class="bg-[#E85C55] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      }
    } else {
      //console.log("cost api 정보 없음");
      scoreInfo.remove();
    }

    /**[서비스] service check*/
    if (
      item.score[0].service !== null &&
      item.score[0].service !== "0.00" &&
      item.score[0].service !== undefined
    ) {
      if (item.score[0].service * 100 >= 70) {
        //console.log("service 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">서비스</li><div class="relative inline">😍</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].service * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].service * 100 +
          `%" class="bg-[#0D6EFD] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else if (item.score[0].service * 100 >= 40) {
        //console.log("service 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">서비스</li><div class="relative inline">🙂</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].service * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].service * 100 +
          `%" class="bg-[#E8A455] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else {
        //console.log("service 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">서비스</li><div class="relative inline">😢</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].service * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].service * 100 +
          `%" class="bg-[#E85C55] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      }
    } else {
      //console.log("service api 정보 없음");
      scoreInfo.remove();
    }

    /**[맛] tastecheck */
    if (
      item.score[0].taste !== null &&
      item.score[0].taste !== "0.00" &&
      item.score[0].taste !== undefined
    ) {
      if (item.score[0].taste * 100 >= 70) {
        //console.log("taste api 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">맛</li><div class="relative inline">😍</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].taste * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].taste * 100 +
          `%" class="bg-[#0D6EFD] w-full h-2">` +
          `</div>` +
          `</div>`;
      } else if (item.score[0].taste * 100 >= 40) {
        //console.log("taste api 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">맛</li><div class="relative inline">🙂</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].taste * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].taste * 100 +
          `%" class="bg-[#E8A455] w-full h-2">` +
          `</div>` +
          `</div>`;
      } else {
        //console.log("taste api 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">맛</li><div class="relative inline">😥</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].taste * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].taste * 100 +
          `%" class="bg-[#E85C55] w-full h-2">` +
          `</div>` +
          `</div>`;
      }
    } else {
      //console.log("taste api 정보 없음");
      scoreInfo.remove();
    }
    /**[재방문 의사] visit check */
    if (
      item.score[0].visit !== null &&
      item.score[0].visit !== "0.00" &&
      item.score[0].visit !== undefined
    ) {
      if (item.score[0].visit * 100 >= 70) {
        //console.log("visit 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">재방문의사</li><div class="relative inline">😍</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].visit * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].visit * 100 +
          `%" class="bg-[#0D6EFD] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else if (item.score[0].visit * 100 >= 40) {
        //console.log("visit 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">재방문의사</li><div class="relative inline">🙂</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].visit * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].visit * 100 +
          `%" class="bg-[#E8A455] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      } else {
        //console.log("visit 정보 있음");
        scoreInfo.innerHTML +=
          `<div class="flex flex-flow-row place-items-center gap-2 mb-2"><li class="text-[#837E7E] w-20 whitespace-nowrap place-items-center">재방문의사</li><div class="relative inline">😢</div><span class="text-[#D7CBCB] w-6">` +
          (item.score[0].visit * 100).toFixed(0) +
          `</span>` +
          `<div class="w-40 h-2 bg-[#dfdfdf] overflow-hidden rounded-lg relative inline">` +
          `<div style="width:` +
          item.score[0].visit * 100 +
          `%" class="bg-[#E85C55] w-full h-2">` +
          `</div>` +
          `</div>` +
          `</div>`;
      }
    } else {
      //console.log("visit api 정보 없음");
      scoreInfo.remove();
    }
    detailInfo.appendChild(scoreInfo);
  }
};

export default DetailInfoScripts;
