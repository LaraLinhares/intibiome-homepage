import React from 'react';
import { useState, useEffect } from 'react';

import './Homepage.css';

import Header from "../components/Header/Header.jsx";
import Icons from "../images/icons.png";
import ProductCard from '../components/ProductCard/ProductCard.jsx';

import PinkMask from "../images/pink-mask.png";
import GreenMask from "../images/green-mask.png";
import BlueMask from "../images/blue-mask.png";

import WaterScreen from "../images/water-screen.png";
import Woman1 from "../images/woman-screen.png";
import Woman2 from "../images/woman-screen2.png";

import Footer from "../components/Footer/Footer.jsx";

import Button from "../components/Button/Button.jsx";

import BannerDesktop from "../images/banner-hero.png";
import BannerMobile from "../images/banner-intibiome-02.png"; 
import SecondBannerDesktop from "../images/banner2.png";
import SecondBannerMobile from "../images/banner-intibiome-05.png";



function Homepage() {

  const productData = [
    {
      imageUrl: BlueMask,
      description: 'intibiome wellness daily intimate wash',
      title: 'wellness',
      backgroundColor: '#389CD6',
    },
    {
      imageUrl: GreenMask,
      description: 'intibiome active extra protection intimate wash',
      title: 'active',
      backgroundColor: '#309D5F',
    },
    {
      imageUrl: PinkMask,
      description: 'intibiome agecare dryness relief intimate wash',
      title: 'agecare',
      backgroundColor: '#EE6381',
    },
  ];

  const discoveryData = [
    {
      imageUrl: Woman2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: Woman1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: WaterScreen,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bannerImage = windowWidth > 768 ? BannerDesktop : BannerMobile;
  const secondBannerImage = windowWidth > 768 ? SecondBannerDesktop : SecondBannerMobile;


  return (
    <>
      <div>
        <Header/>
        <img src={bannerImage} alt="Banner" className="banner"/>
      </div>
      
      <div className="presentation">
        <h1>we’re here to help</h1>
        <p>When it comes to caring for our most intimate areas, we’ve lost our connection. <br/>
          Embarrassed, unwilling, or unable to communicate with others, 
          we’re needlessly neglecting the parts of our bodies that need it most. <br/>
          We’re here to help. Providing you with the expertise, 
          knowledge and products you need to feel confident in your personal care. <br/></p>

          <img src={Icons} alt="Icons" className="icons"/>

          <h1>whatever your age. whatever your lifestyle. whatever your interests.</h1>
          <p>Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health. <br/>
            As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.<br/></p>
          
          <h1>our products</h1>
      </div>

      <div className="product-cards-container">
        {productData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <img src={secondBannerImage} alt="Second Banner" className="banner"/>

      <div className="presentation">
        <h1>keep up to date with our discoveries</h1>

      </div>

      <div className="product-cards-container">
        {discoveryData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      
      <div className="presentation"><Button/></div>
      
      <Footer/>

    </>
  );
}

export default Homepage
