import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

//Reads cookies and verifies the session
export async function middleware(request){
    console.log("it reached the top part")
    //object that will be sent to the user
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })
    
    //connection layer
    const supabase = createServerClient(
        //necessary keys to connect to supabase
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                //attaches cookies if it needs to refresh
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value)
                    )
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                }
            },
        }
    )

    const { data: { user }} = await supabase.auth.getUser();
    
    //If the user is not yet logged in but goes to the admin route, redirect back to login
    console.log("It reaches this")
    if(!user && request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    //If the user is logged in, the redirect to the admin route
    if (user && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    return response
}

export const config = {
    matcher: [
        //Route of the middleware
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}