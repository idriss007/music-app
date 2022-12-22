import React, { useEffect, useState } from "react";
import music_data from "../../music-data.json";
import SearchBar from "../SearchBar/SearchBar";
import SongCard from "../SongCard/SongCard";
import "./home.css";

function Home() {

    const [albumArray, setAlbumArray] = useState(music_data);

    function handleChange(event) {
        const filteredList = music_data.filter( song => {
            const searchTitle = event.target.value.toLowerCase();
            const currentTitle = song.title.toLowerCase();
            return currentTitle.indexOf(searchTitle) > -1;
        });

        setAlbumArray(filteredList);
    }

    return (
        <div className="container">
            <SearchBar onChange={handleChange} />
            {albumArray.map(song => {
                return <SongCard song={song}/>
            })}
        </div>
    );
}

export default Home;