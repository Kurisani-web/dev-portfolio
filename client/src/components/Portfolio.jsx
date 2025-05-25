import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Data from "./Data";
export default function Portfolio() {
  // initializing AOS animation
  useEffect(() => {
    AOS.init();
  }, []);
  // filter tab working logic
  // create usestate variable
  const [data, setFilter] = useState(Data);
  // we will use map method on data to find and return the category value
  const catValue = Data.map((value) => {
    return value.category;
  });
  // getting tab using set method without having duplicate value
  const getTab = ["All", ...new Set(catValue)];
  // now we will matched the category value to passed argument
  const filterCat = (category) => {
    if (category === "All") {
      setFilter(Data);
      // return;
    } else {
      const filtered = Data.filter((value) => {
        return value.category == category;
      });
      setFilter(filtered);
    }
  };
  return (
    <div className="portfolio-section">
      <div className="header">
        <span>Creative Portfolios</span>
        <h2>Recent Works</h2>
        <p className="text-muted">
           Explore some of my latest projects 
           where I’ve applied my skills to create 
           effective, user-friendly solutions. 
           Each project showcases my dedication to 
           quality and innovation in web and app development.
        </p>
      </div>
      <div className="portfolio-container">
        <div className="filter-tab">
          {getTab.map((category, index) => {
            return (
              <button onClick={() => filterCat(category)} key={index}>
                {category}
              </button>
            );
          })}
        </div>
        <div className="filtered-items">
          {data.map((value) => {
            const { id, image, title, description } = value;
            console.log(image);
            return (
              <div
                className="item"
                data-aos="fade"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                key={id}
              >
                <div className="img">
                  <img src={image} alt={title} />
                  <i className="bi bi-plus"></i>
                </div>
                <h4>{title}</h4>
                <p className="text-muted">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
