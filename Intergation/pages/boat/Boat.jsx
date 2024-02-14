import "./boat.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Boat = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://as2.ftcdn.net/v2/jpg/02/69/15/71/1000_F_269157196_7hFVQrCwq1mhCIHBGVYX1xfOOqIHTGvQ.jpg",
    },
    {
      src: "https://e1.pxfuel.com/desktop-wallpaper/356/504/desktop-wallpaper-kerala-houseboat-lake-boathouse.jpg",
    },
    {
      src: "https://wallpapercave.com/wp/wp2649847.jpg",
    },
    {
      src: "https://c1.wallpaperflare.com/preview/293/808/864/lone-house-house-on-waters-kerala-boat-house.jpg",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvs1WYh8LqDc6nn8NVtSCgAa8jnbjq7m5wUZh18up6-Goo0og5bwldERhoKAdmnVDJuU&usqp=CAU",
    },
    {
      src: "https://i.imgur.com/x4g8Uha.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Header type="list" />
      <div className="boatContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="boatWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="boatTitle">Kerala Boat</h1>
          <div className="boatAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>south of palakad</span>
          </div>
          <span className="boatDistance">
            Excellent location – 500m from center
          </span>
          <span className="boatPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="boatImages">
            {photos.map((photo, i) => (
              <div className="boatImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="boatImg"
                />
              </div>
            ))}
          </div>
          <div className="boatDetails">
            <div className="boatDetailsTexts">
              <h1 className="boatTitle">Stay in the heart of City</h1>
              <p className="boatDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="boatDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Boat;
