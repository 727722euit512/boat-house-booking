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
      src: "https://media.istockphoto.com/id/497685805/photo/houseboat.jpg?s=2048x2048&w=is&k=20&c=VoPifYMWlHaBonjuNLXzKt0on_6v3etUsL3-VImQOe8=",
    },
    {
      src: "https://media.istockphoto.com/id/685976818/photo/boats-and-canoes-are-important-mode-of-transport-in-this-part-of-kerala-called-alleppey.jpg?s=2048x2048&w=is&k=20&c=L6nZhHnfU3jn57xiKUwOvcV1KNg29MvUlWTf5RZqDxs=",
    },
    {
      src: "https://media.istockphoto.com/id/1325801443/photo/boat-racing-across-a-lake-with-wake-behind-it-green-trees-in-the-background-and-clouds-in-the.jpg?s=2048x2048&w=is&k=20&c=YaWoTXgN6M8ukWcS_oQAX1RTpB0uLUKskyRV0D2krLk=",
    },
    {
      src: "https://media.istockphoto.com/id/1172808900/photo/houseboat-on-kerala-backwaters-in-alleppey-india.jpg?s=2048x2048&w=is&k=20&c=YyA-0ONG8gIwBlmXqilJkSPJmPHtAWSkAc-N7-b0tpM=",
    },
    {
      src: "https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?s=612x612&w=0&k=20&c=G432lmdUz9qrW6D4sZYxLe6K-Km85OEmZg0qpcGyRCI=",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPf-AdvT4pKRO6-xcVeWGR977Ll-Lv8zuMtu8894GaQ&s",
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
          <h1 className="boatTitle">Tower Street Apartments</h1>
          <div className="boatAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
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
