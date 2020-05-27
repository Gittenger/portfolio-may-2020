import ReactLogo from "../../assets/react.svg";
import ReduxLogo from "../../assets/redux.svg";
import JSLogo from "../../assets/javascript.svg";
import CSSLogo from "../../assets/css3.svg";
import SagaLogo from "../../assets/redux-saga.svg";
import HerokuLogo from "../../assets/heroku.svg";
import FirebaseLogo from "../../assets/firebase.svg";
import PugLogo from "../../assets/pug.svg";
import NodeLogo from "../../assets/node.svg";
import StripeLogo from "../../assets/stripe.svg";

const createIcons = (techStack, icons = []) => {
  techStack.names.forEach((item) => {
    if (item.name === "React") icons.push(ReactLogo);
    if (item.name === "Redux") icons.push(ReduxLogo);
    if (item.name === "JavaScript") icons.push(JSLogo);
    if (item.name === "CSS") icons.push(CSSLogo);
    if (item.name === "Saga") icons.push(SagaLogo);
    if (item.name === "Heroku") icons.push(HerokuLogo);
    if (item.name === "Firebase") icons.push(FirebaseLogo);
    if (item.name === "Node") icons.push(NodeLogo);
    if (item.name === "Pug") icons.push(PugLogo);
    if (item.name === "Stripe") icons.push(StripeLogo);
  });
  return icons;
};

export default createIcons;
