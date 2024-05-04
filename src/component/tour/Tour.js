import data from "../../data/db.json";

// Css File
import "./Tour.css";

function Tour(props) {
    return (
        <div className="tour">
          {data.map((tour) => {
            return(
            <div key={tour.id}>
              <h2>{tour.name}</h2>
              <img src={tour.image} alt={tour.name} />
            </div>    
            )
          })}
        </div>
      );  
}
export default Tour;
