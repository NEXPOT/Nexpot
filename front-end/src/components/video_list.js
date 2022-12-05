import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronRight } from "akar-icons";

const VideoList = ({ regionName }) => {
  const [video, setVideo] = useState([]);

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
  if (roRegion.includes(regionName)) {
    regionTitle = "로 떠나볼까요?";
  } else {
    regionTitle = "으로 떠나볼까요?";
  }

  const region = {
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

  const url = process.env.REACT_APP_BACKEND_URL;
	const endpoint = "/api/youtube/";
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url + endpoint, {
          params: {
            region2: region[regionName],
          },
        });
        const _video = await res.data.map((item) => ({
          videoid: item.videoid,
          title: item.title,
          thumbnail: item.thumbnail,
          channelname: item.channelname,
        }));
        setVideo(video.concat(_video));
      } catch (e) {
        console.error(e.message);
      }
    };
    getData();
  }, []);

  //console.log(video);

  /** 가로 스크롤 타겟  */
  let focusTarget = useRef();
  /** 스크롤 화살표 */
  let scrollArrowTail = useRef();
  let scrollArrowHead = useRef();

  const handleScroll = () => {
    let scrollLeft = focusTarget.current.scrollLeft;
    let scrollWidth = focusTarget.current.scrollWidth;
    let clientWidth = focusTarget.current.clientWidth;
    let per = scrollLeft / (scrollWidth - clientWidth);

    scrollArrowTail.current.style.width = `${per * clientWidth}px`;
    scrollArrowTail.current.style.maxWidth = `${clientWidth}px`;
    scrollArrowHead.current.style.display = "block";
    // 스크롤 시 arrow head visible
    if (scrollArrowTail.current.style.width === "0px") {
      scrollArrowHead.current.style.display = "none";
    } else {
      scrollArrowHead.current.style.display = "block";
    }
  };

  return (
    <>
      <div className="mx-4 sm:mx-10 mt-10 sm:mt-16 md:mt-20 text-[#ffffff]">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">
            {regionName}
            <span className="text-[#c4c4c4]">{regionTitle}</span>
          </span>
        </div>
      </div>

      {/* scroll arrow */}
      <div id="arrowContainer" className="flex h-2 mt-2 mb-3 ml-4 sm:mx-10">
        <div
          id="arrowTail"
          ref={scrollArrowTail}
          style={{ width: "0px" }}
          className="h-0.5 bg-white"
        ></div>
        <div
          id="arrowHead"
          ref={scrollArrowHead}
          style={{
            transform: "rotate(45deg)",
            top: "-4px",
            right: "10px",
            width: "10px",
            height: "10px",
            display: "none",
          }}
          className="relative border-t-2 border-r-2 border-t-white border-r-white"
        ></div>
      </div>

      <div className="flex justify-between ml-4 sm:mx-10">
        <div
          ref={focusTarget}
          className="scrollbar snap-x flex w-full overflow-scroll text-[#ffffff]"
          onScroll={handleScroll}
        >
          {video.map((item, idx) => (
            <div
              className="inline mr-4"
              key={idx}
              onClick={() => {
                window.location.reload();
              }}
            >
              <Link
                to={`/detail/${item.videoid}`}
                state={{
                  thumbnail: item.thumbnail.replace(
                    "mqdefault.jpg",
                    "maxresdefault.jpg"
                  ),
                  channelname: item.channelname,
                  region: regionName,
                  title: item.title,
                }}
              >
                <img
                  className="snap-start"
                  alt="thumbnail"
                  src={item.thumbnail}
                />
                <p className="mt-4 mb-1 text-base font-bold">
                  {item.channelname}
                </p>
                <p className="text-sm w-80">{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
        <ChevronRight
          className="mx-2 mt-20 hover:cursor-pointer"
          color="#656565"
          strokeWidth={2}
          size={24}
          onClick={(e) => { 
            let currentScrollValue = focusTarget.current.scrollLeft;
            let currentWidth = focusTarget.current.clientWidth;
            let maxScrollWidth = focusTarget.current.scrollWidth;
            focusTarget.current.scrollTo({
              top: 0,
              left: currentScrollValue + currentWidth,
              behavior: "smooth",
            });
            if (currentScrollValue === maxScrollWidth - currentWidth) {
              focusTarget.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }
          }}
        />
      </div>
    </>
  );
};

export default VideoList;
