import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import React from "react";

const HorizontalRule = () => {
  return <hr className="border-primary my-10 -mx-2 lg:mx-0" />;
};

const TermsConditionsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10 text-sm">
        <div className="container mx-auto px-8  max-w-7xl text-[#787878] leading-relaxed">
          <h1 className="text-primary font-bold text-4xl md:text-6xl lg:text-7xl uppercase">
            Terms And <br /> Conditions
          </h1>
          <HorizontalRule />
          <div className="flex justify-between divide-x divide-transparent lg:divide-primary gap-10 -mt-10">
            <div className="h-full w-[25%] pt-10 hidden lg:flex">
              <Link href="/privacypolicy">
                <button className="px-12 uppercase py-3 bg-primary  text-lg font-light rounded-[35px] relative text-white hover:border-primary transition-all  transform hover:scale-105">
                  PRivacy Policy
                  <img
                    src="/assets/icons/nav/arrow-lefttop.svg"
                    alt="nav right"
                    className="absolute  top-1.5 right-4"
                  />
                </button>
              </Link>
            </div>

            <div className="h-full w-full lg:w-[75%] ">
              <div className="px-0 lg:px-12 mt-10">
                Welcome to{" "}
                <span className="font-medium text-primary">leashpay.com</span>.
                By using{" "}
                <span className="font-medium text-primary">leashpay.com</span>{" "}
                YOU AGREE TO BE BOUND BY ITS CONDITIONS OF USE (explained
                below), Privacy Policy and all disclaimers and terms and
                conditions that appear elsewhere on
                <span className="font-medium text-primary">leashpay.com</span>.
                We reserve the right to make changes to{" "}
                <span className="font-medium text-primary">leashpay.com</span>
                and its (a) Conditions of Use, (b) Privacy Policy, (c) Refund
                Policy and (d) Chargeback Policy at any time (a, b, c and d are
                all available on{" "}
                <span className="font-medium text-primary">leashpay.com</span>).
                Each time you use{" "}
                <span className="font-medium text-primary">leashpay.com</span>,
                you should visit and review the then current Conditions of Use,
                Privacy, Refund and Chargeback Policies that apply to your
                transactions and use of{" "}
                <span className="font-medium text-primary">leashpay.com</span>.
                If you are dissatisfied with{" "}
                <span className="font-medium text-primary">leashpay.com</span>,
                its content or Conditions of Use, you agree that your sole and
                exclusive remedy is to discontinue using{" "}
                <span className="font-medium text-primary">leashpay.com</span>.
                Tampering with{" "}
                <span className="font-medium text-primary">leashpay.com</span>,
                misrepresenting the identity of a user, or conducting fraudulent
                activities on{" "}
                <span className="font-medium text-primary">leashpay.com</span>{" "}
                is prohibited.
              </div>
              <HorizontalRule />
              <div className="sectionDivWrapper">
                <h1 className="sectionHeader">
                  Disclaimer and Limitation of Liability
                </h1>
                <div>
                  By using <span className="highlightText">leashpay.com</span>,
                  you expressly agree that use of
                  <span className="highlightText">leashpay.com</span> is at your
                  sole risk. <span className="highlightText">leashpay.com</span>{" "}
                  is provided on an “as is” and “as available” basis. Neither{" "}
                  <span className="highlightText">leashpay.com</span>, nor any
                  of its associates, including but not limited to its directors,
                  employees, agents, designers, contractors, merchants
                  (collectively, “Associates”) warrant that use of{" "}
                  <span className="highlightText">leashpay.com</span> will be
                  uninterrupted or error-free. Under no circumstances shall
                  <span className="highlightText">leashpay.com</span> or its
                  Associates be liable for any direct, indirect, incidental,
                  special or consequential damages that result from your use of
                  or inability to use{" "}
                  <span className="highlightText">leashpay.com</span>, including
                  but not limited to your reliance, on any information obtained
                  from <span className="highlightText">leashpay.com</span>
                  that results in mistakes, omissions, interruptions, deletion
                  or corruption of files, viruses, delays in operation or
                  transmission, or any failure of performance. The foregoing
                  limitation shall apply in any action, whether in contract,
                  tort or any other claim, even if an authorized representative
                  of <span className="highlightText">leashpay.com</span> has
                  been advised of or should have knowledge of the possibility of
                  such damages. You hereby acknowledge that this paragraph shall
                  apply to all content, merchandise and services available
                  through <span className="highlightText">leashpay.com</span>.
                </div>
              </div>
              <HorizontalRule />
              <div className="sectionDivWrapper">
                <h1 className="sectionHeader">Pricing Policy</h1>
                <div>
                  <span className="highlightText">leashpay.com</span> may charge
                  a small convenience fee for certain services. Other services
                  may be offered at face value with no additional charge from{" "}
                  <span className="highlightText">leashpay.com</span>.
                  Convenience fees are subject to change.
                </div>
              </div>
              <HorizontalRule />
              <div className="sectionDivWrapper">
                <h1 className="sectionHeader">Paying for Your Order</h1>
                <div>
                  <span className="highlightText">leashpay.com</span> accepts
                  multiple payment options. Payment options include but are not
                  limited to Visa®, MasterCard®, MTN mobile money®, Airtel
                  money® and Tigo cash®. Since all payments are electronic and
                  most orders are digitally delivered, credit and debit cards
                  are generally charged at the time you make a payment or
                  initiate an order.
                </div>
              </div>
              <HorizontalRule />
              <div className="sectionDivWrapper">
                <h1 className="sectionHeader">
                  Validating Your Payments and / or Order
                </h1>
                <div>
                  After you initiate a payment or place an order using our
                  shopping cart, we will validate the information you give us,
                  by verifying your method of payment. We reserve the right to
                  reject any payment you initiate and / or order you place with
                  us, and / or to limit quantities on any order, without giving
                  any reason. If we reject your payment or order, we will
                  attempt to notify you on{" "}
                  <span className="highlightText">leashpay.com</span> or using
                  the e-mail address or phone number in your account. Your
                  credit or debit card will normally not be charged if we reject
                  an initiated payment or order and will only be charged by the
                  appropriate amount if we limit an order.
                </div>
              </div>
              <HorizontalRule />
              <div className="sectionDivWrapper">
                <h1 className="sectionHeader">Refund Policy</h1>
                <div>
                  All sales made through{" "}
                  <span className="highlightText">leashpay.com</span> are
                  subject to <span className="highlightText">leashpay.com</span>
                  ’s refund policy. For a complete explanation of the refund
                  policy, please see Refunds section.
                </div>
              </div>
              <HorizontalRule />
              <div className="sectionDivWrapper">
                <h1 className="sectionHeader">Termination of Use</h1>
                <div>
                  <span className="highlightText">leashpay.com</span> may, in
                  its sole discretion, terminate your account or your use of{" "}
                  <span className="highlightText">leashpay.com</span> at any
                  time. You are personally liable for any payments you initiate
                  orders that you place and charges that you incur prior to
                  termination.{" "}
                  <span className="highlightText">leashpay.com</span> reserves
                  the right to change, suspend or discontinue all or any aspects
                  of <span className="highlightText">leashpay.com</span> at any
                  time without prior notice.
                </div>
              </div>
              <HorizontalRule />
              <div className="flex flex-col gap-8">
                <h1 className="sectionHeader lg:pl-10 lg:hidden">
                  Refund Policy
                </h1>
                <div className="sectionDivWrapper2 ">
                  <div className="leftSection2Div">
                    <h1 className="sectionHeader hidden lg:block mb-3">
                      Refund Policy
                    </h1>
                    <h2 className="text-[#F79400] font-bold text-xl ">
                      Postpaid
                    </h2>
                  </div>
                  <div className="rightSection2Div">
                    <span className="highlightText">leashpay.com</span> does not
                    normally provide refunds for transactions performed through
                    the site. However, under exceptional cases we will work with
                    the biller to review your particular circumstance to address
                    any issues you raise.
                  </div>
                </div>

                <div className="sectionDivWrapper2">
                  <div className="leftSection2Div">
                    <h2 className="text-[#F79400] font-bold text-xl ">
                      Prepaid
                    </h2>
                  </div>
                  <div className="rightSection2Div">
                    <span className="highlightText">leashpay.com</span> keeps
                    detailed logs of all transactions that take place.{" "}
                    <span className="highlightText">leashpay.com</span> will
                    conduct a detailed investigation of all refund requests for
                    prepaid services. In cases where it is possible to “return”
                    the services already paid we will endeavor to process a
                    return.
                  </div>
                </div>

                <div className="sectionDivWrapper2">
                  <div className="leftSection2Div">
                    <h2 className="text-[#F79400] font-bold text-xl">
                      Chargeback Policy
                    </h2>
                    <h1 className="text-3xl text-primary">
                      What is a Chargeback?
                    </h1>
                  </div>
                  <div className="rightSection2Div">
                    A chargeback is a reversal of a credit/debit card
                    transaction by your bank. Chargebacks are usually performed
                    when fraudulent purchases have been made on a person’s
                    credit/debit card. You can initiate such a request if you
                    find a charge on your account that you did not authorize, or
                    a charge for an item that you did not receive. If you need
                    to request a chargeback, please contact us first so we can
                    help you resolve the issue. In most cases, our refund policy
                    is the appropriate route to take instead of a chargeback
                    request.
                  </div>
                </div>

                <div className="sectionDivWrapper2">
                  <div className="leftSection2Div">
                    <h1 className="text-3xl text-primary">
                      How does leashpay.com handle Chargebacks?
                    </h1>
                  </div>
                  <div className="rightSection2Div">
                    A chargeback is a reversal of a credit/debit card
                    transaction by your bank. Chargebacks are usually performed
                    when fraudulent purchases have been made on a person’s
                    credit/debit card. You can initiate such a request if you
                    find a charge on your account that you did not authorize, or
                    a charge for an item that you did not receive. If you need
                    to request a chargeback, please contact us first so we can
                    help you resolve the issue. In most cases, our refund policy
                    is the appropriate route to take instead of a chargeback
                    request.
                  </div>
                </div>

                <div className="sectionDivWrapper2">
                  <div className="leftSection2Div">
                    <h1 className="text-3xl text-primary">
                      How do I cancel a Chargeback?
                    </h1>
                  </div>
                  <div className="rightSection2Div">
                    To undo a chargeback, you must contact your bank to issue a
                    chargeback reversal. Please contact{" "}
                    <span className="highlightText">leashpay.com</span> to
                    inform us when the reversal is initiated so we can make a
                    note on your account.
                  </div>
                </div>
              </div>

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
                  <Link href="/privacypolicy">
                    <button className="px-12 uppercase py-3 bg-primary  text-lg font-light rounded-[35px] relative text-white hover:border-primary transition-all  transform hover:scale-105">
                      Privacy Policy
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

export default TermsConditionsPage;
