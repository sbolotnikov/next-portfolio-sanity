import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { sanityClient, urlFor } from "../sanity";
import { Post, Category } from '../typings';
import useTranslation from 'next-translate/useTranslation'
import NavItem from '../components/Navbar/navItem';


interface Props {
    posts: [Post];
    categories: [Category]
}
function portfolio({posts, categories}:Props) {
  const [filterTech,setFilterTech] = React.useState<Array<Category>>([])
  const { t } = useTranslation()
  console.log(posts)

  const addTechToFilter = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    const ref = event.currentTarget.getAttribute('data-value');
    let alreadyExist=filterTech.filter(category=>category._id==ref);
    if (alreadyExist.length==0){
    let filtered=categories.filter(category=>category._id==ref);
    setFilterTech([...filterTech, filtered[0]])
    }
  }
  const removeTechToFilter = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    const ref = event.currentTarget.getAttribute('data-value');
    let newArr=filterTech.filter(category=>category._id!==ref);
    setFilterTech(newArr)
  }
  useEffect(() => {
      let arr=filterTech.map(category=>category._id)
      
      let arr2=posts[0].categories.map(category=>category._ref)
      console.log(arr,arr2)
  }, [filterTech]);
  return (
    <>
    <h1 className=" font-bold text-center text-4xl dark:text-light">{t("common:Portfolio")}</h1>
    <h1 className=" font-bold text-center text-lg dark:text-light">{t("common:Filter")}</h1>
    <div className="flex flex-row  items-end justify-center">
    {filterTech.length>0 && filterTech.map((item, index) => {
          return (
            <button className="group cursor-pointer md:hover:scale-115 flex flex-col items-center mx-2" key={index} data-value={item._id} 
            onClick={removeTechToFilter}>
              <img className="h-8 w-8  group-hover:animate-bounce transition-transform duration-200 ease-in-out" src={urlFor(item.image).url()!} alt="" />
                <p className="opacity-0 tracking-widest  transition duration-300 ease-in-out group-hover:opacity-100 text-center dark:text-light whitespace-nowrap">{item.title}</p>
            </button>
          )
        })}
    </div>



    <div className="flex flex-row overflow-auto items-start justify-center">
    {categories.filter(category=>(category.description=="backend")||(category.description=="projects")||(category.description=="frontend")).map((item, index) => {
          return (
            <button className="group cursor-pointer h-24 md:hover:scale-115 flex flex-col justify-center items-center mx-2" key={index} data-value={item._id} 
            onClick={addTechToFilter}>
              <img className="h-8 w-8 group-hover:animate-bounce transition-transform duration-200 ease-in-out" src={urlFor(item.image).url()!} alt="" />
                <p className="opacity-0 tracking-widest transition duration-300 ease-in-out group-hover:opacity-100 text-center dark:text-light whitespace-nowrap">{item.title}</p>
            </button>
          )
        })}
    </div>



   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
    {posts.map((post)=>(
     <Link key={post._id} href={`/project/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded">
        <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="" />
        <div className="flex justify-between p-5 bg-white dark:bg-pink-700 dark:text-light">
        <p >{post.title}</p>
        </div>
      </div>
     </Link>
    ))}
    </div> 
    
   </>
  )
}

export default portfolio
export const getServerSideProps = async () => {
    const query=`*[_type=="post"]{
      _id,
      title,
      slug,
mainImage,
categories
    }
    
    `;
    const query2=`*[_type=="category"]{
      _id,
      title,
      image,
      description
    } 
    
    `;
    const posts = await sanityClient.fetch(query);
    const categories = await sanityClient.fetch(query2);
    return {
        props: {
            posts, categories
        }
    }
  }

