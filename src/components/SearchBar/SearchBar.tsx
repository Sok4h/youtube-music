import React from 'react';
import './SearchBar.css'

interface SearchBarProps {

    placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {

    let className = "SearchBar";
    return <div>

        <img src="" alt="" />
        <input  className={className} type="text" placeholder={props.placeholder} />
    </div>


        ;
}