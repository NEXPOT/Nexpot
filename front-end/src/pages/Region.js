import React, { useEffect, useRef, useState } from "react";
import { TriangleDown } from "akar-icons";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Region() {
	let navigate = useNavigate();
	let location = useLocation();
	let param = location.pathname.replace("/list/", "");
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
		대구: "daegu",
		인천: "incheon",
		광주: "gwangju",
		대전: "daejeon",
		울산: "ulsan",
		제주: "jeju",
		강릉: "gangneung",
		원주: "wonju",
		속초: "sokcho",
		평창: "pyeongchang",
		양양: "yangyang",
		수원: "suwon",
		용인: "yongin",
		고양: "goyang",
		가평: "gapyeong",
		양평: "yangpyeong",
		대부도: "daebudo",
		파주: "paju",
		포천: "pocheon",
		청주: "cheongju",
		충주: "chungju",
		제천: "jecheon",
		단양: "danyang",
		천안: "cheonan",
		보령: "boryeong",
		부여: "buyeo",
		태안: "taean",
		당진: "dangjin",
		전주: "jeonju",
		군산: "gunsan",
		고창: "gochang",
		부안: "buan",
		여수: "yeosu",
		해남: "haenam",
		보성: "boseong",
		담양: "damyang",
		목포: "mokpo",
		포항: "pohang",
		경주: "gyeongju",
		울릉도: "ulleungdo",
		안동: "andong",
		문경: "mungyeong",
		진주: "jinju",
		통영: "tongyeong",
		거제: "geoje",
		남해: "namhae",
	};

	const [region1Name, setRegion1Name] = useState("광역시");
	const [region2Name, setRegion2Name] = useState("전체");

	let region1box = useRef();
	let region2box = useRef();
	let regionKey = Object.keys(regionValue).find(key => regionValue[key] === param);

	useEffect(() => {
		// setRegion1
		if (regionKey === "광역시" || region["광역시"].includes(regionKey)) {
			setRegion1Name("광역시");
		} else if (regionKey === "서울" || region["서울"].includes(regionKey)) {
			setRegion1Name("서울");
		} else if (regionKey === "강원" || region["강원"].includes(regionKey)) {
			setRegion1Name("강원");
		} else if (regionKey === "경기" || region["경기"].includes(regionKey)) {
			setRegion1Name("경기");
		} else if (regionKey === "충북" || region["충북"].includes(regionKey)) {
			setRegion1Name("충북");
		} else if (regionKey === "충남" || region["충남"].includes(regionKey)) {
			setRegion1Name("충남");
		} else if (regionKey === "전북" || region["전북"].includes(regionKey)) {
			setRegion1Name("전북");
		} else if (regionKey === "전남" || region["전남"].includes(regionKey)) {
			setRegion1Name("전남");
		} else if (regionKey === "경북" || region["경북"].includes(regionKey)) {
			setRegion1Name("경북");
		} else if (regionKey === "경남" || region["경남"].includes(regionKey)) {
			setRegion1Name("경남");
		} else if (regionKey === "제주" || region["제주"].includes(regionKey)) {
			setRegion1Name("제주");
		}

		// setRegion2
		if (region1.includes(regionKey)) {
			setRegion2Name("전체");
		} else {
			setRegion2Name(regionKey);
		}
	}, [region1Name, region2Name]);

	/** 처음 로드될 때 해당 region buttion에 css styling */
	useEffect(() => {
		// region1 effect
		for (let i = 0; i < region1box.current.children.length; i++) {
			if (region1box.current.children[i].innerHTML === region1Name) {
				region1box.current.children[i].classList.add("clicked");
				region1box.current.children[i].classList.add("text-[#0D6EFD]");
				region1box.current.children[i].classList.add("underline");
				region1box.current.children[i].classList.add("underline-offset-4");
			} else {
				region1box.current.children[i].classList.remove("clicked");
				region1box.current.children[i].classList.remove("text-[#0D6EFD]");
				region1box.current.children[i].classList.remove("underline");
				region1box.current.children[i].classList.remove("underline-offset-4");
			}
		}

		// region2 effect
		for (let i = 0; i < region2box.current.children.length; i++) {
			if (region1.includes(regionKey)) { // "전체"에 해당하는 경우
				region2box.current.children[0].classList.add("clicked");
				region2box.current.children[0].classList.add("text-[#ffffff]");
				region2box.current.children[0].classList.add("bg-[#0D6EFD]");
			} else if (region2box.current.children[i].innerHTML === region2Name) {
				region2box.current.children[i].classList.add("clicked");
				region2box.current.children[i].classList.add("text-[#ffffff]");
				region2box.current.children[i].classList.add("bg-[#0D6EFD]");
			} else {
				region2box.current.children[i].classList.remove("clicked");
				region2box.current.children[i].classList.remove("text-[#ffffff]");
				region2box.current.children[i].classList.remove("bg-[#0D6EFD]");
			}
		}
	}, [region1Name, region2Name]);

	const [video, setVideo] = useState([]);
	const url = process.env.REACT_APP_BACKEND_URL;
	const endpoint = "/api/youtube/";
	/** call ajax, 지역 영상 불러오기 */
	useEffect(() => {
		let regionN;
		if (region1.includes(regionKey)) {
			regionN = "region1"
		} else {
			regionN = "region2"
		}
		const getVideo = async () => {
			try {
				const res = await axios.get(url + endpoint, {
					params: {
						[regionN]: param
					}
				});
				const _video = await res.data.map((item) => ({
					videoid: item.videoid,
					title: item.title,
					thumbnail: item.thumbnail,
					channelname: item.channelname,
				}));
				setVideo(_video);
			} catch (e) {
				console.error(e.message);
			}
		};
		getVideo();
	}, [param]);


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
	}

	const onClickRegion2 = (e) => {
		if (e.target.innerHTML === "전체") {
			navigate(`/list/${regionValue[region1Name]}`)
		}
		else {
			navigate(`/list/${regionValue[e.target.innerHTML]}`);
		}
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
						? "show transition ease-in-out delay-100 p-4 max-h-max bg-[#120D0B] rounded-lg"
						: "hide transition ease-in-out delay-100 p-4 max-h-max bg-[#120D0B] rounded-lg"
				}
			>
				<div className="flex flex-wrap text-[#525959] w-full px-4 sm:px-6"
					ref={region1box}>
					{region1.map((region, idx) => (
						<button
							key={idx}
							className="hover:text-[#0D6EFD] hover:font-bold hover:underline underline-offset-4 mb-2 mr-8 py-0.5 text-base font-medium text-[#525959]"
							onClick={onClickRegion1}
						>
							{region}
						</button>
					))}
				</div>
				<div className="flex flex-wrap py-2 px-4 rounded-lg bg-[#1A1716] align-middle"
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

			<div className="flex flex-wrap mt-20">
				{video.map((item, idx) => (
					<div className="inline mb-20 mr-4" key={idx}>
						<Link
							to={`/detail/${item.videoid}`}
							state={{
								thumbnail: item.thumbnail.replace(
									"mqdefault.jpg",
									"maxresdefault.jpg"
								),
								channelname: item.channelname,
								title: item.title,
							}}
						>
							<img
								className="snap-start"
								alt="thumbnail"
								src={item.thumbnail}
							/>
							<p className="mt-4 mb-1 text-base font-bold">{item.channelname}</p>
							<p className="text-sm w-80">{item.title}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
