import React from 'react';
import { Artist } from '../Artist/Artist';

interface ListProps {

    title: string;

}


export const List:React.FC<ListProps> =(props)=>{


    return <div className="list">

        <h2 className="title">{props.title}</h2>

        <Artist name="ducktails" subscribers="10m" image="https://rutarock.com/wp-content/uploads/2017/10/ducktails.jpg" artistUrl="#" ></Artist>
      <Artist name="ducktails" subscribers="10m" image="https://rutarock.com/wp-content/uploads/2017/10/ducktails.jpg" artistUrl="#" ></Artist>
      <Artist name="ducktails" subscribers="10m" image="https://rutarock.com/wp-content/uploads/2017/10/ducktails.jpg" artistUrl="#" ></Artist>

    </div>
}