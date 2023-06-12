"use client";

import React, { useCallback, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";

interface IndividualTeamCardProps {
  name: string;
  role: string;
}

const IndividualTeamCard = ({ name, role }: IndividualTeamCardProps) => {
  return (
    <div className="w-full">
      <div className="h-[390px] w-full  bg-[#AFAFAF] rounded-[30px] relative ">
        <Image
          src="/assets/img/team/emmanuel.jpeg"
          alt="pciture team"
          className="border border-primary rounded-[20px] object-cover object-center"
          unoptimized
          fill
        />
      </div>
      <div className="flex flex-col ml-4 my-4">
        <h1 className="text-secondary font-bold text-2xl">{name}</h1>
        <p className="text-primary text-base">{role}</p>
      </div>
    </div>
  );
};

const MeetOutTeamSection = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };
  return (
    <section className="my-20  h-[48rem] sm:h-[80rem] w-full ">
      <div className="flex flex-col h-full sm:hidden">
        <div className="customContainer flex flex-col gap-10 my-10">
          <h1 className="text-secondary headerText1">Meet our team</h1>
          <p className="text-primary paragraphText1">
            Our firm is manned by technology & business professionals who
            deliver best in class financial technology platforms & solutions.
          </p>
        </div>

        <div className="bg-[url('/assets/img/bg/lp-gray2.png')] h-full bg-cover bg-center pt-12 pl-4">
          <Swiper
            onBeforeInit={onBeforeInit}
            spaceBetween={40}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1.3}
            loop={false}
            mousewheel={true}
            autoplay={{
              delay: 1000,
            }}
            navigation={{
              prevEl: swiperNavPrevRef?.current,
              nextEl: swiperNavNextRef?.current,
            }}
            modules={[Navigation, Autoplay]}
            keyboard={true}
            className="w-full  h-full"
          >
            <SwiperSlide>
              <IndividualTeamCard
                name="Emmanuel J. K. Gbordzor"
                role="Director"
              />
            </SwiperSlide>
            <SwiperSlide>
              <IndividualTeamCard
                name="Emmanuel J. K. Gbordzor"
                role="Director"
              />
            </SwiperSlide>
            <SwiperSlide>
              <IndividualTeamCard
                name="Emmanuel J. K. Gbordzor"
                role="Director"
              />
            </SwiperSlide>
            <SwiperSlide>
              <IndividualTeamCard
                name="Emmanuel J. K. Gbordzor"
                role="Director"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className=" w-full  flex flex-row gap-16 mt-2 sm:justify-center  customContainer">
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

      <div className="hidden sm:block bg-[url('/assets/img/bg/lp-gray2.png')] h-full bg-cover bg-top bg-no-repeat">
        <div className="customContainer flex flex-col justify-between pt-20">
          <div className="flex flex-col gap-10">
            <h1 className="text-secondary headerText1">Meet our team</h1>
            <p className="text-primary paragraphText1">
              Our firm is manned by technology & business professionals who{" "}
              <br />
              deliver best in class financial technology platforms & solutions.
            </p>
          </div>

          <div className=" w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-y-20 mt-20 gap-x-20">
            <IndividualTeamCard
              name="1Emmanuel J. K. Gbordzor"
              role="Director"
            />
            <IndividualTeamCard
              name="1Emmanuel J. K. Gbordzor"
              role="Director"
            />
            <IndividualTeamCard
              name="1Emmanuel J. K. Gbordzor"
              role="Director"
            />
            <IndividualTeamCard
              name="1Emmanuel J. K. Gbordzor"
              role="Director"
            />
            <IndividualTeamCard
              name="1Emmanuel J. K. Gbordzor"
              role="Director"
            />
            <IndividualTeamCard
              name="1Emmanuel J. K. Gbordzor"
              role="Director"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOutTeamSection;
