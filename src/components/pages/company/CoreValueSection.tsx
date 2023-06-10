"use client";

import React, { useCallback, useRef } from "react";
import { Autoplay, Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

const coreValues: string[] = [
  "Excellence",
  "Integrity",
  "Impact",
  "Innovation",
];

const CoreValueSection = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <section className="bg-[#F7F7F7] py-20  relative">
      {/* these are various blur for the two sides */}
      {/* 1 - mobile left */}
      {/* 2 - deaktop left */}
      {/* 3 - desktop right */}
      <div className="sm:hidden   h-full w-32   bg-gradient-to-r from-transparent to-[#F7F7F7]   z-10  absolute top-0 bottom-0 right-0"></div>
      <div className="hidden sm:block border-red-400 h-full w-1/3 top-0 bottom-0 absolute left-0 bg-gradient-to-l from-transparent to-[#F7F7F7] z-10"></div>
      <div className="hidden sm:block border-blue-400 h-full w-1/3  top-0 bottom-0 absolute right-0 bg-gradient-to-r from-transparent to-[#F7F7F7] z-10"></div>
      <div className="customContainer">
        <div className=" flex sm:justify-center">
          <h1 className="headerText1 text-secondary">Core Values</h1>
        </div>
        <div className="mt-20">
          <Swiper
            onBeforeInit={onBeforeInit}
            spaceBetween={0}
            cssMode={true}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1.5}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 1500,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 0,
                centeredSlides: false,
              },
            }}
            navigation={{
              prevEl: swiperNavPrevRef?.current,
              nextEl: swiperNavNextRef?.current,
            }}
            modules={[Navigation, Autoplay]}
            keyboard={true}
            className="w-screen  sm:w-full  h-20  flex justify-between "
          >
            {coreValues.map((corevalue, _x) => (
              <SwiperSlide key={_x}>
                <div className=" sm:text-center  w-fit h-full  items-center flex text-primary font-bold text-3xl md:text-4xl">
                  {corevalue}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className=" w-full mt-6 flex flex-row gap-16  sm:justify-center">
            <button
              ref={swiperNavPrevRef}
              onClick={() => swiperRef!.current?.slidePrev()}
            >
              <Image
                src="/assets/icons/nav/left.svg"
                alt="nav left"
                height={50}
                width={50}
              />
            </button>

            <button
              ref={swiperNavNextRef}
              onClick={() => swiperRef!.current?.slideNext()}
            >
              <Image
                src="/assets/icons/nav/right.svg"
                alt="nav right"
                height={50}
                width={50}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;
