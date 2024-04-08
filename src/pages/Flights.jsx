import dropdown from "../assets/Chevron_Down.svg";
import edit from "../assets/edit.svg";
import calendar from "../assets/calendar.svg";
import flights from "../assets/data/flights.json";
import airline from "../assets/Gairline.png";
import ArrowDown from "../svg/Arrow-down";

function Flights() {
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
          {flights.map((flights) => (
            <div className="bg-white px-[16.5px] py-3 rounded-lg tablet:px-[60px] tablet:py-[30px]">
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
      <section className="px-[10%] font-roboto">
        <ul className="list-none font-roboto font-normal text-2xl leading-[29px] bg-white ">
          <li className="">Cheapest</li>
          <li className="w-[129px] border-y-2 border-orange py-5 my-5">
            Quickest
          </li>
          <li>Best</li>
        </ul>
        <div>
          <div className="font-normal text-2xl leading-[28px]">
            <button className="flex">
              Stops <ArrowDown />
            </button>
            <ul className="  ">
              <li className="flex">
                <div className="w-[30px] h-[30px] border border-black "></div>{" "}
                <span>Direct</span>
              </li>
              <li className="flex">
                <div className="w-[30px] h-[30px] border border-black "></div>{" "}
                <span>One stop</span>
              </li>
              <li className="flex">
                <div className="w-[30px] h-[30px] border border-black "></div>{" "}
                <span>Two stops</span>
              </li>
            </ul>
          </div>

          <div className="font-normal text-2xl leading-[28px]">
            <button className="flex">
              Times
              <ArrowDown />
            </button>
          </div>

          <div className="font-normal text-2xl leading-[28px]">
            <button className="flex">
              Airlines
              <ArrowDown />
            </button>
          </div>

          <div className="font-normal text-2xl leading-[28px]">
            <button className="flex">
              Airports
              <ArrowDown />
            </button>
          </div>

          <div className="font-normal text-2xl leading-[28px]">
            <button className="flex">
              Duration
              <ArrowDown />
            </button>
          </div>

          <div className="font-normal text-2xl leading-[28px]">
            <button className="flex">
              Price
              <ArrowDown />
            </button>

            <div
              x-data="range()"
              x-init="mintrigger(); maxtrigger()"
              className="relative max-w-xl w-full"
            >
              <div>
                <input
                  type="range"
                  step="100"
                  min="0"
                  max="1000"
                  className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                />

                <input
                  type="range"
                  step="100"
                  min="0"
                  max="1000"
                  className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                />

                <div className="relative z-10 h-2">
                  <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

                  <div
                    className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
                    x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"
                  ></div>

                  <div
                    className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
                    x-bind:style="'left: '+minthumb+'%'"
                  ></div>

                  <div
                    className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
                    x-bind:style="'right: '+maxthumb+'%'"
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center py-5">
                <div>
                  <input
                    type="text"
                    maxlength="5"
                    x-on:input="mintrigger"
                    x-model="minprice"
                    className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    maxlength="5"
                    x-on:input="maxtrigger"
                    x-model="maxprice"
                    className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="font-normal text-2xl leading-[28px]">
            <button className="flex">
              Price Calculator
              <ArrowDown />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Flights;
