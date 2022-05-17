import Item2 from "./item2";
import { Animated } from "react-animated-css";
function Typewriter2(props) {
  var textArr = props.text.split("");
  return (
    <h1>
      {textArr.map((charItem, i) =>
        <span>
          <Animated animationOut="fadeOut" animationOutDuration={17000} animationOutDelay={3000} isVisible={false}>
            <Animated animationIn="zoomIn" animationInDuration={14000} animationInDelay={3000} isVisible={true}>
              <Animated animationIn="fadeInDownBig" animationInDuration={1000} animationInDelay={300 * i + 4000} isVisible={true}>
                <Item2 charItem={charItem} n={i} key={"item-" + i} />
              </Animated>
              <Animated animationIn="fadeInDownBig" animationInDuration={1000} animationInDelay={300 * i + 4070} isVisible={true}>
                <Item2 charItem={charItem} n={i} key={"item-" + i} />
              </Animated>
              <Animated animationIn="fadeInDownBig" animationInDuration={1000} animationInDelay={300 * i + 4120} isVisible={true}>
                <Item2 charItem={charItem} n={i} key={"item-" + i} />

              </Animated>
              <Animated animationIn="fadeIn" animationInDuration={1000} animationInDelay={300 * i + 4300} isVisible={true}>
                <Animated animationOut="jello" animationOutDuration={1000} animationOutDelay={300 * i + 4300} isVisible={false}>
                  <Item2 charItem={charItem} n={i} key={"item-" + i} />
                </Animated>
              </Animated>
            </Animated>
          </Animated>
        </span>
      )}
    </h1>
  )
}
// fadeInUpBig
export default Typewriter2;