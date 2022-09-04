import React, { useState } from "react";
import { TriangleUp } from "akar-icons";
import { isFocusable } from "@testing-library/user-event/dist/utils";

export default function Region() {
  const region = {
    광역시: ["전체", "부산", "대구", "인천", "광주", "대전", "울산"],
    서울: ["서울"],
    강원: ["전체", "강릉", "원주", "속초", "평창", "양양"],
    경기: [
      "전체",
      "수원",
      "용인",
      "고양",
      "가평",
      "양평",
      "대부도",
      "파주",
      "포천",
    ],
    충북: ["전체", "청주", "충주", "제천", "단양"],
    충남: ["전체", "천안", "보령", "부여", "태안", "당진"],
    전북: ["전체", "전주", "군산", "고창", "부안"],
    전남: ["전체", "여수", "해남", "보성", "담양", "목포"],
    경북: ["전체", "포항", "경주", "울릉도", "안동", "문경"],
    경남: ["전체", "진주", "통영", "거제", "남해"],
    제주: ["제주"],
  };
  const region1 = [
    "광역시",
    "서울",
    "강원",
    "경기",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];
  const [region1Name, setRegion1Name] = useState("광역시");
  const [region2Name, setRetion2Name] = useState("전체");
  // 토클 리스트가 열려있는지 확인하는 state
  const [isOpen, setToggle] = useState(false);

  /** ~로 떠나볼까요? */
  let roRegion = [
    "서울",
    "대구",
    "광주",
    "제주",
    "원주",
    "속초",
    "대부도",
    "파주",
    "청주",
    "충주",
    "부여",
    "전주",
    "여수",
    "목포",
    "경주",
    "울릉도",
    "진주",
    "거제",
    "남해",
  ];

  let regionTitle;
  if (roRegion.includes(region2Name)) {
    regionTitle = "로 떠나볼까요?";
  } else if (region2Name === "전체") {
    regionTitle = "을 떠나볼까요?";
  } else {
    regionTitle = "으로 떠나볼까요?";
  }

  const onClickRegion1 = (e) => {
    // change region2
    // default는 맨 앞 region2
    setRegion1Name(e.target.innerHTML);
    let parents = e.target.parentElement;
    for (const child of parents.children) {
      child.classList.remove("clicked");
      child.classList.remove("text-[#0D6EFD]");
      child.classList.remove("underline");
      child.classList.remove("underline-offset-4");
    }
    e.target.classList.toggle("clicked");
    e.target.classList.toggle("text-[#0D6EFD]");
    e.target.classList.toggle("underline");
    e.target.classList.toggle("underline-offset-4");
  };

  const onClickToggle = (e) => {
    let target = e.target;
    if (target !== e.currentTarget) {
      target = e.currentTarget;
    }
    setToggle((isOpen) => !isOpen);
    if (!isOpen) {
      target.classList.add("transition");
      target.classList.add("ease-in-out");
      target.classList.add("delay-100");
      target.classList.remove("rotate-180");
      target.classList.add("rotate-180");
    } else {
      //제자리 rotation
      target.classList.add("rotate-180");
      target.classList.remove("rotate-180");
    }
  };

  return (
    <div className="mx-10 mt-20 text-white">
      <div className="flex mb-9">
        <TriangleUp
          className="self-center hover:cursor-pointer"
          color="#ffffff"
          size={40}
          onClick={onClickToggle}
          fill="#ffffff"
        ></TriangleUp>
        <span className="text-6xl font-medium">
          {region2Name === "전체" ? "여행" : region2Name}
          <span className="text-[#c4c4c4] text-6xl font-normal">
            {regionTitle}
          </span>
        </span>
      </div>
      <div
        className={
          isOpen
            ? "show transition ease-in-out delay-100 h-32 bg-[#120D0B] rounded-lg"
            : "hide transition ease-in-out delay-100 h-32 bg-[#120D0B] rounded-lg"
        }
      >
        <div className="text-[#525959] pt-3 px-6">
          {region1.map((region, idx) => (
            <button
              key={idx}
              className="hover:text-[#0D6EFD] hover:font-bold hover:underline underline-offset-4 mb-2 mr-12 py-0.5 text-base font-medium text-[#525959]"
              onClick={onClickRegion1}
            >
              {region}
            </button>
          ))}
        </div>
        <div className="h-12 mt-2 mx-5 px-4 rounded-lg bg-[#1A1716] align-middle flex">
          {region[region1Name].map((region, idx) => (
            <button
              key={idx}
              className="hover:text-[#ffffff] color-[#0D6EF] hover:bg-[#0D6EFD] hover:border-[#0D6EFD] font-normal border-[#525959] border-[0.5px] rounded-xl my-3 px-5 mx-1 text-sm text-[#737A7A] transition ease-in-out delay-75"
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
