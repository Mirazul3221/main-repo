import React, { useEffect } from 'react'
import Header from '../header-footer/Header'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link, useLocation } from 'react-router-dom';
const LandingPage = () => {
    const {pathname} = useLocation()
    useEffect(() => {
       
      window.scrollTo({top:0, behavior:"smooth"});
  
     }, [pathname])


    const banner = "./images/banner.jpg"
  return (
    <div>
        <section className="w-screen relative min-h-screen"
        style={{ background: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Header></Header>
            <div className="w-full h-full z-10">
                <div className="z-10 p-4 md:p-20">
                    <h2 className="uppercase md:text-2xl mb-10 text-white">Welcome to Thailand Elite Visa</h2>
                    <h2 className="md:text-7xl text-white border-l-[6px] border-[#a38c1a] py-2 px-4 font-thin">Become a
                        Thailand <br></br>
                        <span className="font-bold text-[#a38c1a]"> Elite's member</span>
                    </h2>
                    <p className="text-white md:w-1/2 mt-6">Thailand Elite visa is an easy solution to stay or open a business in Thailand for long term. Thai Elite Visa applicants are allowed to apply minimum 5 (five) years to maximum 20 (twenty) years visa.</p>
                    <button
                        className="border-2 mt-6 border-[#a38c1a] duration-500 text-white hover:bg-[#a38c1a] px-10 py-2">
                        READ MORE
                    </button>
                </div>
            </div>
      </section>
      <section>
                    <div className="flex md:justify-end md:-mt-36">
                <div className="md:flex md:w-7/12">
                    <div className="item bg-gray-50 md:w-4/12 relative py-12 px-8">
                        <div
                            className="absolute flex justify-center items-center text-white top-0 left-0 w-14 h-10 bg-black rounded-br-[20px]">
                            01</div>
                        <h3 className="text-lg font-bold my-2">APPLICATION FORM</h3>
                        <p className=" text-sm ">Download the application form, fill in and upload it to our website. Please make sure the applicant's signature is clearly visible & same as the passport.</p>
                        <div className="">
                            <a className="mt-4 flex text-[#a38c1a] items-center gap-4" href="#">
                                <p>Read More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#a38c1a" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="item bg-[#a38c1a] md:w-4/12 relative py-12 px-8">
                        <div
                            className="absolute flex justify-center items-center top-0 left-0 w-14 h-10 bg-gray-50 rounded-br-[20px]">
                            02</div>
                        <h3 className="text-lg text-white font-bold my-2">PASSPORT & PICTURE</h3>
                        <p className=" text-sm text-white">Upload the main page and signature page of the applicant's passport. Also, upload a recent picture of the applicant.</p>
                        <div className="">
                            <a className="mt-4 flex text-white items-center gap-4" href="#">
                                <p>Read More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="white" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="item bg-gray-900 md:w-4/12 relative py-12 px-8">
                        <div
                            className="absolute flex justify-center items-center top-0 left-0 w-14 h-10 bg-[#a38c1a] rounded-br-[20px]">
                            03</div>
                        <h3 className="text-lg text-white font-bold my-2">PAYMENT & VISA</h3>
                        <p className=" text-sm text-white">Complete the payment after receiving an approval letter within 2 to 5 weeks. Finally, receive a membership card and visa stamp.</p>
                        <div className="">
                            <a className="mt-4 flex text-[#a38c1a] items-center gap-4" href="#">
                                <p>Read More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#a38c1a" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        <h2 className="uppercase text-center mt-10 md:text-2xl text-[#a38c1a]">Welcome to Thailand Elite Visa</h2>
            <div className="md:flex gap-4 mt-10">
                <div className="left hidden md:block md:flex gap-4 items-center md:w-1/2">
          <div className="img-01 w-1/2">
            <img className="mb-4" src="./images/marriage couple enjoy life in Thailand hotel.jpg" alt="" />
            <img src="./images/visa processing .jpg" alt="" />
                    </div>
                <div className="img-02 md:w-1/2">
                  <img src="./images/thailand elite visa  and passport.jpg" alt="" />
                    </div>
                </div>
                <div className="right md:w-1/2 px-10">
                    <div className="">
                        <h2 className="md:text-5xl text-2xl border-l-[6px] border-[#a38c1a] py-2 px-4 font-thin">Become a
                            Thailand
                            <br />
                            <span className="font-bold"> Elite's member</span>
                        </h2>
                    </div>
                    <div className="md:flex gap-8 mt-10">
                        <p className="text-justify">Thailand Elite Visa – Thai Elite Visa -Long Term 5-20 Years Visa in
                            Thailand.
                            It is one of the most popular long-term visa services in the world.</p>

                        <p className="text-justify">We are providing Thailand Elite Visa processing service with greater
                            efficiency. without us, no one can get
                            thai elite visa direct from the Thailand government office.</p>
                    </div>
                    <div className="my-10">
                        <div className="item md:flex mt-6 gap-6">
                            <div className="w-14 h-14">
                                <div
                                    className="w-12 h-12 bg-gray-100 flex justify-center items-center hover:bg-[#a38c1a] rounded-bl-[20px] group duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        className="w-6 text-[#a38c1a] group-hover:text-white duration-500 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                            </div>
                            <div className="">
                                <h3>Recognition & Facilitation</h3>
                                <p>By being a member of Thailand Elite can make your life more easier in Thailand. You
                                    can enjoy Thailand's hospitality and way of life while
                                    dealing with Thai Government agencies and have access to a range of benefits.</p>
                            </div>
                        </div>
                        <div className="item md:flex mt-6 gap-6">
                            <div className="w-14 h-14">
                                <div
                                    className="w-12 h-12 bg-gray-100 flex justify-center items-center hover:bg-[#a38c1a] rounded-bl-[20px] group duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        className="w-6 text-[#a38c1a] group-hover:text-white duration-500 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="">
                                <h3>
                                    Privileges</h3>
                                <p>The Privilege Card offers special discounts and promotions from countless shops,
                                    spas, golf courses, luxury hotels and resorts for your convenience and happiness in
                                    Thailand
                                    along with concierge services, airport and car/motorcar services.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            <div className="py-6 hidden px-6 my-6 md:my-10 md:w-10/12 mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl my-2 text-gray-800">
                        4 EASY STEPS
                    </h2>
                    <p className="text-gray-700">It might take 3 to 4 weeks to process complete VISA application.</p>
                </div>
                <div className="my-10 md:flex gap-4">
                    <div className="item md:w-4/12 text-center mt-10 p-4 bg-white rounded-md shadow-md">
                        <div className="flex justify-center items-center rounded-full mx-auto my-4 w-20 h-20 bg-slate-200">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                            </span>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-amber-700">Download</h3>
                            <h6 className="text-sm">Visa Application Form</h6>
                            <p className="text-sm">Download application form for your selected VISA package from our
                                website.</p>
                            <p className="text-sm">Click, <a href="#">Download application form</a></p>
                        </div>
                    </div>

                    <div className="item md:w-4/12 text-center mt-10 p-4 bg-white rounded-md shadow-md">
                        <div className="flex justify-center items-center rounded-full mx-auto my-4 w-20 h-20 bg-slate-200">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </span>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-amber-700">Upload</h3>
                            <h6 className="text-sm">After fillup the form</h6>
                            <p className="text-sm">Fill up the form with signature then scan & upload. Also upload
                                applicants 2x2 inches
                                photo.</p>
                            <p className="text-sm">Click, <a href="#">Upload signed application form</a></p>
                        </div>
                    </div>

                    <div className="item md:w-4/12 text-center mt-10 p-4 bg-white rounded-md shadow-md">
                        <div className="flex justify-center items-center rounded-full mx-auto my-4 w-20 h-20 bg-slate-200">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>

                            </span>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-amber-700">Passport</h3>
                            <h6 className="text-sm">Scan your passport</h6>
                            <p className="text-sm">Scan and upload Bio Data pages and signature page of your Passport and
                                upload with
                                application.</p>
                            <p className="text-sm">Click, <a href="#">Upload your passport pages</a></p>
                        </div>
                    </div>
                    <div className="item md:w-4/12 text-center mt-10 p-4 bg-white rounded-md shadow-md">
                        <div className="flex justify-center items-center rounded-full mx-auto my-4 w-20 h-20 bg-slate-200">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>

                            </span>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-amber-700">Payment</h3>
                            <h6 className="text-sm">Pay the fee to get you Visa</h6>
                            <p className="text-sm">Receive approval letter from authority, Pay the fee through your suitable
                                payment
                                method
                                and enjoy.</p>
                            <p className="text-sm">Click, <a href="#">All Payment information</a></p>
                        </div>
                    </div>
                </div>
        </div>
         <section className="my-10">
                <div className="px-10 py-4 mx-auto flex justify-center">
                    <div className="">
                        <h3 className="text-center md:text-2xl my-4">CHOOSE YOUR MEMBERSHIP</h3>
                        <div className="my-10">
                            <h2 className="md:text-5xl text-lg border-l-[6px] border-gray-500 py-2 px-4 font-thin">We
                                Provide Our
                                Experts
                                To<br />
                                <span className="font-bold">Membership Programs</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="md:grid grid-cols-3 gap-x-10 gap-y-20">
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 600,000 Net</h3>
                        </div>
                           <img src="./images/membership-packages/Elite-Easy-Access-Membership.jpg" alt="elite easy access membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE EASY ACCESS (5 YEARS)</h2>
                        <p>Easy Access is the entry and most popular Thailand Elite membership. Receive 5 years
                            multi-entry
                            visa,
                            limousine and
                            airport services, 24/7 concierge services and more.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-easy-access">Read More</a></button> 
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 800,000 Net</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Family-Alternative-Membership.jpg" alt="elite family alternative membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE ALTERNATIVE (10 YEARS)</h2>
                        <p>Elite Alternative is a 10 years membership. it comes with a 5 years multi-entry visa (free
                            renewal 1
                            time, so 10 years),
                            and numerous services.
                            <strong>Save 400 000THB!</strong>

                            100 000THB discount for additional family members.
                        </p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-family-alternative">Read More</a></button>
                    </div>



                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 1 Million Net</h3>
                        </div>
                <img className="mx-auto w-42"  src="./images/membership-packages/Elite-Superiority-Extension-Membership.jpg" alt="elite superiority extension membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE SUPERIORITY EXTENSION (20 YEARS)</h2>
                        <p>Elite Superiority Extension is the longest membership program. It comes with a 20 years
                            membership, 5
                            years multi-entry
                            visa with 3 free renewal
                            (total 20 years). <strong>This is the most cost effective program</strong> </p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-superiority-extension">Read More</a></button>
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 2 Million*</h3>
                        </div>
                <img className="mx-auto w-42"
                            src="./images/membership-packages/Elite-Ultimate-Privilege-Membership.jpg" alt="elite ultimate privilege membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE ULTIMATE PRIVILEGES (20 YEARS)</h2>
                        <p>Elite Ultimate Privileges program is a 20 years membership program with the most of
                            privileges.

                            It includes free golf green fees, spas, unlimited limousine services and more.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="elite-ultimate-privilege">Read More</a></button>
                    </div>

                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 1 million</h3>
                        </div>
                <img className="mx-auto w-42"  src="./images/membership-packages/Elite-Privilege-Access-Membership.jpg" alt="elite privilege access membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE PRIVILEGE ACCESS (10 YEARS)</h2>
                        <p>The Elite Privilege Access membership is a popular extendable membership option.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-privilege-access">Read More</a></button>
                    </div>

                    
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 1 million</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Family-Premium-Membership.jpg" alt="elite family premium membership" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE FAMILY PREMIUM (20 YEARS)</h2>
                        <p>The Elite Family Premium option allows the immediate family of an Elite Ultimate Privilege
                            member
                            to
                            apply for a
                            Privilege Entry Visa.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-family-premium">Read More</a></button>
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 800,000</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Family-Excursion.jpg" alt="elite family excursion" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE FAMILY EXCURSION (5 YEARS)</h2>
                        <p>The Elite Family Premium option allows the immediate family of an Elite Ultimate Privilege
                            member
                            to
                            apply for a
                            Privilege Entry Visa.</p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950"><a
                                href="/elite-family-excersion">Read More</a></button>
                    </div>
                    <div
                        className="package relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                        <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                            <h3 className="py-2 px-20 text-[#ff0066]">THB 1.5 million</h3>
                        </div>
                <img className="mx-auto w-42" src="./images/membership-packages/Elite-Maxima-Health.jpg" alt="elite family maxima health" />
                        <h2 className="text-gray-800 text-2xl my-4">ELITE MAXIMA HEALTH (5 YEARS)</h2>
                        <p>Renewable 5 years multiple entry visa with extendable 1 year length of stay for each entry.
                        </p>
                        <button
                            className="py-2 text-lg font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">Read
                            More</button>
                    </div>
                </div>
        </section>
            <div class="w-10/12 hidden md:flex  md:h-[50vh] bg-gray-50 items-center mx-auto shadow-md shadow-black">
                <div class="left bg-gray-50 md:p-[59px] w-2/3">
                    <h2>WE ARE HERE FOR YOU</h2>
                    <div class="mt-4">
                        <h2 class="text-5xl border-l-[6px] border-[#a38c1a] py-2 px-4 font-thin">Get In
                            <span class="font-bold">Touch</span>
                        </h2>
                    </div>
                    <p>Whether you have questions, need assistance or require further
                        information about Thailand Elite membership, we are here to help.</p>

                    <div class="border-2 border-[#a38c1a] inline-block px-4 py-2 mt-4">
                        <a class="flex text-[#a38c1a] items-center gap-4" href="#">
                            <p>CONTACT US</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#a38c1a" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="right bg-gray-50">
              <img src="./images/contact-us.png" alt="" />
                </div>
            </div>
      </section>
              <section class="px-4 md:pt-60 md:-mt-40 bg-indigo-950">
            <div class="md:flex items-center bg-gray-50">
                <div class="left hidden md:block w-6/12">
              <img src="./images/happy-client.jpg" alt="" />
                </div>
                <div class="right md:w-6/12 shadow-md md:-ml-20 bg-gray-50 p-4 md:p-10">
                    <h2>WHAT OUR CLIENTS SAY</h2>
                    <div class="mt-4">
                        <h2 class="text-2xl border-l-[6px] border-[#a38c1a] py-2 px-4 font-thin">Satisfied
                            <span class="font-bold">Clients</span>
                        </h2>
                    </div>

 <OwlCarousel className='owl-theme' items={1} loop="true" 
 mouseDrag={true} autoplay={true} margin={0} nav={false}
 lazyLoad={true} autoplayHoverPause={true} fallbackEasing="swing"
 >
    <div class='item w-full'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item w-full'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item w-full'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
    <div class='item'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, itaque modi eos 
        incidunt dignissimos inventore, aperiam perferendis sit excepturi aliquid ratione autem 
        necessitatibus iure non dolorem quidem ab et!</p>
    </div>
</OwlCarousel>

                </div>
            </div>
      </section>
              <section class="">
            <div class="text-white p-10"
                style={{background:`url('./images/map.png')`,backgroundRepeat:'no-repeat',backgroundSize: 'cover'}}>
                <h2 class="md:text-2xl">WHY CHOOSE THAI ELITE</h2>
                <div class="mt-4">
                    <h2 class="md:text-5xl border-l-[6px] border-gray-500 py-2 px-4 font-thin">We provide the best way
                        <br />
                        <span class="font-bold text-gray-300">to success your migration</span>
                    </h2>
                </div>
                <p class="md:w-1/2 mt-6">From the moment you arrive in Thailand,
                    having membership in Thailand Elite entitles you to a number of benefits and VIP services.</p>
                <div class="border-2  hover:bg-[#a38c1a] group border-[#a38c1a] inline-block px-4 py-2 mt-4">
                    <a class="flex group-hover:text-white duration-500 items-center gap-4" href="#">
                        <p>CONTACT US</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LandingPage
