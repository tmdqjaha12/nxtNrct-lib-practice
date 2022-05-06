import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

const Test = () => {
  return (
    <>
      <Head>
        {/* <script type="text/javascript" src="/js/partner.js" /> */}
      </Head>
      <div>
        <Link href="/">
          <a>뒤로가기</a>
        </Link>
        <div>
          <h1>기타 테스트 페이지 start</h1>
        </div>
        <div>
          <div
            id="bizFrame"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >
            <iframe
              // src="https://next-test.rs-team.co.kr/infinityScroll"
              // src="https://www.jeju-the-rentcar.com/realTimeSearch"
              src="https://www.jeju-the-rentcar.com/realTimeSearch"
              frameBorder="0"
              width="100%"
              name="PRODUCT"
              id="coutamIFrame"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowFullScreen
            ></iframe>
            <iframe
              // src="https://next-test.rs-team.co.kr/infinityScroll"
              // src="https://www.jeju-the-rentcar.com/realTimeSearch"
              src="https://mtadm.rs-team.co.kr/admin/etc/bizpartner"
              frameBorder="0"
              width="100%"
              name="PRODUCT"
              id="coutamIFrame"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowFullScreen
            ></iframe>
            <iframe
              // src="https://next-test.rs-team.co.kr/infinityScroll"
              // src="https://www.jeju-the-rentcar.com/realTimeSearch"
              src="https://mtjeju.rs-team.co.kr/realTimeSearch?embeded=U2FsdGVkX1+MenlxdHgMZz0mPxCoqb8OR15ucgQLhF9GHG82O9wiZ7omUFbb2YS5fDtBDax+0sIt5gVcsKoKSQ=="
              // src="https://mtjeju.rs-team.co.kr/realTimeSearch"
              frameBorder="0"
              height="1500px"
              width="100%"
              name="PRODUCT"
              id="coutamIFrame"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowFullScreen
            ></iframe>
            <iframe
              // src="https://next-test.rs-team.co.kr/infinityScroll"
              // src="https://www.jeju-the-rentcar.com/realTimeSearch"
              src="https://www.youtube.com/watch?v=7wtfhZwyrcc&list=RDEb9KHFx5p34&index=2"
              frameBorder="0"
              width="100%"
              name="PRODUCT"
              id="coutamIFrame"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowFullScreen
            ></iframe>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.min.js"></script>
          <div>
            <h1>테스트 유튜브</h1>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Eb9KHFx5p34"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h1>기타테스트</h1>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="300"
              height="200"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
