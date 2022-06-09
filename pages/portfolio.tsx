import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { sanityClient, urlFor } from '../sanity'
import { Post, Category } from '../typings'
import useTranslation from 'next-translate/useTranslation'
import NavItem from '../components/Navbar/navItem'
import Image from 'next/image'

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
    console.log(filterProject.map((item)=>item.publishedAt))
    let postsArr: Post[] =[...filterProject]
    postsArr.sort((obj1, obj2) => {
      if (obj1.publishedAt > obj2.publishedAt) {
          return sort?-1:1;
      }
  
      if (obj1.publishedAt < obj2.publishedAt) {
          return sort?1:-1;
      }
  
      return 0;
  });
  
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
                  <Link href={post.href}>
                    <svg
                      className="m-auto w-12 cursor-pointer fill-lightteal transition-transform duration-200 ease-in-out hover:scale-110 dark:invert"
                      viewBox="0 0 500 500"
                    >
                      <path
                        d="M420.46,237.495c-3.909-31.63-13.532-57.547-26.984-79.636
	c-16.941,4.558-34.426,8.572-53.31,11.188c-0.292,10.414,2.817,23.047,2.633,35.54c-4.388,0-8.775,0-13.163,0
	c-0.41-11.656-1.604-22.528-3.291-32.907c-21.893,2.677-45.61,3.53-69.105,4.607c-1.533,8.119-0.221,19.084-0.658,28.3
	c-4.388,0-8.775,0-13.163,0c-1.704-8.287,0.083-22.883-0.658-28.3c-23.793-1.655-48.653-2.244-70.421-5.923
	c-1.667,10.618-2.995,21.576-3.291,33.565c-3.395,1.431-9.357,0.296-13.821,0.658c1.125-12.038,2.102-24.224,3.949-35.54
	c-17.361-3.48-34.856-6.827-51.994-10.53c-15.291,20.03-23.635,47.006-27.642,78.319c-3.984-8.74-5.125-20.323-8.556-29.616
	c9.734-38.492,29.553-69.683,56.601-94.115c27.856-25.163,64.087-43.26,112.543-46.07c23.045-1.336,52.051,2.712,71.08,9.214
	c59.453,20.316,102.013,70.423,117.808,132.946C425.631,218.096,423.64,228.389,420.46,237.495z M191.425,90.07
	c-7.22,20.861-13.103,43.059-17.112,67.131c21.785,2.787,44.772,4.37,68.447,5.265c0-27.423,0-54.845,0-82.268
	C222.566,80.406,206.513,84.756,191.425,90.07z M257.239,80.198c-1.535,26.107-0.22,55.064-0.658,82.268
	c24.116-0.016,46.63-1.635,67.79-4.607c-4.269-24.471-9.948-47.53-17.771-68.447C291.865,84.623,276.662,80.301,257.239,80.198z
	 M337.533,155.885c16.91-1.738,31.376-5.919,46.729-9.214c-15.093-21.763-35.98-37.732-60.549-50.019
	C328.847,115.869,333.955,135.112,337.533,155.885z M115.738,146.671c14.863,3.126,29.761,6.218,45.413,8.556
	c3.084-20.171,9.271-40.748,13.163-57.917C151.134,109.674,128.605,126.188,115.738,146.671z"
                      ></path>
                      <path
                        d="M44,216.435c5.704,0,11.408,0,17.112,0c6.212,24.939,12.48,49.824,19.086,74.37
	c6.682-25.787,14.857-50.08,23.035-74.37c4.607,0,9.214,0,13.821,0c7.43,24.819,15.188,49.31,22.377,74.37
	c5.699-25.892,12.728-50.454,20.403-74.37c5.265,0,10.53,0,15.795,0c-10.023,29.904-19.041,60.814-29.617,90.166
	c-4.826,0-9.653,0-14.479,0c-7.941-23.649-15.554-47.629-22.377-72.396c-6.118,25.693-14.757,48.864-23.035,72.396
	c-5.046,0-10.092,0-15.138,0c-8.656-29.955-17.346-59.876-26.984-88.85C44,217.312,44,216.873,44,216.435z"
                      ></path>
                      <path
                        d="M184.186,217.093c4.394-1.53,11.623-0.224,17.112-0.658
	c5.824,25.108,13.052,48.813,18.428,74.37c7.549-24.92,15.615-49.322,23.035-74.37c4.827,0,9.653,0,14.479,0
	c7.095,24.936,15.619,48.441,21.719,74.37c6.521-25.069,13.507-49.675,20.403-74.37c5.484,0,10.969,0,16.453,0
	c-9.723,29.985-19.623,59.793-28.958,90.166c-5.046,0-10.092,0-15.138,0c-7.68-23.691-16.053-46.69-21.719-72.396
	c-7.492,24.538-14.996,49.063-23.693,72.396c-5.046,0-10.091,0-15.137,0C202.539,276.4,193.477,246.632,184.186,217.093z"
                      ></path>
                      <path
                        d="M456,216.435c0,0.438,0,0.877,0,1.316c-10.735,28.754-19.04,59.937-29.616,88.85
	c-4.827,0-9.653,0-14.479,0c-8.014-23.577-15.549-47.634-22.377-72.396c-6.619,25.411-14.188,49.873-23.693,72.396
	c-4.826,0-9.653,0-14.479,0c-8.125-30.267-19.172-61.122-26.326-90.166c5.485,0,10.97,0,16.454,0
	c6.181,24.971,12.372,49.933,19.086,74.37c6.997-25.691,14.274-51.102,23.693-74.37c4.388,0,8.775,0,13.163,0
	c7.327,24.922,15.148,49.35,22.377,74.37c5.617-25.974,12.592-50.59,20.402-74.37C445.47,216.435,450.734,216.435,456,216.435z"
                      ></path>
                      <path
                        d="M328.978,279.616c4.89,14.745,12.864,29.527,6.582,46.729
	c19.578,4.334,40.781,7.044,59.232,12.505c4.408-4.806,6.808-11.62,9.872-17.77c4.827,0,9.653,0,14.479,0
	c-13.552,32.996-34.817,58.628-62.523,78.978c-26.819,19.698-63.768,34.021-107.278,33.565
	c-87.897-0.92-138.762-49.659-169.144-111.885c3.518-1.527,9.866-0.226,14.479-0.658c3.569,5.646,5.985,12.442,9.872,17.77
	c18.042-5.432,38.092-8.855,57.917-12.505c-5.141-17.823,0.955-32.784,7.24-46.07c0.985,15.688,4.084,29.263,5.923,44.097
	c21.39-2.085,43.161-3.787,66.473-3.949c1.884-13.474,2.239-28.475,7.24-38.831c3.809,11.329,8.782,21.493,7.239,38.173
	c20.88,2.594,44.733,2.215,65.157,5.265C325.765,311.505,327.172,295.362,328.978,279.616z M178.92,337.533
	c6.588,27.417,14.967,53.042,25.01,77.004c12.175,2.742,24.532,5.303,38.831,5.923c-0.088-28.07,0.123-65.224,0-86.875
	C220.911,334.332,199.234,335.251,178.92,337.533z M257.239,334.243c-1.535,27.423-0.219,57.697-0.658,86.217
	c13.533-0.507,25.204-2.878,36.856-5.265c10.026-24.198,19.535-48.913,25.668-77.004
	C298.801,336.558,279.195,334.225,257.239,334.243z M165.757,340.166c-17.434,0.787-35.736,6.376-52.652,9.872
	c15.926,25.321,42.444,45.745,73.712,57.917C178.597,386.56,171.248,364.292,165.757,340.166z M332.927,340.166
	c-5.496,24.34-13.604,46.069-21.061,68.447c31.727-12.589,56.719-31.911,75.028-57.917
	C369.689,346.402,351.426,343.166,332.927,340.166z"
                      ></path>
                    </svg>
                  </Link>

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
