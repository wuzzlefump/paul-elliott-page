import * as React from "react"
import TopBar from "../../components/TopBar"
import styles from "./Websites.module.css"
import { useNavigate } from "react-router"
import {FaHandsHelping} from "react-icons/fa"
export default function Websites(){

    return(
        <div className={styles.app}>
            <TopBar/>
            <div className={styles.container}>
            <WebCard link="https://wuzzlefump.github.io/ReactDanceHelper/">
                <div>
                    <FaHandsHelping/>
                </div>
                <h6>
                    React Dance Helper
                </h6>
                
                <p style={{fontSize:"15px", marginBlockStart:"10px"}}>
                    A site designed to help educate people about partner dancing.
                </p>

            </WebCard>
            </div>
        </div>
    )
}

const WebCard =(props:{children:any, link:string})=>{
    const navigate = useNavigate()
    return(
        <div onClick={()=>window.open(props.link,"_blank")} className={styles.webcard}>
            {props.children}
        </div>
    )
}