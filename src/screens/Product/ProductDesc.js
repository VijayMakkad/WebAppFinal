import React, { useState, useEffect } from "react";

import "./product_desc.css";
import {
  faShoppingCart,
  faUser,
  faSearch,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimilarProducts from "./SimilarProduct";
import TabSection from "./TabSection";
import ProductPage from "./Product";
import MainBg from "../Background/MainBg";

const ProductDescPage = () => {
  const [activeTab, setActiveTab] = useState("descriptionContent");
  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    const defaultTab = document.querySelector(".tab-item.active");
    const defaultContent = document.querySelector(".tab-content.active");
    if (defaultTab) defaultTab.classList.add("active");
    if (defaultContent) defaultContent.style.display = "block";
    document.getElementById("tabDivider").style.backgroundColor = "yellow";
  }, []);

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  const slideImage = () => {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;
    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  };

  useEffect(() => {
    window.addEventListener("resize", slideImage);
    slideImage();
    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [imgId]);

  return (
    <MainBg>
      <div id="product">
        <div className="white-divider"></div>

        <div className="card-wrapper">
          <div className="card" style={{ display: "contents" }}>
            {/* card left */}
            <div className="img-select">
              {["1", "2", "3", "4"].map((id) => (
                <div className="img-item" key={id}>
                  <a
                    href="#"
                    data-id={id}
                    onClick={(e) => {
                      e.preventDefault();
                      setImgId(id);
                    }}
                  >
                    <img
                      src={`../assets/prod${id}.png`}
                      alt={`product image ${id}`}
                    />
                  </a>
                </div>
              ))}
            </div>
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  {["1", "2", "3", "4"].map((id) => (
                    <img
                      src={`../assets/prod${id}.png`}
                      alt={`product image ${id}`}
                      key={id}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* card right */}
            <div className="product-content">
              <h2 className="product-title">Lira Earrings</h2>
              <div className="product-rating">
                {[...Array(4)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
                <FontAwesomeIcon icon={faStarHalfAlt} />
                <span>4.7 (21)</span>
              </div>

              <div className="product-detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  eveniet veniam tempora fuga tenetur placeat sapiente architecto
                  illum soluta consequuntur, aspernatur quidem at sequi ipsa!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, perferendis eius. Dignissimos, labore suscipit.
                  Unde.
                </p>
              </div>

              <div className="purchase-info">
                <input type="number" min="0" defaultValue="1" />
                <button type="button" className="btn">
                  Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>

              <div className="social-links">
                <p>Share At:</p>
                {[
                  faFacebookF,
                  faTwitter,
                  faInstagram,
                  faWhatsapp,
                  faPinterest,
                ].map((icon, index) => (
                  <a href="#" key={index}>
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
              <div className="product-ul">
                <ul>
                  <li>
                    <span style={{ color: "yellow" }}>SKU:</span> <span>12</span>
                  </li>
                  <li>
                    <span style={{ color: "yellow" }}>Available:</span>{" "}
                    <span>in stock</span>
                  </li>
                  <li>
                    <span style={{ color: "yellow" }}>Category:</span>{" "}
                    <span>Fashion, Style</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <ProductPage/> */}
        <TabSection />

        <SimilarProducts />
      </div>
    </MainBg>
  );
};

export default ProductDescPage;
