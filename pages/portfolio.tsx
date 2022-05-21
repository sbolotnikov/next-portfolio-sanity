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
  const [filterTech,setFilterTech] = React.useState<Array<Category>>([]);
  const [filterProject,setFilterProject] = React.useState<Array<Post>>(posts);
  const { t } = useTranslation()

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
  // var arrTotal: string[]=[];
  // for (let i=0; i<posts.length; i++) {
  //   arrTotal.push(posts[i].categories.map(category=>category._ref).toString())
  // }
  useEffect(() => {
    let arrTotal=[];
    for (let i=0; i<posts.length; i++) {
      arrTotal.push(posts[i].categories.map(category=>category._ref).toString())
    }
    let arrExclude=[];
    let postsCopy=posts;

    let arr=filterTech.map(category=>category._id);
    let i=posts.length;
    if (arr.length>0) while(i > 0) {
      i--;
      let j=arr.length-1
      while (j>-1){
        if (arrTotal[i].indexOf(arr[j])<0){
          arrExclude.push(i);
          j=0
        }

        j--;
      }
      for (let i=arrExclude.length; i>0; i--) {postsCopy.splice(arrExclude[i],1)}
        setFilterProject(postsCopy);
    } 
    
      console.log(postsCopy);

  }, [filterTech]);
  return (
    <>
    <h1 className=" font-bold text-center text-3xl dark:text-light">{t("common:Portfolio")}</h1>
    <h1 className=" font-bold text-center text-md leading-5 dark:text-light">{t("common:Filter")}</h1>
    <div className="w-[98%] m-auto overflow-scroll p-2 outline-none ring-2 ring-purple-600 dark:ring-purple-300 rounded-lg">
    <div className="flex flex-row  items-end justify-center w-fit m-auto p-2 ">
    {filterTech.length>0 && filterTech.map((item, index) => {
          return (
            <button className="group cursor-pointer scale-120 hover:scale-130 flex flex-col items-center mx-2 " key={index} data-value={item._id} 
            onClick={removeTechToFilter}>
              <img className="h-8 w-8  group-hover:animate-bounce transition-transform duration-200 ease-in-out" src={urlFor(item.imageCat).url()!} alt="" />
                <p className="opacity-0 tracking-widest  transition duration-300 ease-in-out group-hover:opacity-100 text-center dark:text-light whitespace-nowrap">{item.title}</p>
            </button>
          )
        })}
    </div>
    </div>

    <div className="w-full overflow-scroll">
    <div className="flex flex-row overflow-auto  w-fit mx-auto p-1  items-start justify-center">
    {/* {categories.filter(category=>(category.description=="backend")||(category.description=="projects")||(category.description=="frontend")).map((item, index) => { */}
    {categories.map((item, index) => {  
          return (
            <button className="group cursor-pointer h-24 md:hover:scale-115 flex flex-col justify-center items-center mx-2" key={index} data-value={item._id} 
            onClick={addTechToFilter}>
             {item.imageCat && <img className="h-8 w-8 group-hover:animate-bounce transition-transform duration-200 ease-in-out" src={urlFor(item.imageCat).url()!} alt="" />}
                <p className="opacity-0 tracking-widest transition duration-300 ease-in-out group-hover:opacity-100 text-center dark:text-light whitespace-nowrap">{item.title}</p>
            </button>
          )
        })}
    </div>
    </div>
    
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
    {filterProject.map((post)=>(
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
      imageCat,
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

