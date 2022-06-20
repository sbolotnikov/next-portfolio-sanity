import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { sanityClient, urlFor } from '../sanity'
import { Post, Category } from '../typings'
import useTranslation from 'next-translate/useTranslation'
import NavItem from '../components/Navbar/navItem'
import Image from 'next/image'
import WwwIcon from '../components/svg/wwwIcon'
import Head from 'next/head'

interface Props {
  posts: [Post]
  categories: [Category]
}
function portfolio({ posts, categories }: Props) {
  const [filterTech, setFilterTech] = React.useState<Array<Category>>([])
  const [filterProject, setFilterProject] = React.useState<Array<Post>>(posts)
  const { t } = useTranslation()

  const addTechToFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const ref = event.currentTarget.getAttribute('data-value')
    let alreadyExist = filterTech.filter((category) => category._id == ref)
    if (alreadyExist.length == 0) {
      let filtered = categories.filter((category) => category._id == ref)
      setFilterTech([...filterTech, filtered[0]])
    }
  }
  const removeTechToFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const ref = event.currentTarget.getAttribute('data-value')
    let newArr = filterTech.filter((category) => category._id !== ref)
    setFilterTech(newArr)
  }
  const handleSortUp = (
    event: React.MouseEvent<HTMLButtonElement>,
    sort: Boolean
  ) => {
    event.preventDefault()
    console.log(filterProject.map((item) => item.publishedAt))
    let postsArr: Post[] = [...filterProject]
    postsArr.sort((obj1, obj2) => {
      if (obj1.publishedAt > obj2.publishedAt) {
        return sort ? -1 : 1
      }

      if (obj1.publishedAt < obj2.publishedAt) {
        return sort ? 1 : -1
      }

      return 0
    })

    console.log(postsArr)
    setFilterProject(postsArr)
  }
  useEffect(() => {
    let arrTotal = []
    for (let i = 0; i < posts.length; i++) {
      arrTotal.push(
        posts[i].categories.map((category) => category._ref).toString()
      )
    }
    let arrExclude = []
    console.log(arrTotal)
    let arr = filterTech.map((category) => category._id)
    let n = posts.length
    if (arr.length > 0)
      while (n > 0) {
        n--
        let j = arr.length - 1
        while (j > -1) {
          if (!arrTotal[n].includes(arr[j])) {
            arrExclude.push(n)
            j = 0
          }

          j--
        }
      }
    let postsCopy = []
    for (let i = 0; i < posts.length; i++) {
      if (arrExclude.indexOf(i) < 0) postsCopy.push(posts[i])
    }
    setFilterProject(postsCopy)
    console.log(arrExclude)
  }, [filterTech])
  return (
    <>
      <Head>
      <title>{t('common:Projects')}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <h1 className=" text-center text-3xl font-bold dark:text-light">
        {t('common:Portfolio')}
      </h1>
      <h1 className=" text-md mb-3 text-center font-bold leading-5 dark:text-light">
        {t('common:Filter')}
      </h1>
      <div className="m-auto w-[98%] overflow-scroll rounded-lg p-2 outline-none ring-2 ring-lightpink dark:ring-purple-300 md:w-1/2">
        <div className="m-auto flex  w-fit flex-row items-end justify-center p-2 ">
          {filterTech.length > 0 &&
            filterTech.map((item, index) => {
              return (
                <button
                  className="scale-120 hover:scale-130	 group pointer-events-auto mx-2 flex cursor-pointer flex-col items-center "
                  key={index}
                  data-value={item._id}
                  onClick={removeTechToFilter}
                >
                  <div className="relative h-8 w-8 transition-transform duration-200 ease-in-out group-hover:animate-bounce">
                    <Image
                      src={urlFor(item.imageCat).url()!}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="whitespace-nowrap text-center  tracking-widest opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:text-light">
                    {item.title}
                  </p>
                </button>
              )
            })}
        </div>
      </div>
      <h1 className="text-md mt-3 text-center font-bold leading-5 dark:text-light">
        {t('common:Project types')}
      </h1>
      <div className="w-full overflow-scroll">
        <div className="mx-auto flex w-fit  flex-row items-start justify-center  overflow-visible p-1">
          {categories
            .filter(
              (category) =>
                category.description == 'language' ||
                category.description == 'projects'
            )
            .map((item, index) => {
              return (
                <button
                  className="md:hover:scale-115 group pointer-events-auto relative mx-2 flex h-24 cursor-pointer flex-col items-center justify-center"
                  key={index}
                  data-value={item._id}
                  onClick={addTechToFilter}
                >
                  {item.imageCat && (
                    <div className="relative h-8 w-8 transition-transform duration-200 ease-in-out group-hover:animate-bounce">
                      <Image
                        src={urlFor(item.imageCat).url()!}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 left-0 flex items-center justify-center whitespace-nowrap opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:text-light">
                    <p className="text-center">{t(`common:${item.title}`)}</p>
                  </div>
                </button>
              )
            })}
        </div>
      </div>
      <h1 className="text-md mt-3 text-center font-bold leading-5 dark:text-light">
        {t('common:Techs used')}
      </h1>
      <div className="w-full overflow-scroll">
        <div className="mx-auto flex w-fit  flex-row items-start justify-center  overflow-visible p-1">
          {categories
            .filter(
              (category) =>
                category.description !== 'language' &&
                category.description !== 'projects'
            )
            .map((item, index) => {
              return (
                <button
                  className="md:hover:scale-115 group	pointer-events-auto relative mx-2 flex h-24 cursor-pointer flex-col items-center justify-center"
                  key={index}
                  data-value={item._id}
                  onClick={addTechToFilter}
                >
                  {item.imageCat && (
                    <div className="relative h-8 w-8 transition-transform duration-200 ease-in-out group-hover:animate-bounce">
                      <Image
                        src={urlFor(item.imageCat).url()!}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 left-0 flex items-center justify-center whitespace-nowrap opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:text-light">
                    <p className="text-center">{item.title}</p>
                  </div>
                </button>
              )
            })}
        </div>
      </div>
      <h1 className="text-md mt-3 text-center font-bold leading-5 dark:text-light">
        {t('common:Sort')}
      </h1>
      <div className="flex w-full items-center justify-center">
        <button
          className="m-2 rounded-full bg-lightteal p-2 text-lightlavender transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-lightblue"
          onClick={(e) => handleSortUp(e, true)}
        >
          {t('common:Sortup')}
        </button>
        <button
          className="m-2 rounded-full bg-lightteal p-2 text-lightlavender transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-lightblue"
          onClick={(e) => handleSortUp(e, false)}
        >
          {t('common:Sortdown')}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {filterProject.map((post) => (
          <Link key={post._id} href={`/project/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded">
              <div className="relative">
                <div className="relative h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105">
                  <Image
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-auto bg-lightlavender/90 opacity-0 transition-transform duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-100 dark:bg-purple-900/90">
                  <h3
                    className=" m-auto max-h-[85%] w-5/6 text-center dark:text-light "
                    dangerouslySetInnerHTML={{ __html: post.description }}
                  />
                </div>
              </div>
              <div className=" flex justify-between bg-white p-5 dark:bg-pink-700 dark:text-light">
                <p>{post.title}</p>
                <div className="flex flex-row">
                  {post.href && (
                    <WwwIcon
                      link={post.href}
                      classText=" m-auto w-9 cursor-pointer fill-lightteal transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"
                    />
                  )}

                  <Link href={post.github}>
                    <svg
                      className="m-auto w-10 cursor-pointer stroke-lightteal transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"
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
                </div>
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
  const query = `*[_type=="post"]{
      _id,
      title,
      slug,
      href,
      github,
      description,
      mainImage,
      categories,
      publishedAt
    }
    
    `
  const query2 = `*[_type=="category"]{
      _id,
      title,
      imageCat,
      description
    } 
    
    `
  const posts = await sanityClient.fetch(query)
  const categories = await sanityClient.fetch(query2)
  return {
    props: {
      posts,
      categories,
    },
  }
}
