"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import "./home.css"
import { SlMagnifier } from "react-icons/sl";



export default function Home() {
  const [enterTab, setEnterTab] = useState(null)
  const [car, setCar] = useState([1, 2, 3, 4, 5])
  const [trigger, setTrigger] = useState("false")
  const [dots, setDots] = useState([]) 
  const [scrollPosition, setScrollPosition] = useState(0);

const mobileTrigger = () => {
  enterTab ? setEnterTab(null) : setEnterTab(13) 
}

  useEffect(() => {
    const handleMouseLeave = (event) => {
        if (event.target === document) {
          setEnterTab(null);
          triggerOutHandler()
        }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
    };
}, []);



  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (position !== scrollPosition) {
        setEnterTab(null);
        triggerOutHandler()
      }
      return () => {
        document.removeEventListener("mouseleave", setScrollPosition)
      }
    };

    window.addEventListener('scroll', handleScroll);

   
  }, []);


useEffect(() => {
const num = carImages.length
const mid = Math.floor(carImages.length / 2)
const init = Array(num).fill("false")
init[car[mid] - 1] = "true"
setDots(init)
},[car])



const triggerHandler = () => {
  setTimeout(() => {
    setTrigger("true")
  }, 100)
 
}

const triggerOutHandler = () => {
  setTrigger("false") 
}


const handleMouseEnter = (index) => {
setEnterTab(index)
}

const carCountHandler = (direction) => {
  setCar(prevCar => {
    return prevCar.map((value) => {
      if (direction === "right") {
        return value === 9 ? 1 : value + 1;
      } else {
        return value === 1 ? 9 : value - 1;
      }
    });
  }
  );
};

const newButton = (id) => {
  if (id + 1 === car[1]) return carCountHandler("left")
  if (id + 1 === car[3]) return carCountHandler("right")
}


const rightLeft = (id) => {
  if (id + 1 === car[0]) return "leftOut"
  if (id + 1 === car[1]) return "left"
  if (id + 1 === car[2]) return "center"
  if (id + 1 === car[3]) return "right"
  if (id + 1 === car[4]) return "rightOut"
}


