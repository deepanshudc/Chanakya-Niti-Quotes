import React from "react"
import Footer from "./Footer"
const Layout=({children})=>{
    return (
        <>
        {children}
        <Footer></Footer>
        </>
    )
}

export default Layout