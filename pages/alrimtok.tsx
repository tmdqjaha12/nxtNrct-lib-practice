import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

const Alrimtok = () => {
  useEffect(() => {
    async function runGetMemberInfo() {
      try {
        const { data } = await axios.get(
          "https://api.solapi.com/users/v1/member",
          {
            headers: {
              Authorization:
                "HMAC-SHA256 apiKey=NCSHTEKPFXW3BEAQ, date=2022-04-17 01:08:15, salt=c5e48ed437ea9b716084e1e2647ac85e761ae88f311816356964b796024a789d, signature=7c53e5ed65422a9e9d6f378ad9fb51aaf8a5e51a5c13d034601626253618b123",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log("data => ", data);
      } catch (e) {
        console.log("e=> ", e);
      }
    }
    runGetMemberInfo();
  }, []);
  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <h1>카카오 알림톡</h1>
      <div>카카오 알림톡은 비즈니스 계정을 등록해야 함.</div>
      <p>(솔라피)</p>
    </div>
  );
};

export default Alrimtok;
