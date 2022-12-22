import React, { useEffect, useState } from "react";
import music_data from "../../music-data.json";
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

            <div className="search-bar-div">
                <input placeholder="Ara.." id="search-bar" onChange={(event) => {handleChange(event)}}>

                </input>
            </div>

            {albumArray.map(x => {
                return(
                    <div className="card">
                        <div className="image-div">
                            <img id="album-img" src={x.imageUrl}></img>
                        </div>

                        <div className="album-info-div">
                            <div className="song-name-div">
                                <p>{x.title}</p>
                            </div>

                            <div className="detail-info-div">
                                <div className="artist-info-div">
                                    <p id="artist-name">{x.artist}</p>
                                    <p id="year">{x.year}</p>
                                </div>
                                <div className="sold-info-div">
                                    <p id={x.isSoldOut ? "isSoldOut" : null}>{x.isSoldOut ? "TÜKENDİ" : null}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
                
            }
        </div>
    );
}

export default Home;