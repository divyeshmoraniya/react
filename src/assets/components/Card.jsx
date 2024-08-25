import React from 'react';

export default function Card() {
    return (
        <>
            <div className='container row align-items-start'>
            <div className="card col" style={{ width: '18rem' }}>
                    <img src="react\src\assets\components\nighthawk-shoots-3dx1M_rOU-k-unsplash.jpg" className="card-img-top" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Rum</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Buy it</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="path/to/your/image.jpg" className="card-img-top" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Buy</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="path/to/your/image.jpg" className="card-img-top" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </>
    );
}
