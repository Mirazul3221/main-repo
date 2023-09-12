import React from 'react'
import Header from '../header-footer/Header'
const Contact = () => {
    const contact = "./images/contact-us.jpg"
  return (
    <div className=''>
<section class="w-screen relative min-h-[18vh] md:min-h-[60vh]"
      style={{ background: `url(${contact})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="bg-black/50">
        <Header></Header>
        </div>
</section>
<div className="md:mx-20 mx-4 md:flex gap-10 py-20">
    <div className="left md:w-1/2">
        <div className="flex mb-20 gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#877604" class="w-20 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
        </svg>
        <p>Over 500+ successful visa approval! Along with our experienced team, you can get it whenever you want!</p>
        </div>
    <form action="#">
        <label htmlFor="name">Your name</label> <br />
        <input className='border-2 focus:outline-none px-4 py-2 md:w-1/2' type="text" />

          <br />
          <br />
        <label htmlFor="Email">Your Email</label> <br />
        <input className='border-2 focus:outline-none px-4 py-2 md:w-1/2' type="text" /> <br /> <br />

        <label htmlFor="Email">Your message (optional)</label> <br />
        <textarea className='border-2 focus:outline-none px-4 py-2 md:w-1/2' name="" id="" cols="30" rows="10"></textarea>
         <br /> <br />

              <button
                   className="border-2 md:text-lg text-sm my-6 border-[#a38c1a] duration-500 text-black hover:text-white hover:bg-[#a38c1a] px-4 md:px-10 py-[2px] md:py-2">
                   Submit
              </button>
    </form>

    </div>
    <div className="right md:w-1/2 bg-gray-100 p-10">
       <h2 className="text-5xl text-[#877604] font-bold">Our Location</h2>
       <p className='my-10'>Contact us or schedule an appointment by google meet or zoom. We have 
        a time slot appointment scheduler to schedule at your flexible time. </p>

  <div className="space-y-4 ">
<div className="item gap-4 flex items-center">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-10 w-10"
  fill="#877604"
  viewBox="0 0 24 24">
  <path
    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
  <p className='text-lg'>Call Us +66 930 839 914 (WhatsApp)</p>
</div>
<div className="item">
  <div className="gap-2 flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#877604" class="w-12 text-[#877604] h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  <p className='text-lg font-bold'>Address</p>
  </div>
  <p className='ml-14 text-[#877604]'>ThaiElite-Visa, Soi Yeak, Ratchaprarop, Bangkok 10400</p>
</div>

    </div>

    </div>
</div>
    </div>
  )
}

export default Contact

{/* <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>  */}
