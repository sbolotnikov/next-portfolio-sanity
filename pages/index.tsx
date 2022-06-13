import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import 'animate.css/animate.min.css'
import Typewriter from '../components/typewriter'
import Typewriter2 from '../components/typewriter2'
import ScriptingSVG from '../components/scriptingSVG'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Portrate from '../components/svg/portrate'


const Home: NextPage = () => {
  const { t } = useTranslation()
  let router = useRouter()
  const [hight, setHight] = useState(0)
  const [changeLocale, setChangeLocale] = useState(-1)
  const [scripting, setScripting] = useState(" ");
  const [textLine1, setTextLine1] = useState("");
  const [textLine2, setTextLine2] = useState("")
  const [width, setWidth] = useState(0)
  useEffect(() => {
    portrateReveal()
    setHight(window.innerHeight)
    setWidth(window.innerWidth)
    // console.log(document?.getElementById('q')!.getTotalLength())
  }, [])
  useEffect(() => {
    setChangeLocale(changeLocale+1)
    console.log("locale changed", changeLocale+1);
    setScripting(t("frontpage:name2"));
    setTextLine1(t("frontpage:Welcome to Portfolio of"));
    setTextLine2(t("frontpage:technologies used"))
  }, [t("frontpage:Welcome to Portfolio of")])
  function portrateReveal() {
    let el = document.querySelectorAll<HTMLElement>('#cardImage1>path')
    console.log(el)
    let i = 0
    var timerInterval = setInterval(function () {
      if (!el[i]) {
        document.getElementById('cardImage1')!.style.animation =
          'animate ease-in 8s normal 1'
        document.getElementById('cardImage2')!.style.animation =
          'animate linear 8s reverse 0.5s 1'
        document.getElementById('cardImage1')!.style.opacity = '0'
        document.getElementById('cardImage2')!.style.opacity = '1'
        clearInterval(timerInterval)

        return
      }
      el[i].style!.opacity = '1'
      i++
    }, 30)
  }

  // 1120/1483 *hight*.4     `;
  return (
    <div>
      <Head>
        <title>{t('common:Sergey Bolotnikov Portfolio')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between md:landscape:grid md:grid-cols-2">

        {/* <Animated animateIn='wobble' initiallyVisible={true} animationOut="fadeOut" animationInDuration={2000}   isVisible={true}> */}
        < div
          style={{
            position: 'relative',
            height: '70vh',
            width: '56.6vh',
          }}
        >
                  <div className="h-20 w-20 ">
                <svg
                  viewBox="0 0 300 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>      
                 <path id="q"
                   style={{
                    strokeDasharray: '258',
                    strokeDashoffset: '258',
                    animation: 'dash 2s linear  forwards',
                    }}
                    // d="M60.7568 134.66C78.0015 137.755 95.8424 134.49 110.716 125.523L137.909 138.782L127.112 111.805C138.388 98.8962 144.177 82.4074 143.347 65.6315C142.517 48.8552 135.125 32.9987 122.627 21.2314C110.127 9.46262 93.441 2.65381 75.8961 2.17852C58.3512 1.70322 41.2543 7.59695 28.0173 18.6723C14.7814 29.7468 6.38434 45.1808 4.47953 61.8851C2.57492 78.5877 7.29803 95.3568 17.7219 108.848C28.1477 122.342 43.5122 131.565 60.7568 134.66Z"                  // d="M1 34C3.84847 32.5858 5.28279 31.4256 7.5 28.5L9 26C5.36195 32.6434 3 38.5 2 42C1 45.5 3.29951 45.2813 6.5 44C13.3618 38.7412 16.8716 34.9263 22.5 26.5C15.7522 35.179 14.1471 38.7514 14 43.5C14.5237 45.0376 15.2175 45.3055 17 45C18.8577 44.5154 19.6662 44.0099 21 43"
                  stroke="black" />

                  </g>
                  <g transform="translate(18, 0)">
                  {/* <path id="Б" d="M33.8921 7.46641C33.8921 7.46641 18.4996 39.1622 14.7842 42.6289C11.0688 46.0956 9.09876 46.2427 8.41493 44.6099C6.89024 38.7453 9.49465 35.2347 17.4381 28.762C26.5143 22.7717 33.3616 22.3238 36.0152 23.8095C38.6688 25.2953 41.7418 38.6533 30.1767 44.6099C23.3299 46.6613 19.9345 46.5321 14.7842 43.6194L16.3765 17.3713C13.2552 14.376 12.6611 13.4094 13.7227 8.4569C14.7842 3.50444 28.904 2.91241 53 3.00919" stroke="black"/> */}
                  {/* <path id="e" d="M1 39C10.1607 38.0034 16.5 35.5 17.5 32.5C17.5 32.5 17.5 29 12.5 28C12.5 28 7.8244 28.1678 4 33C2.00432 37.0951 2.12298 38 4 43C5.87702 48 12.4589 49.1128 18.5 39" stroke="black"/>  */}
                  </g>
                </svg>
              
              </div>
          <Portrate/>
        
          <Image
            id="cardImage2"
            src={'/images/profile.png'}
            style={{
              position: 'absolute',
              borderColor: 'transparent',
              opacity: 0,
              top: 0,
              left: 0,
              height: '70vh',
              width: '56.6vh',
              zIndex: '8',
            }}
            layout='fill' 
            objectFit="contain"
            alt="Sergey's Profile"
          />
        </div>
        {/* </Animated> */}

        <div className="absolute right-0 bottom-0 flex h-2/5 w-full items-end justify-center md:relative  md:h-2/3 md:w-7/8 dark:text-light ">
          <motion.div
            id="cloud"
            key={"cloud"}
            initial= {{ opacity: 0, x: 200, y: 200 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
           
            transition={{ duration: 2, delay: 3, type: 'spring', stiffness: 50  }}
            className={
              ' z-10 m-2 p-2 text-sm flex h-full w-full flex-col items-center justify-between rounded-md md:text-lg bg-lightcream text-center dark:bg-gray-700'
            }
          >
            {/* <Typewriter2 text='WELCOME TO UNIMATRIX' /> */}
           
            <div className="ml-3 w-full  text-left">
              <Typewriter
                text={textLine1}
                speed={30}
                delay={changeLocale>0?0:3000}

              />
            </div>
            <Link href="/portfolio" className="">
              <div className=" h-[20%] w-64 mr-12 -rotate-[4deg] stroke-lightteal fill-lightcream dark:stroke-light dark:fill-gray-700 cursor-pointer hover:animate-pulse md:h-20 ">
              <ScriptingSVG 
                  text={scripting}
                  duration={1}
                  delay={5}
                  height={'3rem'}
                  width={'20rem'}
                  stroke={2}
                  cutdelay={changeLocale>0}
                />
              </div>
            </Link>
            <Typewriter
              text={textLine2}
              speed={30}
              delay={changeLocale>0?0:5000}
            />
            <strong>
              <a href="/project/quiz-land">
                <Typewriter text="React " speed={30} delay={5000 + 35 * 30} />
              </a>
              <a  href="/project/new-portfolio">
                <Typewriter
                  text="| TypeScript |"
                  speed={30}
                  delay={5000 + 35 * 30}
                />
              </a>
              <a href="/project/cli-app-employee-tracker">
                <Typewriter text=" NodeJS " speed={30} delay={5000 + 35 * 30} />
              </a>
              <a href="/project/note-taker">
                <Typewriter
                  text="| Express |"
                  speed={30}
                  delay={5000 + 35 * 30}
                />
              </a>
              <a href="/project/mern-ballroom-studio">
                <Typewriter
                  text=" MongoDB "
                  speed={30}
                  delay={5000 + 35 * 30}
                />
              </a>
              <a href="/project/malimalia">
                <Typewriter
                  text="| SVGanimation |"
                  speed={30}
                  delay={5000 + 35 * 30}
                />
              </a>
              <a href="/project/bobby-store-e-commerce">
                <Typewriter
                  text=" Firebase "
                  speed={30}
                  delay={5000 + 35 * 30}
                />
              </a>
              <a href="/project/almost-whattsapp">
                <Typewriter text="| NextJS" speed={30} delay={5000 + 35 * 30} />
              </a>
            </strong>

            <div className="mb-1 flex w-full flex-row items-center justify-center overflow-visible  fill-lightteal stroke-lightteal  ">
              <Link
                href="https://www.facebook.com/bolotnikov/"
              >
                <motion.div 
                  key={"facebook"}
                  initial= {{ opacity: 0, x: 0, y: 100 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}              
                  transition={{ duration: 2, delay: 9, type: 'spring', stiffness: 15  }}
                  className="group flex  cursor-pointer  flex-col  items-center  hover:scale-125">
                <svg 
                className=" mx-1 h-8 w-8 hover:animate-bounce dark:fill-gray-100 dark:stroke-gray-100 md:mb-1 "
                viewBox="0 0 48.605 48.605" >
	<path d="M34.094,8.688h4.756V0.005h-8.643c-0.721-0.03-9.51-0.198-11.788,8.489c-0.033,0.091-0.761,2.157-0.761,6.983l-7.903,0.024
		v9.107l7.913-0.023v24.021h12.087v-24h8v-9.131h-8v-2.873C29.755,10.816,30.508,8.688,34.094,8.688z M35.755,17.474v5.131h-8v24
		h-8.087V22.579l-7.913,0.023v-5.107l7.934-0.023l-0.021-1.017c-0.104-5.112,0.625-7.262,0.658-7.365
		c1.966-7.482,9.473-7.106,9.795-7.086l6.729,0.002v4.683h-2.756c-4.673,0-6.338,3.054-6.338,5.912v4.873L35.755,17.474
		L35.755,17.474z"/>

</svg>
                  <p className=" mx-3 block tracking-widest md:opacity-0 transition duration-300 text-lightteal dark:text-gray-100  ease-in-out group-hover:opacity-100">
                    {'Facebook'}
                  </p>
                </motion.div>
              </Link>
              <Link href="https://github.com/sbolotnikov">
                <motion.div 
                  key={"github"}
                  initial= {{ opacity: 0, x: 0, y: 100 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}              
                  transition={{ duration: 2, delay: 9.5, type: 'spring', stiffness: 15  }}
                  className="group flex  cursor-pointer  flex-col  items-center  hover:scale-125 ">
                  <svg
                    className=" mx-1 h-8 w-8 hover:animate-bounce  dark:stroke-gray-100  md:mb-1 "
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <p className=" mx-3 block tracking-widest md:opacity-0 transition duration-300 text-lightteal dark:text-gray-100  ease-in-out group-hover:opacity-100">
                    {'Github'}
                  </p>
                </motion.div>
              </Link>
              
              <Link href="https://www.linkedin.com/in/sergey-bolotnikov-10035617/">
                <motion.div
                   key={"linkedin"} 
                   initial= {{ opacity: 0, x: 0, y: 100 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}              
                  transition={{ duration: 2, delay: 10, type: 'spring', stiffness: 15  }}
                   className="group flex  cursor-pointer  flex-col  items-center  hover:scale-125">
                <svg
                className=" mx-1 h-8 w-8 hover:animate-bounce dark:fill-gray-100  dark:stroke-gray-100 md:mb-1 "
                // fill="none"
                viewBox="0 0 45.959 45.959" >
		<path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489
			c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733
			C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123
			C8.729,6.477,8.416,7.256,7.847,7.811z"/>
		<path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"/>
		<path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711
			c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67
			C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797
			c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473
			c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"/>
</svg>
                  <p className=" mx-3 block tracking-widest md:opacity-0 transition text-lightteal dark:text-gray-100  duration-300 ease-in-out group-hover:opacity-100">
                    {'LinkedIn'}
                  </p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home
