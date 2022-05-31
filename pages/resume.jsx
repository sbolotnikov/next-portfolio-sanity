import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

function resume() {
  const { t } = useTranslation()
  let router = useRouter();
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/docs/sergey_bolotnikov_fs_resume.pdf',
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-serif  py-2  dark:text-light">
      <Head>
        <title>{t('common:Resume')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="pt-8 font-bold mb-3 text-5xl">{t('common:Resume')}</h1>
      <main className="grid max-w-[1368px] w-full md:grid-cols-2">
        <div className="w-full">
          <a
            href={'/docs/sergey_bolotnikov_fs_resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="rounded-full bg-blue-500 p-2 transition delay-150 m-10 md:m-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              {t('common:Download')}
            </button>
          </a>
          <div className="max-w-full overflow-auto">

          <div className='webviewer' ref={viewer} style={{ height: '60vh' }}></div>

          </div>
        </div>
        <div className="flex flex-col ml-10  w-[85%] items-start justify-start ">
            < img
              src={ '/images/serega.png'}
              alt="avatar"
              className='h-48 mx-auto my-5 rounded'
            />

          <h2 className="pt-8  font-bold text-3xl">{t("common:name")}</h2>
          <h4 className="text-gray-500 mb-4 font-semibold text-xl">{t("common:Programmer")}</h4>
          <hr className="w-1/2 rounded border-2 bg-[#833fb2] m-auto border-solid border-[#833fb2]" />
          <p className="my-4">{t("resume:MyMoto")}</p>
          <hr className="w-1/2 rounded border-2 bg-[#833fb2] m-auto border-solid border-[#833fb2]" />
          <h5 className="mt-4 font-bold text-lg">{t("common:Address")}</h5>
          <p>3040 Edwin Ave. Apt. #2G, Fort Lee, NJ 07024</p>
          <h5 className="font-bold text-lg">{t("common:Phone")}</h5>
          <p className="flex flex-row"> <img className="h-6" src={`/icons/en.svg`} alt={`USA flag`} /><div>+1(917) 916-2840</div></p>
          <h5 className="font-bold text-lg">{t("common:Email")}</h5>
          <p>sbolotnikov@sbolotnikov.com</p>
          <h5 className="font-bold text-lg">{t("common:Web")}</h5>
          <p className="">https://sbolotnikov.github.io/react-portfolio/</p>
          <hr className="w-1/2 rounded border-2 bg-[#833fb2] mt-4 mx-auto border-solid border-[#833fb2]" />
        </div>
      </main>
    </div>
  )
}

export default resume
