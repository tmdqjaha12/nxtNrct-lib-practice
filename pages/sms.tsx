import Link from "next/link";
import { useState } from "react";

const Sms = () => {
  const [tel, setTel] = useState<string>("010-4112-7397");
  const [contents, setContents] = useState<string>("기본 내용");
  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <div>
        <h1>OK 문자 전송</h1>
      </div>
      <div>
        <input
          type="tel"
          placeholder="번호 ex)010-1234-5678"
          defaultValue={tel}
          onChange={(e) => {
            setTel(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="내용"
          defaultValue={contents}
          onChange={(e) => {
            setContents(e.currentTarget.value);
          }}
        />
      </div>
      <form
        name="SMSFORM"
        method="post"
        action="http://www.okmunja.co.kr/Remote/RemoteSms.html"
      >
        <input type="hidden" name="remote_id" value={process.env.OK_ID} />
        {/*<!-- 오케이문자 아이디 -->*/}
        <input type="hidden" name="remote_pass" value={process.env.OK_PW} />
        {/*!-- 오케이문자 패스워드 -->*/}
        <input
          type="hidden"
          name="remote_returnurl"
          value="https://next-test.rs-team.co.kr/sms"
        />
        {/* <!-- 발송후 리턴할 주소 형식 : www.test.co.kr/Remote/return.html --> */}
        <input type="hidden" name="remote_num" value="1" />
        {/* <!-- 수신번호 개수 default : 1, 다수 번호,번호--> */}
        <input type="hidden" name="remote_reserve" value="0" />
        {/*<!-- 예약 1 , 일반 0 -->*/}
        {/* <input type="hidden" name="remote_reservetime" value="" /> */}
        {/* <!-- 예약시 예약 시간 년-월-일 시:분 --> */}
        <input type="hidden" name="remote_phone" defaultValue={tel} />
        {/*<!-- 수신번호 다수일때는 쉼표','로 구분 -->*/}
        <input type="hidden" name="remote_name" value="하승범" />
        {/*<!-- 수신번호 다수일때는 이름을 쉼표','로 구분 -->*/}
        <input type="hidden" name="remote_callback" value="07077155789" />
        {/*<!-- 발신번호 숫자만 입력 -->*/}
        {/* <input type="hidden" name="remote_subject" value="장문제목" /> */}
        {/*<!—장문(lms)전송시에만 입력 -->*/}
        <input type="hidden" name="remote_msg" defaultValue={contents} />
        {/* <input type="hidden" name="remote_contents" value="mms.jpg" /> */}
        {/*<!-- 미리 업로드 된 이미지 파일명 -->*/}
        {/* <input type="hidden" name="remote_etc1" value="사용자정의1" /> */}
        {/*<!-- 사용자 정의 변수1 -->*/}
        {/* <input type="hidden" name="remote_etc2" value="사용자정의2" /> */}
        {/*<!-- 사용자 정의 변수2 -->*/}
        <input type="submit" name="submit1" value="전송" />
      </form>
    </div>
  );
};

export default Sms;
