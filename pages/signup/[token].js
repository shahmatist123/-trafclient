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

    const [status, setStatus] = useState({
        text: '',
        status: 200,
    })
    const router = useRouter()
    const { token } = router.query
    useEffect(
        () => {
            if (token){


                axios.post(config.apiUrl +'users/auth/signupAccept', JSON.stringify({token : token}), {headers}).then(res=>{
                    if(res.data.values.AccessToken.length > 0){
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
                        document.cookie = `accessToken=${res.data.values.AccessToken};path=/`
                        document.cookie = `refreshToken=${res.data.values.RefreshToken};path=/`
                        setTimeout(() =>{
                            Router.push('/auto-tasks')
                        }, 2000)

                    }



                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        [token],
    );


    return (
        <div className='auth-wrapper'>
            <AuthError res={status} style={{ }}/>

        </div>
    )
}
export default Token
