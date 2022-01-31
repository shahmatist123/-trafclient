import  { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
export async function middleware(req, ev) {
    const response = NextResponse.next();
    const { cookies } = req
    response.headers.set(
        'Authorization',
        cookies.accessToken
    );
    const { pathname } = req.nextUrl
    if (cookies.accessToken === undefined){
        let nowValidUrl = false
        const validUrls = [
            '/signup','/','/login','/forget'
        ]
        validUrls.forEach(item=>{
            if (pathname === item){
                nowValidUrl = true
            }
        })
        if (pathname.indexOf('/reset-password')+1){
            nowValidUrl = true
        }
        if (pathname.indexOf('/signup')+1){
            nowValidUrl = true
        }
        if (!nowValidUrl){
            // return NextResponse.redirect('')
            return NextResponse.redirect(
                `https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
                301)
        }
    }
    else{
        let nowValidUrl = true
        const validUrls = [
            '/login','/signup','/forget'
        ]
        validUrls.forEach(item=>{
            if (pathname === item){
                nowValidUrl = false
            }
        })
        if (pathname.indexOf('/signup') + 1 && pathname !== '/signup'){
            nowValidUrl = false

        }

        if (!nowValidUrl){
            // return NextResponse.redirect('/auto-tasks')
            return NextResponse.redirect(
                `https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
                301)
        }
    }


    return NextResponse.next()
}
