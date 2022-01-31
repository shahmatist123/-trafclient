import '../styles/normalize.scss'
import '../styles/main.scss'
import '../styles/auth.scss'
import '../styles/Home.scss'
import {useEffect} from "react";
import axios from "axios";
import config from "./../config/default.json";
let refreshToken

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

    useEffect(() => {

        setInterval(() => {
            takeTokens()
            let headers = {

                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : 'Bearer '+ refreshToken,
            }
            axios.get(config.apiUrl + 'checkToken', {headers}).then(res=>{
                document.cookie = `accessToken=${res.data.values.AccessToken};path=/`
                document.cookie = `refreshToken=${res.data.values.RefreshToken};path=/`
            }).catch(error=>{

            })
        },60*60*1000)
    },[])

    const takeTokens = () =>{
        document.cookie.split('; ').forEach(item=>{
            if (item.indexOf('refreshToken') + 1){
                refreshToken = item.split('=')[1]
            }
        })
    }
    return <Component {...pageProps} />
}
