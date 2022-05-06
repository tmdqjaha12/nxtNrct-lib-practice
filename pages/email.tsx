import { Editor } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import Link from "next/link";

const ToastUIEditor = dynamic(
  () => import("../components/Editor/ToastUIEditor"),
  {
    ssr: false,
  }
);

import { LegacyRef, useRef } from "react";

const Email = () => {
  const editorRedf: any = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const titleRef = useRef<any>(null);
  const contentsRef = useRef<any>(null);

  const onClickSend = async () => {
    const email = emailRef.current.value;
    const title = titleRef.current.value;
    const contents = contentsRef.current.value;
    const editor = editorRedf.current.editorInst.getMarkdown();

    console.log("email => ", email);
    console.log("title => ", title);
    console.log("contents => ", contents);
    console.log("editor => ", editor);

    const res = await fetch("https://next-test.rs-team.co.kr/api/mail/gmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        title: title,
        contents: contents,
        html: editor,
      }),
    });
    const data = await res.json();

    if (data) {
      alert("메일이 발송되었습니다.");
    } else {
      alert("메일 발송이 실패하였습니다.");
    }
  };

  const onFocusEditor = () => {
    console.log("editor!");
  };

  return (
    <>
      <div>
        <Link href="/">
          <a>뒤로가기</a>
        </Link>
        <h1>ses 보내기</h1>
        <form>
          <div style={{ margin: "20px" }}>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="받을사람이메일"
            />
          </div>
          <div style={{ margin: "20px" }}>
            <input ref={titleRef} name="title" type="text" placeholder="제목" />
          </div>
          <div style={{ margin: "20px" }}>
            <textarea
              ref={contentsRef}
              name="contents"
              cols={30}
              rows={10}
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div style={{ margin: "20px" }}>
            <ToastUIEditor
              editorRef={editorRedf}
              onFocusEditor={onFocusEditor}
            />
          </div>
        </form>
        <button type="button" onClick={onClickSend}>
          send
        </button>
      </div>
    </>
  );
};

export default Email;
