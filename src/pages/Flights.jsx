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
import leftarrow from "../assets/arrow-left.svg";
import Slider from "react-slider";
import { useEffect, useState } from "react";

function Flights() {
  const [stopOPen, setStopOPen] = useState(false);
  const [timesOPen, setTimesOPen] = useState(false);
  const [durationOPen, setDurationOPen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [calculatorOPen, setCalculatorOpen] = useState(false);
  const [selectStop, setSelectStop] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showFlight, setShowFlight] = useState(true);

  //const [price, setPrice] = useState({ minPrice: null, maxPrice: null });

  const [durationRange, setDurationRange] = useState({ min: 0, max: 30 });
  const [priceRange, setPriceRange] = useState({ min: 200, max: 3000 });
  const [filteredFlights, setFilteredFlights] = useState([]);

  /*const [filters, setFilters] = useState([
    selectStop,
    { price: { min: null, max: null } },
    { duration: { min: null, max: null } },
  ]);*/

  const handleOptionClick = (option) => {
    setSelectStop((prevOption) => {
      // If the clicked option is already selected, unselect it
      if (prevOption === option) {
        return null;
      } else {
        // Otherwise, select the clicked option
        return option;
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth > 1280;

      if (isLargeScreen) {
        setShowFilter(true);
        setShowFlight(true);
      } else {
        setShowFilter(false); // Reset to default
        setShowFlight(true); // Reset to default
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set state based on current screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to filter flights when filter options change
  useEffect(() => {
    filterFlights();
    console.log(filteredFlights);
    console.log("price is : ", priceRange);
    console.log("duration is : ", durationRange);
  }, [selectStop, durationRange, priceRange]);

  // Filtering function
  const filterFlights = () => {
    let filteredData = [...flights]; // Copy the original data

    // Filter by stops
    if (selectStop) {
      filteredData = filteredData.filter(
        (flight) =>
          flight.stop ===
          (selectStop === "direct" ? 0 : selectStop === "one stop" ? 1 : 2)
      );
    }

    // Filter by duration range
    filteredData = filteredData.filter(
      (flight) =>
        parseInt(flight.duration) >= durationRange.min &&
        parseInt(flight.duration) <= durationRange.max
    );

    // Filter by price range
    filteredData = filteredData.filter(
      (flight) =>
        parseInt(flight.price.replace("$", "")) >= priceRange.min &&
        parseInt(flight.price.replace("$", "")) <= priceRange.max
    );

    setFilteredFlights(filteredData);
  };

  return (
    <main className="font-roboto bg-[#F6F6F6]">
      <nav className="px-[10%]">
        <ul className="list-none flex gap-[11px]">
          <li>Flights</li>
          <li>Stays</li>
          <li>Car rentals</li>
          <li>Cruises</li>
          <li>Attractions</li>
        </ul>
      </nav>
      <div className="flex gap-5 font-roboto font-medium text-base leading-[19px] px-[10%]">
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
        <form className="px-[10%] flex flex-col gap-3 tablet:grid tablet:grid-cols-2  ">
          <div className="flex justify-between font-roboto font-normal text-base leading-[19px] border-2 border-orange rounded-xl py-3 px-[22px] bg-white ">
            <div>
              <label>From</label>
              <input
                type="text"
                placeholder="Tbilisi"
                className="outline-none text-xl ml-2 tablet:w-[60%]"
              />
            </div>

            <img
              src={edit}
              alt="edit"
              className="tablet:w-[20px] tablet:h-[20px] "
            />
          </div>
          <div className="flex justify-between font-roboto font-normal text-base leading-[19px] border-2 border-orange rounded-xl py-3 px-[22px] bg-white">
            <div>
              <label>to</label>
              <input
                type="text"
                placeholder="Paris"
                className="outline-none text-xl ml-2 tablet:w-[60%]"
              />
            </div>
            <img
              src={edit}
              alt="edit"
              className="tablet:w-[20px] tablet:h-[20px] "
            />
          </div>
          <div className="flex justify-between font-roboto font-normal text-base leading-[19px] border-2 border-orange rounded-xl py-3 px-[22px] bg-white">
            <div className="flex gap-[15px] tablet:w-[90%]">
              <img src={calendar} alt="calendar" />
              <input
                type="datetime-local"
                className="outline-none text-xl ml-2 "
              />
            </div>
            <img
              src={edit}
              alt="edit"
              className="tablet:w-[20px] tablet:h-[20px] "
            />
          </div>
          <button className="w-full font-roboto font-medium text-xl leading-[24px] bg-orange hover:bg-orange-hover  rounded-xl py-5">
            Search
          </button>
        </form>
      </section>

      <div className="lg:flex justify-between  lg:px-[10%]">
        {/*filter */}
        {showFilter && (
          <section className=" mx-[10%] font-roboto lg:mx-0">
            <button
              onClick={() => (setShowFilter(false), setShowFlight(true))}
              className="w-full flex justify-center items-center gap-5 font-roboto font-medium text-[28px] leading-[34px] text-white bg-orange hover:bg-orange-hover py-2.5 rounded-xl my-[30px] lg:hidden"
            >
              <img src={leftarrow} alt="arrow" /> filters
            </button>
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
                      <div
                        onClick={() => handleOptionClick("direct")}
                        className={`w-[30px] h-[30px] border rounded border-black ${
                          selectStop === "direct" ? "bg-orange" : ""
                        }`}
                      ></div>{" "}
                      <span>Direct</span>
                    </li>
                    <li className="flex gap-5">
                      <div
                        onClick={() => handleOptionClick("one stop")}
                        className={`w-[30px] h-[30px] border rounded border-black ${
                          selectStop === "one stop" ? "bg-orange" : ""
                        }`}
                      ></div>{" "}
                      <span>One stop</span>
                    </li>
                    <li className="flex gap-5">
                      <div
                        onClick={() => handleOptionClick("two stop")}
                        className={`w-[30px] h-[30px] border rounded border-black ${
                          selectStop === "two stop" ? "bg-orange" : ""
                        }`}
                      ></div>{" "}
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
                  className="w-full flex justify-between mb-5"
                >
                  Duration
                  {durationOPen ? <Arrowup /> : <ArrowDown />}
                </button>
                {durationOPen && (
                  <MultiRangeSlider
                    min={0}
                    max={30}
                    step={1}
                    value={"Hours"}
                    //setValue={setFilters}
                    onChange={(min, max) => setDurationRange({ min, max })}
                  />
                )}
              </div>

              <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px]">
                <button
                  onClick={() => setPriceOpen(!priceOpen)}
                  className="w-full flex justify-between mb-5"
                >
                  Price
                  {priceOpen ? <Arrowup /> : <ArrowDown />}
                </button>
                {priceOpen && (
                  <MultiRangeSlider
                    min={200}
                    max={3000}
                    step={50}
                    value={"$"}
                    //setValue={setPrice}
                    onChange={(min, max) => setDurationRange({ min, max })}
                  />
                )}
              </div>

              <div className="font-normal text-2xl leading-[28px] pl-6 pr-[18px]">
                <button
                  onClick={() => setCalculatorOpen(!calculatorOPen)}
                  className=" w-full flex justify-between"
                >
                  Price Calculator
                  {calculatorOPen ? <Arrowup /> : <ArrowDown />}
                </button>
                {calculatorOPen && (
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
                )}
              </div>
            </div>
          </section>
        )}

        {showFlight && (
          <section className="px-[10%] lg:px-0">
            <button
              onClick={() => (setShowFilter(true), setShowFlight(false))}
              className="w-full font-roboto font-medium text-[28px] leading-[34px] text-white bg-orange hover:bg-orange-hover py-2.5 rounded-xl my-[30px] lg:hidden "
            >
              filters
            </button>
            <div className="grid gap-6">
              {filteredFlights.map((flights, index) => (
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
        )}
      </div>
    </main>
  );
}

export default Flights;
