import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";
import Link from "next/link";

type Member = {
  idx: number;
  name: string;
  age: number;
};

const InfinityScroll = () => {
  const [items, setItems] = useState<Member[]>([]);
  const [miniItems, setMiniItems] = useState<Member[]>([]);
  const [num, setNum] = useState(20);
  const [miniNum, setMiniNum] = useState(20);

  useEffect(() => {
    fetchData();
    miniFetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://next.test.altf4.co.kr/api/getMemberList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num: num }),
    });
    const data = await res.json();
    console.log(data);
    setItems(data);
    setNum(num + 20);
  };

  const miniFetchData = async () => {
    const res = await fetch("https://next.test.altf4.co.kr/api/getMemberList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num: miniNum }),
    });
    const data = await res.json();
    console.log(data);
    setMiniItems(data);
    setMiniNum(miniNum + 20);
  };

  return (
    <>
      <h1>인피니티 스크롤</h1>
      <Link href="/">
        <a>
          <h2>뒤로가기</h2>
        </a>
      </Link>
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <InfiniteScroll
          dataLength={miniItems.length}
          next={miniFetchData}
          // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          inverse={true} //
          hasMore={true}
          loader={<h4></h4>}
          scrollableTarget="scrollableDiv"
        >
          {/* {_.map(miniItems, (data, i) => {
            return (
              <div
                key={`member_${i}`}
                style={{ width: "500px", display: "flex" }}
              >
                <div style={{ width: "30%" }}>번호: {data.idx}</div>
                <div style={{ width: "30%" }}>이름: {data.name}</div>
                <div style={{ width: "30%" }}>나이: {data.age}</div>
              </div>
            );
          })} */}
        </InfiniteScroll>
      </div>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        // style={{ height: "500px", overflow: "auto" }}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        // below props only if you need pull down functionality
        // refreshFunction={}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        // }
      >
        {_.map(items, (data, i) => {
          return (
            <div
              key={`member_${i}`}
              style={{ width: "500px", display: "flex" }}
            >
              <div style={{ width: "30%" }}>번호: {data.idx}</div>
              <div style={{ width: "30%" }}>이름: {data.name}</div>
              <div style={{ width: "30%" }}>나이: {data.age}</div>
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default InfinityScroll;
