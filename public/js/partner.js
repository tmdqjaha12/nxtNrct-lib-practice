document.addEventListener("DOMContentLoaded", function () {
  var bizInnerFrame = function () {
    var wrapper = document.getElementById("bizFrame");

    if (wrapper) {
      wrapper.style.width = "100%";
      wrapper.style.height = "100%";
      wrapper.style.maxWidth = "1200px";
      wrapper.style.margin = "0 auto";
      wrapper.style.boxSizing = "border-box";
    }

    var iframe = document.getElementById("coutamIFrame");
    iframe.height = "100%";

    console.log("data =>", iframe);

    if (!iframe) return;

    function getQueryStringValue(key) {
      return decodeURIComponent(
        window.location.search.replace(
          new RegExp(
            "^(?:.*[&\\?]" +
              encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
              "(?:\\=([^&]*))?)?.*$",
            "i"
          ),
          "$1"
        )
      );
    }

    var data = getQueryStringValue("biz_rev_data");

    console.log("data =>", data);

    if (!data) {
      iFrameResize(
        {
          log: false,
          bodyMargin: 0,
          bodyPadding: 0,
          heightCalculationMethod: "bodyOffset",
        },
        "#coutamIFrame"
      );

      return;
    }

    var decoded = atob(data);

    var parsed = JSON.parse(decoded);

    var pArray = [];

    for (let key in parsed) pArray.push(key + "=" + parsed[key]);

    var params = pArray.join("&");

    iframe.src = "https://www.jeju-the-rentcar.com/realTimeSearch" + params;

    iFrameResize(
      {
        log: false,
        bodyMargin: 0,
        bodyPadding: 0,
        heightCalculationMethod: "bodyOffset",
      },
      "#coutamIFrame"
    );
  };

  bizInnerFrame();
});
