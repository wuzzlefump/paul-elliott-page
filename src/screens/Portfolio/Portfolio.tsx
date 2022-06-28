import * as React from "react";
import styles from "./style.module.css";
import TopBar from "../../components/TopBar";
import { Nav } from "rsuite";
import  dance from"./Dance.json";
import developing from "./Developing.json";
import fitness from"./Fitness.json";
import sales from "./Sales.json";
import education from "./Education.json"
const skills = require("./Skills.json")

export default function Portfolio() {

  const Lists = {
    dance:dance,
    developing:developing,
    fitness:fitness,
    sales:sales,
    skills:skills,
    education:education
  }

  const [active, setActive] = React.useState<"developing"|"fitness"|"dance"|"sales"|"skills"|"education">("developing");
  console.log(Lists)
  return (
    <div className={styles.app}>
      <TopBar />
      <Nav
        className={styles.folder}
        activeKey={active}
        appearance={"tabs"}
        onSelect={(e) => {
          setActive(e);
        }}
      >
        <Nav.Item className={styles.tab} eventKey="developing">
          Coding
        </Nav.Item>
        <Nav.Item className={styles.tab} eventKey="dance">
          Dancing
        </Nav.Item>
        <Nav.Item className={styles.tab} eventKey="fitness">
          Fitness
        </Nav.Item>
        <Nav.Item className={styles.tab} eventKey="sales">
          Sales
        </Nav.Item>
      </Nav>
      <div className={styles.folderBody}>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h1 className={styles.Name}>Paul R. Elliott</h1>
            <h3>Based out of Arvada Co</h3>
            <a href={"www.linkedin.com/in/paulelliottwork"}><h6 className={styles.linkedIn}>Contact me on my Linked In here!</h6></a>

          </div>
          <div className={styles.jobsSection}>
            {
              Lists[active].map((item:any) =>( <Job 
                name={item.name}
                title={item.title}
                url={item.url}
                start={item.start}
                end={item.end}
                 >{item.description}</Job>))
            }

          </div>
          <div className={styles.educationSection}>
            <h5 className={styles.subHeader}>Relevant Education </h5>
            {
              Lists["education"]
              .filter((item:any)=>item.type === active)
              .map((item:any) => <Education 
              school={item.school}
              degree={item.degree}
              start={item.start}
              end={item.end}/>)
            }

          </div>
          <div className={styles.skillsSection}>
            <h5 className={styles.subHeader}> Relevant Skills</h5>
            {
              Lists["skills"]
              .filter((item:any)=>item.type === active)
              .map((item:any) => <Skill skill={item.skill} description={item.description} />)
            }

          </div>
        </div>
      </div>
    </div>
  );
}

const Skill = (props:{skill:string, description:string})=>{
  return <div className={styles.skill}><span className={styles.skillHeader}>{props.skill} :</span><span className={styles.skillText} >{props.description}</span></div>
}

const Education = (props:{ school:string, degree:string,  start?:string, end?:string })=>{
  const {school,  start, end, degree } = props
  return (<div className={styles.job}> 
    <div>
       <h6>{school}</h6>
    </div>
    <div className={styles.jobDescription}>
            {degree}
    </div>
    <div>
      {}
      <span>{start}</span>
      {
        !start || !end ? null :
      <>
      <br></br>
      <span style={{textAlign:"center"}}> --- </span>
      <br></br>
      </>}
      <span>{end ?? "--"}</span>
    </div>
  </div>)
}

const Job = (props:{children:any, name:string, start:string, end?:string, title:string, url?:string})=>{
  const {name, children, start, end, title,url } = props
  return (<div className={styles.job}> 
    <div>
       <a href={url}><h6>{name}</h6></a>
       <p>{title}</p>
    </div>
    <div className={styles.jobDescription}>
            {children}
    </div>
    <div>
      <span>{start}</span>
      <br></br>
      <span style={{textAlign:"center"}}> --- </span>
      <br></br>
      <span>{end ?? "--"}</span>
    </div>
  </div>)
}
