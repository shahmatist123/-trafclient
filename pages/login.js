import React, {useState} from 'react';
import Link from "next/link";
import logo from '../src/img/landing/Logo.svg'
import axios from "axios";
import AuthError from "../components/Errors/AuthError";
import config from "./../config/default.json";
import Router from 'next/router'
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
}
const Login = () => {
    const [form, setForm] = useState({
        email: '', password: ''
    })


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const [status, setStatus] = useState({
        text: '',
        status: 200,
    })
    const registerHandler = async () => {
            axios.post(config.apiUrl +'users/auth/signin', JSON.stringify(form), {headers}).then(res=>{
                const errorStatus = {text: res.data.values.message, status: res.data.status}
                setStatus(status =>({
                    ...status,
                    ...errorStatus
                }))

                if (res.data.status === 200){
                    setTimeout(() =>{
                        Router.push('/auto-tasks')
                    }, 2000)
                    document.cookie = `accessToken=${res.data.values.AccessToken}path=/`
                    document.cookie = `refreshToken=${res.data.values.RefreshToken}path=/`
                }
                if (res.data.status !== 200){
                    setTimeout(() =>{
                        setStatus(status =>({
                            ...status,
                            ...{
                                text: '',
                                status: 200,
                            }
                        }))
                    },10000)
                }
            }).then(res=>{
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
                        <Link href='/login'>Вход</Link>
                    </div>
                    <div className="auth-header-link">
                        <Link href='/signup'>Регистрация</Link>

                    </div>


                </div>
                <input className='auth-text' onChange={changeHandler} value={form.email} name='email' type="text" placeholder='Электронная почта'/>
                <input className='auth-text' onChange={changeHandler} value={form.password} name='password' type="password" placeholder='Пароль'/>
                <div className="auth-forget">
                    <Link href='/forget'>Забыли пароль?</Link>

                </div>
                <div className="auth-submit-wrapper link-purple">
                    <div onClick={registerHandler}  className="auth-submit">Войти</div>
                </div>
            </div>
        </div>
    )
}
export default Login
