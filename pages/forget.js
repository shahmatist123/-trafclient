import React, {useState} from 'react';
import Link from "next/link";
import logo from '../src/img/landing/Logo.svg'
import axios from "axios";
import config from "../config/default.json";
import Router from "next/router";
import AuthError from "../components/Errors/AuthError";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
}


const Forget = () => {
    const [form, setForm] = useState({
        email: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const [status, setStatus] = useState({
        text: '',
        status: 200,
    })
    const forgerHandler = () =>{
        axios.post(config.apiUrl +'users/auth/forget', JSON.stringify(form), {headers}).then(res=>{
            const errorStatus = {text: res.data.values.message, status: res.data.status}
            setStatus(status =>({
                ...status,
                ...errorStatus
            }))
            setTimeout(() =>{
                setStatus(status =>({
                    ...status,
                    ...{
                        text: '',
                        status: 200,
                    }
                }))
            },10000)
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='auth-wrapper'>
            <AuthError res={status} style={{ }}/>
            <Link href='/'><img className='auth-logo' src={logo.src} alt=""/></Link>

            <div className='auth'>
                <div className="auth-header login">
                    <div className="auth-header-link active">
                        <span>Восстановление пароля</span>
                        <p>Введите почту, которая была привязана к аккаунту. Обратите внимание, что почта должна быть подтверждена.</p>
                    </div>

                </div>
                <input onChange={changeHandler} className='auth-text' name='email' type="text" placeholder='Эл. почта'/>

                <div className="auth-submit-wrapper link-purple">
                    <div onClick={forgerHandler} className="auth-submit">Отправить</div>
                </div>
            </div>
        </div>
    )
}
export default Forget
