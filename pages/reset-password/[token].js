import React, {useEffect, useState} from 'react';
import Link from "next/link";
import logo from './../../src/img/landing/Logo.svg'
import axios from "axios";
import config from "./../../config/default.json";
import Router, {useRouter} from "next/router";
import AuthError from "../../components/Errors/AuthError";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
}


const Token = () => {
    const [form, setForm] = useState({
        password: ''
    })
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const [status, setStatus] = useState({
        text: '',
        status: 200,
    })
    const router = useRouter()
    const { token } = router.query
    useEffect(
        () => {
            if (token){


            axios.post(config.apiUrl +'forgetCheck', JSON.stringify({token : token}), {headers}).then(res=>{
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
                if (!res.data.values.token){
                    Router.push('/login')
                }

            }).catch(error=>{
                console.log(error)
            })
            }
        },
        [token],
    );


    const forgerHandler = () =>{
        axios.post(config.apiUrl +'users/auth/newPass', JSON.stringify({token : token, password: form.password}), {headers}).then(res=>{
            const errorStatus = {text: res.data.values.message, status: res.data.status}
            setStatus(status =>({
                ...status,
                ...errorStatus
            }))
            if (res.data.status === 200){
                setTimeout(() =>{
                    Router.push('/auto-tasks')
                }, 2000)
                document.cookie = `accessToken=${res.data.values.AccessToken};path=/`
                document.cookie = `refreshToken=${res.data.values.RefreshToken};path=/`
            }
            setTimeout(() =>{
                setStatus(status =>({
                    ...status,
                    ...{
                        text: '',
                        status: 200,
                    }
                }))
            },10000)
            console.log(res.data.values.AccessToken)

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
                    </div>

                </div>
                <input onChange={changeHandler} className='auth-text' name='password' type="password" placeholder='Новый пароль'/>

                <div className="auth-submit-wrapper link-purple">
                    <div onClick={forgerHandler} className="auth-submit">Отправить</div>
                </div>
            </div>
        </div>
    )
}
export default Token
