import React, { useEffect } from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { Project } from '../../typings';
import { sanityClient, urlFor } from '../../sanity';
import useTranslation from 'next-translate/useTranslation';
import type { ParsedUrlQuery } from 'querystring';
import Image from 'next/image'
import Link from 'next/link';
interface QParams extends ParsedUrlQuery {
  slug?: string
}
interface Props {
  project: [Project]
}
const Project = ({ project }: Props) => {

  const { t } = useTranslation()
  useEffect(() => {
    document.documentElement.style.setProperty('--slides', (project[0].images.length-1).toString());
    // document.getElementById('projectHero')!.style.backgroundImage = `url(${urlFor(project[0].mainImage).url()!})`;
  }, [])
  return (
    <div className="w-[80%] max-w-[1460px] m-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
      <div className=" flex  flex-col items-start  justify-start rounded-md">
        <h1 className=" flex-wrap text-center text-3xl font-bold dark:text-light">
          {t('project:Project')}: {project[0].title}
        </h1>
        <div className="mediaScroller mx-auto w-full max-w-md">
          <div className="slideTrack">
            { project[0].images.map((item, j) => {
              return (
                <button
                  key={`package${j}`} className="slide"
                    onClick={(e)=>{ 
                        if (document.querySelector(".slideTrack")!.className.indexOf('pauseAnim')>-1)  document.querySelector(".slideTrack")!.classList.remove('pauseAnim');
                        else document.querySelector(".slideTrack")!.classList.add('pauseAnim')
                    }}
                >
                  <img src={item.link} alt="" className="max-w-md" />
                  <p className="dark:text-light">{item.title}</p>
                </button>
              )
            })}
          </div>
        </div>

        </div>
        <div className="w-full flex flex-col justify-start items-center mt-3">
          <div className="w-full flex flex-row items-center justify-between">
          <Link href={project[0].href}>
            <img
              src="/icons/www.svg"
              alt="www site"
              className="m-auto w-10 dark:invert cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
            />
          </Link>
          <Link href={project[0].github}>
            <img
              src="/icons/github.svg"
              alt="www site"
              className="m-auto w-12 dark:invert cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
            />
          </Link>
              </div>  
          <h1 className=" text-md w-full  max-w-md text-left font-bold leading-5 dark:text-light">
            {t('project:Languages')}:
            <div className="w-full font-normal flex flex-row justify-start items-start">
            {project[0].categories
              .filter((category) => category.description == 'language')
              .map((item, index) => {
                return (
                  <p
                    className=" m-1 whitespace-nowrap rounded-lg p-2 text-center outline-none ring-2 ring-purple-600 dark:text-light dark:ring-purple-300"
                    key={index}
                  >
                    {item.title}
                  </p>
                )
              })}
          </div>
          </h1>
          <h1 className="text-md w-full max-w-md text-left font-bold leading-5 dark:text-light">
            {t('project:TypeOfProject')}:
            {project[0].categories
              .filter((category) => category.description == 'projects')
              .map((item, index) => {
                return (
                  <button
                    className=" m-2 flex flex-row items-center "
                    key={index}
                  >
                    <img
                      className="h-8 w-8 "
                      src={urlFor(item.imageCat).url()!}
                      alt=""
                    />
                    <p className=" whitespace-nowrap text-center dark:text-light">
                      {t(`common:${item.title}`)}
                    </p>
                  </button>
                )
              })}
          </h1>
          <h1 className=" text-md flex w-full max-w-md flex-col text-left font-bold leading-5 dark:text-light">
            {t('project:AdditinalTech')}:
            <div className="flex flex-row font-normal items-start justify-start overflow-auto p-2 ">
              {project[0].categories
                .filter(
                  (category) =>
                    category.description !== 'projects' &&
                    category.description !== 'language'
                )
                .map((item, index) => {
                  return (
                    <div
                      className=" scale-120 hover:scale-130 mx-2 flex flex-col items-center "
                      key={index}
                    >
                      <img
                        className="h-8 w-8 "
                        src={urlFor(item.imageCat).url()!}
                        alt=""
                      />
                      <p className="  whitespace-nowrap text-center dark:text-light">
                        {item.title}
                      </p>
                    </div>
                  )
                })}
            </div>
          </h1>
          <h1 className=" text-md flex w-full max-w-md flex-col text-left font-bold leading-5 dark:text-light">
          {t('project:Description')}: 
          <p className="my-3 p-2 outline-none rounded-lg font-normal ring-2 ring-purple-600 dark:text-light dark:ring-purple-300">
              {project[0].description}
          </p>
        </h1>
          <h1 className=" text-md flex w-full max-w-md flex-col text-left font-bold leading-5 dark:text-light">
            {t('project:Developer')}:
            <div className="flex flex-row font-normal items-start justify-start overflow-auto p-2 ">
              {project[0].authors.map((item, index) => {
                return (
                  <div
                    className=" mx-2 flex flex-col items-center "
                    key={index}
                  >
                    <img
                      className="h-8 w-8  rounded-full"
                      src={urlFor(item.image).url()!}
                      alt=""
                    />
                    <p className="  whitespace-nowrap text-center dark:text-light">
                      {item.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </h1>
        </div>
    </div>
  )
}

export default Project
export const getStaticProps: GetStaticProps<QParams> = async ({ params }) => {
  const query = `*[_type=="post" && slug.current=="${params?.slug}"]{
            _id,
            title,
            slug,
            href,
            description,
            github,
      mainImage,
      "images": images[]->{title,link},
      "categories": categories[]->{title,imageCat, description},
      "authors": author[]->{name,image},
        }
          
          `

  const project = await sanityClient.fetch(query)
  return {
    props: {
      project,
    },
  }
}
export const getStaticPaths: GetStaticPaths<QParams> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}
