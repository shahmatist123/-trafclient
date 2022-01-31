import React, {useState} from 'react';
import flagRu from '../../src/img/landing/flag-ru.svg'
import flagUs from '../../src/img/landing/flag-us.svg'
const HeaderLang= () =>{
    const [header, setHeader] = useState('')
    const openLang = (e) =>{
        setHeader( 'active')
    }
    const closeLang = () =>{
        setHeader( '')
    }
    return(
        <div className={`header-landing-lang ${header}`} onMouseOver={(e) => openLang(e)} onMouseLeave={closeLang}>
            <div className="header-landing-lang__item">
                <img src={flagRu.src} alt=""/>
                <span>RU</span>
            </div>
            <div className="header-landing-lang__item">
                <img src={flagUs.src} alt=""/>
                <span>EN</span>
            </div>
        </div>
    )
}
export default HeaderLang
