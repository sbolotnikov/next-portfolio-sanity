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
    { url: '/', title: t("common:Home"), icon:'/icons/navigation/home.svg' },  
    { url: '/portfolio', title: t("common:Portfolio"), icon:'/icons/navigation/briefcase.svg' },
    { url: '/contact', title: t("common:Contact"), icon:'/icons/navigation/inbox.svg' },
    { url: '/resume', title: t("common:Resume"), icon:'/icons/navigation/resume.svg' },
    { url: 'tel:+19179162840', title: t("common:CallMe"), icon:'/icons/navigation/phone.svg' },
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
