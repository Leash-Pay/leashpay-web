import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import React from "react";

const HorizontalRule = () => {
  return <hr className="border-primary my-10 -mx-2 lg:mx-0" />;
};

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10 text-sm">
        <div className="container mx-auto px-8  max-w-7xl text-[#787878] leading-relaxed">
          <h1 className="text-primary font-bold text-4xl md:text-6xl lg:text-7xl uppercase">
            Privacy Policy
          </h1>
          <HorizontalRule />
          <div className="flex justify-between divide-x divide-transparent lg:divide-primary gap-10 -mt-10">
            <div className="h-full w-[25%] pt-10 hidden lg:flex">
              <Link href="/terms">
                <button className="px-12 uppercase py-3 bg-primary  text-lg font-light rounded-[35px] relative text-white hover:border-primary transition-all  transform hover:scale-105">
                  Terms & Conditions
                  <img
                    src="/assets/icons/nav/arrow-lefttop.svg"
                    alt="nav right"
                    className="absolute  top-1.5 right-4"
                  />
                </button>
              </Link>
            </div>

            <div className="h-full w-full lg:w-[75%] ">
              <div className="sectionDivWrapper mt-10">
                <h1 className="sectionHeader">Information we collect</h1>
                <div>
                  We collect varying types of data from Guest and Registered
                  Users: The personal information collected by the App/Website
                  primarily, may consist of Contact Details (i.e. Email Address,
                  Contact Number), Personal Details (i.e. User Name), Billing
                  Details (i.e. Physical Billing address, Preferred Payment
                  Method, Transaction Details), User Location (Primarily for
                  content display filtering, and accurate association of users
                  in multi-branch scenarios). The information we collect is to
                  help deliver the best experience in your interaction with the
                  various functions within the App or Website.
                  <br /> <br />
                  Forms within the App/Website are used to collect most of the
                  information described above. We receive and store the
                  information you feed into the mobile or website application
                  securely, and in some use-cases, rather than the use of forms,
                  we also depend on other approaches like emails, telephone (if
                  applicable) or other communications with our customer service
                  team. To make the best use of the rich insights in the
                  feedback and support requests, please note that all such
                  communication and related engagement trails may be recorded.
                </div>
              </div>
              <HorizontalRule />

              <div className="sectionDivWrapper mt-10">
                <h1 className="sectionHeader">
                  How We Use the Information We Collect
                </h1>
                <div>
                  Information collected will be used to inform accesses granted
                  to the services and functions you use within the App or
                  Website, and to manage your account/profile. We will use your
                  information to also facilitate and improve our communication
                  with you, provide user support, as well as expose updates to
                  you for your consideration and consumption. <br /> <br /> Your
                  data may also be used for periodic wholistic analysis of the
                  app/website usage by all users to help us understand and
                  manage capacity-related issues for the best experience. These
                  analyses may also be used for the purposes of product
                  improvement, and the projection and planning of the
                  App’s/website’s lifecycle in some situations.
                </div>
              </div>
              <HorizontalRule />
              <div className="flex flex-col gap-8">
                <div className="sectionDivWrapper2">
                  <div className="leftSection2Div">
                    <h2 className="text-[#F79400] font-bold text-xl ">
                      Background Location Usage
                    </h2>
                  </div>
                  <div className="rightSection2Div">
                    The App/Website uses a schedule timer and background
                    location tracker; when activated / permitted by the user
                    (either always / when the App/Website is in use), to capture
                    data on the App/Website users location and proximity to
                    event locations. This is primarily used to augment the
                    automated attendee check-in functionality, typically by
                    using it to capture data related to the time of arrival at
                    the event location. The location data is however not shared
                    or saved on our servers.
                  </div>
                </div>
              </div>

              <div className="sectionDivWrapper mt-10">
                <h1 className="sectionHeader">Security</h1>
                <div>
                  The security of your information and our integrity of being
                  able to consistently prevent any form of breach of these data
                  you entrust us with, is something we take very seriously, and
                  we are committed to protecting the information we receive from
                  you and remain resolute to offering the comfort and assurance
                  you expect. The adopted security mechanisms integrated into
                  the App/Website can guard against the loss, misuse and / or
                  the alteration of the information under our control. We also
                  ensure the encryption of sensitive data we collect, or have
                  you input into forms on the App/Website and those we obtain
                  from the other forms of engagements supported by the
                  App/Website. <br /> <br /> In addition, secured cloud storage
                  facilities are leveraged on within our solution set-up.
                  However, we do not guarantee a 100%, that unauthorized
                  accesses will never occur at any level of our solution
                  architecture. Users who have registered on the App/Website,
                  also agree to keep their password in strict confidence and not
                  disclose such information to any third party. Periodic update
                  / revision of the password is also advised.
                </div>
              </div>
              <HorizontalRule />

              <div className="sectionDivWrapper mt-10">
                <h1 className="sectionHeader">
                  Sharing Information with Third Party
                </h1>
                <div>
                  We may share information about you to third parties who may
                  provide various services on our behalf to fulfil your requests
                  and the services you activate or consume on the App/Website.
                  However, this is done in the best of moderations to ensure we
                  only share information about you that is necessary for third
                  party to provide/complete the requested service. These third
                  parties are prohibited from retaining, sharing, storing, or
                  using your personally identifiable information for any other
                  purpose. This policy does not apply to information that you
                  provide to any third party directly outside the flows of the
                  App/Website.
                </div>
              </div>
              <HorizontalRule />

              <div className="sectionDivWrapper mt-10">
                <div className="flex flex-col gap-8">
                  <h1 className="sectionHeader">Contact Us</h1>
                  <div>
                    You may contact Us regarding the Service or these Terms and
                    Conditions at{" "}
                    <span className="highlightText">
                      <a href="mailto:ask@leashpay.com" target="_blank">
                        ask@leashpay.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center mt-10 lg:hidden">
                  <Link href="/terms">
                    <button className="px-12 uppercase py-3 bg-primary  text-lg font-light rounded-[35px] relative text-white hover:border-primary transition-all  transform hover:scale-105">
                      Terms & Conditions
                      <img
                        src="/assets/icons/nav/arrow-lefttop.svg"
                        alt="nav right"
                        className="absolute  top-1.5 right-4"
                      />
                    </button>
                  </Link>
                </div>

                <div className="my-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
