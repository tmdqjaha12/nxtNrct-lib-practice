import { useRef, useCallback, useEffect } from "react";

// 스크롤하면 페이드인 하는 애니메이션
const useScrollFadeIn = (direction: any, duration: any, delay: any) => {
  // 해당 컴포넌트 가져오기
  const element = useRef();
  // direction 선택
  const handleDirection = (name: any) => {
    switch (name) {
      case "up":
        return "translate3d(0, 0, 0)";
      case "down":
        return "translate3d(0, 0, 0)";
      case "left":
        return "translate3d(0, 0, 0)";
      case "right":
        return "translate3d(0, 0, 0)";
        derault: return;
    }
  };

  // 설정해둔 컴포넌트를 만날때마다 함수가 재실행되도록 callback하기
  const onScroll = useCallback(
    ([entry]: any) => {
      const { current }: any = element;
      if (entry.isIntersecting) {
        current.style.tansitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.opacity = 1;
        current.style.tranform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  // intersection-observer로 컴포넌트 위치 observe하기
  useEffect(() => {
    let observer: any;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

const Test = () => {
  const { ref: ref1, style: style1 }: any = useScrollFadeIn("up", 1, null);
  const { ref: ref2, style: style2 }: any = useScrollFadeIn("right", 1, null);
  const { ref: ref3, style: style3 }: any = useScrollFadeIn("down", 1, null);
  const { ref: ref4, style: style4 }: any = useScrollFadeIn("left", 1, null);

  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          position: "absolute",
        }}
      >
        1
      </div>
      <div
        ref={ref1}
        style={{
          ...style1,
          backgroundColor: "green",
          top: "100%",
          right: "0",
          bottom: "-100%",
          left: "0",
          position: "absolute",
        }}
      >
        2
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          top: "200%",
          right: "0",
          bottom: "-200%",
          left: "0",
          position: "absolute",
        }}
      >
        <div
          ref={ref2}
          style={{
            ...style2,
            width: "100px",
            height: "100px",
            margin: "auto",
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <div
        ref={ref3}
        style={{
          ...style3,
          backgroundColor: "purple",
          top: "300%",
          right: "0",
          bottom: "-300%",
          left: "0",
          position: "absolute",
        }}
      >
        4
      </div>
      <div
        ref={ref4}
        style={{
          ...style4,
          backgroundColor: "skyblue",
          top: "400%",
          right: "0",
          bottom: "-400%",
          left: "0",
          position: "absolute",
        }}
      >
        5
      </div>
    </div>
  );
};

export default Test;
