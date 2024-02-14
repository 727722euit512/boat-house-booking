import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = () => {
  console.log('Fetching availability...');
  return (
    <div className="searchItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1yyoXQdfxX2_WKq3YH_TUaDlNhQJc0JlYI-lFBMhzvjLWT7t2uUXl1Ukk_il5rZyw2Y&usqp=CAU"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Welcome Drink</span>
        <span className="siSubtitle">
          Boat with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to ="/BoatBooking">
          <button className="siCheckButton">See availability</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
