import React, { useEffect, useState } from 'react'
import Header from '../../header-footer/Header'
import "./faq.css"
import { useLocation } from 'react-router-dom'
// import { faqdata } from './faqData';
// import MyQuestion from './MyQuestion';

const Faq = () => {
  // const [data , setData] = useState(faqdata)
  // console.log(data)

  const {pathname} = useLocation()
  useEffect(() => {
     
    window.scrollTo({top:0, behavior:"smooth"});

   }, [pathname])


  return (
    <div>
        <Header></Header>
        <div className="my-10">
          <h2 className='text-center text-lg md:text-4xl'>Frequently Asked Question</h2>
          <p className='w-1/2 mx-auto text-center mt-4 text-gray-600'>Check out this list of our most commonly asked questions to find the answer you’re looking for. Please get in touch with us in case you couldn’t find your question here</p>
        </div>
        <div className="md:px-10 md:grid grid-cols-2 py-10 gap-4">

         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What is the most applied Thailand Elite membership program?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Elite Easy Access with 5 years membership validity at THB600,000 (Click here)
            <br />
            Cost per person / per year: THB 120,000 (Upgradable to 20 years with an additional fee of THB400,000)
            <br />
            Elite Family Excursion with 5 years membership validity at THB800,000 for 2 applicants (Click here)
            <br />
            Cost per person / per year : THB 80,000
            <br />
            Elite Superiority Extension with 20 years membership validity at THB 1,000,000 (Click here)
            <br />
            Cost per person / per year : THB 50,000
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Is it safe to make the payment to Thailand elite?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The payment of the membership is requested only once the application has been approved by 
            the immigration after you have submitted your application. <br />
            You will receive a confirmation email from Thailand Elite along with a letter and the information to process the payment.
            <br />
            The payment has to be done to Thailand Privilege Card., Ltd., the state owned company who operates Thailand Elite programs.
            <br />
            There are several accepted methods of payment including Bank Transfer, Credit card, Alipay…
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Can foreigners buy real estate in Thailand?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Foreigners, as well as Thailand Elite members, can legally buy a residential condo unit. To purchase a condo unit (freehold), the foreign ownership quota of the condo building should not exceed 49%. However, foreigners are not allowed to buy land and house unless investing in a 40-Million-baht government bond with a maturity of 5 years or more, they will be allowed to buy 1 Rai of land for residential purpose only. Otherwise, they must go for the long-term lease for a period of 30 years at maximum.(renewable)
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Who is eligible?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Thailand Elite visa membership packages are available for people from different age and nationality. If you have any query please contact us by email support@thaielite-visa.com or Call us +66 930 839 914 (WhatsApp)
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>How long is the application process?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The entire application process could take up to 1 months to 4 months.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>How can I join Thailand Elite Membership?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Select your desire package and download the related form. You have to fillup the form with signature. Finally upload that form, all pages of you passport and a recent picture. make sure all documents are scanned. please call our Sales Department by email support@thaielite-visa.com or  call us +66 930 839 914 (WhatsApp)
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Can I stay in Thailand more than 1 year without leaving Thailand?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Once your Thailand Elite visa is affixed on your passport, you will have an entry stamp <br />
            with states the date you can stay in Thailand, by default it’s 1 year. Every time you leave <br />
            Thailand and enter you will have another year until your elite visa expire. If you don’t travel outside Thailand within 1 year period, <br />
            you must apply for an extension of stay at your nearest immigration office before the date stated in entry stamp. Failure to do so, can result in <br />
            overstay and your visa may be canceled! You can coordinate with the Member Services.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Can I apply for thailand elite membership remotely?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            You can apply for Thailand Elite membership remotely, all the process can be done via online application portal or by email.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What are the services a member can avail?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Services include what not. From your landing till departure everything you feel should be available to your will be made available with our dedicated team members. Please don’t feel hesitated to contact us or visit our site in this regard.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What are the services a member can avail?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Services include what not. From your landing till departure everything you feel should be available to your will be made available with our dedicated team members. Please don’t feel hesitated to contact us or visit our site in this regard.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>How far does the membership cost one?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The single membership incurs a non-refundable payment of 2 (two) million Baht (THB 2,000,000) exclusive of VAT for a time span of 20 years. This offers the Member to the lead benefits and cervices of a Thailand Elite Membership as described in the Membership Privilege Book. Please visit the website or email to support@thaielite-visa.com  get more information.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>How far does the membership cost one?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The single membership incurs a non-refundable payment of 2 (two) million Baht (THB 2,000,000) exclusive of VAT for a time span of 20 years. This offers the Member to the lead benefits and cervices of a Thailand Elite Membership as described in the Membership Privilege Book. Please visit the website or email to support@thaielite-visa.com  get more information.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What is your name?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facilis? Reiciendis, 
              vitae nostrum. Repudiandae beatae aliquam, unde 
              quidem suscipit ea facilis fugit ipsa et possimus necessitatibus ut, ipsum veniam veritatis!
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Can other Family members avail thailand elite services?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Sorry, the Member alone is eligible for the entitled services.These services may offer special arrangements for his or her family members or guests.Please, communicate with our info desk at email to support@thaielite-visa.com for more information.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What are the costs involved to apply for the Thailand Elite membership program?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The only cost for the application for Thailand Elite membership is the membership fee. There is no additional service fee nor upfront payment required at any stage of the application. The membership fee is a non-refundable one-time payment ranging from THB 600,000 or approx USD 19,000 (5 Years Elite Easy Access) up to THB 2,140,000 or approx. USD 32,000 (20 Years Elite Ultimate Privilege
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>How can I know more about Thailad Elite?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            For regular information visit our website or contact our Member Conract Center. You may email us asking for further detail at email to support@thaielite-visa.com for more information
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>How does the five year elite easy to access visa work?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The five (5) years multiple entry VISA provides its member many facilities with automatic approval of one (1) year stay. The Member doesn’t need to leave Thailand and get back again to extend the length of his or her stay rather he or she should pay just extension fee (1900 THB) as stated in the Thai Immigration and train Service duty charges.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What are the main differences between the programme options?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            other complimentary services included in the package.
All options have common features : <br />
              <li>airport immigration express services (elite personal assistance through</li>
              <li>immigration and access to executive lounges)</li>
              <li>access to a 24-hour contact center</li>
              <li>Elite personal assistant</li>
              <li>VIP lounge at ariport</li>
              <li>Executives lounge</li>
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Is the membership teansferable to anyone else?If it is whats the process?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Thailand Elite is for a few selected by invitation out of people from different arena. Please feel free to contact us on email at support@thaielite-visa.com
             <br />
            or +66 930 839 914  for further detail.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Can I open bank account with SCB or Thai Military Bank Public Company? (OTHER BANKS WHICH IS NOT K-BANK AND BANGKOK BANK)</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            This depends. Thailand Privilege Card Co. Ltd. has a contract with Kasikorn Bank and Bangkok Bank only, in which it is certain that members can open a bank account with these two banks with their Thailand Elite Visa. <br />
            However, Siam Commercial Bank or TMBThanachart Bank has no contract with Thailand Privilege Card Co. Ltd. We are unable to confirm whether member can open an account with these two banks using their Thailand Elite Visa. <br />
            Therefore, please contact the back directly for more information as each bank may have their own conditions on opening an account.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What qualifications are required to be a member?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The applicant/the Member must have and maintain to have the following qualifications: <br />
            <li>Minimum age over twenty (20) years;</li>
            <li>Being allowed to stay in Thailand in accordance with the immigration laws or any concerned law of Thailand;</li>
            <li>Holding foreign passport;</li>
            <li>Not having been sentenced any punishment whatsoever, physical or pecuniary, in any countries save an offense committed resulting from negligence;</li>
            <li>Not facing trial as bankrupt and not being declared as psychologically or mentally imbalanced;</li>
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>How long can I stay in Thailand with Elite Visa?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Thailand Elite offers a 5,10 or 20 years membership. Each time a member goes through the Thai immigration, he/she will automatically get a one-year visa stamp in his/her passport until expiration of the membership. If the member happens to stay for more than 1-year in Thailand, then a simple renewal at the immigration office will grant another 1-year visa stamp.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Are there any investment possibilities in Thailad for the Member?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Thai Elite Visa offers with special concierge services of dealing with the Thai Government Sectors and the Private Sectors to promote business opportunity and investment facilities limited to Members only.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Is a thailand elite member required to do 90-day report?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            According to Immigration Bureau of Thailand, Thailand Elite Members are still required to do a 90-Day Report if continuously staying in the country without leaving for over 90 days. <br />
            The 90 days report can be done online, by mail or by visiting immigration office. A free service is available for member in Bangkok and selected provinces.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>After holding the membership,How can the member use the te privileges and benefits?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            The Member just needs to make a request for service to our Member Contact Centre by phone, fax or email in advance as per our service policy. Then our Member Contact Centre agent will arrange things for Member within 24 hours.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Can a Thailand Elite member open a bank account?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Thailand Elite Members can open a bank account. Please contact Member Contact Center at 66 (0) 2 352 3000 or memberservice@thailandelite.com for more information and service reservation.”
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What would happen if I only have 3 years left on my passport?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            According to Immigration Bureau of Thailand, if the length of your current passport is not up to five-year period, the Privilege Entry Visa will be affixed in <br />
            accordance with the expiration date stated on the passport. The remaining validity will be affixed on your new passport.
Please be informed that Thailand Elite requires at least three blank visa pages of your current passport and term of the Visa shall be granted in accordance with the validity of Membership.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Can a Thailand elite member open a bank account with online banking?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Thailand Elite Members can open a bank account in Thailand.
            Members can open Thai baht savings account and multi-currencies accounts. Criteria are defined by the bank. <br />
            Thailand Elite has setup partnership with Bangkok Bank and Kasikorn bank for fast forward bank opening; <br />
            but all banks in Thailand may open you an account if you have the Elite visa and the required documents from the bank (utilities bills, …).
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>What are the required documents?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Copy of an identification page of your passport (The passport validity must be at least 1 year on the date of the membership registration)
Color ID photo (high-resolution file) <br /> 
Completed application form of the selected membership
Copy of proof of relationship as Immediate Family of Core Member (in case of family application) <br />
Required Documents (soft copy via email is acceptable or online submission) <br />
WHY DOES THAILAND ELITE REQUIRE A COPY OF YOUR PASSPORT?
The copy of the identification page of your passport will be sent to the Immigration office for a due diligence check. <br />
This is to insure that you are not on the blacklist, watching-list or anything that would prevent you to obtain the Visa.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>If my family member doesn't have elite visa, can we travel to Thailand together?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Thailand Elite Visa is a privilege offered to members only. The privilege of the visa cannot be extended not passed on to any of the member’s accompanying guest(s). <br />
            Therefore, we humbly suggest that non-members should have a proper visa to enter Thailand.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>If I become an Elite Visa member am I eligible to work in Thailand?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Elite Visa Member can apply for Non-B visa and work permit to work in Thailand and it will not have an effect on the validity of his(her) Thailand Elite visa which will <br />
            continue until its expiry date. Therefore, once member get Non-B visa then they have to use their Non-B visa only as per Thai law which allow to hold only one visa. <br /> Kindly be noted that visa & 90-day report is totally separate type. Member need to check for their validity both 90-day report & visa.
            </p>
          </div>
         </div>


         <div className="item duratin-500 px-10 py-2 shadow-sm shadow-black/20 bg-gray-50">
          <div onClick={(e)=>{
            const targetElement = e.currentTarget.parentElement;
            targetElement.classList.toggle("active")
          }} className="flex justify-between cursor-pointer">
            <h2 className='text-lg'>Which citizenship countries are eligible?</h2>
            <div className="">
            <p className='plus'>+</p>
            <p className='minus'>-</p>
            </div>
          </div>
          <div className="ans py-2 mt-2  border-t-2 text-gray-700">
            <p>
            Most of the European, American, Asian, Oceania citizen’s countries are eligible for being members of Thailand Elite. <br />
            The citizens of sanctioned countries by UN may not be eligible, along with some specific countries. <br /> 
            If you have any doubt feel free to contact us. <br />
            ATTENTION: IF YOU HAVE/HAD OVERSTAY RECORD, VOLUNTEER VISA, ED VISA OR MEDICAL TREATEMENT VISA READ HERE <br />
            – Please check if the entry stamp permission on your passport, If you have an outstanding overstayed record on your current stay, you will not be able to obtain a Thailand Elite visa under any circumstances. <br />
            – Please check if you have a history or currently hold a Non-Immigrant type O (Volunteer), you will not be able to obtain a Thailand Elite visa under any circumstances. <br />
            – Please check if you hold a Non-Immigrant MT (Medical Treatment) without the patient reports from the hospital, the medical certificate, and a Non-Immigrant ED* (an education visa without an official document from the Office of Basic Educational Commission: OBEC). <br />
            Once again, if you fall under the condition disclose t the moment you would like to apply or contact us, even approved member who fall under those conditions may have their Thailand Elite Visa rejected.
            </p>
          </div>
         </div>

          {/* {
            data.map((faq=>{
              const {id} = faq
              
              return <MyQuestion key={id} {...faq}></MyQuestion>
            }))
          } */}
        </div>

    </div>
  )
}

export default Faq
