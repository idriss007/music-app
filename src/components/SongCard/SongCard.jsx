import React from "react";
import "./songcard.css";

function SongCard(props) {
    
        return(
                <div className="card">
                    <div className="image-div">
                        <img id="album-img" src={props.song.imageUrl}></img>
                    </div>

                    <div className="album-info-div">
                        <div className="song-name-div">
                            <p>{props.song.title}</p>
                        </div>

                        <div className="detail-info-div">
                            <div className="artist-info-div">
                                <p id="artist-name">{props.song.artist}</p>
                                <p id="year">{props.song.year}</p>
                            </div>
                            <div className="sold-info-div">
                                {props.song.isSoldOut && (<p id={props.song.isSoldOut && "isSoldOut"}>"TÜKENDİ"</p>)}
                            </div>
                        </div>
                    </div>
                </div>
        );
    
}

export default SongCard;