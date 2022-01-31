import React,{useEffect,useState} from 'react';
const AuthError = (props) =>{
    const borderColor = {
        'borderColor': props.res.status >= 250 ? '#FF004F' : '#2AC276',
        "display": props.res.text.length === 0 ? 'none' : 'block'
    }
    const [err, setErr] = useState(props.res.text)
    useEffect(() => {
        setErr(props.res.text)
    }, [props.res.text]);

    return(
        <span  className='auth-res-info' style={borderColor} >{props.res.text}</span>
    )
}
export default AuthError
