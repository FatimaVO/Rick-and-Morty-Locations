import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ResidentInfo = ({residentUrl}) => {

    const [residentInfo, setResidentInfo] = useState ({})

    useEffect(() =>{
        axios.get(residentUrl)
        .then(res => setResidentInfo(res.data))

    },[])

    let color = residentInfo.status === "Alive" ? 'green' : (residentInfo.status === "Dead" ? 'red' : 'gray');


    console.log(residentInfo);

    return (
        <div className='residentInfo'>
            <img className='residentImg' src={residentInfo.image} alt="" />
            <div className= "residentDescription">
                <h3 className='residentName'>{residentInfo.name}</h3>
                <div className='statusInfo'>
                    <div className='statusIndicator' style={{background: color }}></div>
                    <p className='statusSpecieText'>{residentInfo.status}{" - "}{" "}{residentInfo.species}</p>
                </div>
                <div className='origin'>
                    <p>origin: <b>{residentInfo.origin?.name}</b></p>
                </div>
                <div className='episodes'>
                    <p>episodes where appear: <b>{residentInfo.episode?.length}</b></p>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;