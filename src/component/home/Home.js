import React from 'react';
import Tours from '../tours/Tours.js';
import data from "../../data/db.json"; 

function Home() {
    return (
        <div className="home">
            <Tours tours={data} title='All Blogs' />
        </div>
    );
}

export default Home;
