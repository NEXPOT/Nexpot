import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const VideoList = ({ regionName }) => {
	const [video, setVideo] = useState([]);

	/** ~로 떠나볼까요? */
	let roRegion = ["서울", "대구", "광주", "제주", "원주", "속초", "대부도", "파주", "청주", "충주", "부여", "전주", "여수", "목포", "경주", "울릉도", "진주", "거제", "남해"]

	let regionTitle;
	if (roRegion.includes(regionName)) {
		regionTitle = "로 떠나볼까요?";
	} else {
		regionTitle = "으로 떠나볼까요?";
	}

	const region = {
		"서울": "seoul", "부산": "busan", "대구": "Daegu", "인천": "Incheon", "광주": "Gwangju", "대전": "Daejeon", "울산": "Ulsan", "세종": "Sejong", "제주": "Jeju",
		"강릉": "Gangneung", "원주": "Wonju", "속초": "Sokcho", "평창": "Pyeongchang", "양양": "Yangyang",
		"수원": "Suwon", "용인": "Yongin", "고양": "Goyang", "가평": "Gapyeong", "양평": "Yangpyeong", "대부도": "Daebudo", "파주": "Paju", "포천": "Pocheon",
		"청주": "cheongju", "충주": "Chungju", "제천": "Jecheon", "단양": "Danyang",
		"천안": "cheonan", "보령": "boryeong", "부여": "buyeo", "태안": "Taean", "당진": "Dangjin",
		"전주": "Jeonju", "군산": "Gunsan", "고창": "Gochang", "부안": "buan",
		"여수": "Yeosu", "해남": "Haenam", "보성": "boseong", "담양": "Damyang", "목포": "Mokpo",
		"포항": "Pohang", "경주": "Gyeongju", "울릉도": "Ulleungdo", "안동": "andong", "문경": "Mungyeong",
		"진주": "Jinju", "통영": "Tongyeong", "거제": "Geoje", "남해": "Namhae"
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get("http://13.209.16.143:3306/api/youtube", {
					params: {
						region2: region[regionName],
					},
				});
				const _video = await res.data.map(item => ({
					videoid: item.videoid,
					title: item.title,
					thumbnail: item.thumbnail,
					channelname: item.channelname,
				}))
				setVideo(video.concat(_video));
			} catch (e) {
				console.error(e.message);
			}
		}
		getData();
	}, [])

	//console.log(video);

	return (
		<>
			<div className="mx-10 mt-8 text-white">
				<p className="mb-5 text-2xl font-bold">{regionName}
					<span className="text-[#c4c4c4]">{regionTitle}
					</span>
				</p>

				<div className='flex overflow-scroll'>

					{video.map((item, idx) =>
						<div className="inline mr-6" key={idx}>
							<Link to={`/detail/${item.videoid}`} state={{
								thumbnail: item.thumbnail.replace('mqdefault.jpg', 'maxresdefault.jpg'),
								channelname: item.channelname,
								region: regionName,
								title: item.title
							}}>
								<img alt="thumbnail" src={item.thumbnail} />
								<p className='my-3 text-base font-bold'>{item.channelname}</p>
								<p className='text-sm w-80'>{item.title}</p>
							</Link>
						</div>

					)}
				</div>

			</div>
		</>
	);
};

export default VideoList;