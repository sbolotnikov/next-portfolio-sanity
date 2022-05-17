import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { t } = useTranslation()
  let router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 text-dark bg-lightBG dark:text-light dark:bg-darkBG">
      <Head>
        <title>{t('common:Sergey Bolotnikov Portfolio')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
      

      <img className="h-6" src={`/icons/${router.locale}.svg`} alt={`${router.locale} flag`} />
      {/* call name of the variable from  the translation.json file to t() method */}
      <h1>{t("common:name")} : {t('common:manish')}</h1> 
   
      </main>
    </div>
  )
}

export default Home
