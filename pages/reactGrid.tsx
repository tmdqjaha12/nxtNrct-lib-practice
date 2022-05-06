import Link from "next/link";
import GridLayout from "react-grid-layout";

const ReactGrid = () => {
  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <div>리액트 그리드</div>
      <div></div>
    </div>
  );
};

export default ReactGrid;
