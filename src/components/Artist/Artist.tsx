import React from 'react';

import './Artist.css'

interface ArtistProps {

    name: string;
    subscribers:string;
    image:string;
    artistUrl:string;
}

export const Artist: React.FC<ArtistProps> = (props)=> {


    return <div className="artist">

            <img src={props.image} className="artist__image"/>
            <a href={props.artistUrl} className="artist__name">{props.name}</a>
            <p className="artist__subscribers">{props.subscribers}</p>

    </div>;
}