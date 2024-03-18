import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'

import { useState } from 'react';
function Carousel() {

    const images = [img1, img2, img3, img4, img5]

    const [index, setIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = index - 1;
        //if newIndex is less than 0, it means we're at the beginning of the array, so we want to set the index to the last image in the array. images.length - 1 gives us the index of the last element in the array.
        setIndex(newIndex < 0 ? images.length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
    };
    return (
        <div className="carousel">
            <button onClick={handlePrevious}>Previous</button>
            <img src={images[index]} alt={`Image ${index + 1}`} />
            <button onClick={handleNext}>Next</button>

        </div>
    )
}

export default Carousel