import React, { useContext } from "react";
import './style.scss'
import ThemeContext from "../Context/Context";


const Footer = () => {

    const themeValue = useContext(ThemeContext)

    return(
        <div className="Footer">
        <h5>Development By Farnoosh</h5>
        <div className="theme-box">
        <button onClick={() => themeValue.setActiveTheme('green')} style={{background: '#7bed9f'}}>hi</button>
        <button onClick={() => themeValue.setActiveTheme('purple')} style={{background: '#70a1ff'}}>hi</button>
        <button onClick={() => themeValue.setActiveTheme('red')} style={{background: '#ff6b81'}}>hi</button>
        <button onClick={() => themeValue.setActiveTheme('dark')} style={{background: '#747d8c'}}>hi</button>
        </div>
        </div>
    )
}
export default Footer;