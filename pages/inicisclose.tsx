import Head from "next/head";
import { useEffect } from "react";

const Inicisclose = () => {
  useEffect(() => {
    window.parent.document.location.reload();
  }, []);
  return (
    <>
      <Head>
        <script
          lang="javascript"
          type="text/javascript"
          src="https://stgstdpay.inicis.com/stdjs/INIStdPay_close.js"
          charSet="UTF-8"
        ></script>
      </Head>
    </>
  );
};

export default Inicisclose;
