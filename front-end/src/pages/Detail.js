import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map.js";

const test = {
  videoid: "video_ID",
  channelname: "일상이 여행",
  title: "부산여행 완전정복!",
  youtime: "2021/3/5",
  views: "53만회",
  places: [
    {
      idx: "1",
      pname: "해동 용궁사",
      px: "35.97664845766847",
      py: "126.99597295767953",
      ambience: "30",
      parking: "70",
      facility: "20",
    },
    {
      idx: "2",
      pname: "스카이 라인 루지",
      px: "42.97664845766834",
      py: "135.9959729576453",
      ambience: "50",
      parking: "10",
      facility: "80",
    },
    {
      idx: "3",
      pname: "수월 경화",
      px: "21.97664845763422",
      py: "204.9959729576263",
      ambience: "70",
      parking: "20",
      facility: "30",
    },
  ],
};
const placeItem = test.places;

export default function Detail(video_id) {
  const [infos, setInfo] = useState([]);

  //   const onClickHandler = (video_id) => {
  //     getData(video_id);
  //     const item = infos;
  //     return (
  //       <>
  //         <div>
  //           <img alt="thumbnail" src={item.thumbnail} />
  //           <div className="innerWrapper">
  //             <p className="text-sm w-80">{item.chnnelname}</p>
  //             <p className="text-sm w-80">{item.title}</p>
  //           </div>
  //         </div>
  //         ;
  //       </>
  //     );
  //   };

  // 영상 세부정보 가져오기
  // useEffect(() => {
  //   const getData = async (video_id) => {
  //     try {
  //       const res = await axios.get(
  //         "http://127.0.0.1:8000/api/youtube/" + video_id,
  //         {
  //           params: {
  //             video_ID: video_id,
  //           },
  //         }
  //       );
  //       const _info = await res.data.map((item) => ({
  //         title: item.title,
  //         channelname: item.channelname,
  //         thumbnail: item.thumbnail,
  //         places: item.places,
  //       }));
  //       setInfo(infos.concat(_info));
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <>
      {/* {test.map((item) => {
        <div>
          <img alt="thumbnail" src={item.thumbnail} />
          <p className="text-sm w-80">{item.channelname}</p>
          <p className="text-sm w-80">{item.title}</p>
        </div>;
        <div className="mx-10 mt-20">
          <p className="mb-5 text-5xl font-bold text-white">넥스팟</p>
          <p className="mb-5 text-5xl font-bold text-white">
            카피 문구 카피문구
          </p>
          <p className="text-base font-medium text-white mb-28">
            넥스팟 카피 문구 카피문구 넥스팟 카피 문구 카피문구를
            <br /> 생각해서 넣어보면 어떠할런지요 삶은 달걀이다 삶은 여행
            <br />
            이다 라이프 이즈 트레블
          </p>
        </div>;
      })} */}
      <div className="text-white">
        {/* <img alt="thumbnail" src={test.thumbnail} /> */}
        <div className="mx-10 mt-20 z-10">
          <p className="mb-5 text-5xl font-bold">{test.channelname}</p>
          <p className="mb-5 text-5md">{test.title}</p>
        </div>
        <div className="mx-10 mt-20 z-10">
          <p className="mb-2 font-medium text-5md">관광코스</p>
          {/* 하드코딩말고 방법이 없을까.. */}
          <button className="mb-5 text-xs">{placeItem[0].pname}</button>
          <button className="mb-5 text-xs">{placeItem[1].pname}</button>
          <button className="mb-5 text-xs">{placeItem[2].pname}</button>
        </div>
        <div className="mx-10 mt-20 z-10">
          {/** props로 onclick이 발생한 place idx를 넘겨준 다음 맵 렌더링 ? */}
          <Map placeItem={placeItem}></Map>
        </div>
        <div className="mx-10 mt-20 z-10 text-ellipsis">
          <p className="mb-2 font-medium text-5md">여행지 정보</p>
          <span className="text-xs">
            2017년9월17일 개장. 미포에서 출발해 송정까지 이어지는 동해남부선
            폐선부지의 중간 쯤에 자리한 청사포 다릿돌전망대는 해수면으로 부터
            2017년9월17일 개장. 미포에서 출발해 송정까지 이어지는 동해남부선
            폐선부지의 중간 쯤에 자리한 청사포 다릿돌전망대는 해수면으로 부터
            미포에서 출발해 송정까지 이어지는 동해남부선 폐선부지의 중간 쯤에
            자리한 청사포 다릿돌전망대는 해수면으로 부터
          </span>
        </div>
        <button
          className="mx-10 mt-2 text-[#808080] text-xs">
          더보기
        </button>
        <div className="mx-10 mt-20 z-10 text-ellipsis">
          <p className="mb-5 font-medium text-5md">기타 정보</p> 
        </div>
      </div>
    </>
  );
}
