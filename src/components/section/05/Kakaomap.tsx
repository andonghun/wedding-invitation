import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        level={5}
        center={{ lat: 37.51163, lng: 126.994989 }}
        style={{ width: "100%", height: "220px" }}
      >
        <MapMarker position={{ lat: 37.51163, lng: 126.9949893 }} />
      </Map>
    </>
  );
};

export default KakaoMap;
