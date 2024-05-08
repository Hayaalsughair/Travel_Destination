import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/db.json";
import "./TourDetails.css";

const TourDetails = (props) => {
    const { id } = useParams();
    const getTourData = () => {
        let array = data;
        const dataOfTour = array.filter((data)=> data.id === id );
        return dataOfTour
    };
//reminder filter always will return an array with one object => for this reason i put [0]

    const dataOfTour = getTourData();
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="tour-details card">
            <article>
                <div className="card-header">
                    <h1>{dataOfTour[0].name }</h1>
                </div>
                <div className="card-body">
                    <div className="tourImage">
                        <img src={dataOfTour[0].image} alt ="Tour" />
                    </div>
                    <p>
                        <div className="tour-text">
                        {readMore? dataOfTour[0].info:`${dataOfTour[0].info.substring(0,200)}...`}
                        </div>
                        <br />
                        <div className="under">
                        <button className="card-btn" onClick={()=> setReadMore(!readMore)}>
                            {readMore ? "Less": "More..." }
                        </button>
                        <div className="price">Price: {dataOfTour[0].price}$</div>
                        
                        </div>
 
                    </p>
                </div>
            </article>
        </div>



    )
}

export default TourDetails;


<div class="card">
 <div class="image"></div>
  <div class="content">
    <a href="#">
      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </a>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium 
    </p>

    <a class="action" href="#">
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>