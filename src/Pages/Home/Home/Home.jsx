import React from "react";
import CategorySlider from "../CategorySlider/CategorySlider";
import Banner from "../Banner/Banner";
import Hakaton from "../Hakaton/Hakaton";

const Home = () => {
  return (
    <div className="gradient-background">
      <Banner></Banner>
      <CategorySlider />
      <Hakaton></Hakaton>
    </div>
  );
};

export default Home;
