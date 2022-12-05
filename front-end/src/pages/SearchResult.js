import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

export default function SearchResult() {
  const location = useLocation();

  const [video, setVideo] = useState([]);
  const url = process.env.REACT_APP_BACKEND_URL;
	const endpoint = "/api/youtube/search/";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url + endpoint,
          {
            params: {
              search: location.state.keyword,
            },
          }
        );
        //console.log(res.data);
        const _video = await res.data.map((item) => ({
          channelname: item.channelname,
          region: item.region,
          thumbnail: item.thumbnail,
          title: item.title,
          videoid: item.videoid,
          views: item.views,
          date: item.youtime,
        }));
        setVideo(video.concat(_video));
      } catch (e) {
        console.error(e.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="mx-4 mt-20 text-white xs:mx-10">
        <span className="mb-5 text-4xl font-bold sm:text-5xl">
          ‘{location.state.keyword}’
        </span>
        <span className="font-medium text-[#c4c4c4] text-2xl sm:text-3xl">
          의 검색 결과입니다.
        </span>
        <div className="">
          {video.length ? (
            <div className="flex flex-wrap gap-4">
              {video.map((item, idx) => (
                <div className="justify-start inline mt-12 mb-4 ml-2" key={idx}>
                  <button className="hover:cursor-default mb-2 px-4 py-0.5 border-[#737A7A] border-[1px] rounded-2xl text-sm font-semibold text-[#737A7A]">
                    {item.region.length > 2
                      ? item.region.substr(3, 2)
                      : item.region}
                  </button>

                  <div
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
                        title: item.title,
                      }}
                    >
                      <img alt="thumbnail" src={item.thumbnail} />
                      <p className="my-3 text-base font-bold">
                        {item.channelname}
                      </p>
                      <p className="text-sm w-80">{item.title}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="mt-20 text-xl font-medium text-center text-white sm:text-4xl">
                검색 결과가 없어요.
              </p>
              <p className="mt-3 text-xl font-medium text-center text-white sm:text-4xl">
                다른 키워드로 검색해보세요.🕵🏻
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
