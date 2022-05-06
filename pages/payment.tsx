import Link from "next/link";
import { useEffect } from "react";
import KginicisPC from "../components/payment/kginicisPC";

const Payment = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>뒤로가기</a>
        </Link>
        <h1>KG이니시스 표준 웹결제</h1>
        <div>
          <KginicisPC />
        </div>
      </div>
    </div>
  );
};

export default Payment;
