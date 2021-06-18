import React from 'react';
import './style/Loader.css'

const Loader = () => {
    return(
        <div className="Loader">
            <div className="lds-grid">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default Loader