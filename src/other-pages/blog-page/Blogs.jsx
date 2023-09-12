import React, { useState , useEffect } from 'react'
import Header from '../../header-footer/Header'
import { blogsData } from './blogsData'
import { Link, useLocation } from 'react-router-dom';
const Blogs = () => {
  const {pathname} = useLocation()
  useEffect(() => {
     
    window.scrollTo({top:0, behavior:"smooth"});

   }, [pathname])
   
    const [data, setData] = useState(blogsData);
    const shortenData = (str, num)=>{
       if (str.length > num) {
        return str.slice(0, num) + " ....."
       }else{
       return str
       }
    } 
// ===================pagination======================
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(3);

const pages = [];
for (let i = 0; i < data.length / itemsPerPage; i++) {
  pages.push(i)
  
}

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
const handleClick = (e)=>{
 setCurrentPage(Number(e.target.id))
}
  return (
    <div className="">
        <div className="bg-gray-500">
            <Header></Header>
        </div>
    <div  className='grid grid-cols-1 md:grid-cols-3 m-10'>
     {currentItems.map(blog=>(
        <article key={blog.id} className='px-4 py-6'>
          <h2 className='text-lg font-bold'>{blog.title_01}</h2>
          <img className='h-[200px]' src={blog.titleImage} alt={blog.titleImageAlt} />
          <p className='mt-4 text-gray-500'>{shortenData(blog.desc_01, 200)}</p>
          <div className="py-2 px-4 mt-4 border-2 inline-block rounded-sm">
          <Link className='' to={`../${blog.id}`}>Read More</Link>
          </div>
        </article>
     ))}
    </div>

    <ul className='flex mx-12'>
    {pages.map(number=>(
      <li onClick={handleClick} key={number+1} id={number+1} className='w-10 h-10 cursor-pointer border-2 flex items-center justify-center'>{number+1}</li>
    ))}
    </ul>
    </div>
  )
}

export default Blogs
