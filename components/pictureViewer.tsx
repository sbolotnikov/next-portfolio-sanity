import Image from 'next/image'
import React from 'react'
type PictureType = {
  linkPicture: string
  note: string
  isVideo: boolean
  onChange: (val: boolean) => void
}
function PictureViewer({ linkPicture, note, isVideo, onChange }: PictureType) {
  const el = document.querySelector('#mainPage')
  return (
    <div
      className="absolute left-0 z-[1001] flex h-screen w-screen items-center justify-center bg-slate-500/70 backdrop-blur-md"
      style={{ top: el?.scrollTop }}
      onClick={() => {
        onChange(true)
      }}
    >
      {!isVideo ? (
        <div className="relative m-auto h-full w-full">
          <Image src={linkPicture} layout="fill" objectFit="contain" />
        </div>
      ) : (
        <div className="relative w-screen h-screen">
          <button className="absolute top-14 right-5  h-8 w-8 stroke-slate-50 fill-slate-50 z-[1000]"
            onClick={() => {
              onChange(true)
            }}
          >
            <svg viewBox="0 0 23 23"  xmlns="http://www.w3.org/2000/svg">
            <path d="M1.06069 1.06066C1.64647 0.474877 2.59622 0.474877 3.18201 1.06066L21.5668 19.4454C22.1526 20.0312 22.1526 20.981 21.5668 21.5668C20.981 22.1525 20.0312 22.1525 19.4455 21.5668L1.06069 3.18198C0.474901 2.5962 0.474901 1.64645 1.06069 1.06066Z" />
            <path d="M1.06062 21.5668C0.47483 20.981 0.47483 20.0312 1.06062 19.4454L19.4454 1.06066C20.0312 0.474876 20.9809 0.474876 21.5667 1.06066C22.1525 1.64645 22.1525 2.5962 21.5667 3.18198L3.18194 21.5668C2.59615 22.1525 1.6464 22.1525 1.06062 21.5668Z" />
          </svg>
           </button>
        <iframe src={linkPicture} height="100%" width="100%" frameBorder="0">
          Your browser doesnot support iframe         
        </iframe>
        </div>
      )}

      <div className="absolute right-0 bottom-0 flex w-full items-center justify-center">
        <p className="mb-4 bg-lightcream text-center text-lightteal drop-shadow-[3px_3px_1px_white] md:text-3xl md:drop-shadow-[6px_6px_1px_white]">
          {note}
        </p>
      </div>
    </div>
  )
}

export default PictureViewer
