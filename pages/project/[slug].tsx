import React, { useEffect } from 'react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { Project } from '../../typings';
import {useRouter} from 'next/router'
import { sanityClient, urlFor } from "../../sanity";
import useTranslation from 'next-translate/useTranslation';
import type { ParsedUrlQuery } from 'querystring'
import Image from 'next/image';
import Link from 'next/link';
interface QParams extends ParsedUrlQuery {
    slug?: string
  }
interface Props {
    project: [Project];
}
const Project = ({project}:Props) => {
    const router = useRouter();
    // const [filterTech,setFilterTech] = React.useState<Array<Category>>(project[0].categories);
  const {locale} = router.query
  console.log(router.query.locale)
  const { t } = useTranslation();
  useEffect(() => {

    // document.getElementById('projectHero')!.style.backgroundImage = `url(${urlFor(project[0].mainImage).url()!})`;
  }, []);
  return <>

  <h1 className=" font-bold text-center text-3xl dark:text-light">{t('project:Project')}: {project[0].title}</h1>
   <img className="w-full max-w-md mx-auto" src={urlFor(project[0].mainImage).url()!} alt="main Project Image"/>
    <h1 className=" font-bold text-left flex flex-row justify-start text-md leading-5 dark:text-light">{t("project:Languages")}:
    { project[0].categories.filter(category=> category.description=='language').map((item, index) => {
          return (
                 <p className=" text-center dark:text-light whitespace-nowrap m-1 p-2 outline-none ring-2 ring-purple-600 dark:ring-purple-300 rounded-lg" key={index}>{item.title}</p>          
          )
        })} 
    </h1>
    <h1 className="w-full max-w-md font-bold text-left text-md leading-5 dark:text-light">{t("project:TypeOfProject")}:
    { project[0].categories.filter(category=> category.description=='projects').map((item, index) => {
          return (
            <button className=" flex flex-row items-center m-2 " key={index}  >
                <img className="h-8 w-8 " src={urlFor(item.imageCat).url()!}  alt="" />
                 <p className=" text-center dark:text-light whitespace-nowrap">{t(`project:${item.title}`)}</p>
            </button>
          )
        })} 
    </h1>
    <h1 className=" flex flex-col overflow-hidden font-bold text-left text-md leading-5 dark:text-light">{t("project:AdditinalTech")}:
    
    <div className="flex flex-row  items-start overflow-auto justify-start   p-2 ">
    { project[0].categories.filter(category=>(category.description!=='projects' && category.description!=='language')).map((item, index) => {
          return (
            <button className="group cursor-pointer scale-120 hover:scale-130 flex flex-col items-center mx-2 " key={index}  >
              <img className="h-8 w-8 " src={urlFor(item.imageCat).url()!}  alt="" />
                 <p className="  text-center dark:text-light whitespace-nowrap">{item.title}</p>
            </button>
          )
        })}
    </div>
    </h1>
    <Link href={project[0].href}>
    <img src="/icons/www.svg" alt="www site" className="w-10 m-auto dark:invert " />
    </Link>
    <div className="flex flex-row overflow-scroll  items-end justify-center w-fit m-auto p-2 ">
    { project[0].authors.map((item, index) => {
          return (
            <button className="group cursor-pointer scale-120 hover:scale-130 flex flex-col items-center mx-2 " key={index}  >
              <img className="h-8 w-8  rounded-full" src={urlFor(item.image).url()!}  alt="" />
                 <p className="  text-center dark:text-light whitespace-nowrap">{item.name}</p>
            </button>
          )
        })}
    </div>
  </>;

}

export default Project;
    export const getStaticProps: GetStaticProps< QParams> = async ({ params }) => {
        
        const query=`*[_type=="post" && slug.current=="${params?.slug}"]{
            _id,
            title,
            slug,
            href,
            github,
      mainImage,
      "categories": categories[]->{title,imageCat, description},
      "authors": author[]->{name,image},
        }
          
          `;

          const project = await sanityClient.fetch(query);
    return {
        props: {
            project
        }
    }
  }
  export const getStaticPaths: GetStaticPaths<QParams>= async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}