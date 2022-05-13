import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SHA256 } from "crypto-js";

declare global {
  interface Window {
    INIStdPay: any;
  }
}

interface PayProps {
  goodname: string;
  buyername: string;
  buyertel: string;
  buyeremail: string;
  price: string;
  mid: string;
  gopaymethod: string;
  mKey: string;
  signature: string;
  oid: string;
  timestamp: string;
  version: string;
  currency: string;
  acceptmethod: string;
  returnUrl: string;
  closeUrl: string;
}

interface KgInicicPCFormProps {
  _goodname: string;
  _buyername: string;
  _buyertel: string;
  _buyeremail: string;
  _price: string;
}

const KginicisPC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<KgInicicPCFormProps>({ mode: "onBlur" });

  // pay에 필요한 데이터 initialize
  const [payProps, setPayProps] = useState<PayProps>({
    goodname: "",
    buyername: "",
    buyertel: "",
    buyeremail: "",
    price: "",
    mid: "INIpayTest",
    gopaymethod: "Card",
    mKey: "3a9503069192f207491d4b19bd743fc249a761ed94246c8c42fed06c3cd15a33",
    signature: "",
    oid: "",
    timestamp: "",
    version: "1.0",
    currency: "WON",
    acceptmethod: "below1000",
    returnUrl: "https://next-test.rs-team.co.kr/api/pay/inicisPC",
    closeUrl: "https://next-test.rs-team.co.kr/inicisclose",
  });

  // 결제 폼 생성 및 결제 버튼 클릭 -> 결제창 실행
  const payKGInicisPc = async () => {
    const form = document.createElement("form");
    form.id = "SendPayForm_id";
    form.name = "";
    form.method = "POST";
    form.style.display = "none";

    const goodname = document.createElement("input");
    goodname.type = "text";
    goodname.name = "goodname";
    goodname.value = `${payProps.goodname}`;
    form.appendChild(goodname);

    const buyername = document.createElement("input");
    buyername.type = "text";
    buyername.name = "buyername";
    buyername.value = `${payProps.buyername}`;
    form.appendChild(buyername);

    const buyertel = document.createElement("input");
    buyertel.type = "text";
    buyertel.name = "buyertel";
    buyertel.value = `${payProps.buyertel}`;
    form.appendChild(buyertel);

    const buyeremail = document.createElement("input");
    buyeremail.type = "text";
    buyeremail.name = "buyeremail";
    buyeremail.value = `${payProps.buyeremail}`;
    form.appendChild(buyeremail);

    const price = document.createElement("input");
    price.type = "text";
    price.name = "price";
    price.value = `${payProps.price}`;
    form.appendChild(price);

    const mid = document.createElement("input");
    mid.type = "hidden";
    mid.name = "mid";
    mid.value = `${payProps.mid}`;
    form.appendChild(mid);

    const gopaymethod = document.createElement("input");
    gopaymethod.type = "hidden";
    gopaymethod.name = "gopaymethod";
    gopaymethod.value = `${payProps.gopaymethod}`;
    form.appendChild(gopaymethod);

    const mKey = document.createElement("input");
    mKey.type = "hidden";
    mKey.name = "mKey";
    mKey.value = `${payProps.mKey}`;
    form.appendChild(mKey);

    const signature = document.createElement("input");
    signature.type = "hidden";
    signature.name = "signature";
    signature.value = `${payProps.signature}`;
    form.appendChild(signature);

    const oid = document.createElement("input");
    oid.type = "hidden";
    oid.name = "oid";
    oid.value = `${payProps.oid}`;
    form.appendChild(oid);

    const timestamp = document.createElement("input");
    timestamp.type = "hidden";
    timestamp.name = "timestamp";
    timestamp.value = `${payProps.timestamp}`;
    form.appendChild(timestamp);

    const version = document.createElement("input");
    version.type = "hidden";
    version.name = "version";
    version.value = `${payProps.version}`;
    form.appendChild(version);

    const currency = document.createElement("input");
    currency.type = "hidden";
    currency.name = "currency";
    currency.value = `${payProps.currency}`;
    form.appendChild(currency);

    const acceptmethod = document.createElement("input");
    acceptmethod.type = "hidden";
    acceptmethod.name = "acceptmethod";
    acceptmethod.value = `${payProps.acceptmethod}`;
    form.appendChild(acceptmethod);

    const returnUrl = document.createElement("input");
    returnUrl.type = "hidden";
    returnUrl.name = "returnUrl";
    returnUrl.value = `${payProps.returnUrl}`;
    form.appendChild(returnUrl);

    const closeUrl = document.createElement("input");
    closeUrl.type = "hidden";
    closeUrl.name = "closeUrl";
    closeUrl.value = `${payProps.closeUrl}`;
    form.appendChild(closeUrl);

    document.body.appendChild(form);
    console.log("form => ", form);
    window.INIStdPay.pay("SendPayForm_id");
  };

  // 더미 form 성공 시
  const onValid = async ({
    _goodname,
    _buyername,
    _buyertel,
    _buyeremail,
    _price,
  }: KgInicicPCFormProps) => {
    // pay에 필요한 나머지 데이터 추가 저장
    const timestamp = new Date().getTime();
    setPayProps({
      ...payProps,
      goodname: _goodname,
      buyername: _buyername,
      buyertel: _buyertel,
      buyeremail: _buyeremail,
      price: _price,
      signature: `${SHA256(
        `oid=INIpayTest_${timestamp}&price=1000&timestamp=${timestamp}`
      )}`,
      oid: `INIpayTest_${timestamp}`,
      timestamp: `${timestamp}`,
    });
  };

  // 더미 form 오류 시
  const onInvalid = () => {};

  // pay에 필요한 나머지 데이터가 정상적으로 추가 된 이후 실행
  useEffect(() => {
    if (
      payProps.goodname !== "" &&
      payProps.buyername !== "" &&
      payProps.buyertel !== "" &&
      payProps.buyeremail !== "" &&
      payProps.price !== "" &&
      payProps.mid !== "" &&
      payProps.gopaymethod !== "" &&
      payProps.mKey !== "" &&
      payProps.signature !== "" &&
      payProps.oid !== "" &&
      payProps.timestamp !== "" &&
      payProps.version !== "" &&
      payProps.currency !== "" &&
      payProps.acceptmethod !== "" &&
      payProps.returnUrl !== "" &&
      payProps.closeUrl !== ""
    ) {
      // 결제창 시작
      payKGInicisPc();
    }
    console.log("payProps => ", payProps);
  }, [payProps]);

  useEffect(() => {
    const script = document.createElement("script");
    script.lang = "javascript";
    script.type = "text/javascript";
    script.src = "https://stdpay.inicis.com/stdjs/INIStdPay.js";
    script.charset = "UTF-8";
    document.body.append(script);
  }, []);

  /** 마크업 시작 */
  return (
    <>
      {/* inicis 필수 헤더 */}
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        {/* <script
          lang="javascript"
          type="text/javascript"
          src="https://stdpay.inicis.com/stdjs/INIStdPay.js"
          charSet="UTF-8"
        /> */}
      </Head>
      {/* inicis 더미 form */}
      <form id="kgpay-pc" onSubmit={handleSubmit(onValid, onInvalid)}>
        <div>
          <input
            {...register("_goodname", {
              required: "제품명을 입력해주세요.",
            })}
            type="text"
            placeholder="제품명"
          />
          {errors._goodname?.message}
        </div>
        <div>
          <input
            {...register("_buyername", {
              required: "구매자명을 입력해주세요.",
            })}
            type="text"
            placeholder="구매자명"
          />
          {errors._buyername?.message}
        </div>
        <div>
          <input
            {...register("_buyertel", {
              required: "휴대폰번호ex)010-1234-5678 를 입력해주세요.",
            })}
            type="text"
            placeholder="휴대폰번호ex)010-1234-5678"
          />
          {errors._buyertel?.message}
        </div>
        <div>
          <input
            {...register("_buyeremail", {
              required: "이메일을 입력해주세요.",
            })}
            type="text"
            placeholder="이메일"
          />
          {errors._buyeremail?.message}
        </div>
        <div>
          <input
            {...register("_price", { required: "가격을 입력해주세요." })}
            type="text"
            placeholder="가격"
          />
          {errors._price?.message}
        </div>
        <button type="submit">결제</button>
      </form>
    </>
  );
};

export default KginicisPC;
