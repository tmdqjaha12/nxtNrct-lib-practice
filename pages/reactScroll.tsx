import Link from "next/link";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const SideDiv = styled.div`
  width: 10%;
  position: fixed;
  right: 5rem;
  margin-top: 70px;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const MiddleDiv = styled.div`
  div {
    height: 500px;
  }
`;

const ReactScroll = () => {
  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <div>
        <h1>리액트 스크롤</h1>
      </div>
      <SideDiv>
        <div>
          <ScrollLink to="1" spy={true} smooth={true}>
            <span>Day 1</span>
          </ScrollLink>
          <ScrollLink to="2" spy={true} smooth={true}>
            <span>Day 2</span>
          </ScrollLink>
          <ScrollLink to="3" spy={true} smooth={true}>
            <span>Day 3</span>
          </ScrollLink>
          <ScrollLink to="4" spy={true} smooth={true}>
            <span>Day 4</span>
          </ScrollLink>
        </div>
      </SideDiv>

      <MiddleDiv>
        <div id="1">
          <h2>day 1</h2>
          <p>content</p>
        </div>
        <div id="2">
          <h2>day 2</h2>
          <p>content</p>
        </div>
        <div id="3">
          <h2>day 3</h2>
          <p>content</p>
        </div>
        <div id="4">
          <h2>day 4</h2>
          <p>content</p>
        </div>
      </MiddleDiv>
    </div>
  );
};

export default ReactScroll;
