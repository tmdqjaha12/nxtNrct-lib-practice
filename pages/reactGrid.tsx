import Link from "next/link";
import GridLayout from "react-grid-layout";

const ReactGrid = () => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <div>
        리액트 그리드 <br /> https://www.npmjs.com/package/react-grid-layout
      </div>
      <div>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
          style={{ backgroundColor: "skyblue" }}
        >
          <div style={{ border: "1px solid black" }} key="a">
            a
          </div>
          <div style={{ border: "1px solid black" }} key="b">
            b
          </div>
          <div style={{ border: "1px solid black" }} key="c">
            c
          </div>
        </GridLayout>
      </div>
      <hr />
    </div>
  );
};

export default ReactGrid;
