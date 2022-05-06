import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

const KakaoLogin = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log("session => ", session);
    console.log("status => ", status);
  }, [session, status]);
  return (
    <div>
      <div>
        <h1>소셜 로그인</h1>
        <Link href="/">
          <a>
            <h2>뒤로가기</h2>
          </a>
        </Link>
        {!session && <button onClick={() => signIn()}>sign in</button>}

        {session && <button onClick={() => signOut()}>sign out</button>}
      </div>
    </div>
  );
};

export default KakaoLogin;
