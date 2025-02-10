import React, { useState, useEffect, useRef, useContext } from "react";
import Text from "./header/Text";
// import Video from "./header/video";
import CardCollection from "./header/CardCollection";
import SmallText from "./componets/SmallText";
import MidBanner from "./componets/MidBanner";
import CardCollectionOfBgChnager from "./componets/CardCollectionOfBgChnager";
import Footer from "./footer/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeContext from "../../ContextProvider"; 
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const videoRef = useRef(null);
  const smallTextRef = useRef(null);
  const smallText2Ref = useRef(null);
  const card1Ref = useRef(null);
  const bannerRef = useRef(null);
  const card2Ref = useRef(null);
  const footerRef = useRef(null);
  const mainRef = useRef(null);
  useGSAP(() => {
    // gsap.from(videoRef.current, {
    //   y: -10,
    //   opacity: 0,
    //   delay: 1.6,
    //   duration: 0.3,
    // });

    gsap.from(smallTextRef.current, {
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: smallTextRef.current,
        start: "top 70%",
        end: "top 10%",
        once: true, // Run only once
        toggleActions: "play none none none",
      },
    });
    gsap.from(smallText2Ref.current, {
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: smallText2Ref.current,
        start: "top 70%",
        end: "top 10%",
        once: true,
        toggleActions: "play none none none",
      },
    });
    gsap.from(bannerRef.current, {
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 70%",
        end: "top 40%",
        once: true,
        toggleActions: "play none none none",
      },
    });
    gsap.from(card2Ref.current, {
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: card2Ref.current,
        start: "top 70%",
        end: "top 40%",
        once: true,
        toggleActions: "play none none none",
      },
    });
    gsap.from(footerRef.current, {
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "top 10%",
        once: true,
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
      <div ref={mainRef} className={` overflow-hidden`}>
        <div>
          <Text />
        </div>
        {/* <div ref={videoRef} className="relative z-10">
          <Video />
        </div> */}
        <div ref={smallTextRef}>
          <SmallText name="Excellence for 2025" />
        </div>
        <div ref={card1Ref}>
          <CardCollection />
        </div>
        <div ref={bannerRef} className="relative z-0">
          <MidBanner />
        </div>
        <div ref={smallText2Ref}>
          <SmallText name="Good Things Never Last" />
        </div>
        <div ref={card2Ref}>
          <CardCollectionOfBgChnager />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
   
  );
};

export default Home;
