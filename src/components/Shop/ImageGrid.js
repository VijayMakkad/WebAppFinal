import React from "react";
import "./ImageGrid.css";

const galleryItems = [
  { src: "/assets/dashboard_carousel.png", title: "Hair Pin", count: 3 },
  { src: "/assets/shop/gallery1.png", title: "Earrings", count: 10 },
  { src: "/assets/dashboard_carousel.png", title: "Hair Pin", count: 4 },
  { src: "/assets/dashboard_carousel.png", title: "Earrings", count: 3 },
  { src: "/assets/shop/gallery1.png", title: "Earrings", count: 10 },
  { src: "/assets/dashboard_carousel.png", title: "Hair Pin", count: 3 },
  { src: "/assets/shop/gallery1.png", title: "Earrings", count: 10 },
  { src: "/assets/dashboard_carousel.png", title: "Hair Pin", count: 4 },
  { src: "/assets/shop/gallery4.png", title: "Necklace", count: 1 },
  { src: "/assets/shop/gallery2.png", title: "Hair Pin", count: 34 },
  { src: "/assets/shop/gallery4.png", title: "Necklace", count: 1 },
  { src: "/assets/shop/gallery2.png", title: "Hair Pin", count: 34 }, 
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {galleryItems.map((item, index) => (
        <div key={index} className="grid-item">
          <img src={item.src} alt={item.title} className="grid-image" />
        
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
