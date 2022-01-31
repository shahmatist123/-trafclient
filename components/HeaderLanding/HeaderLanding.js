import React, {useState} from 'react';
import logo from '../../src/img/landing/Logo.svg'
import Ellipse2 from '../../src/img/landing/Ellipse2.png'
import Burger from '../../src/img/landing/burger.svg'
import exit from '../../src/img/landing/exit.svg'

import Link from "next/link";
import HeaderLang from "./HeaderLang";

const HeaderLanding = () => {
    const [header, setHeader] =useState(false)
    let mobileMenu = ''
    if (header){
        mobileMenu = 'active'
    }
    else{
        mobileMenu = ''
    }
    const scroll = (e) =>{
        e.preventDefault();
        let href = e.target.hash.split('#').join('');

        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        window.scrollBy({
            top: elementPosition - 50,
            behavior: 'smooth'
        });
    }
    return (
        <div className='header-container'>
            <img className='header-ellipse' src={Ellipse2.src} alt=""/>
            <div className="container">
                <header className='header-landing'>
                    <div className="header-logo">
                        <Link href='/'><img src={logo.src} alt=""/></Link>
                    </div>

                    <div className={"header-landing-right " + mobileMenu}>
                        <HeaderLang/>
                        <div className="link-purple">
                            <Link href='/login'>Войти</Link>

                        </div>
                    </div>
                    <div className={"header-landing-links " + mobileMenu}>
                        <a onClick={(e) => scroll(e)} href="#reseller">Реселлерам</a>
                        <a onClick={(e) => scroll(e)}  href="#client" >Исполнителям</a>
                    </div>
                </header>
            </div>
            <div className={"header-burger " + mobileMenu}>
                <img onClick={() => setHeader(!header)} src={Burger.src} alt=""/>
                <img onClick={() => setHeader(!header)} src={exit.src} alt=""/>
            </div>
        </div>

    )
}
export default HeaderLanding
