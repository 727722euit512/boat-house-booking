import React from "react";

import "./featured.css";



const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/525149631/photo/indian-houseboats-in-backwaters-of-kerala-india.jpg?s=2048x2048&w=is&k=20&c=NdTE9eXGbgLLrJFLP4O_720c7-XGVRD4dZrRVEx3whw="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/92221598/photo/reflection-in-water.jpg?s=2048x2048&w=is&k=20&c=nUS0v_Mssxh8BKd9faLX8t5EOv-tX226urUoFSS2Hfw="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Indian</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
