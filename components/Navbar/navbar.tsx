import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavItem from './navItem'
import { ThemeContext } from '../../themeContext'
import { ThemeContextType } from '../../@types/theme'
import Burger from './burger'
// import { useSession } from 'next-auth/react';
// import ContactMailIcon from '@mui/icons-material/ContactMail';

type Props = {
  navbarLinks: { url: string; title: string; icon: string }[]
  path: string
  locale?: string | undefined
}

const Navbar = ({ navbarLinks, path, locale }: Props) => {
  const { darkTheme, setTheme } = useContext(
    ThemeContext
  ) as ThemeContextType
  const [style1, setStyle1] = useState({ display: 'none' })
  const [darkMode, setDarkMode] = useState(false);
  const [burgerState, setBurgerState] = useState(false)
  let router = useRouter()

  //   const { data: session, loading } = useSession();
  useEffect(() => {
    if (window.innerWidth<768)
    {
    document.getElementsByClassName('navbar__list')[0].classList.add('w-0')
    let items=document.querySelectorAll('.nav_img')
    for (let i=0;i<items.length;i++){
      items[i].classList.add('w-0')
    }
    document.getElementById("theme-toggle")?.classList.add('hidden');
    document.getElementById("locale-toggle")?.classList.add('hidden');
  }



  
  }, []);  
  return (
    <nav className="navbar    dark:bg-darkBG/25 dark:text-light">
      <ul className='navbar__list '>
        {navbarLinks.map((item, index) => {
          return (
            <li className=" navbar__item bg-lightblue md:bg-transparent" key={index}>
              <NavItem title={item.title} icon={item.icon} url={item.url} />
            </li>
          )
        })}
      </ul>

      <div className="navbar__right_span">
        {/* {((session && session.user.status !== 'admin') || !session) && ( */}
        <button
          id="theme-toggle"
          type="button"
          onClick={() => {
            setTheme(!darkMode)
            setDarkMode(!darkMode)
            !darkMode
              ? document.getElementsByTagName('body')[0].classList.add('dark')
              : document
                  .getElementsByTagName('body')[0]
                  .classList.remove('dark')
          }}
          className=" rounded-lg p-2 hover:bg-lightlavender outline-none focus:bg-lightlavender  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="h-5 w-5"
            fill="#35536B "
            style={darkMode ? { display: 'none' } : { display: 'block' }}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className="h-5 w-5 fill-gray-100"
            style={darkMode ? { display: 'block' } : { display: 'none' }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          id="locale-toggle"
          className="relative m-1 hover:bg-lightlavender outline-none focus:bg-lightlavender rounded-md flex cursor-pointer flex-row dark:bg-slate-700 p-1 "
          onMouseEnter={(e) => {
            setStyle1({ display: 'flex' })
          }}
          onClick={() => {
            if (style1.display == 'none') setStyle1({ display: 'flex' })
            else setStyle1({ display: 'none' })
          }}
        >
          <img
            className="h-6 rounded-full"
            src={`/icons/${router.locale}.svg`}
            alt={`${router.locale} flag`}
          />
          <p className="mx-1">{router.locale?.toUpperCase()}</p>
          <div
            className="absolute top-9 right-0 z-[1000] flex w-[100px] flex-col items-center justify-start"
            style={style1}
          >
            <div
              className="m-1 w-full overflow-hidden rounded-md border-0"
              onMouseLeave={(e) => {
                setStyle1({ display: 'none' })
              }}
            >
              {router.locales?.map((item, index) => {
                return (
                  <div
                    key={`language__${index}`}
                    className=" flex flex-row bg-lightlavender p-1 text-center hover:bg-lightteal hover:text-lightcream focus:outline-none focus:ring   focus:ring-lightteal active:bg-lightteal active:text-lightcream"
                    onClick={() =>
                      router.push(router.asPath, router.asPath, {
                        locale: item
                      })
                    }
                  >
                    <img
                      className="h-6 rounded-full"
                      src={`/icons/${item}.svg`}
                      alt={`${item} flag`}
                    />
                    <div className="mx-1" key={`language2__${index}`}>
                      {item.toUpperCase()}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </button>
        <button className="relative m-1 flex cursor-pointer rounded-md border p-1 md:hidden" onClick={() =>{
          
          burgerState?document.getElementsByClassName('navbar__list')[0].classList.add('w-0'):document.getElementsByClassName('navbar__list')[0].classList.remove('w-0')
          let items=document.querySelectorAll('.nav_img')
          for (let i=0;i<items.length;i++){
            burgerState?items[i].classList.add('w-0'):items[i].classList.remove('w-0')
          }
          burgerState?document.getElementById("theme-toggle")?.classList.add('hidden'):document.getElementById("theme-toggle")?.classList.remove('hidden')
          burgerState?document.getElementById("locale-toggle")?.classList.add('hidden'):document.getElementById("locale-toggle")?.classList.remove('hidden')





         setBurgerState(!burgerState)
        }}>
         <Burger status={burgerState}/>
        </button>
        {/* Select box to change language */}
        {/* )} */}
        {/* {session && (
          <div className="navbar__menu_grid  rounded-full overflow-hidden">
            <Link href={'/profile'}>
              <img
                className="object-fill"
                src={
                  session.user.image
                    ? session.user.image
                    : '/icons/defaultUser.svg'
                }
                alt="profile picture"
              />
            </Link>
          </div>
        )} */}
      </div>
    </nav>
  )
}

export default Navbar
