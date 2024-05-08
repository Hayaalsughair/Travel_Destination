import './Tour.css';

const Tour = ({ tour }) => {
    return (

            <div className="tour-card">
                <h2 className="cardHeader"> {tour.name} </h2>
                <div className="tour-image card-body">
                    <img src={tour.image} alt="tour" />
                </div>
            </div>
        
    );
};

export default Tour;
