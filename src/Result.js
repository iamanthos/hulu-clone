import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard.js';
import './Result.css';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Result({selectedOption}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //run this everytime the component loads
        async function fetchData() {
            const response = await axios.get(selectedOption);
            setMovies(response.data.results);
            return response;
        }

        fetchData();
    }, [selectedOption]);

    return(
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Result;
