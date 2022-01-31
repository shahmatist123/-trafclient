import React from 'react';
import HeaderLanding from "../components/HeaderLanding/HeaderLanding";
import inst from '../src/img/landing/inst.png'
import ok from '../src/img/landing/ok.png'
import pm from '../src/img/landing/pm.png'
import rutube from '../src/img/landing/rutube.png'
import telegram from '../src/img/landing/telegram.png'
import tiktok from '../src/img/landing/tiktok.png'
import vimeo from '../src/img/landing/vimeo.png'
import vk from '../src/img/landing/vk.png'
import youtube from '../src/img/landing/youtube.png'
import briefcase from '../src/img/landing/briefcase.png'
import gem from '../src/img/landing/gem.png'
import logoDark from '../src/img/landing/Logo-dark.svg'
import Ellipse from '../src/img/landing/Ellipse3.png'
import Ellipse2 from '../src/img/landing/Ellipse4.png'
import Ellipse3 from '../src/img/landing/Ellipse1.png'
import allBg from '../src/img/landing/all-bg.png'
import Link from "next/link";






const Home = () => {

    return (

        <div className='landing'>


            <img src={allBg.src} alt="" className="landing-bg"/>
            <HeaderLanding/>
            <div className="landing-first">
                <h1>Платформа <br/>
                    <span>для заработка</span> <br/>
                    в соцсетях</h1>
                <img className='landing-first__social' src={inst.src} alt=""/>
                <img className='landing-first__social' src={ok.src} alt=""/>
                <img className='landing-first__social' src={pm.src} alt=""/>
                <img className='landing-first__social' src={rutube.src} alt=""/>
                <img className='landing-first__social' src={telegram.src} alt=""/>
                <img className='landing-first__social' src={tiktok.src} alt=""/>
                <img className='landing-first__social' src={vimeo.src} alt=""/>
                <img className='landing-first__social' src={vk.src} alt=""/>
                <img className='landing-first__social' src={youtube.src} alt=""/>
                <img className='landing-first-ellipse' src={Ellipse.src} alt=""/>
            </div>
            <div id='client' className="landing-for-client">
                <img src={Ellipse2.src} className="landing-for-client-ellipse"/>
                <div className="container">
                    <span className='landing-for-client__subheader'>Исполнителям</span>
                    <h2>Выполняйте задания, получайте вознаграждение, выводите его с сервиса!</h2>
                    <div className="landing-for-client-wrapper">
                        <div className="landing-for-client__item-wrapper">
                            <div className="landing-for-client__item white">
                                <h3>Большой выбор услуг</h3>
                                <p>Мы предоставляем огромный список услуг и заданий для заказа и выполнения прямо в
                                    личном кабинете, а так же в приложении.</p>
                            </div>
                        </div>
                        <div className="landing-for-client__item-wrapper">
                            <div className="landing-for-client__item blue">
                                <h3>Мгновенные выплаты</h3>
                                <p>Выводите полученное вознаграждение в любое время суток. Моментальный вывод без
                                    комиссии на электронные кошельки и карты.</p>
                            </div>
                        </div>
                        <div className="landing-for-client__item-wrapper">
                            <div className="landing-for-client__item yellow">
                                <h3>Специальные условия</h3>
                                <p>Если вы качественно выполняете задания, то вы получите повышенные ставки и
                                    значительно увеличите свой заработок.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='reseller' className="landing-for-reseller">

                <div className="container">
                    <h2>Стать реселлером</h2>
                    <p className='landing-for-reseller__subheader'>Продавайте наши услуги, большому количеству
                        пользователей по всему миру.</p>
                    <div className="landing-for-reseller-wrapper">
                        <img className='landing-for-reseller__ellipse' src={Ellipse3.src} alt=""/>
                        <div className="landing-for-reseller__item-wrapper">
                            <div className="landing-for-reseller__item">
                                <div className="landing-for-reseller__item-text">
                                    <h3>API</h3>
                                    <p>Мы предоставляем удобное и понятное API</p>
                                </div>
                                <img src={briefcase.src} alt=""/>
                            </div>
                        </div>
                        <div className="landing-for-reseller__item-wrapper">
                            <div className="landing-for-reseller__item">
                                <div className="landing-for-reseller__item-text">
                                    <h3>Контроль качества</h3>
                                    <p>Мы постоянно следим за качеством предоставляемых услуг, вы получите именно то,
                                        что вам нужно.</p>
                                </div>
                                <img src={gem.src} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-wait">
                <span>Чего же вы ждете?</span>
                <h2>Пробуйте TrafMix сейчас и начинайте зарабатывать</h2>
                <div className="landing-wait-link link-purple">
                    <Link href='/'>Хочу попробовать TrafMix!</Link>
                </div>
            </div>
            <footer>
                <img src={logoDark.src} alt=""/>
                <span>2014 - 2022</span>
            </footer>
        </div>
    )
}
export default Home
