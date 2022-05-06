import Link from "next/link";
import ReactFullpage from "@fullpage/react-fullpage"; // will return static version on server and "live" version on client

const PullpageScroll = () => {
  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <div>
        <h1>리액트 풀페이지 스크롤</h1>
      </div>
      <div>
        <ReactFullpage
          //fullpage options
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000} /* Options here */
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
                <div className="section" style={{ backgroundColor: "green" }}>
                  <p>Section 2</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
                <div className="section" style={{ backgroundColor: "black" }}>
                  <p>Section 3</p>
                </div>
                <div className="section" style={{ backgroundColor: "blue" }}>
                  <p>Section 4</p>
                </div>
                <div className="section" style={{ backgroundColor: "pink" }}>
                  <p>Section 5</p>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </div>
  );
};

export default PullpageScroll;
