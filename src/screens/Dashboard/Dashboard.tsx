import * as React from "react";
import styles from "./style.module.css";
import TopBar from "../../components/TopBar";
import { Panel, PanelGroup } from "rsuite";
import PlaceholderParagraph from "rsuite/esm/Placeholder/PlaceholderParagraph";
import Avatar from "react-avatar";
import { IoMan, IoWoman } from "react-icons/io5";
import { FaCat, FaDog, FaBaby } from "react-icons/fa";
import Keeley from "./Keeley.jpg";
import Inca from "./Inca.jpg";
import Simon from "./Simon.jpg";
import Paul from "./Paul.jpg";
import Amanda from "./Amanda.jpg";
export default function Dashboard() {
  return (
    <div className={styles.app}>
      <TopBar />
      <Panel className={styles.team}>
        <h3>Meet The Team</h3>
        <div className={styles.icons}>
          <FaDog size={"50px"}></FaDog>
          <FaCat size={"50px"}></FaCat>
          <IoMan size={"100px"}></IoMan>
          <IoWoman size={"100px"}></IoWoman>
          <FaBaby size={"50px"}></FaBaby>
        </div>
      </Panel>
      <div className={styles.contentContainer}>
        <PanelGroup>
          <Panel>
            <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
              <div style={{ display: "block", textAlign: "center" }}>
                <h6 style={{ marginBlockEnd: "10px" }}>Regional Manager</h6>
                <Avatar size="150px" src={Simon} round name="Simon" />
              </div>
              <p className={styles.description}>
                Simon joined the company early April of 2022. While Simon is new
                to the company he is definitely making waves as the new head of
                the region. He is a confident delegator when it comes to getting
                things done. He makes sure nap times and meal times happen like
                clockwork. It also doesnt hurt that he has a winning smile.
              </p>
            </div>
          </Panel>
          <Panel>
            <div style={{ display: "grid", gridTemplateColumns: "auto 200px" }}>
              <p className={styles.description}> 
                Also known as heart and soul of the company, Amanda keeps things running. While she spends most of her time teaching dance and 
                keeping the calendar full of team building exercises, she also makes time to keep morale high with her baking and laughter. She is also an excel wizard.
              </p>
              <div style={{ display: "block", textAlign: "center" }}>
                <Avatar size="150px" src={Amanda} round={true} name="Amanda" />
                <h6 style={{ marginBlockStart: "10px" }}>
                  Assistant to the Regional Manager
                </h6>
              </div>

            </div>
          </Panel>
          <Panel>
            <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
              <div style={{ display: "block", textAlign: "center" }}>
                <h6 style={{ marginBlockEnd: "10px" }}>Swiss Army Knife</h6>
                <Avatar size="150px" round={true} src={Paul} name="Paul" />
              </div>
              <p className={styles.description}>
                Paul is not Swiss. Paul has never been in the army. Paul is also not a knife. It might be more accurate to call him a "Jack of all trades",
                even this isnt 100% accurate though because his name isnt Jack, and there are some trades he doesnt know. Trades he does know include: "Dance Teaching", "Full Stack Web Developement", and being a "Dad".
                The company makes use of all of them, Especially the "Dad Jokes".
              </p>
            </div>
          </Panel>
          <Panel>
            <div style={{ display: "grid", gridTemplateColumns: "auto 200px" }}>
              <p className={styles.description}>
              As soon as Amanda met Keeley, she knew she would be perfect in Human Resources. 
              Keeley excels at using humans as resources. She uses them for: belly rubs,
              water from the faucet, scratches, enough food to cover the bottom of the bowl, and much much more. 
              As an added bonus she keeps staff morale high. She was a purrrfect addition to the team.
              </p>
              <div style={{ display: "block", textAlign: "center" }}>
                <Avatar size="150px" src={Keeley} round name="Keeley" />
                <h6 style={{ marginBlockStart: "10px" }}>HR</h6>
              </div>
            </div>
          </Panel>
          <Panel>
            <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
              <div style={{ display: "block", textAlign: "center" }}>
                <h6 style={{ marginBlockEnd: "10px" }}>Accountant</h6>
                <Avatar size="150px" src={Inca} round name="Inca" />
              </div>
              <p className={styles.description}>
                Transplanted from another division, Inca has made great use of her accounting skills,
                She accounts for, and keeps track every dropped scrap, crumb and morsel on the floor. She is counting all the time. 
                Counting on us to drop some lunch.
              </p>
            </div>
          </Panel>
          <Panel></Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
