import sad from "../images/sad.svg";
import happy from "../images/happy.svg";

const getSmileFace = (mood) => {
  if (mood === ":)") {
    return happy;
  } else if (mood === ":(") {
    return sad;
  }
};

export default getSmileFace;
