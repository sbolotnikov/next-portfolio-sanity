import Head from "next/head"
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router';

function contact() {
  const { t } = useTranslation()
  let router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>{t('contact:Contact_page')}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="text-black">
    
    <div>contact</div>
 
 
    </main>
  </div>
  )
}

export default contact