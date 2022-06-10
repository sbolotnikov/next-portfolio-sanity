import Item from './item'
import { useEffect } from 'react'

function Typewriter({ text, speed, delay }) {
  var textArr = text.split('')
  let i = 0
  useEffect(() => {
    if (text>"")
    setTimeout( ()=> {
      let timerIntervalbefore = setInterval(function () {
        let timerInterval = setInterval(function () {
          let element = document.querySelector('span.n')
          if (element!==null){
          if (i==textArr.length) {
            clearInterval(timerInterval)
            clearInterval(timerIntervalbefore)
            return
          }
          element.className = ''
          element.className = 'glow'
          if (i > 0) {
            document.querySelector('.glow')?.classList.remove('glow')
          }
          i++
          if (i === text.length) {
            document.querySelector('.glow')?.classList.remove('glow')
          }
        }
        }, speed)
      }, textArr.length * speed)
    }, delay)
    
  }, [text])
  return (
    <span>
      {textArr.map((charItem, i) => (
        <Item charItem={charItem} key={'item-' + i} />
      ))}
    </span>
  )
}

export default Typewriter
