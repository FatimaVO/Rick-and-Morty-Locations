import React from 'react';

const Locations = ({ location }) => {

    return (
        <div className='locationContainer'>
            <h2 className='locationName'>{location.name}</h2>
            <div className='locationInfo'>
                <p className='type'><b>type: </b><br />{location.type}</p>
                <p className='dimension'><b>dimension: </b><br />{location.dimension}</p>
                <p className='population'><b>population: </b><br />{location.residents?.length}</p>
            </div>
        </div>
    );
};

export default Locations;