const carImages = [
  "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/cXVsKbD0Sk-ogzcoNmj6aA/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/EubK_TDtQfyCj_ibM2KR3A/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/5d/03/8f/5d038fcb-5eca-617a-2f71-ac4981a9b0ec/50091f02-02e2-4bb5-bb67-ac4684713221.png/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/p_FDjZ2qWzA57PxYRo--bw/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/VS95PyZVhEGvjTo5f-DtPQ/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/i5y5PDuv51g6bV48moKF_Q/1378x774.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/65/04/be/6504be93-0187-e2b9-9950-c3ebee8e9495/b2bd5039-5649-4e66-ba87-8c1d6516b56e.png/1378x774.jpg"
]



  return (
   <div>
      <Navbar 
      handleMouseEnter = {handleMouseEnter}
      triggerHandler = {triggerHandler}
      trigger = {trigger}
      mobileTrigger = {mobileTrigger}
      triggerOutHandler = {triggerOutHandler}
      />

      <div>
      <div className={`mobileMenu ${trigger} ${enterTab === 13 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(13)}}>
      <div id="store">
        <div className="divider">
          <h1>Shop the Latest</h1>
          <h1>Mac</h1>
          <h1>iPad</h1>
          <h1>iPhone</h1>
          <h1>Apple Watch</h1>
          <h1>Apple Vision Pro</h1>
          <h1>Accessories</h1>
        </div>
      </div>
      </div>
      </div>
    
      <div className={`${trigger} ${enterTab === 0 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(0)}}>
      <div id="store">
        <div className="divider">
          <p>Shop</p>
          <h1>Shop the Latest</h1>
          <h1>Mac</h1>
          <h1>iPad</h1>
          <h1>iPhone</h1>
          <h1>Apple Watch</h1>
          <h1>Apple Vision Pro</h1>
          <h1>Accessories</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Qzuick Links</p>
          <p>Find a Store</p>
          <p>Order Status</p>
          <p>Apple Trade In</p>
          <p>Financing</p>
        </div>

        <div className="divider">
          <p className="header-menu">Shop Special Stores</p>
          <p>Certified Refurbished</p>
          <p>Education</p>
          <p>Business</p>
          <p>Veterans and Military</p>
          <p>Government</p>
        </div>
      </div>
      </div>

      <div className={`test ${trigger} ${enterTab === 1 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(1); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Shokokotp</p>
          <h1>Shop the Latest</h1>
          <h1>Mac</h1>
          <h1>iPad</h1>
          <h1>iPhsdfsdfone</h1>
          <h1>Apple Watch</h1>
          <h1>Apple Vision Pro</h1>
          <h1>Accessories</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Qzuick Links</p>
          <p>Find a Store</p>
          <p>Order Status</p>
          <p>Applsdfsdfe Trade In</p>
          <p>Financing</p>
        </div>

        <div className="divider">
          <p className="header-menu">Shop Special Stores</p>
          <p>Certified Refurbished</p>
          <p>Education</p>
          <p>Businesdfsdfss</p>
          <p>Veterans and Military</p>
          <p>Government</p>
        </div>
      </div>
      </div>


      <div className={`${trigger} ${enterTab === 2 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(2); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore iPad</p>
          <h1>iPad Pro</h1>
          <h1>iPad Air</h1>
          <h1>iPad mini</h1>
          <h1>Apple Pencil</h1>
          <h1>Apple Watch</h1>
          <h1>Keyboards</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Shop iPad</p>
          <p>Shop iPad</p>
          <p>iPad Accessories</p>
          <p>Apple Trade In</p>
          <p>Financing</p>
        </div>

        <div className="divider">
          <p className="header-menu">More from iPad</p>
          <p>iPad Support</p>
          <p>AppleCare+ for iPad</p>
          <p>iPadOS 17</p>
          <p>Apps by Apple</p>
          <p>iCloud+</p>
          <p>Education</p>
        </div>
      </div>
      </div>


      <div className={`${trigger} ${enterTab === 3 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(3); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore iPhone</p>
          <h1>Explore All iPhone</h1>
          <h1>iPhone 15 Pro</h1>
          <h1>iPhone 15</h1>
          <h1>iPhone 14</h1>
          <h1>iPhone 13</h1>
          <h1>iPhone SE</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Shop iPhone</p>
          <p>Shop iPhone</p>
          <p>iPhone Accessories</p>
          <p>Apple Trade In</p>
          <p>Carrier Deals at Apple</p>
          <p>Financing</p>
        </div>

        <div className="divider">
          <p className="header-menu">More from iPhone</p>
          <p>iPhone Support</p>
          <p>AppleCare+ for iPhone</p>
          <p>IOS 17</p>
          <p>Apps by Apple</p>
          <p>iPhone Privacy</p>
          <p>iCloud+</p>
          <p>Wallet, Pay, Card</p>
          <p>Siri</p>
        </div>
      </div>
      </div>


      <div className={`${trigger} ${enterTab === 4 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(4); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore Watch</p>
          <h1>Explore All Apple Watch</h1>
          <h1>Apple Watch Series 9</h1>
          <h1>Apple Watch Ultra 2</h1>
          <h1>Apple Watch SE</h1>
          <h1>Apple Watch SE</h1>
          <h1>Apple Watch Nike</h1>
          <h1>Apple Watch Hermés</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Shop Watch</p>
          <p>Shop Apple Watch</p>
          <p>Apple Watch Studio</p>
          <p>Apple Watch Bands</p>
          <p>Apple Watch Accessories</p>
          <p>Apple Trade In</p>
          <p>Financing</p>
        </div>

        <div className="divider">
          <p className="header-menu">More from Watch</p>
          <p>Apple Watch Support</p>
          <p>AppleCare+</p>
          <p>watchOS 10</p>
          <p>Apps by Apple</p>
          <p>Apple Fitness+</p>
        </div>
      </div>
      </div>

    
      <div className={`${trigger} ${enterTab === 5 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(5); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore Vision</p>
          <h1>Apple Vision Pro</h1>
          <h3>Guided tour</h3>
          <h3>Tech Specs</h3>
        </div>

        

        <div className="divider">
          <p className="header-menu">Shop Vision</p>
          <p>Shop Apple Vision Pro</p>
          <p>Apple Vision Pro Accessories</p>
          <p>Book a Demo</p>
        </div>

        <div className="divider">
          <p className="header-menu">More from Vision</p>
          <p>Apple Vision Pro Support</p>
          <p>AppleCare+</p>
        </div>
      </div>
      </div>
      

      <div className={`${trigger} ${enterTab === 6 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(6); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore AirPods</p>
          <h1>Explore All AirPods</h1>
          <h1>AirPods Pro 2nd generation</h1>
          <h1>AirPods 2nd generation</h1>
          <h1>AirPods 3rd generation</h1>
          <h1>AirPods Max</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Shop AirPods</p>
          <p>Shop AirPods</p>
          <p>AirPods Accessories</p>
        </div>

        <div className="divider">
          <p className="header-menu">More from AirPods</p>
          <p>AirPods Support</p>
          <p>AppleCare+ for Headphones</p>
          <p>Apple Music</p>
        </div>
      </div>
      </div>


      <div className={`${trigger} ${enterTab === 7 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(7); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore TV & Home</p>
          <h1>Explore TV & Home</h1>
          <h1>Apple TV 4K</h1>
          <h1>HomePod</h1>
          <h1>HomePod mini</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Shop TV & Home</p>
          <p>Shop Apple TV 4K</p>
          <p>Shop HomePod</p>
          <p>Shop HomePod mini</p>
          <p>Shop Siri Remote</p>
          <p>TV & Home Accessories</p>
        </div>

        <div className="divider">
          <p className="header-menu">More from TV & Home</p>
          <p>Apple TV Support</p>
          <p>HomePod Support</p>
          <p>AppleCare+</p>
          <p>Apple TV app</p>
          <p>Apple TV+</p>
          <p>Home App</p>
          <p>Apple Music</p>
          <p>Siri</p>
          <p>AirPlay</p>
        </div>
      </div>
      </div>

      <div className={`${trigger} ${enterTab === 8 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(8); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore Entertainment</p>
          <h1>Explore Entertainment</h1>
          <h1>Apple One</h1>
          <h1>Apple TV+</h1>
          <h1>Apple Music</h1>
          <h1>Apple Arcade</h1>
          <h1>Apple Fitness+</h1>
          <h1>Apple News+</h1>
          <h1>Apple Podcasts</h1>
          <h1>Apple Books</h1>
          <h1>Apple Store</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Support</p>
          <p>Apple TV+ Support</p>
          <p>Apple Music Support</p>
        </div>
      </div>
      </div>

      <div className={`${trigger} ${enterTab === 9 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(9); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Shop Accessories</p>
          <h1>Shop All Accessories</h1>
          <h1>Mac</h1>
          <h1>iPad</h1>
          <h1>iPhone</h1>
          <h1>Apple Watch</h1>
          <h1>Apple Vision Pro</h1>
          <h1>AirPods</h1>
          <h1>TV & Home</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Explore Accessories</p>
          <p>Made by Apple</p>
          <p>Beats by Dr. Dre</p>
          <p>Air Tag</p>
        </div>

        <div className="divider">
          <p className="header-menu">Shop Special Stores</p>
          <p>Certified Refurbished</p>
          <p>Education</p>
          <p>Business</p>
          <p>Veterans and Military</p>
          <p>Government</p>
        </div>
      </div>
      </div>


      <div className={`${trigger} ${enterTab === 10 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(10); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <p>Explore Support</p>
          <h1>iPhone</h1>
          <h1>Mac</h1>
          <h1>iPad</h1>
          <h1>Watch</h1>
          <h1>Apple Vision Pro</h1>
          <h1>AirPods</h1>
          <h1>Music</h1>
          <h1>TV</h1>
        </div>

        

        <div className="divider">
          <p className="header-menu">Get Help</p>
          <p>Community</p>
          <p>Check Coverage</p>
          <p>Repair</p>
          <p>Contact Us</p>
        </div>

        <div className="divider">
          <p className="header-menu">Helpful Topics</p>
          <p>Get AppleCare+</p>
          <p>Apple ID & Password</p>
          <p>Billing & Subscriptions</p>
          <p>Find My</p>
          <p>Accessibility</p>
        </div>
      </div>
      </div>

      <div className={`${trigger} ${enterTab === 11 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(11); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <div className="inputContainer">
            <div className="inputSubCont">
            <SlMagnifier className="logo" id="magni"/>
            <input type="text" placeholder="Search Apple.com"/>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className={`${trigger} ${enterTab === 12 ? "show" : "hide"}`} onMouseEnter={() => {handleMouseEnter(12); () => setShow("show")}}>
      <div id="store">
        <div className="divider">
          <h1>Your bag is empty</h1>
        </div>
        </div>
        </div>

      <div className={`wrap ${enterTab}`} onMouseEnter={() => {setEnterTab(null); triggerOutHandler()}} id={enterTab === null ? "hideE" : "showE"}></div>


      <div className="module-content">
        <div className="space"></div>
        <h1>MacBook Air</h1>
        <p>Lean. Mean. M3 machine</p>
        <div className="button-container">
          <button className="learn-more">Learn more</button>
          <button className="buy">Buy</button>
        </div>
      <img src="https://www.apple.com/v/macbook-air/s/images/overview/hero/hero_static__c9sislzzicq6_medium_2x.jpg" alt="" />
      </div>
      <div className="phone">
      <h1>iPhone 15 Pro</h1>
        <p>Titanium. So strong. So light. So Pro</p>
      <div className="button-container">
          <button className="learn-more">Learn more</button>
          <button className="buy">Buy</button>
        </div>
        <img src="https://www.apple.com/v/home/bm/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_large_2x.jpg" alt="" />
      </div>
      <div className="phone-normal">
      <h1>iPhone 15 Pro</h1>
        <p>Titanium. So strong. So light. So Pro</p>
        <div className="button-container">
          <button className="learn-more">Learn more</button>
          <button className="buy">Buy</button>
        </div>
        <img src="https://www.apple.com/v/home/bm/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_large_2x.jpg" alt="" />
      </div>



      <div className="boxes">
        <div className="box">
          <div className="text-box">
          <h1>iPad</h1>
        <p>Lovable. Drawable. Magical</p>
        <div className="button-container">
          <button className="learn-more">Learn more</button>
          <button className="buy">Buy</button>
        </div>
          </div>
          <img src="https://www.apple.com/v/home/bm/images/promos/ipad/promo_ipad__fioegapg12qi_large_2x.jpg" alt="" />
        </div>
        <div className="box">
        <div className="text-box" id="box1">
          <h1>Card</h1>
        <p>Get up to 3% Daily Cash back with every purchase.</p>
        <div className="button-container">
          <button className="learn-more">Learn more</button>
          <button className="buy">Apply now</button>
        </div>
          </div>
          <img src="https://www.apple.com/v/home/bm/images/promos/apple-card/tile__cauwwcyyn9hy_large_2x.jpg" alt="" />
        </div>

        <div className="box">
        <div className="text-box">
          <h1>Trade In</h1>
        <p>Get $180-$630 in credit when you trade in iPhone 11 or higher.</p>
        <div className="button-container">
          <button className="learn-more">Get yout estimate</button>
        </div>
          </div>
          <img src="https://www.apple.com/v/home/bm/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large_2x.jpg" alt="" />
        </div>
        <div className="box">
        <div className="text-box">
          <h1 className="white-text">Watch</h1>
        <p className="white-text">Smarter. Brighter. Mightier.</p>
        <div className="button-container">
          <button className="learn-more">Learn more</button>
          <button className="buy" id="transparent-button">Buy</button>
        </div>
          </div>
          <img src="https://www.apple.com/v/home/bm/images/promos/apple-watch-series-9/promo_apple_watch_series_9_order__b3u85rm9zf6u_large_2x.jpg" alt="" />
        </div>

        <div className="box" id="box-5">
        <div className="text-box">
          <h1>Vision Pro</h1>
        <p>Welcome to the era of spatial computing</p>
        <div className="button-container">
          <button className="learn-more">Learn more</button>
          <button className="buy">Buy</button>
        </div>
          </div>
          <img src="https://www.apple.com/v/home/bm/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg" alt="" />
        </div>

        <div className="box" id="box-6">
        <div className="text-box">
        <p>Apple Worldwide Developers Conference Join us online June 10-14.</p>
        <div className="button-container">
          <button className="learn-more">Learn more</button>
        </div>
          </div>
          <img src="https://www.apple.com/v/home/bm/images/promos/wwdc24-announce/promo_wwdc24_announce__fv0p5miwnjiq_large_2x.jpg" alt="" />
        </div>
      </div>

      <div className="blockWrap">
      <div className="caro">
      {carImages.map((img, id) => {
       
          return <div onClick={() => {newButton(id)}} className="caroWindow" key={id}>
              <img className={rightLeft(id)} src={img} alt="" />
        </div>
      })}
    </div>
    </div>
  
   
      <div className="points">
        {dots.map((dot, id) => {
          return (
            <div key={id} className={`circle ${dot}`}></div>
          )
        })}
      </div>

    </div>
  )
}
  
   