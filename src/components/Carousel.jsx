import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import back from '../images/back.png'
import next from '../images/next.png'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
function Carousel() {

    const images = [img1, img2, img3, img4, img5]

    const [index, setIndex] = useState(0);
    const delay = 5000 //Delay between slides in milliseconds 
    let intervalId;

    const handlePrevious = () => {
        const newIndex = index - 1;
        //if newIndex is less than 0, it means we're at the beginning of the array, so we want to set the index to the last image in the array. images.length - 1 gives us the index of the last element in the array.
        setIndex(newIndex < 0 ? images.length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
    };

    useEffect(() => {
        // Start autoplay when the component mounts
        intervalId = setInterval(handleNext, delay);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [index, delay]); // Include index and delay in the dependency array


    return (
        <div className="carousel-container">

            <button onClick={handlePrevious} className="carousel-button">
                <img src={back} alt="" />
            </button>
            <Link to={`/artworks/`}>
                <img src={images[index]} alt={`Image ${index + 1}`} style={{ width: "800px", height: '400px' }} />
            </Link>

            <button onClick={handleNext} className="carousel-button">
                <img src={next} alt="" />
            </button>

        </div>
    )
}

export default Carousel