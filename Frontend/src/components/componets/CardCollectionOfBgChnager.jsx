import React from 'react';
import BgChangeCard from './BgChangeCard';

const CardCollectionOfBgChanger = () => {
    return (
        <div>
            <div>
                <div className="flex overflow-x-scroll overflow-y-hidden gap-5 hide-scrollbar">
                    <BgChangeCard id={1} normalIMG="/images/DOUBLESIDE/1.avif" hoverIMG="/images/DOUBLESIDE/1.1.avif" name="Elegant Gown" price="$120" />
                    <BgChangeCard id={2} normalIMG="/images/DOUBLESIDE/2.avif" hoverIMG="/images/DOUBLESIDE/2.2.avif" name="Casual Summer Dress" price="$80" />
                    <BgChangeCard id={3} normalIMG="/images/DOUBLESIDE/3.avif" hoverIMG="/images/DOUBLESIDE/3.3.avif" name="Chic Evening Wear" price="$150" />
                    <BgChangeCard id={4} normalIMG="/images/DOUBLESIDE/4.4.avif" hoverIMG="/images/DOUBLESIDE/4.jpeg" name="Classic Black Dress" price="$90" />
                    <BgChangeCard id={5} normalIMG="/images/DOUBLESIDE/5.avif" hoverIMG="/images/DOUBLESIDE/5.5.avif" name="Bohemian Maxi Dress" price="$110" />
                    <BgChangeCard id={6} normalIMG="/images/DOUBLESIDE/6.avif" hoverIMG="/images/DOUBLESIDE/6.6.avif" name="Formal Business Dress" price="$130" />
                    <BgChangeCard id={7} normalIMG="/images/DOUBLESIDE/7.avif" hoverIMG="/images/DOUBLESIDE/7.7.avif" name="Casual Denim Dress" price="$75" />
                    <BgChangeCard id={8} normalIMG="/images/DOUBLESIDE/8.avif" hoverIMG="/images/DOUBLESIDE/8.8.avif" name="Floral Party Dress" price="$100" />
                    <BgChangeCard id={9} normalIMG="/images/DOUBLESIDE/9.avif" hoverIMG="/images/DOUBLESIDE/9.9.avif" name="Silk Cocktail Dress" price="$140" />
                </div>
                <div className="flex overflow-x-scroll overflow-y-hidden gap-5 hide-scrollbar">
                    <BgChangeCard id={10} normalIMG="/images/DOUBLESIDE/10.1.avif" hoverIMG="/images/DOUBLESIDE/10.avif" name="Vintage Lace Dress" price="$160" />
                    <BgChangeCard id={11} normalIMG="/images/DOUBLESIDE/11.avif" hoverIMG="/images/DOUBLESIDE/11.1.avif" name="Modern Wrap Dress" price="$95" />
                    <BgChangeCard id={12} normalIMG="/images/DOUBLESIDE/12.avif" hoverIMG="/images/DOUBLESIDE/12.1.avif" name="Elegant Velvet Gown" price="$180" />
                    <BgChangeCard id={13} normalIMG="/images/DOUBLESIDE/13.avif" hoverIMG="/images/DOUBLESIDE/13.1.avif" name="Summer Beach Dress" price="$85" />
                    <BgChangeCard id={14} normalIMG="/images/DOUBLESIDE/14.avif" hoverIMG="/images/DOUBLESIDE/14.1.avif" name="Winter Wool Dress" price="$120" />
                    <BgChangeCard id={15} normalIMG="/images/DOUBLESIDE/15.avif" hoverIMG="/images/DOUBLESIDE/15.1.avif" name="Satin Slip Dress" price="$135" />
                    <BgChangeCard id={16} normalIMG="/images/DOUBLESIDE/16.avif" hoverIMG="/images/DOUBLESIDE/16.1.avif" name="Casual Tunic Dress" price="$70" />
                    <BgChangeCard id={17} normalIMG="/images/DOUBLESIDE/17.1.avif" hoverIMG="/images/DOUBLESIDE/17.avif" name="Polka Dot Retro Dress" price="$105" />
                </div>
            </div>
        </div>
    );
};

export default CardCollectionOfBgChanger;
