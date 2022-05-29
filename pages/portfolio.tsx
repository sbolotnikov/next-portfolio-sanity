import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { sanityClient, urlFor } from '../sanity'
import { Post, Category } from '../typings'
import useTranslation from 'next-translate/useTranslation'
import NavItem from '../components/Navbar/navItem'

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
  // var arrTotal: string[]=[];
  // for (let i=0; i<posts.length; i++) {
  //   arrTotal.push(posts[i].categories.map(category=>category._ref).toString())
  // }
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
      <h1 className=" text-center text-3xl font-bold dark:text-light">
        {t('common:Portfolio')}
      </h1>
      <h1 className=" text-md mb-3 text-center font-bold leading-5 dark:text-light">
        {t('common:Filter')}
      </h1>
      <div className="m-auto w-[98%] overflow-scroll rounded-lg p-2 outline-none ring-2 ring-purple-600 dark:ring-purple-300 md:w-1/2">
        <div className="m-auto flex  w-fit flex-row items-end justify-center p-2 ">
          {filterTech.length > 0 &&
            filterTech.map((item, index) => {
              return (
                <button
                  className="scale-120 hover:scale-130 group mx-2 flex cursor-pointer flex-col items-center "
                  key={index}
                  data-value={item._id}
                  onClick={removeTechToFilter}
                >
                  <img
                    className="h-8 w-8  transition-transform duration-200 ease-in-out group-hover:animate-bounce"
                    src={urlFor(item.imageCat).url()!}
                    alt=""
                  />
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
        <div className="mx-auto flex w-fit  flex-row items-start justify-center  overflow-auto p-1">
          {categories
            .filter(
              (category) =>
                category.description == 'language' ||
                category.description == 'projects'
            )
            .map((item, index) => {
              return (
                <button
                  className="md:hover:scale-115 group mx-2 flex h-24 cursor-pointer flex-col items-center justify-center"
                  key={index}
                  data-value={item._id}
                  onClick={addTechToFilter}
                >
                  {item.imageCat && (
                    <img
                      className="h-8 w-8 transition-transform duration-200 ease-in-out group-hover:animate-bounce"
                      src={urlFor(item.imageCat).url()!}
                      alt=""
                    />
                  )}
                  <p className="whitespace-nowrap text-center tracking-widest opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:text-light">
                    {t(`common:${item.title}`)}
                  </p>
                </button>
              )
            })}
        </div>
      </div>
      <h1 className="text-md mt-3 text-center font-bold leading-5 dark:text-light">
        {t('common:Techs used')}
      </h1>
      <div className="w-full overflow-scroll">
        <div className="mx-auto flex w-fit  flex-row items-start justify-center  overflow-auto p-1">
          {categories
            .filter(
              (category) =>
                category.description !== 'language' &&
                category.description !== 'projects'
            )
            .map((item, index) => {
              return (
                <button
                  className="md:hover:scale-115 group mx-2 flex h-24 cursor-pointer flex-col items-center justify-center"
                  key={index}
                  data-value={item._id}
                  onClick={addTechToFilter}
                >
                  {item.imageCat && (
                    <img
                      className="h-8 w-8 transition-transform duration-200 ease-in-out group-hover:animate-bounce"
                      src={urlFor(item.imageCat).url()!}
                      alt=""
                    />
                  )}
                  <p className="whitespace-nowrap text-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:text-light">
                    {item.title}
                  </p>
                </button>
              )
            })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {filterProject.map((post) => (
          <Link key={post._id} href={`/project/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded">
              <div className="relative">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="absolute opacity-0 top-0 left-0 w-full h-full flex justify-center items-center overflow-auto bg-purple-200/90 dark:bg-purple-900/90 transition-transform duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-105">
              <p className=" text-center m-auto w-5/6 max-h-[85%] dark:text-light ">{post.description}</p>
              </div>
              </div>
              <div className="flex justify-between bg-white p-5 dark:bg-pink-700 dark:text-light">
                <p>{post.title}</p>
                <div className="flex flex-row">
                  <Link href={post.href}>
                    <img
                      src="/icons/www.svg"
                      alt="www site"
                      className="m-auto w-10 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"
                    />
                  </Link>

                  <Link href={post.github}>
                    <img
                      src="/icons/github.svg"
                      alt="www site"
                      className="m-auto w-12 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"
                    />
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
      categories
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
