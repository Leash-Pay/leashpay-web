"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/customUI";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onFormSubmitHandler = async (e: React.FormEvent) => {
    console.log("invoked me");
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/)) {
      setError("Invalid email");
      setIsLoading(false);
      return;
    }
    if (!email || email === "") return;

    console.log("getting data");

    try {
      const formData = new FormData();
      formData.set("email", email);
      formData.set("name", email);
      const response = await fetch("https://localhost:8096/api/v1/join", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.status === "success") {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setIsLoading(false);
    }
  };
  console.log(email);

  return (
    <div className="w-full h-full container mx-auto px-5 md:px-10  max-w-7xl flex flex-col md:flex-row   gap-16  ">
      <div className="w-full  flex flex-col gap-10     justify-center  text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-5xl text-primary leading-[3rem] md:leading-[3.5rem] max-w-md ">
          We’re excited for you to transact with us.
        </h1>
        <p className="text-primary font-regular text-base px-4 md:px-0">
          Our platform will be available soon.
          <br /> Kindly join the Waitlist to be part of the first to try it out.
          <br />
          Thank you.
        </p>
        <div>
          {/* mobile */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            <div className="w-full flex flex-col items-center gap-0.5">
              <input
                type="email"
                name=""
                value={email}
                id=""
                placeholder="Enter your email address"
                className=" border border-primary rounded-[20px] h-[2.4rem] px-4 text-primary text-sm placeholder:text-primary placeholder:text-xs  flex items-center justify-center w-2/3 md:w-1/2"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsLoading(false);
                  setError(null);
                }}
              />
              {
                <div className=" h-6 w-2/3 flex items-start pl-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              }
            </div>
            <PrimaryButton
              text="join waitlist"
              onClickHandler={onFormSubmitHandler}
              isLoading={isLoading}
            />
          </div>
          {/* desktop */}
          <form
            className=" hidden md:block     w-full max-w-md border"
            onSubmit={onFormSubmitHandler}
          >
            <div className="w-full h-[2.5rem] relative">
              <input
                type="email"
                name=""
                value={email}
                id=""
                placeholder="Enter your email address"
                className="absolute border border-primary rounded-[22px] h-full  px-4 text-primary text-sm placeholder:text-primary placeholder:text-xs  flex items-center justify-center w-full"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsLoading(false);
                  setError(null);
                }}
              />
              <div className="absolute  right-0 top-0 h-full flex items-center">
                <button
                  className="px-10  border-primary h-full rounded-[22px] bg-primary text-white hover:bg-secondary transition-all  transform hover:scale-x-105  uppercase  font-extralight text-xs flex items-center"
                  onClick={onFormSubmitHandler}
                  type={"submit"}
                >
                  Join waitlist
                  {isLoading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 ml-2  text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className=" h-6 w-2/3 flex items-start pl-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full relative h-[20rem] md:h-[30rem] ">
        <Image
          src="/assets/img/easy-wireless-yechnology-payment.jpg"
          alt={"lady waiting to be listed"}
          //   width={6000}
          //   height={4000}
          className="rounded-[50px] object-cover h-full absolute "
          fill
        />
      </div>
    </div>
  );
};

export default Waitlist;
