import Header from "@/components/header";
import Spline from "@splinetool/react-spline";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="w-[70vw] text-[40px] leading-none text-gray-600 px-8 pt-[50px]">
          Explore new vision with
        </div>
        <div className="w-[80vw] text-[80px] leading-none text-black px-8">
          AI. <br />
        </div>
        <div className="h-[40vh] flex justify-start items-start">
          <Spline scene="https://prod.spline.design/iyBwYKFED4ZAYUXK/scene.splinecode" />
        </div>
      </div>
      <Section />
    </div>
  );
}
