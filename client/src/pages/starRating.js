import React from 'react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../index.css';


const stars = Array(5).fill(0);

const StarRating = () => {
    const [rating, setRating] = useState(null);

    return(
        <>
            {stars.map((star, i) => {
                const ratingValue = i+1;
                return (
                    <label>
                        <input type="radio" name="fb" value={ratingValue} onClick= {() => setRating(ratingValue)}/>
                        <FaStar className="stars" color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}/>
                    </label>
                );
            })}
        </>
        );
}

export default StarRating;