/**
 * react slick디자인 커스터마이징이 필요한 경우 node_modules에 있는 아래 파일을 복사 하여 public으로 옮겨서 import 한 후 입맛에 맞게 커스터 마이징을 진행하면 된다.
 * error가 나는 경우 css 파일 내 정적으로 가져오는 파일 문제이다.
 */

import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";

// import "slick-carousel";

const ReactSlick = () => {
  const [single, setSingle] = useState({
    dots: true, // 지정 콘텐츠 이동 버튼
    infinite: true, // 끝으로 갔을 때 첫 번째로 제자리
    speed: 500, // 콘텐츠 넘기는 속도 ms단위 (1000ms = 1초)
    slidesToShow: 1, // 한 화면이 보이는 콘텐츠 개수
    slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 개수
    // initialSlide: 0, // 초기 위치
  });
  const [multi, setMulti] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  const [resizable, setResizable] = useState({
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    },
    state: {
      display: true,
      width: 600,
    },
  });
  const [center, setCenter] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  });
  const [fade, setFade] = useState({
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  return (
    <>
      <div style={{ height: "10000px" }}>
        <div>
          <h1>리액트 slick</h1>
          <Link href="/">
            <a>뒤로가기</a>
          </Link>
          <br />
          <Link href="https://react-slick.neostack.com/docs/example/simple-slider/">
            <a target="_blank">공식페이지</a>
          </Link>
          <div>
            npm install react-slick --save @types/react-slick npm install
            <br />
            slick-carousel --save
            <br />
            참고 블로그: https://sirong.tistory.com/38
          </div>
        </div>
        <div>
          {/* Single Item */}
          <div style={{ backgroundColor: "#efefef" }}>
            <h2> Single Item</h2>
            <Slider {...single}>
              <div>
                <h3 style={{ background: "green" }}>1</h3>
              </div>
              <div>
                <h3 style={{ background: "red" }}>2</h3>
              </div>
              <div>
                <h3 style={{ background: "blue" }}>3</h3>
              </div>
              <div>
                <h3 style={{ background: "pink" }}>4</h3>
              </div>
              <div>
                <h3 style={{ background: "yellow" }}>5</h3>
              </div>
              <div>
                <h3 style={{ background: "gray" }}>6</h3>
              </div>
            </Slider>
          </div>

          {/* Multiple items */}
          <div style={{ backgroundColor: "#efefef" }}>
            <h2> Multiple items </h2>
            <Slider {...multi}>
              <div>
                <h3 style={{ background: "green" }}>1</h3>
              </div>
              <div>
                <h3 style={{ background: "red" }}>2</h3>
              </div>
              <div>
                <h3 style={{ background: "blue" }}>3</h3>
              </div>
              <div>
                <h3 style={{ background: "pink" }}>4</h3>
              </div>
              <div>
                <h3 style={{ background: "yellow" }}>5</h3>
              </div>
              <div>
                <h3 style={{ background: "gray" }}>6</h3>
              </div>
              <div>
                <h3 style={{ background: "black" }}>7</h3>
              </div>
              <div>
                <h3 style={{ background: "purple" }}>8</h3>
              </div>
              <div>
                <h3 style={{ background: "Indigo" }}>9</h3>
              </div>
            </Slider>
          </div>

          {/* Resizable Collapsible */}
          <div style={{ backgroundColor: "#efefef" }}>
            <h2> Resizable Collapsible </h2>
            <button
              className="button"
              onClick={() =>
                setResizable({
                  ...resizable,
                  state: {
                    ...resizable.state,
                    width: resizable.state.width + 100,
                  },
                })
              }
            >
              {" "}
              increase{" "}
            </button>
            <button
              className="button"
              onClick={() =>
                setResizable({
                  ...resizable,
                  state: {
                    ...resizable.state,
                    width: resizable.state.width - 100,
                  },
                })
              }
            >
              {" "}
              decrease{" "}
            </button>
            <button
              className="button"
              onClick={() =>
                setResizable({
                  ...resizable,
                  state: {
                    ...resizable.state,
                    display: !resizable.state.display,
                  },
                })
              }
            >
              {" "}
              toggle{" "}
            </button>
            <div
              style={{
                width: resizable.state.width + "px",
                display: resizable.state.display ? "block" : "none",
              }}
            >
              <Slider {...resizable.settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </div>

          {/* Center Mode */}
          <div style={{ backgroundColor: "#efefef" }}>
            <h2>Center Mode</h2>
            <Slider {...center}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>

          {/* Fade */}
          <div style={{ backgroundColor: "#efefef" }}>
            <h2>Fade</h2>
            <Slider {...fade}>
              <div>
                <img src={"/30254.png"} />
              </div>
              <div>
                <img src={"/30254.png"} />
              </div>
              <div>
                <img src={"/30254.png"} />
              </div>
              <div>
                <img src={"/30254.png"} />
              </div>
            </Slider>
          </div>

          {/* Variable width */}

          {/* Adaptive height */}

          {/* Auto Play */}

          {/* Pause On Hover */}

          {/* Auto Play & Pause with buttons */}

          {/* Slider Syncing (AsNavFor) */}

          {/* Swipe To Slide */}

          {/* Custom Paging */}

          {/* Vertical Mode */}

          {/* FocusOnSelect */}

          {/* Right to Left */}

          {/* Slick Go To */}

          {/* Dynamic slides */}

          {/* beforeChange and afterChange hooks */}

          {/* Vertical Mode with Swipe To Slide */}

          {/* Previous and Next methods */}

          {/* Custom Slides */}

          {/* Custom Arrows */}

          {/* Append Dots */}
        </div>
      </div>
    </>
  );
};

export default ReactSlick;
