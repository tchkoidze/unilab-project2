import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import h from "../../assets/images/mobile/image2.png";

import "swiper/css";
import "swiper/css/bundle";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import data from "../../assets/data/popularTours.json";

import "./popularToures.css";

function PopularToures() {
  return (
    <>
      <Swiper slidesPerView={2} spaceBetween={0}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="flex flex-col gap-2 font-roboto font-medium">
              <img
                width={"340px"}
                height={"425.53px"}
                src={item.img}
                alt={item.destination}
              />
              <h3 className=" text-xl leading-[23px]">{item.destination}</h3>
              <p className=" text-lg leading-[22px]">{item.packet}</p>
              <p className=" text-lg leading-[21px]">{item.price}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="com"></div>
    </>
  );
}

export default PopularToures;
