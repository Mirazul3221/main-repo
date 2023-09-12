import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { blogsData } from './blogsData';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../header-footer/Header';
const Blog = () => {
    const [desc, setDesc] = useState("");
    const {id} = useParams();

    const {pathname} = useLocation();
 
    useEffect(() => {
     
     window.scrollTo({top:0, behavior:"smooth"});

    }, [pathname])
    
    useEffect(() => {
    const targetData = blogsData.find((blog)=>blog.id === parseInt(id))

    setDesc(targetData)
    }, [])
  return (

    <div className='min-h-screen'>
      <div className="bg-[#877604]">
      <Header></Header>
      </div>
      <div className="mx-10 md:mx-20">
      <h2 className='md:text-3xl my-8'>{desc.title_01}</h2>

      {/* =========================section 01============================ */}
      <div className="my-6 flex gap-10">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700'></h3>
        <h4 className='text-lg font-bold text-gray-700'></h4>

       <p className="">{desc.desc_01}</p>
       <p className="mt-2">{desc.subdesc01}</p>
       <p className="mt-2">{desc.subdesc02}</p>
       <p className=""></p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src="" alt="" />
        </div>

      </div>


      {/* =========================section 02============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_02}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_02}</p>
       <p className=""></p>

       <p className="mt-2">{desc.subdesc05}</p>
       <p className="mt-2">{desc.subdesc06}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image03} alt={desc.image03alt} />
        </div>

      </div>


      {/* =========================section 03============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_03}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_03}</p>
       <p className=""></p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image05} alt={desc.image05alt} />
        </div>

      </div> 


      {/* =========================section 04============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_04}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_04}</p>
       <p className="mt-4">{desc.subdesc07}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image07} alt={desc.image07alt} />
        </div>

      </div> 


      {/* =========================section 04============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_05}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_04}</p>
       <p className="mt-4">{desc.subdesc09}</p>
       <p className="mt-4">{desc.subdesc10}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image09} alt={desc.image09alt} />
        </div>

      </div> 


      {/* =========================section 05============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_06}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_06}</p>
       <p className="mt-4">{desc.subdesc11}</p>
       <p className="mt-4">{desc.subdesc12}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image11} alt={desc.image11alt} />
        </div>

      </div> 


      {/* =========================section 06============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_07}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_07}</p>
       <p className="mt-4">{desc.subdesc13}</p>
       <p className="mt-4">{desc.subdesc14}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image13} alt={desc.image13alt} />
        </div>

      </div> 


      {/* =========================section 07============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_08}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_08}</p>
       <p className="mt-4">{desc.subdesc15}</p>
       <p className="mt-4">{desc.subdesc16}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image15} alt={desc.image15alt} />
        </div>

      </div> 


      {/* =========================section 08============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_09}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_09}</p>
       <p className="mt-4">{desc.subdesc17}</p>
       <p className="mt-4">{desc.subdesc18}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image17} alt={desc.image17alt} />
        </div>

      </div> 


      {/* =========================section 09============================ */}
      <div className="my-6">
        <div className="md:w-9/12 md:text-justify text-gray-500">
        <h3 className='text-lg font-bold text-gray-700 my-4'>{desc.title_10}</h3>
       <h4 className='text-lg font-bold text-gray-700 my-4'></h4>

       <p className="">{desc.desc_10}</p>
       <p className="mt-4">{desc.subdesc19}</p>
       <p className="mt-4">{}</p>
        </div>
        <div className="">
          <img className='mt-4 md:mt-8 md:w-9/12' src={desc.image19} alt={desc.image19alt} />
        </div>

      </div> 


      <div className="conclusion mt-6">
      
      <p className='mt-2'>{desc.conclusion01}</p>
      <p className='mt-2'>{desc.conclusion03}</p>
      <p className='mt-2'>{desc.conclusion03}</p>

      </div>



      </div>
    </div>
  )
}

export default Blog
