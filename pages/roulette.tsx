import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const R1 = dynamic(() => import("../components/roulette/r1"), {
  ssr: false,
});
const R2 = dynamic(() => import("../components/roulette/r2"), {
  ssr: false,
});

const Roulette = () => {
  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <h1>리액트 커스텀 룰렛</h1>
      <a href="https://www.npmjs.com/package/react-custom-roulette">npm</a>
      <div>
        룰렛 1
        <R1 />
      </div>
      <div>
        룰렛 2
        <R2 />
      </div>
    </div>
  );
};

export default Roulette;
