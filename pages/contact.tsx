import Head from "next/head"
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
function contact() {
  const { t } = useTranslation()
  let router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage]= useState("");

  const handleSubmit=(e:Event)=>{
      e.preventDefault();
      let data = {
          name,
          email,
          message,
          mainEmail:'sbolotnikov@gmail.com'
        }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          if (res.status === 200) {   
            setName('')
            setEmail('')
            setMessage('')
          }
        })
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
            className="w-[80%] h-[80%] max-w-[700px] max-h-[700px] rounded-md flex flex-col justify-between  items-center p-2"
            style={{ boxShadow: '0 0 150px rgb(255 236 0 / 50%)'}}
            onSubmit={(e)=>handleSubmit}
          >
 
            <h2 className="w-full text-center font-extrabold">Есть вопросы? Пишите!</h2>
            <p className="w-full ">
              Я с удовольствием отвечу! Если вопрос срочный, лучше позвонить{' '}
              <strong>+1(917) 916-2840</strong>.
            </p>

            <input
              id="userName1"
              className="w-full rounded "
              type="text"
              placeholder="Ваше имя"
              required
              onChange={(e)=>{setName(e.target.value)}}
              value = {name}
              minLength={3}
            />

            <input
              id="userEmail1"
              className="w-full rounded "
              type="email" 
              placeholder="E-mail"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
              value = {email}
            />
            <textarea
              className="w-full rounded "
              placeholder="Любые вопросы или пожелания"
              required
              onChange={(e)=>{setMessage(e.target.value)}}
              value = {message}
              minLength={5}
            ></textarea>
            <div className="error alert alert-error"></div>
            <button type="submit" className="rounded-full bg-blue-500 p-2 transition delay-150 m-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              Отправить сообщение
            </button>
          </form>
        </div>
      

 
 
    </main>
  </div>
  )
}

export default contact