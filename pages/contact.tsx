import Head from "next/head"
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
function contact() {
  const form = useRef();
  const { t } = useTranslation()
  let router = useRouter();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage]= useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, event.target as HTMLFormElement,process.env.NEXT_PUBLIC_PUBLIC_KEY)
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });


      // let data = {
      //     name,
      //     email,
      //     message,
      //     mainEmail:'serge.bolotnikov@gmail.com'
      //   }
      //   console.log( data)
      // fetch('/api/sendemail', {
      //     method: 'POST',
      //     headers: {
      //       'Accept': 'application/json, text/plain, */*',
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //   }).then((res) => {
      //       console.log(res)
      //     if (res.status === 200) {   
      //       setName('')
      //       setEmail('')
      //       setMessage('')
      //     }
      //   })
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2  dark:text-light">
    <Head>
      <title>{t('contact:Contact_page')}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
        <div className="absolute top-0 left-0 h-[100vh] w-[100vw] flex justify-center  items-center">
          <form
            onSubmit={handleSubmit}
            className="w-[80%] h-[80%] max-w-[700px] max-h-[700px] rounded-md flex flex-col justify-between  items-center p-2"
            style={{ boxShadow: '0 0 150px rgb(244 217 190 / 85%)'}}
          > 
            <h1 className=" font-bold text-center text-5xl">{t("contact:haveaQuestion")}</h1>
            <p className="w-full ">
              {t("contact:gladtoanswer")}{' '}
              <strong>+1(917) 916-2840</strong>.
            </p>

            <input
              name="user_name"
              className="w-full rounded "
              type="text"
              placeholder={t("common:yourName")}
              required
              // onChange={(e)=>{setName(e.target.value)}}
              // value = {name}
              minLength={3}
            />

            <input
              name="user_email" 
              className="w-full rounded "
              type="email" 
              placeholder={t("common:email")}
              required
              // onChange={(e)=>{setEmail(e.target.value)}}
              // value = {email}
            />
            <textarea
              name="message"
              className="w-full rounded "
              placeholder={t("contact:anyquestions")}
              required
              // onChange={(e)=>{setMessage(e.target.value)}}
              // value = {message}
              minLength={5}
            />
            <div className="error alert alert-error"></div>
            <button type="submit" value="Send"  className="rounded-full bg-lightteal text-lightlavender p-2 transition delay-150 m-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-lightblue"
            >
              {t("contact:sendMessage")}
            </button>
          </form>
        </div>
      

 
 
    </main>
  </div>
  )
}

export default contact