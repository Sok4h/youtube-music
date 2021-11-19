import React from 'react';
import { Album } from '../Album/Album';
import { Artist } from '../Artist/Artist';
import { HeaderSimilarTo } from '../HeaderSimilarTo/HeaderSimilarTo';
import { Link } from '../Link/Link';
import { List } from '../List/List';
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <Link text="Home" url="http://localhost"></Link>
          <Link text="Explore" url="http://localhost"></Link>
          <Link text="Library" url="http://localhost"></Link>
          <SearchBar placeholder="Search"></SearchBar>
        </nav>
      </header>

      <main>

        <section className="favorite">

          <h2 className="title__favorite">Your favorites</h2>


          <div className="favorite__list">

            <Artist name="Ducktails" subscribers="10m" image="https://www.spotlyrics.com/images/artists/18/ducktails-17795.jpg" artistUrl="#" ></Artist>
            <Artist name="Ducktails" subscribers="10m" image="https://www.spotlyrics.com/images/artists/18/ducktails-17795.jpg" artistUrl="#" ></Artist>
            <Artist name="Ducktails" subscribers="10m" image="https://www.spotlyrics.com/images/artists/18/ducktails-17795.jpg" artistUrl="#" ></Artist>
            <Artist name="Ducktails" subscribers="10m" image="https://www.spotlyrics.com/images/artists/18/ducktails-17795.jpg" artistUrl="#" ></Artist>
            <Artist name="Ducktails" subscribers="10m" image="https://www.spotlyrics.com/images/artists/18/ducktails-17795.jpg" artistUrl="#" ></Artist>

          </div>

        </section>
        <section>

          <HeaderSimilarTo image="https://i.pinimg.com/originals/80/45/a3/8045a32bb65834da02366ec836005eb8.png" title="Real Estate"></HeaderSimilarTo>

          <div className="similar__list">

            <Album name="Ducktails" albumName="St. Catherine" albumUrl="#" image="https://f4.bcbits.com/img/a0338730057_10.jpg" artistUrl="#" explicit={true} ></Album>
            <Album name="Ducktails" albumName="St. Catherine" albumUrl="#" image="https://f4.bcbits.com/img/a0338730057_10.jpg" artistUrl="#" explicit={true} ></Album>
            <Album name="Ducktails" albumName="St. Catherine" albumUrl="#" image="https://f4.bcbits.com/img/a0338730057_10.jpg" artistUrl="#" explicit={true} ></Album>
            <Artist name="A Beacon School" subscribers="100M" image="https://i.scdn.co/image/ab6761610000e5ebfcef6dedbda272f4f886e9a1" artistUrl="#" ></Artist>
            <Artist name="A Beacon School" subscribers="100M" image="https://i.scdn.co/image/ab6761610000e5ebfcef6dedbda272f4f886e9a1" artistUrl="#" ></Artist>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
