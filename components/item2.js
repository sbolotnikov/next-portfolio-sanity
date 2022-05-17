
function Item2(props) {
    let height = window.innerHeight;
    let width = window.innerWidth;
    return (
        <span className='letterStyle' style={{left:`${props.n*6.5-Math.floor(40* Math.sqrt(width/height))}vw` }} >{props.charItem}</span>
    );
  }
  export default Item2;