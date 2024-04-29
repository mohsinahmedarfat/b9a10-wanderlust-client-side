import { ScrollRestoration } from "react-router-dom";
import Booking from "./Booking";
import Slider from "./Slider";
import TouristSpots from "./TouristSpots";
import Travelers from "./Travelers";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="space-y-36 my-10">
      <ScrollRestoration></ScrollRestoration>
      <Slider></Slider>
      <Fade>
        <TouristSpots></TouristSpots>
      </Fade>
      <Slide>
        <Booking></Booking>
      </Slide>
      <Slide direction="right">
        <Travelers></Travelers>
      </Slide>
      <Bounce>
        <Travelers></Travelers>
      </Bounce>
    </div>
  );
};

export default Home;
