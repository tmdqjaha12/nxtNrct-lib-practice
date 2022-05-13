/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    KAKAO_JS_KEY: process.env.KAKAO_JS_KEY,
    OK_ID: process.env.OK_ID,
    OK_PW: process.env.OK_PW,
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*", // Matches all pages
  //       headers: [
  //         {
  //           key: "X-Frame-Options",
  //           // value: "DENY",
  //           value: "SAMEORIGIN",
  //         },
  //       ],
  //     },
  //   ];
  // },
};
module.exports = nextConfig;
