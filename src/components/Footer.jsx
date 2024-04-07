import inst from "../assets/images/insta.svg";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";
import plane from "../assets/images/Paper_Plane.png";
import React from "react";
function Footer() {
  return (
    <footer>
      <section className="mx-[74px]  mb-5 mt-10 tablet:mx-10 tablet:mt-5 medium-desktop:flex medium-desktop:justify-center  medium-desktop:gap-[100px] medium-desktop:mx-auto desktop:gap-[459px] desktop:w-[1580px] desktop:mx-auto ">
        <div className="tablet:flex tablet:gap-5 desktop:gap-[459px]  ">
          <div>
            <h2 className="font-kalnia font-medium text-[28px] leading-[38px]  text-black   medium-desktop:text-[48px]  medium-desktop:leading-[65px] ">
              ExploreEra
            </h2>
            <p className="font-roboto font-normal text-xl leading-[23px] text-black mt-5 tablet:mt-2.5 tablet:max-w-[350px] desktop:max-w-[260px] desktop:text-2xl desktop:leading-[28px] medium-desktop:mt-5 ">
              Travel agency which helps you to plan your perfect holidays
            </p>
            <div className="mt-5 tablet:mt-2.5 medium-desktop:mt-5">
              <h3 className="font-roboto font-normal  text-[28px] leading-[33px]  text-black    ">
                Follow us
              </h3>
              <ul className="flex gap-10 mt-5 tablet:mt-2.5 medium-desktop:mt-5 ">
                <li>
                  <img
                    src={inst}
                    alt="instaggram_svg"
                    className="medium-desktop:w-[50px] medium-desktop:h-[50px] "
                  />
                </li>
                <li>
                  <img
                    src={facebook}
                    alt="facebook_svg"
                    className="medium-desktop:w-[50px] medium-desktop:h-[50px] "
                  />
                </li>
                <li>
                  <img
                    src={linkedin}
                    alt="linkedin_svg"
                    className="medium-desktop:w-[50px] medium-desktop:h-[50px] "
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 tablet:mt-0">
            <h3 className="font-roboto font-normal  text-[28px] leading-[33px] text-black mb-5 tablet:mb-2.5 medium-desktop:text-[32px] medium-desktop:leading-[38px] medium-desktop:mb-5">
              Links
            </h3>
            <ul className=" list-none flex flex-col gap-5 font-roboto font-normal text-xl leading-[23px] text-black tablet:gap-2.5 medium-desktop:text-2xl medium-desktop:leading-[28px] medium-desktop:gap-5">
              <li>Home</li>
              <li>About us</li>
              <li>Blogs</li>
              <li>Our services</li>
              <li>Our offers</li>
            </ul>
          </div>
        </div>
        <div className="tablet:flex tablet:gap-40   medium-desktop:flex-col desktop:gap-5 medium-desktop:max-w-[247px] medium-desktop:gap-0 ">
          <div className="flex flex-col gap-5 font-roboto font-normal text-xl leading-[23px] text-black mb-5 mt-4 tablet:mt-0 tablet:gap-2.5 medium-desktop:text-2xl medium-desktop:leading-[28px] medium-desktop:gap-5">
            <h3 className="font-roboto font-normal  text-[28px] leading-[33px]  text-black medium-desktop:text-[32px] medium-desktop:leading-[38px]">
              Contact us
            </h3>

            <a href="mailto:exploreera@gmail.com">exploreera@gmail.com</a>

            <a href="tel:555111222">555111222</a>
          </div>
          <div>
            <h3 className="font-roboto font-normal  text-[28px] leading-[33px]  text-black mb-5 tablet:mb-2.5 medium-desktop:text-[32px] medium-desktop:leading-[38px] medium-desktop:mb-5">
              Subscribe news
            </h3>
            <div className="flex justify-between w-[53%] px-[13px] py-2.5 border border-[#424244] rounded-[10px] medium-desktop:w-full">
              <input
                type="text"
                placeholder="Email"
                className="w-[30%] font-roboto font-normal text-lg leading-[20.09px] placeholder:text-[#424244] outline-none"
              />
              <img src={plane} alt="paper_plane" />
            </div>
          </div>
        </div>
      </section>
      <p className="text-center font-roboto font-normal text-2xl leading-[28px] text-black  mb-10">
        Copyright 2024
      </p>
    </footer>
  );
}

export default Footer;
