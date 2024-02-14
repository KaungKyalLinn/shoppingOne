import shoppingSmile from "../images/shopping_smile.jpg";
import clothesOne from "../images/clothes_one.jpg";
import theShop from "../images/shop_one.jpg";

// I used some words as short
// for example I used "h" for home, another "H" for Hero, for example "HH" is homeHero
// "hH" = homeHero
// "hB" = homeBody

const Home = () => {

  return (
    <>
      <div className="pages homeHeroPage">
        <div className="hHHeaderDiv">
          <h1 className="heroIntro">Welcome from our <span className="theName">Shopping One</span> market</h1>
        </div>
        <div className="hHBlendDiv"></div>
      </div>
      <div className="pages homeBodyOne">
        <div className="homeBodyHalf hBOneLeft">
          <h1 className="homeBodyText">We've been over 30 years, giving happiness to our customers</h1>
        </div>
        <div className="homeBodyHalf hBOneRight">
          <div className="hBOneImgDiv theImgDiv">
            <img src={shoppingSmile} alt="imgOne" className="theImg"/>
          </div>
        </div>
      </div>
      <div className="pages homeBodyTwo">
        <div className="homeBodyHalf hBTwoLeft">
          <div className="hBTwoImgDiv theImgDiv">
            <img src={clothesOne} alt="imgTwo" className="theImg"/>
          </div>
        </div>
        <div className="homeBodyHalf hBTwoRight">
          <h1 className="homeBodyText">You won't boring anything from us</h1>
        </div>
      </div>
      <div className="pages homeBodyThree">
        <div className="homeBodyHalf hBThreeLeft">
          <h1 className="homeBodyText">Confort and pleasureable zone</h1>
        </div>
        <div className="homeBodyHalf hBThreeRight">
          <div className="hBThreeImgDiv theImgDiv">
            <img src={theShop} alt="imgThree" className="theImg"/>
          </div>
        </div>
      </div>
      <div className="inspirationDiv">
        <h1 className="homeBodyText">We always welcome you to explore</h1>
      </div>
      <div className="footer">
        <h2>shopping one</h2>
        <p>555-555-555</p>
        <p>shoppingOne@email.com</p>
        <p>oragon, oragon city, oragon 15<sup>th</sup> street, 4<sup>th</sup> floor</p>
      </div>
    </>
  )
}

export default Home