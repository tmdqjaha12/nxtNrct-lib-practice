import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      {/* 뒤로가기 버튼
      <button type="button" onClick={() => Router.back()}><button></button> */}
      <h1>
        <Image
          // loader={myLoader}
          src="/30254.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </h1>
      <h2>Next JS Test Page</h2>
      <h3>css파일은 styles/globals.css입니다.</h3>
      <Link href="/test">
        <a>
          <h2>0. 기타 테스트 페이지</h2>
        </a>
      </Link>
      <Link href="/infinityScroll">
        <a>
          <h2>1-1. 리액트 무한스크롤</h2>
        </a>
      </Link>
      <Link href="/roulette">
        <a>
          <h2>1-2. 리액트 룰렛</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/react-scroll */}
      <Link href="/reactScroll">
        <a>
          <h2>1-3. 리액트 스크롤</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/@fullpage/react-fullpage */}
      <Link href="/pullpageScroll">
        <a>
          <h2>1-4. 리액트 풀페이지 스크롤</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/rc-slider */}
      <Link href="/reactSlider">
        <a>
          <h2>1-5. 리액트 슬라이더</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/react-slick */}
      <Link href="/reactSlick">
        <a>
          <h2>1-6. 리액트 슬라이드(slick)</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/react-dropdown */}
      <Link href="/reactDropdown">
        <a>
          <h2>1-7. 리액트 드롭다운</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/react-grid-layout */}
      <Link href="/reactGrid">
        <a>
          <h2>1-8. 리액트 그리드</h2>
        </a>
      </Link>
      {/* https://wazacs.tistory.com/38 */}
      <Link href="/reactAnimation">
        <a>
          <h2>1-9. 리액트 애니메이션</h2>
        </a>
      </Link>
      {/* https://velog.io/@eunjin/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B7%B8%EB%9E%98%ED%94%84%EC%B0%A8%ED%8A%B8-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%AA%A8%EC%9D%8C */}
      <Link href="/">
        <a>
          <h2>1-10. 리액트 차트</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/aos    https://michalsnik.github.io/aos/  https://github.com/michalsnik/aos*/}
      <Link href="/reactAos">
        <a>
          <h2>1-11. 리액트 AOS</h2>
        </a>
      </Link>
      <hr />
      <hr />
      <Link href="/socialLogin">
        <a>
          <h2>2. 소셜로그인</h2>
        </a>
      </Link>
      <Link href="/map">
        <a>
          <h2>3. 지도</h2>
        </a>
      </Link>
      <Link href="/payment">
        <a>
          <h2>4. 결제</h2>
        </a>
      </Link>
      <Link href="/email">
        <a>
          <h2>5. 이메일보내기</h2>
        </a>
      </Link>
      <Link href="/sms">
        <a>
          <h2>6. 문자보내기</h2>
        </a>
      </Link>
      <Link href="/alrimtok">
        <a>
          <h2>7. 알림톡보내기</h2>
        </a>
      </Link>
      <hr />
      <hr />
      <Link href="/">
        <a>
          <h2>tech-1. useEffect</h2>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h2>tech-2-Default. useState</h2>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h2>tech-3-D. useRef</h2>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h2>tech-4-D. useMemo</h2>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h2>tech-5-D. useCallback</h2>
        </a>
      </Link>
      <hr />
      <hr />
      <Link href="/">
        <a>
          <h2>tech-1-Custom. ??hook</h2>
        </a>
      </Link>
      <hr />
      <hr />
      {/* https://marshallku.com/web/tips/react%EB%A1%9C-%EB%A1%9C%EB%98%90%EB%B2%88%ED%98%B8-%EC%83%9D%EC%84%B1%EA%B8%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0 */}
      <Link href="/">
        <a>
          <h2>funny-1. ??</h2>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h2>funny-2. ??</h2>
        </a>
      </Link>
      <hr />
      <hr />
      <Link href="/privacy">
        <a>
          <h2>etc. 개인정보처리방침 링크</h2>
        </a>
      </Link>
      <Link href="/terms">
        <a>
          <h2>etc. 애플리케이션 서비스 약관 링크</h2>
        </a>
      </Link>
      {/* https://www.npmjs.com/package/semantic-ui-react */}
      <Link href="/semantic">
        <a>
          <h2>1-7-2. semantic </h2>
        </a>
      </Link>
    </div>
  );
};

export default Home;
