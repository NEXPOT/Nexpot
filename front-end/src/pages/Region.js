import React, { useEffect, useRef, useState } from "react";
import { TriangleDown } from "akar-icons";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function Region() {
	let navigate = useNavigate();
  let location = useLocation();
  let param = location.pathname.replace("/list/","");

  const region = {
		광역시: ["전체", "부산", "대구", "인천", "광주", "대전", "울산"],
		서울: ["서울"],
		강원: ["전체", "강릉", "원주", "속초", "평창", "양양"],
		경기: ["전체", "수원", "용인", "고양", "가평", "양평", "대부도", "파주", "포천"],
		충북: ["전체", "청주", "충주", "제천", "단양"],
		충남: ["전체", "천안", "보령", "부여", "태안", "당진"],
		전북: ["전체", "전주", "군산", "고창", "부안"],
		전남: ["전체", "여수", "해남", "보성", "담양", "목포"],
		경북: ["전체", "포항", "경주", "울릉도", "안동", "문경"],
		경남: ["전체", "진주", "통영", "거제", "남해"],
		제주: ["제주"],
	};
	const region1 = ["광역시", "서울", "강원", "경기", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
	const regionValue = {
		광역시: "metropolitan",
		강원: "gangwon",
		경기: "gyeonggi",
		충북: "chungbuk",
		충남: "chungnam",
		전북: "jeonbuk",
		전남: "jeonnam",
		경북: "gyeongbuk",
		경남: "gyeongnam",
		서울: "seoul",
		부산: "busan",
		대구: "Daegu",
		인천: "Incheon",
		광주: "Gwangju",
		대전: "Daejeon",
		울산: "Ulsan",
		제주: "Jeju",
		강릉: "Gangneung",
		원주: "Wonju",
		속초: "Sokcho",
		평창: "Pyeongchang",
		양양: "Yangyang",
		수원: "Suwon",
		용인: "Yongin",
		고양: "Goyang",
		가평: "Gapyeong",
		양평: "Yangpyeong",
		대부도: "Daebudo",
		파주: "Paju",
		포천: "Pocheon",
		청주: "cheongju",
		충주: "Chungju",
		제천: "Jecheon",
		단양: "Danyang",
		천안: "cheonan",
		보령: "boryeong",
		부여: "buyeo",
		태안: "Taean",
		당진: "Dangjin",
		전주: "Jeonju",
		군산: "Gunsan",
		고창: "Gochang",
		부안: "buan",
		여수: "Yeosu",
		해남: "Haenam",
		보성: "boseong",
		담양: "Damyang",
		목포: "Mokpo",
		포항: "Pohang",
		경주: "Gyeongju",
		울릉도: "Ulleungdo",
		안동: "andong",
		문경: "Mungyeong",
		진주: "Jinju",
		통영: "Tongyeong",
		거제: "Geoje",
		남해: "Namhae",
	};

  let region1box = useRef();
  let region2box = useRef();
  let regionKey = Object.keys(regionValue).find(key => regionValue[key] === param);

	/** 처음 로드될 때 해당 region에 css styling */
  useEffect(() => {
    for (let i = 0; i < region1box.current.children.length; i++) {
    if (region1box.current.children[i].innerHTML == regionKey) {
      region1box.current.children[i].classList.toggle("clicked");
      region1box.current.children[i].classList.toggle("text-[#0D6EFD]");
      region1box.current.children[i].classList.toggle("underline");
      region1box.current.children[i].classList.toggle("underline-offset-4");
    }
  }
   // 0번째 region2를 클릭되어 있게 함
		region2box.current.children[0].classList.add("clicked");
		region2box.current.children[0].classList.add("text-[#ffffff]");		
		region2box.current.children[0].classList.add("bg-[#0D6EFD]");
  }, []);


	const [region1Name, setRegion1Name] = useState("광역시");
	const [region2Name, setRegion2Name] = useState("전체");

	// 토글 리스트가 열려있는지 확인하는 state
	const [isOpen, setToggle] = useState(true);

	

	/** ~로 떠나볼까요? */
	let roRegion = ["서울", "대구", "광주", "제주", "원주", "속초", "대부도", "파주", "청주", "충주", "부여", "전주", "여수", "목포", "경주", "울릉도", "진주", "거제", "남해", "광역시", "경기"];

	let regionTitle;
	if (roRegion.includes(region2Name)) {
		regionTitle = "로 떠나볼까요?";
	} else if (region2Name === "전체") { // 여행을 떠나볼까요?
		regionTitle = "을 떠나볼까요?";
	} else {
		regionTitle = "으로 떠나볼까요?";
	}

	const onClickRegion1 = (e) => {
		navigate(`/list/${regionValue[e.target.innerHTML]}`);
		setRegion1Name(e.target.innerHTML);
		setRegion2Name(e.target.innerHTML);
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

		// 0번째 region2를 클릭되어 있게 함
		region2box.current.children[0].classList.add("clicked");
		region2box.current.children[0].classList.add("text-[#ffffff]");		
		region2box.current.children[0].classList.add("bg-[#0D6EFD]");
		
		// 다른 지역의 region2가 클릭되어 있는 현상 제거
		for (let i = 1; i < region2box.current.children.length; i++) {
			region2box.current.children[i].classList.remove("clicked");
			region2box.current.children[i].classList.remove("text-[#ffffff]");
			region2box.current.children[i].classList.remove("bg-[#0D6EFD]");
		}
	};

	const onClickRegion2 = (e) => {
		navigate(`/list/${regionValue[e.target.innerHTML]}`);
		setRegion2Name(e.target.innerHTML);
		
		let parents = e.target.parentElement;
		for (const child of parents.children) {
			child.classList.remove("clicked");
			child.classList.remove("text-[#ffffff]");
			child.classList.remove("bg-[#0D6EFD]");
		}
		e.target.classList.toggle("clicked");
		e.target.classList.toggle("text-[#ffffff]");
		e.target.classList.toggle("bg-[#0D6EFD]");

	};


	const onClickToggle = (e) => {
		let target = e.target;
		if (target !== e.currentTarget) {
			target = e.currentTarget;
		}
		setToggle(!isOpen);
		if (!isOpen) {
			target.classList.remove("rotate-180");
		} else {
			//제자리 rotation
			target.classList.add("rotate-180");
		}
	};


	return (
		<div className="mx-4 mt-8 text-white sm:mx-10 sm:mt-20">

			<div className="flex mb-4 sm:mb-8">
				<TriangleDown
					className="self-center transition ease-in-out delay-100 hover:cursor-pointer"
					color="#ffffff"
					size={32}
					onClick={onClickToggle}
					fill="#ffffff"
				></TriangleDown>
				<span className="text-2xl font-medium sm:text-6xl">
					{region2Name === "전체" ? "여행" : region2Name}
					<span className="text-[#c4c4c4] text-2xl sm:text-6xl font-normal">
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
				<div>
					<div className="flex flex-wrap text-[#525959] w-full pt-2 px-4 sm:px-6"
          ref={region1box}>
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
					<div className="flex flex-wrap py-2 px-4 sm:mx-5 rounded-lg bg-[#1A1716] align-middle"
						ref={region2box}>
						{region[region1Name].map((region, idx) => (

							<button
								key={idx}
								className="color-[#0D6EF] font-normal border-[#525959] border-[0.5px] rounded-2xl px-4 py-1 mx-1 my-1 text-xs sm:px-6 sm:text-sm text-[#737A7A] hover:text-[#ffffff] hover:bg-[#0D6EFD] hover:border-[#0D6EFD] transition ease-in-out delay-75"
								onClick={onClickRegion2}
							>
								{region}
							</button>

						))}
					</div>
				</div>
			</div>

			<div>

			</div>
		</div>
	);
}
