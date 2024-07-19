import Ably from "ably"
import { NextResponse } from "next/server"


export const revalidate = 0

export async function GET(req:Request){

    try {
        const ably = new Ably.Rest(process.env.ABLY_API_KEY!)
        const tokenRequestData = await ably.auth.createTokenRequest({
            clientId:"ablyably-nextjs-demo"
        });

        return NextResponse.json(tokenRequestData,{status: 200})
        
    } catch (error) {

        console.log(`Ably auth error: ${error}`)
        return new Response("Internal server error", {status:500})
        // return new NextResponse("Internal server error", {status:500})
        // return Response.json({error}, {status:500})
        // return NextResponse.json({error}, {status:500})

        
    }
}