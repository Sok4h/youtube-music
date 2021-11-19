import React from 'react';
import './HeaderSimilarTo.css'

interface HeaderProps {

    image:string;
    title:string;
}

export const HeaderSimilarTo:React.FC<HeaderProps> = (props) => {


    return <div className="header">

            <img src={props.image} className="header__img"  />

            <div className="header__container">

            <p>SIMILAR TO</p>
            <h3 className="header__title">{props.title}</h3>
            </div>


    </div>

}