import React from "react";
import Navigation from "../components/navigation";
import {Metadata} from "next";
import "./styles/global.css"

export const metadata :Metadata= {
    title: {
        template: "%s | Next Movies",
        default: "Loading...."
    },
    description: "Genarated by Next.js"
}

export default function Layout({ children }: {children:React.ReactNode}) {
    return (
        <html lang="en">
            <body>
            <h1>layout</h1>
                <Navigation />
                {children}
            </body>
        </html>
    )
}