import TopBar from "../../components/TopBar"
import styles from "./Websites.module.css"
import {FaHandsHelping, FaHandLizard, FaCode, FaPen} from "react-icons/fa"
import {GiCrownedHeart, GiWeightLiftingDown} from "react-icons/gi"
import {GiWeightScale} from "react-icons/gi"
export default function Websites(){

interface webItem{
    title:string;
    description:string;
    link:string;
    icon:any;
}
let list :webItem[] =[
    {
        title:" React Dance Helper",
        description:"A site designed to help educate people about partner dancing.",
        link:"https://wuzzlefump.github.io/ReactDanceHelper/",
        icon:<FaHandsHelping/>
    },
    {
        title:"R-P-S-L-S",
        description:"ROCK PAPER SCISSORS ... LIZARD? SPOCK?",
        link:"https://wuzzlefump.github.io/wuzzlefump.github.io-rock-paper-scissors-lizard-spock/",
        icon:<FaHandLizard/>,
    },
    {
        title:"Workout Local",
        description:"Keep track of your weight and health using the browser's local storage",
        link:"https://wuzzlefump.github.io/workout-local/",
        icon:<GiWeightScale/>,
    },
    {
        title:"Quick Code Connect",
        description:"Based off of a group Project made by my group in a bootcamp. A Social media site to store and share code snippets",
        link:"https://qc-connect.vercel.app",
        icon:<FaCode/>
    },
    {
        title:"The Bulletin",
        description:"A simple blog app made to help family keep up to date. Made with Sanity.io and next.js ",
        link:"https://the-bulletin.vercel.app/",
        icon:<FaPen/>
    },
    {
        title:"Web Tattoo",
        description:"A simple app made for me to post, and for people to download pngs that look like tattoos ",
        link:"https://web-tattoo.vercel.app/",
        icon:<GiCrownedHeart/>
    },
        {
        title:"Workout Vizualizer",
        description:"A simple app made to help guide me through home workouts ",
        link:"https://workout-visualizer.vercel.app/",
        icon:<GiWeightLiftingDown/>
    },

]
    return(
        <div className={styles.app}>
            <TopBar/>
            <h3 className={styles.header}>
                Simple Sites Paul Made
            </h3>
            <div className={styles.container}>
                {
                    list.map(item=>{
                        return(
                            <WebCard link={item.link}>
                                <div>
                                    {item.icon}
                                </div>
                                <h6>
                                    {item.title}
                                </h6>
                
                                 <p style={{fontSize:"15px", marginBlockStart:"10px"}}>
                                    {item.description}
                                </p>
                            </WebCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

const WebCard =(props:{children:any, link:string})=>{
    return(
        <div onClick={()=>window.open(props.link,"_blank")} className={styles.webcard}>
            {props.children}
        </div>
    )
}