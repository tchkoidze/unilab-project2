import dropdown from "../assets/Chevron_Down.svg";
import edit from "../assets/edit.svg";
import calendar from "../assets/calendar.svg";
import flights from "../assets/data/flights.json";
import airline from "../assets/Gairline.png";
import ArrowDown from "../svg/Arrow-down";
import Arrowup from "../svg/Arrow-up";
import card from "../assets/Credit_Card_01.svg";
import bag from "../assets/Handbag.svg";
import scase from "../assets/Suitcase.svg";
import MultiRangeSlider from "../components/rangeSlider/RangeSlider";
import Slider from "react-slider";
import { useState } from "react";

function Flights() {
  const [stopOPen, setStopOPen] = useState(false);
  const [timesOPen, setTimesOPen] = useState(false);
  const [durationOPen, setDurationOPen] = useState(false);

  return (
    <main className="font-roboto bg-[#F6F6F6]">
      <nav>
        <ul className="list-none flex gap-[11px]">
          <li>Flights</li>
          <li>Stays</li>
          <li>Car rentals</li>
          <li>Cruises</li>
          <li>Attractions</li>
        </ul>
      </nav>
      <div className="flex gap-5 font-roboto font-medium text-base leading-[19px]">
        <div className="flex items-center ">
          <p>One-way</p>
          <img src={dropdown} alt="chevron" />
        </div>
        <div className="flex items-center ">
          <p>1 Adult</p>
          <img src={dropdown} alt="chevron" />
        </div>
        <div className="flex items-center ">
          <p>Economy</p>
          <img src={dropdown} alt="chevron" />
        </div>
      </div>
      <section>
        <form className="px-[10%] flex flex-col gap-3">
          <div className="flex justify-between font-roboto font-normal text-base leading-[19px] border-2 border-orange rounded-xl py-3 px-[22px]">
            <div>
              <label>From</label>
              <input
                type="text"
                placeholder="Tbilisi"
                className="outline-none text-xl"
              />
            </div>

            <img src={edit} alt="edit" />
          </div>
          <div className="flex justify-between font-roboto font-normal text-base leading-[19px] border-2 border-orange rounded-xl py-3 px-[22px]">
            <div>
              <label>to</label>
              <input
                type="text"
                placeholder="Paris"
                className="outline-none text-xl"
              />
            </div>
            <img src={edit} alt="edit" />
          </div>
          <div className="flex justify-between font-roboto font-normal text-base leading-[19px] border-2 border-orange rounded-xl py-3 px-[22px]">
            <div className="flex gap-[15px]">
              <img src={calendar} alt="calendar" />
              <input type="datetime-local" className="outline-none text-xl" />
            </div>
            <img src={edit} alt="edit" />
          </div>
          <button className="w-full font-roboto font-medium text-xl leading-[24px] bg-orange hover:bg-orange-hover  rounded-xl py-5">
            Search
          </button>
        </form>
      </section>
      <section className="px-[10%]">
        <div className="grid gap-6">
          {flights.map((flights, index) => (
            <div
              key={index}
              className="bg-white px-[16.5px] py-3 rounded-lg tablet:px-[60px] tablet:py-[30px]"
            >
              <div className="flex justify-between ">
                <div className="flex flex-col items-center">
                  <img
                    src={airline}
                    alt="georgian_airwayes"
                    className="w-6 h-6"
                  />
                  <p className="font-roboto font-normal text-xs leading-[15px] w-[52px] text-center tablet:w-[160px] ">
                    {flights.comp}
                  </p>
                </div>

                <div>
                  <div className="font-normal text-lg leading-[21px] ">
                    <span className="mr-[47px] tablet:mr-[154px]">
                      Take off
                    </span>{" "}
                    <span>Landing</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-base leading-[19px] tablet:gap-5 ">
                    <span>{flights.takeoff}</span>
                    <div className="w-[80px] h-[2px] bg-[#C85100] tablet:w-[174px]"></div>
                    <span>{flights.landing}</span>
                    <p className="text-[#42424499] opacity-60 font-normal">
                      {flights.duration} houres
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-center ">Price: {flights.price}</p>
                <button className="w-full font-roboto font-medium text-xl leading-[23px] text-black hover:text-white rounded-[10px] py-2.5 bg-lightOr hover:bg-orange-hover">
                  View Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*filter */}
      <section className=" mx-[10%] font-roboto ">
        <ul className="list-none font-roboto font-normal text-2xl leading-[29px] bg-white pl-6 pr-[18px] rounded-xl ">
          <li className="">Cheapest</li>
          <li className="w-[129px] border-y-2 border-orange py-5 my-5">
            Quickest
          </li>
          <li>Best</li>
        </ul>
        <div className="grid grid-cols-1 gap-5 bg-white mt-6 rounded-xl py-5">
          <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px] ">
            <button
              onClick={() => setStopOPen(!stopOPen)}
              className="w-full flex justify-between "
            >
              Stops {stopOPen ? <Arrowup /> : <ArrowDown />}
            </button>
            {stopOPen && (
              <ul className="flex flex-col gap-5 mt-5">
                <li className="flex gap-5">
                  <div className="w-[30px] h-[30px] border border-black "></div>{" "}
                  <span>Direct</span>
                </li>
                <li className="flex gap-5">
                  <div className="w-[30px] h-[30px] border border-black "></div>{" "}
                  <span>One stop</span>
                </li>
                <li className="flex gap-5">
                  <div className="w-[30px] h-[30px] border border-black "></div>{" "}
                  <span>Two stops</span>
                </li>
              </ul>
            )}
          </div>

          <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px] ">
            <button
              onClick={() => setTimesOPen(!timesOPen)}
              className="w-full flex justify-between"
            >
              Times
              {timesOPen ? <Arrowup /> : <ArrowDown />}
            </button>
            {timesOPen && (
              <>
                <div className="mt-6 mb-5">
                  <p className="mb-2.5">Take off-Tbilisi</p>
                  <MultiRangeSlider min={12} max={24} step={1} value={""} />
                </div>
                <div>
                  <p className="mb-2.5">Take off-Paris</p>
                  <MultiRangeSlider min={12} max={24} step={1} value={""} />
                </div>
              </>
            )}
          </div>

          <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px]">
            <button className="w-full flex justify-between">
              Airlines
              <ArrowDown />
            </button>
          </div>

          <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px]">
            <button className="w-full flex justify-between">
              Airports
              <ArrowDown />
            </button>
          </div>

          <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px]">
            <button
              onClick={() => setDurationOPen(!durationOPen)}
              className="w-full flex justify-between"
            >
              Duration
              {durationOPen ? <Arrowup /> : <ArrowDown />}
            </button>
            {durationOPen && (
              <MultiRangeSlider min={0} max={30} step={1} value={"Hours"} />
            )}
          </div>

          <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px]">
            <button className="w-full flex justify-between">
              Price
              <ArrowDown />
            </button>
            <MultiRangeSlider min={200} max={3000} step={50} value={"$"} />
          </div>

          <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px]">
            <button className=" w-full flex justify-between">
              Price Calculator
              <ArrowDown />
            </button>
            <ul className="text-xl leading-[23px]">
              <li>
                <div className="flex">
                  <img src={card} alt="" />
                  <p>Payment method</p>
                </div>
                <button className="w-full border border-black py-2.5 mt-2.5">
                  Choose payment method
                </button>
              </li>
              <li className="my-5">
                <div className="flex">
                  <img src={bag} alt="" />
                  <p>Carry-on bag</p>
                </div>
                <button className="w-full border border-black py-2.5 mt-2.5">
                  Select bags (0)
                </button>
              </li>
              <li>
                <div className="flex">
                  <img src={scase} alt="" />
                  <p>Checked bag</p>
                </div>
                <button className="w-full border border-black py-2.5 mt-2.5">
                  Select bags (0)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Flights;
