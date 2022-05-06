import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ReactSlider = () => {
  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <div>
        <h1>리액트 슬라이더</h1>
      </div>
      <div>
        <Slider />
        {/* <Range /> */}
      </div>
    </div>
  );
};

export default ReactSlider;
