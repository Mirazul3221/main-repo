import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';


const Footer = () => {
  return (
    <>
      <footer >

       <div className="relative hidden md:block">
        <div className="h-full w-[40%] border-l-10 rounded-l-[30px] bg-gray-500/95 z-10 absolute flex justify-center items-center top-0 right-0">
        <div className="my-10 text-white">
                            <h2 className="md:text-5xl text-lg border-l-[10px] border-gray-50 py-2 px-4 font-thin">Choose Your Favourite
                                <br />
                                <span className="font-bold">Membership Programs</span>
                            </h2>
                        </div>
        </div>
       <OwlCarousel className='owl-theme' items={2} dots={false} loop="true" 
 mouseDrag={true} autoplay={true} margin={20} nav={false}
 lazyLoad={true} autoplayHoverPause={true} fallbackEasing="swing"
 > 
                     <div
                        className="package my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 600,000 Net</h3>
                            </div>
                           <img src="./images/membership-packages/Elite-Easy-Access-Membership.jpg" alt="elite easy access membership" />
                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE EASY ACCESS (5 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>Easy Access is the entry and most popular Thailand Elite membership. Receive 5 years
                            multi-entry
                            visa,
                            limousine and
                            airport services, 24/7 concierge services and more.</p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-easy-access">Read More</a></button> 
                          </div>
                    </div>


                    <div
                        className="package hidden my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 800,000 Net</h3>
                            </div>
                            <img src="./images/membership-packages/Elite-Family-Alternative-Membership.jpg" alt="elite family alternative membership" />
                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE ALTERNATIVE (10 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>Elite Alternative is a 10 years membership. it comes with a 5 years multi-entry visa (free
                            renewal 1
                            time, so 10 years),
                            and numerous services.
                            <strong>Save 400 000THB!</strong>
                            100 000THB discount for additional family members.</p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-easy-access">Read More</a></button> 
                          </div>
                    </div>


                    <div
                        className="package hidden my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 1 Million Net</h3>
                            </div>
                            <img  src="./images/membership-packages/Elite-Superiority-Extension-Membership.jpg" alt="elite superiority extension membership" />                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE SUPERIORITY EXTENSION (20 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>Elite Superiority Extension is the longest membership program. It comes with a 20 years
                            membership, 5
                            years multi-entry
                            visa with 3 free renewal
                            (total 20 years). <strong>This is the most cost effective program</strong></p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-superiority-extension">Read More</a></button> 
                          </div>
                    </div>


                    <div
                        className="package hidden my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 2 Million*</h3>
                            </div>
                            <img   src="./images/membership-packages/Elite-Ultimate-Privilege-Membership.jpg" alt="elite ultimate privilege membership" />
                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE ULTIMATE PRIVILEGES (20 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>Elite Ultimate Privileges program is a 20 years membership program with the most of
                            privileges.

                            It includes free golf green fees, spas, unlimited limousine services and more.</p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-ultimate-privilege">Read More</a></button> 
                          </div>
                    </div>


                    <div
                        className="package hidden my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 1 million</h3>
                            </div>
                            <img   src="./images/membership-packages/Elite-Privilege-Access-Membership.jpg" alt="elite privilege access membership" />
                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE PRIVILEGE ACCESS (10 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>The Elite Privilege Access membership is a popular extendable membership option.</p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-privilege-access">Read More</a></button> 
                          </div>
                    </div>


                    <div
                        className="package hidden my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 1 million</h3>
                            </div>
                            <img   src="./images/membership-packages/Elite-Family-Premium-Membership.jpg" alt="elite family premium membership" />
                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE FAMILY PREMIUM (20 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>The Elite Family Premium option allows the immediate family of an Elite Ultimate Privilege
                            member
                            to
                            apply for a
                            Privilege Entry Visa.</p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-family-premium">Read More</a></button> 
                          </div>
                    </div>


                    <div
                        className="package hidden my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 800,000</h3>
                            </div>
                            <img src="./images/membership-packages/Elite-Family-Excursion.jpg" alt="elite family excursion" />
                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE FAMILY EXCURSION (5 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>Thailand Elite Family Excursion Membership for 5 Years Visa costs THB 0.8M (VAT included)</p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-family-excersion">Read More</a></button> 
                          </div>
                    </div>


                    <div
                        className="package hidden my-4 border-2 rounded-sm md:flex items-center item relative text-center text-gray-700 p-6 bg-white rounded-md shadow-md overflow-hidden">
                          <div className="w-full">
                             <div className=" bg-slate-100 text-center absolute -right-20 top-10 rotate-45">
                               <h3 className="py-2 px-20 text-[#ff0066]">THB 1.5 million</h3>
                            </div>
                            <img src="./images/membership-packages/Elite-Maxima-Health.jpg" alt="elite family maxima health" />
                          </div>
                          <div className="">
                          <h2 className="text-gray-800 text-lg my-4">ELITE MAXIMA HEALTH (5 YEARS)</h2>
                        <p className='text-sm w-10/12 mx-auto'>Renewable 5 years multiple entry visa with extendable 1 year length of stay for each entry.</p>
                        <button
                            className="py-2 text-sm font-bold my-6 text-white shadow-sm shadow-white px-4 duration-500 bg-amber-700 hover:bg-amber-950">
                          <a href="/elite-family-excersion">Read More</a></button> 
                          </div>
                    </div>

 </OwlCarousel>
       </div>


        <div className="md:flex text-gray-700 px-10 py-8 justify-center">
        <div className="item md:w-3/12 px-6">
          <div className="img">
            <Link to="/">
              <img className='w-48' src="./images/admin-ajax.png" alt="" />
              </Link>
          </div>
          <p className='text-justify'>We ensure Thailand Elite Visa in an efficient way and grant access for first approval. There is no alternate way to get it directly from the concerned department without an authorized agent.</p>
        </div>
        <div className="item md:px-6 md:w-4/12">
          <h2 className='text-lg font-bold my-4'>Membership</h2>

          <Link to="/elite-superiority-extension"><h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Thailand Elite Superiority Extension Membership (20 Years Thai Elite Visa)</h3></Link>
          <Link to="/elite-family-premium"><h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Thailand Elite Family Premium Membership</h3></Link>
          <Link to="/elite-ultimate-privilege"><h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Thailand Elite Ultimate Privilege Membership (20 Years Thai Elite Visa)</h3></Link>
          <h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Thailand Elite Maxima Health Membership (5 Years Thai Elite Visa)</h3>
          <Link to="/elite-privilege-access"><h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Thailand Elite Privilege Access Membership (10 Years Thai Elite Visa)</h3></Link>
          <Link to="/elite-family-alternative"><h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4;Thailand Elite Family Alternative Membership (10 Years Thai Elite Visa)</h3></Link>
          <Link to="/elite-family-excersion"><h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Thailand Elite Family Excursion Membership (5 Years Thai Elite Visa)</h3></Link>
          <Link to="/elite-easy-access"><h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Thai Elite Easy Access Membership (5 Years Thailand Elite Visa)</h3></Link>
        </div>
        <div className="item md:w-2/12">
          <h2 className='text-lg font-bold my-4'>Our hours</h2>
          <ul className='space-y-4'>
            <li className='px-4'>MON 9:00AM-11:30PM</li>
            <li className='px-4'>TUE 10:00AM-11:00PM</li>
            <li className='px-4'>WED 9:00AM-11:30PM</li>
            <li className='px-4'>THU 9:00AM-11:30PM</li>
            <li className='px-4'>FRI 9:00AM-11:30PM</li>
            <li className='px-4'>SAT 9:00AM - 3:00PM</li>
            <li className='px-4'>SUN 9:00AM - 3:00PM</li>
          </ul>
          <div className="">
          <h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; All Membership</h3>
          <h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Privacy Policy</h3>
          <h3 className='hover:text-amber-900 hover:bg-gray-300 px-4 py-2'>&#x27A4; Cookie Policy</h3>
          </div>

        </div>

        <div className="item md:w-3/12">
          <h2 className='text-lg font-bold my-4'>Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

              <h3>ThaiEliteVisa.Com, Ratchaprarop, Bangkok 10400</h3>
            </div>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
             <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
              <a href="https://wa.me/66930839914?text=I20%am20%interested20%for20%Thailand20%elite20%Visa" target='_blank' rel='nofollow'>+66 930 839 914 (WhatsApp)</a>
            </div>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
             <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
             </svg>
              <h3>support@ethailandelitevisa.com</h3>
            </div>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
          </svg>
              <h3>https://www.ethailandelitevisa.com</h3>
            </div>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>

              <h3>General Sales and Service Agent for Thai Elite Visa Membership Processing</h3>
            </div>
            <a href="https://wa.me/66930839914?text=I20%am20%interested20%for20%Thailand20%elite20%Visa" target='_blank' rel='nofollow'>Click to Call +66 930 839 914 (WhatsApp)</a>

            <br />
            <a href="mailto:ccc@cc.com">cc@cc.com</a>
          </div>
        </div>
        </div>
        
        {/* <a href="/"> Go Back </a> */}
        {/* <Link to="/">Go Back </Link> */}

        <div className="p-10 text-center">
          <p className='border-t-2 pt-4'>Copyright © 2018 - 2023  5 to 20 Years Thailand Elite Visa Membership. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
