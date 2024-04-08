import h from "../assets/images/mainImg.png";
//import g from "/public/serviceImages/plane.png";
import services from "../assets/data/serviceData.json";
import PopularToures from "../components/toures/Populartoures";
import Blogs from "../components/Blog";

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
      <section>
        <div className="px-[10%] mb-3 tablet:px-[5%] tablet:mb-[43px] ">
          <h3 className="font-roboto font-medium text-[22px] leading-[26px] mb-2 tablet:text-[32px] tablet:leading-[38px] tablet:mb-5">
            Discover Our Services
          </h3>
          <p className="font-roboto font-normal text-sm leading-[16px] tablet:text-xl tablet:leading-[23px]  ">
            ExploreEra provides a one-stop solution for individuals seeking
            well-planned journeys. These services include expert advice on
            destination selection, flight and accommodation bookings, and
            customized itineraries to individual preferences.
          </p>
        </div>
        <div className="grid  grid-cols-1 justify-items-center gap-6 tablet:grid-cols-2 tablet:gap-5 tablet:px-[5%]  desktop:grid-cols-4 desktop:w-[1580px]">
          {services.map((data, index) => (
            <article key={index}>
              <img
                src={data.img}
                alt=""
                className="w-[340px] tablet:w-[350px] tablet:h-[248px] medium-desktop:w-[380px]"
              />
              <h3 className="font-roboto font-medium text-xl leading-[23px] my-2">
                {data.book}
              </h3>
              <p className="w-[340px] font-roboto font-normal text-base leading-[19px]">
                {data.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-[10%] tablet:px-[5%]">
        <h3 className="font-roboto font-medium text-[22px] leading-[26px] mb-[15px] ">
          Watch Our Memorable Trips
        </h3>
        <iframe
          className="w-[100%] h-[183px] rounded-[20px] tablet:h-[320px] medium-desktop:h-[724px]"
          src="https://www.youtube.com/embed/o_kgdCGisso"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section>
        <h3 className="font-roboto font-medium text-[22px] leading-[26px] mb-[15px] px-[10%] tablet:px-[5%]">
          Popular Tour Offers
        </h3>
        <PopularToures />
      </section>
      <section>
        <h3 className="font-roboto font-medium text-[22px] leading-[26px] mb-[15px] pl-[10%] tablet:pl-[5%]">
          Blogs
        </h3>

        <Blogs />
      </section>
      <section className="px-[10%] py-4 bg-[#E0E0E0] font-roboto font-normal text-xl leading-[23px] tablet:px-[5%] ">
        <form className="grid grid-cols-1  gap-3 tablet:grid-cols-2  ">
          <select
            name="location"
            id="location"
            className="outline-none rounded-lg py-2 px-5"
          >
            <option value="">Your starting location</option>
            <option value="">Rome, Italy</option>
            <option value="">Luxor City, Egypt</option>
            <option value="">Paris, France</option>
            <option value="">Barcelona, Spain</option>
            <option value="">Tsavo, Kenya</option>
            <option value="">Prague, Chequia</option>
            <option value="">Shanghai, China</option>
            <option value="">Hanauma, Hawaii</option>

            <option value="">Your starting location</option>
            <option value="">Rome, Italy</option>
            <option value="">Luxor City, Egypt</option>
            <option value="">Paris, France</option>
            <option value="">Barcelona, Spain</option>
            <option value="">Tsavo, Kenya</option>
            <option value="">Prague, Chequia</option>
            <option value="">Shanghai, China</option>
            <option value="">Hanauma, Hawaii</option>
          </select>
          <select
            name="date"
            id="date"
            className="outline-none rounded-lg py-2 px-5 text-xl leading-[23px]"
          >
            <option value="">Choose a tour offer</option>
          </select>
          <select
            name="date"
            id="date"
            className="outline-none rounded-lg py-2 px-5 text-xl leading-[23px]"
          >
            <option value="">Choose a tour offer</option>
          </select>
          <select
            name="person"
            id="person"
            className="outline-none rounded-lg py-2 px-5 text-xl leading-[23px]"
          >
            <option value="">Persons</option>
          </select>
        </form>
        <button className="w-[100%] bg-orange text-white font-roboto font-semibold text-[22px] leading-[26px] py-[15px] rounded-lg mt-3">
          Book Now
        </button>
      </section>
    </main>
  );
}

export default Home;
//<div className="h-[300px] bg-[url('../mainImg.png')] bg-no-repeat bg-[length:100%_auto]"></div>
