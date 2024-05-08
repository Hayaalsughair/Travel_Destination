
import { Link } from "react-router-dom";
import Tour from "./tour/Tour.js";
import "./Tours.css";

const Tours = ({ tours }) => {
  return (
    <div className="container">
    <div className="tour">
      {tours && tours.map((tour) => {
        return (
          <div className="tour-preview" key={tour.id}>
            <Link to={`/tour/${tour.id}`}>
              <Tour tour={tour} />
            </Link>
          </div>
        );
      })}
    </div>

    </div>

  );
};

export default Tours;
