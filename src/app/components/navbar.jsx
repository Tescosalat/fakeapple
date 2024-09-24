import "./navbar.css"
import { FaApple } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";
import Link from "next/link";



export default function Navbar({ handleMouseEnter, triggerHandler, trigger, mobileTrigger, triggerOutHandler }) {

const [hamburger, setHamburger] = useState(false)

const hamburgerHandler = () => {
hamburger ? setHamburger(false) : setHamburger(true)
}

console.log(hamburger);

    return (
        <div>
              <nav className={trigger === "true" ? "color" : "transparent"}>
              <Link href="/"><FaApple className="logo"/></Link>
            <ul>
                <li onMouseEnter={() => {handleMouseEnter(0); triggerHandler()}}>Store</li>
                <li onMouseEnter={() => {handleMouseEnter(1); triggerHandler()}}>Mac</li>
                <li onMouseEnter={() => {handleMouseEnter(2); triggerHandler()}}>iPad</li>
                <li onMouseEnter={() => {handleMouseEnter(3); triggerHandler()}}>iPhone</li>
                <li onMouseEnter={() => {handleMouseEnter(4); triggerHandler()}}>Watch</li>
                <li onMouseEnter={() => {handleMouseEnter(5); triggerHandler()}}>Vision</li>
                <li onMouseEnter={() => {handleMouseEnter(6); triggerHandler()}}>AirPods</li>
                <li onMouseEnter={() => {handleMouseEnter(7); triggerHandler()}}>TV & Home</li>
                <li onMouseEnter={() => {handleMouseEnter(8); triggerHandler()}}>Entertainment</li>
                <li onMouseEnter={() => {handleMouseEnter(9); triggerHandler()}}>Accessories</li>
                <li onMouseEnter={() => {handleMouseEnter(10); triggerHandler()}}>Support</li>
            </ul>
            <div className="together">
            <SlMagnifier onClick={() => {handleMouseEnter(11); triggerHandler()}} className="logo" id="magni"/>
            <MdOutlineShoppingBag onClick={() => {handleMouseEnter(12); triggerHandler()}} className="logo"/>
            <div onClick={() => {handleMouseEnter(13); triggerHandler(); mobileTrigger(), triggerOutHandler(), hamburgerHandler()}} className="hamburger">
                <div className={`lineOne ${hamburger ? "x" : "lines"}`}></div>
                <div className={`lineTwo ${hamburger ? "x" : "lines"}`}></div>
            </div>
            </div>
        </nav>
        </div>  
    )
}