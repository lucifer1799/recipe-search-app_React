import React from "react";
import "./Banner.css";

function Banner(props) {
  
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          Try To Search Here
        </h1>
        <input type="text" className="banner_input" value={props.search} onChange={props.updateSearch} />
        <div className="banner_buttons">
          <button className="banner_button" onClick={props.getSearch}>Search</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
