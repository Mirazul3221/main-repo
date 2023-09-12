import React from 'react'
import Header from '../header-footer/Header'
import { Link } from 'react-router-dom'

const About = () => {
  const about = "./images/about-us.jpg"
  return (
    <div>
       <section class="w-screen relative min-h-[60vh]"
      style={{ background: `url(${about})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
       <Header></Header>
    {/* <div class="w-full h-full absolute top-0 left-0 bg-black/80"></div> */}
    <div class=" w-full h-full">
        <div class="z-10 p-4 md:p-20">
            <h2 class="uppercase md:text-2xl mb-10 text-white">Welcome to Thailand Elite Visa</h2>
            <h2 class="md:text-7xl text-white border-l-[6px] border-[#a38c1a] py-2 px-4 font-thin">We Are Always Ready <br />
                <span class="font-bold text-[#a38c1a]">For Your Welfare</span>
            </h2>
            <p class="text-white md:w-1/2 mt-6">Our extended helping hand can bring you success in Thailand</p>
        </div>
    </div>
</section>

<div class="md:flex my-10 justify-center items-center">
    <div class="left md:w-7/12">
        <div class="my-4">
            <h2 class="md:text-5xl text-2xl border-l-[6px] border-gray-500 py-2 px-4 font-thin">WHO
                <br />
                <span class="font-bold"> WE ARE</span>
            </h2>
        </div>
        <p>
            THAILAND ELITE originated from a singular goal: to present to our esteemed foreign guests Thailand’s finest vacationing and business experiences in several unique and special packages. In July 2003, Thailand Privilege Card Co., Ltd., the operator of Thailand Elite Card, gained state-owned enterprise status within the Tourism Authority of Thailand (“TAT”), its sole shareholder.
            <br />
            <br />
            Thailand Elite’s objectives are to attract affluent guests, businessmen, entrepreneurs, investors, and long-stay groups by offering enhancing benefits, privileges, rights, and services to our Members. With the helpful government authority and guidance of the TAT, Thailand Elite members gained access to these encompassing benefits beginning with a host of VIP arrival services at the airport.
            <br />
            <br />
            We feel that Thailand Elite – featuring first-class and exclusive privileges for immigration and airport services, as well as extensive leisure and business benefits – is the finest country residency program in the world.
            <br />
            <br />
            Extraordinary treatment at golf courses, spas, hotels, resorts, restaurants, hospitals, and medical facilities throughout our country await our Members.
            <br />
            <br />
            These benefits and privileges are yours because — as an esteemed friend of Thailand — we want to maximize your enjoyment and share with us the thrill of visiting the Land of Smiles.
        </p>
    </div>
    <div class="right">
          <img src="./images/passport.png" alt="" />
    </div>
</div>

<div class="team-members container mx-auto my-10">
        <div class="my-4 flex my-10 justify-center">
            <h2 class="md:text-5xl text-2xl border-l-[6px] border-gray-500 py-2 px-4 font-thin">Our Devoted team members are
                <br />
                <span class="font-bold">Always Ready to help you </span>
            </h2>
        </div>
        <div class="leader flex justify-center">
            <div class="md:w-4/12 p-16 shadow-md">
                <div class="overflow-hidden rounded-full border-2 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. APICHAI CHATCHALERMKIT.jpg" alt="MR. APICHAI CHATCHALERMKIT" />
                </div>
                <div class="text">
                    <h2 class="text-lg font-bold text-[#a38c1a] text-center">MR. APICHAI CHATCHALERMKIT</h2>
                    <h2 class="text-center text-gray-700">Board Member and President (Acting)</h2>
                </div>
            </div>
        </div>
        <div class="team-members grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. PORNTHEP PANTANAPAT.jpg" alt="MR. APICHAI CHATCHALERMKIT"/>
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. APICHAI CHATCHALERMKIT</h2>
                        <h2 class="text-center text-sm text-gray-700">Board Member and President (Acting)</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. RATCHADAWAN LOETSILATHONG.jpg" alt="MS. RATCHADAWAN LOETSILATHONG" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. RATCHADAWAN LOETSILATHONG</h2>
                        <h2 class="text-center text-sm text-gray-700">Vice President Administrative and Corporate Affairs</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. ATTABOON ATTHAYUWAT.jpg" alt="MR. ATTABOON ATTHAYUWAT" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. ATTABOON ATTHAYUWAT</h2>
                        <h2 class="text-center text-sm text-gray-700">Sales & Distributions Management Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. PEERASAK PRADUBWIT.jpg" alt="MR. PEERASAK PRADUBWIT" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. PEERASAK PRADUBWIT</h2>
                        <h2 class="text-center text-sm text-gray-700">Government Relations Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MRS. MUTTANA SRIPHO.jpg" alt="MRS. MUTTANA SRIPHO" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MRS. MUTTANA SRIPHO</h2>
                        <h2 class="text-center text-sm text-gray-700">Government Relations Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. PACHARA LIMRATTANAMONGKOL.jpg" alt="MS. PACHARA LIMRATTANAMONGKOL" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. PACHARA LIMRATTANAMONGKOL</h2>
                        <h2 class="text-center text-sm text-gray-700">Information & Technology Management Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. THANAKIJ VAJIRAWORAKAM.jpg" alt="MR. THANAKIJ VAJIRAWORAKAM" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. THANAKIJ VAJIRAWORAKAM</h2>
                        <h2 class="text-center text-sm text-gray-700">Member Liaison Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                         <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MRS. VANIDA AMORNKUL.jpg" alt="MRS. VANIDA AMORNKUL" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MRS. VANIDA AMORNKUL</h2>
                        <h2 class="text-center text-sm text-gray-700">Airport Service Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                         <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. PITAK LARNPOR.jpg" alt="MR. PITAK LARNPOR" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. PITAK LARNPOR</h2>
                        <h2 class="text-center text-sm text-gray-700">Legal Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                      <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. ANONGNART NUANLAONG.jpg" alt="MS. ANONGNART NUANLAONG" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. ANONGNART NUANLAONG</h2>
                        <h2 class="text-center text-sm text-gray-700">Financial Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MRS. PANIDA KASEMPIBOONCHAI.jpg" alt="MR. APICHAI CHATCHALERMKIT" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MRS. PANIDA KASEMPIBOONCHAI</h2>
                        <h2 class="text-center text-sm text-gray-700">Executive Secretary Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MRS. NISA CHARNSRI.jpg" alt="MRS. NISA CHARNSRI" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MRS. NISA CHARNSRI</h2>
                        <h2 class="text-center text-sm text-gray-700">Member Contact Center Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. SUAGKANOK VIRIYAKIETTIKUL.jpg" alt="MS. SUAGKANOK VIRIYAKIETTIKUL" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. SUAGKANOK VIRIYAKIETTIKUL</h2>
                        <h2 class="text-center text-sm text-gray-700">Alliance & Business Development manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                            <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. CHUMRAT PONGSUWAN.jpg" alt="MR. CHUMRAT PONGSUWAN"/>
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. CHUMRAT PONGSUWAN</h2>
                        <h2 class="text-center text-sm text-gray-700">Human Resources Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. SUCHEERA NOISUMRAN.jpg" alt="MS. SUCHEERA NOISUMRAN" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. SUCHEERA NOISUMRAN</h2>
                        <h2 class="text-center text-sm text-gray-700">Sales Administrative Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. NATJAKORN EKKAPHAN.jpg" alt="MS. NATJAKORN EKKAPHAN" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. NATJAKORN EKKAPHAN</h2>
                        <h2 class="text-center text-sm text-gray-700">Advertising & Marketing Promotion Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. SOMCHAI KARNBODHI.jpg" alt="MR. SOMCHAI KARNBODHI" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. SOMCHAI KARNBODHI</h2>
                        <h2 class="text-center text-sm text-gray-700">Risk Management Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. SARISA CHAWALWONGTAWAD.jpg" alt="MS. SARISA CHAWALWONGTAWAD" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. SARISA CHAWALWONGTAWAD</h2>
                        <h2 class="text-center text-sm text-gray-700">Human Resources Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. SOMSUB JIWPRASAT.jpg" alt="MR. SOMSUB JIWPRASAT" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. SOMSUB JIWPRASAT</h2>
                        <h2 class="text-center text-sm text-gray-700">Corporate Planning Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MRS. JAMJARUS TANUOAMAI.jpg" alt="MRS. JAMJARUS TANUOAMAI" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MRS. JAMJARUS TANUOAMAI</h2>
                        <h2 class="text-center text-sm text-gray-700">Corporate Communications Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. RATCHANEE AMNUAIPHON.jpg" alt="MS. RATCHANEE AMNUAIPHON" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. RATCHANEE AMNUAIPHON</h2>
                        <h2 class="text-center text-sm text-gray-700">Marketing and Business Development Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. RATTANAMON MEESOMBAT.jpg" alt="MS. RATTANAMON MEESOMBAT" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. RATTANAMON MEESOMBAT</h2>
                        <h2 class="text-center text-sm text-gray-700">Administration Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. HATHAIRAT JEEPETNGAM.jpg" alt="MS. HATHAIRAT JEEPETNGAM" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. HATHAIRAT JEEPETNGAM</h2>
                        <h2 class="text-center text-sm text-gray-700">Corporate Planning Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. PARITA NIEMWONGSE.jpg" alt="MS. PARITA NIEMWONGSE" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. PARITA NIEMWONGSE</h2>
                        <h2 class="text-center text-sm text-gray-700">Member Relations and Services Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. NON DITTHAPHAIBOON.jpg" alt="MR. NON DITTHAPHAIBOON" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. NON DITTHAPHAIBOON</h2>
                        <h2 class="text-center text-sm text-gray-700">Information Technology Manager</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MS. ISARIYA KLEESUWAN.jpg" alt="MS. ISARIYA KLEESUWAN" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MS. ISARIYA KLEESUWAN</h2>
                        <h2 class="text-center text-sm text-gray-700">Internal Audit Director</h2>
                    </div>
                </div>
            </div>
            <div class="team-mamber flex justify-center">
                <div class="p-8 shadow-md">
                    <div class="overflow-hidden rounded-full border-2 md:w-auto w-32 border-gray-500 mb-4">
                        <img class="w-full scale-100 hover:scale-105 duration-500" src="./images/about-us/MR. TEERATAD SUEBVONGNIRAT.jpg" alt="MS. PARITA NIEMWONGSE" />
                    </div>
                    <div class="text">
                        <h2 class="text-md font-bold text-[#a38c1a] text-center">MR. TEERATAD SUEBVONGNIRAT</h2>
                        <h2 class="text-center text-sm text-gray-700">Procurement Manager</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <a href="/"> Go Back </a>
        <br />
        <Link to="/">Go Back </Link>

    </div>
  )
}

export default About
