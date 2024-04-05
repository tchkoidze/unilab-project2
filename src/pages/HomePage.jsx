import h from "../assets/images/mainImg.png";
import g from "../assets/images/mobile/image1.png";

function Home() {
  return (
    <main>
      <div className="w-full min-h-[100%]   home-hero-mobile"></div>
      <div className="relative  ">
        <img src={h} alt="" />
        <div className="flex flex-col items-center absolute bottom-14 left-[30%] ">
          <h3 className="font-roboto font-medium text-lg leading-[18.75px] tablet:text-2xl tablet:leading-[28.13px] desktop:text-[40px] desktop:leading-[47px]">
            Visit Mountains In
          </h3>
          <h2 className="font-roboto font-semibold text-2xl leading-[28.13px] tracking-[3.4px] tablet:text-3xl tablet:leading-[35px]  desktop:text-[64px] desktop:leading-[75px] desktop:mt-2.5">
            ITALY
          </h2>
          <button className="font-roboto font-medium text-lg leading-[19px] bg-[#FF6700] py-2 px-5 rounded-[10px] mt-3 tablet:text-xl tablet:leading-[23px] tablet:px-[30px] tablet:py-[10px] desktop:py-5 desktop:px-10 desktop:mt-2.5 desktop:text-2xl desktop:leading-[28px]  ">
            See offer
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
//<div className="h-[300px] bg-[url('../mainImg.png')] bg-no-repeat bg-[length:100%_auto]"></div>
