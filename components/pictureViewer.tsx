import React from 'react'
type PictureType = {
  linkPicture: string
  note: string
  onChange: (val: boolean) => void
}
function PictureViewer({ linkPicture, note, onChange }: PictureType) {
  const el = document.querySelector('#mainPage')
  return (
    <div
      className="absolute left-0 z-[1001] flex h-screen w-screen items-center justify-center bg-slate-500/70 backdrop-blur-md"
      style={{ top: el?.scrollTop }}
      onClick={() => {
        onChange(true)
      }}
    >
      <img
        src={linkPicture}
        alt=""
        className="max-w-screen m-auto max-h-[96vh] object-scale-down"
      />
      <div className="absolute right-0 bottom-0 flex w-full items-center justify-center">
        <p className="mb-4 text-center text-lightteal drop-shadow-[3px_3px_1px_white] md:text-3xl md:drop-shadow-[6px_6px_1px_white]">
          {note}
        </p>
      </div>
    </div>
  )
}

export default PictureViewer