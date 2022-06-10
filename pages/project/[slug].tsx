import { useEffect, useState } from 'react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { Project } from '../../typings'
import { sanityClient, urlFor } from '../../sanity'
import useTranslation from 'next-translate/useTranslation'
import type { ParsedUrlQuery } from 'querystring'
import Image from 'next/image'
import Link from 'next/link'
import PictureViewer from '../../components/pictureViewer'
import WwwIcon from '../../components/svg/wwwIcon'
import Youtube from '../../components/svg/youtube'
interface QParams extends ParsedUrlQuery {
  slug?: string
}
interface Props {
  project: [Project]
}
const Project = ({ project }: Props) => {
  const [revealPicture, setRevealPicture] = useState(false)
  const [pictureSrc, setPictureSrc] = useState('')
  const [pictureNote, setPictureNote] = useState('')
  const [isVideo, setIsVideo] = useState(false)
  const { t } = useTranslation()
  const onChange = (val: boolean) => {
    setRevealPicture(false)
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--slides',
      (project[0].images.length - 1).toString()
    )
    // document.getElementById('projectHero')!.style.backgroundImage = `url(${urlFor(project[0].mainImage).url()!})`;
  }, [])
  return (
    <div className="w-full h-full flex justify-center items-center">
    
      {revealPicture && (
        <PictureViewer
          linkPicture={pictureSrc}
          note={pictureNote}
          isVideo={isVideo}
          onChange={onChange}
        />
      )}
      <div className="w-full h-full flex justify-center items-center">
      <div className="m-auto">
      <h1 className=" m-5 flex-wrap text-center text-3xl font-bold dark:text-light">
            {t('project:Project')}: {project[0].title}
          </h1>
      <div className="m-auto grid w-[80%] max-w-[1460px] grid-cols-1 md:grid-cols-2 md:gap-2 ">
        <div className=" flex  flex-col items-start justify-center  rounded-md md:justify-start">

          <div className="mediaScroller mx-auto w-[85%] max-w-md bg-slate-500/70">
            <div className="slideTrack">
              {project[0].images.map((item, j) => {
                return (
                  <button
                    key={`package${j}`}
                    className="slide relative h-[50vh]"
                    // onClick={(e)=>{
                    //     if (document.querySelector(".slideTrack")!.className.indexOf('pauseAnim')>-1)  document.querySelector(".slideTrack")!.classList.remove('pauseAnim');
                    //     else document.querySelector(".slideTrack")!.classList.add('pauseAnim')
                    // }}
                  > <div className="relative w-[320px] h-[50vh]" onClick={(e) => {
                        let element=e.currentTarget.children[0].children[0]
                        setPictureSrc(element.getAttribute("src")!)
                        let index: number =
                          +element.getAttribute('data-id')!
                        setPictureNote(project[0].images[index].title)
                        setIsVideo(false)
                        setRevealPicture(true)
                      }}>
                    <Image
                      src={item.link}
                      alt=""
                      data-id={j}
                      layout="fill"
                      objectFit="contain"
                      
                    />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 dark:text-light"><p className="text-center">{item.title}</p></div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-3 flex w-full flex-col items-center justify-center md:justify-start">
          <div className="flex w-full flex-row items-center justify-between">
            {project[0].href &&
            <WwwIcon link={project[0].href} classText=" m-auto w-9 cursor-pointer fill-lightteal transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"/>
            }
            <Link href={project[0].github}>
              <svg
                className="m-auto w-10 cursor-pointer stroke-lightteal stroke-2 transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
            {project[0].youtube &&
            <div onClick={(e) => {
              setPictureSrc(project[0].youtube)
              setPictureNote("")
              setIsVideo(true)
              setRevealPicture(true)
            }}>
            <Youtube  classText="m-auto w-20 cursor-pointer fill-lightteal transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"/>
            </div>
            }
          </div>
          <h1 className=" text-md w-full  max-w-md text-left font-bold leading-5 dark:text-light">
            {t('project:Languages')}:
            <div className="flex w-full flex-row items-start justify-start font-normal">
              {project[0].categories
                .filter((category) => category.description == 'language')
                .map((item, index) => {
                  return (
                    <p
                      className=" m-1 whitespace-nowrap rounded-lg p-2 text-center outline-none ring-2 ring-lightpink dark:text-light dark:ring-purple-300"
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
                    <div className="relative h-9 w-9">
                    <Image
                      src={urlFor(item.imageCat).url()!}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                    </div>
                    <p className="ml-1 whitespace-nowrap text-center dark:text-light">
                      {t(`common:${item.title}`)}
                    </p>
                  </button>
                )
              })}
          </h1>
          <h1 className=" text-md flex w-full max-w-md flex-col text-left font-bold leading-5 dark:text-light">
            {t('project:AdditinalTech')}:
            <div className="flex flex-row items-start justify-start overflow-auto p-2 font-normal ">
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
                      <div className="relative h-8 w-8">
                      <Image
                        src={urlFor(item.imageCat).url()!}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                      </div>
                      <p className="  whitespace-nowrap text-center dark:text-light">
                        {item.title}
                      </p>
                    </div>
                  )
                })}
            </div>
          </h1>
          <h1 className=" text-md flex w-full max-w-md flex-col text-left font-bold leading-5 dark:text-light">
            {t('project:Developer')}:
            <div className="flex flex-row items-start justify-start overflow-auto p-2 font-normal ">
              {project[0].authors.map((item, index) => {
                return (
                  <div
                    className=" mx-2 flex flex-col items-center "
                    key={index}
                  >
                   <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(item.image).url()!}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                    </div>
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
      <div className="m-auto  w-[80%] max-w-[1460px] ">
      <h1 className=" text-md w-full text-left font-bold leading-5 dark:text-light">
        {t('project:Description')}:
        <h2
          className="my-3 rounded-lg bg-lightcream p-2 font-normal outline-none ring-2 ring-lightpink dark:bg-transparent dark:text-light dark:ring-purple-300"
          dangerouslySetInnerHTML={{ __html: project[0].description }}
        />
      </h1>
      </div>
      </div>
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
            youtube,
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
