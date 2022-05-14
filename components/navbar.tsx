import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useSession } from 'next-auth/react';
// import ContactMailIcon from '@mui/icons-material/ContactMail';

type Props = {
  navbarLinks: { url: string; title: string }[]
  path: string
  locale?: string | undefined
}

const Navbar = ({ navbarLinks, path, locale }: Props) => {
  const [style1, setStyle1] = useState({ display: 'none' })
  let router = useRouter()
  // Determines if the "menu icon" was clicked or not. Note that this icon is only visible when the window width is small.
  const [menuClicked, setMenuClicked] = useState(false)
  //   const { data: session, loading } = useSession();
  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked)
  }


  return (
    <nav className="navbar">
      <Link className="navbar__link" href={'/'}>
        <span className="navbar__logo">
          {path !== '/' ? (
            <img
              className="h-10 rounded bg-black"
              src={'/icons/logo.svg'}
              alt="call root"
            />
          ) : (
            <div></div>
          )}
        </span>
      </Link>
      <ul
        className={
          menuClicked ? 'navbar__list navbar__list--active' : 'navbar__list'
        }
      >
        {/* {nav.width()} */}
        {menuClicked && (
          <li className="navbar__item" key={'zeroitem'}>
            <Link className="navbar__link bg-main-bg" href={'tel:9179162840'}>
              <a
                className="flex flex-row items-center justify-center"
                onClick={() => {
                  setMenuClicked(false)
                }}
              >
                <div className="w-4">
                  <img src={'/icons/call.svg'} alt="menu call" />
                </div>
                <span>+1(917)916-2840</span>
              </a>
            </Link>
          </li>
        )}
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <Link className="navbar__link" href={item.url}>
                <a
                  onClick={() => {
                    setMenuClicked(false)
                  }}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="navbar__right_span">
        {/* {((session && session.user.status !== 'admin') || !session) && ( */}
        <div className="navbar__menu_grid">
          <Link href={'tel:+19179162840'}>
            <img
              className="bg-black object-fill"
              src={'/icons/call.svg'}
              alt="menu call"
            />
          </Link>
        </div>
        {/* )} */}
        {/* {((session && session.user.status !== 'admin') || !session) && ( */}

        <div
          className="relative m-1 p-1 flex cursor-pointer flex-row rounded-sm border outline-none"
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
              className="m-1 w-full overflow-hidden rounded-md border"
              onMouseLeave={(e) => {
                setStyle1({ display: 'none' })
              }}
            >
              {router.locales?.map((item, index) => {
                return (
                  <div
                    key={`language__${index}`}
                    className=" flex flex-row p-1 text-center hover:bg-purple-300 hover:text-white focus:outline-none focus:ring   focus:ring-purple-300 active:bg-purple-400 active:text-white"
                    onClick={()=>router.push(router.asPath, router.asPath, { locale: item })}
                  >
                    <img
                      className="h-6 rounded-full"
                      src={`/icons/${item}.svg`}
                      alt={`${item} flag`}
                    />
                    <div className="mx-1" key={`language2__${index}`}>{item.toUpperCase()}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
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
        {menuClicked ? (
          <div className="navbar__menu" onClick={toggleMenuClick}>
            <img src={'/icons/close.svg'} alt="menu close" />
          </div>
        ) : (
          <div className="navbar__menu" onClick={toggleMenuClick}>
            <img src={'/icons/burger.svg'} alt="menu burger" />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
