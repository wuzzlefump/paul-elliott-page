import TopBar from "../../components/TopBar"
import styles from "./Websites.module.css"
import {FaHandsHelping, FaHandLizard, FaCode, FaPen} from "react-icons/fa"
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
        title:"Quick Code Pro",
        description:"A site made on heroku to keep track of code snippets (will be migrated when heroku is no longer free)",
        link:"https://qcpro.herokuapp.com/",
        icon:<FaCode/>
    },
    {
        title:"The Bulletin",
        description:"A simple blog app made to help family keep up to date. Made with Sanity.io and next.js ",
        link:"https://the-bulletin.vercel.app/",
        icon:<FaPen/>
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