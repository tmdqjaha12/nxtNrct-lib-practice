import KakaoMap from "../components/map/kakaomap";

const Map = () => {
  return (
    <div>
      <div>
        <h1>카카오맵</h1>
        <div style={{ width: "500px" }}>
          <KakaoMap
            latitude={36.329039915141294}
            longitude={127.40503797838616}
          />
        </div>
      </div>
      <div>
        <h1>네이버맵</h1>
        <div>네이버맵은 네이버 클라우드 플랫폼 내에서만 api를 지원함.</div>
      </div>
      <div>
        <h1>구글맵</h1>
        <div>유료입니다.</div>
      </div>
    </div>
  );
};
export default Map;
