import Navbar from './Navbar/navbar';
// import Footer from '../components/footer';
import Head from "next/head";
import * as React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ThemeContext } from '../themeContext';
import { ThemeContextType } from '../@types/theme'
// import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
type Props = {
    children: JSX.Element,
  };
export default function Layout({ children }: Props) {
//   const {data:session, loading} = useSession();
  const { darkTheme } = React.useContext(ThemeContext) as ThemeContextType;
  const { t } = useTranslation()
  React.useEffect(() => {
      darkTheme.dark? document.getElementById("mainPage")?.classList.remove('lightBG'):document.getElementById("mainPage")?.classList.remove('darkBG')
      darkTheme.dark? document.getElementById("mainPage")?.classList.add('darkBG'):document.getElementById("mainPage")?.classList.add('lightBG')
}, [darkTheme.dark]);
  const router = useRouter();
  let navbarLinks = [
    { url: '/', title: t("common:Home"), icon:'<svg  fill="none" viewBox="0 0 24 24"  stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>' },  
    { url: '/portfolio', title: t("common:Portfolio"), icon:'<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>' },
    { url: '/contact', title: t("common:Contact"), icon:'<svg fill="none"  viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" /></svg>' },
    { url: '/resume', title: t("common:Resume"), icon:'<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>' },
    { url: 'tel:+19179162840', title: t("common:CallMe"), icon:'<svg fill="none" viewBox="0 0 24 24"  stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>' },
  ];



  let navbarLinksAdmin = [
    { url: '/book', title: 'Забронировать' },
    { url: '/admin/0/0', title: 'Расписание' },
    { url: '/adm_location/0', title: 'Резервации' },
    { url: '/contacts/0', title: 'Где находится?' },
  ];
  let navbarLinksSuper = [
    { url: '/book', title: 'Забронировать' },
    { url: '/admin/0/0', title: 'Расписание' },
    { url: '/adm_location/0', title: 'Резервации' },
    { url: '/contacts/0', title: 'Где находится?' },
    { url: '/user_screen', title: 'Пользователи' },
  ];
//   let opt=session?{ url: '/logout', title: 'Выйти' }:{ url: '/login', title: 'Регистрация' }
//   navbarLinks.push(opt);
//   navbarLinksAdmin.push(opt);
//   navbarLinksSuper.push(opt);
  return (
    <div>
      <Head>

      </Head>

      <main id="mainPage" className="h-screen  bg-cover bg-center text-lightteal containerFont  relative text-lg overflow-hidden overflow-y-scroll" 
    //   style={{backgroundImage:"url('/images/fon1.jpg')"}}
      >
        {/* <Navbar navbarLinks={(session && session.user.status ==="admin")?navbarLinksAdmin:(session && session.user.status ==="super")?navbarLinksSuper:navbarLinks} path={router.asPath} /> */}
        <Navbar navbarLinks={navbarLinks} path={router.asPath} locale={router.locale}/>
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
