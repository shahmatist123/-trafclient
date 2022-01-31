import React, {useEffect} from 'react';
import axios from "axios";
import config from "./../config/default.json";
import Router from "next/router";

const Logout = () => {
    useEffect(() => {
        let refreshToken
        const takeTokens = () =>{
            document.cookie.split('; ').forEach(item=>{
                if (item.indexOf('refreshToken') + 1){
                    refreshToken = item.split('=')[1]
                }
            })
        }
            takeTokens()
            let headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : 'Bearer '+ refreshToken
            }
            axios.get(config.apiUrl + 'users/auth/logout', {headers}).then(res=>{
                function delete_cookie ( cookie_name )
                {
                    const cookie_date = new Date ( );  // Текущая дата и время
                    cookie_date.setTime ( cookie_date.getTime() - 1 );
                    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
                }
                delete_cookie('accessToken')
                delete_cookie('refreshToken')
                Router.push('/')
            }).catch(error=>{

            })

    },[])
    return (
        <div className='auth-wrapper'>

        </div>
    )
}
export default Logout
