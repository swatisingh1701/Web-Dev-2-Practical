import React, { useState, useEffect } from "react";

const ImagesApi = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
       
        const imgs = data.products.map((item) => item.thumbnail);
        setImages(imgs);
      })
      .catch((err) => console.log(err));
  }, []);

  // will be showing 4 images
  const handleNext = () => {
    if (index + 4 < images.length) {
      setIndex(index + 4);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {images.slice(index, index + 4).map((img, i) => (
          <img
            key={i}
            src={img}
            alt="product"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ))}
      </div>

      
      <button onClick={handleNext} class="nextbtn">
        Next
      </button>

    </div>
  );
};

export default ImagesApi;