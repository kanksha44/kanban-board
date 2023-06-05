import React from "react";
import styles from "./Description.module.css";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import CloseIcon from "@mui/icons-material/Close";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from '@mui/icons-material/Person';

const Description = () => {
  const handleclick = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <LaptopChromebookIcon className={styles.laptop} />
            <div className={styles.cardname}>
              <h3>card1</h3>
              in list todo
            </div>
          </div>
          <CloseIcon className={styles.close} />
        </div>
        <div className={styles.notification}>
          <p>Notification</p>
          <div className={styles.eyeblock} onClick={handleclick}>
            <VisibilityIcon className={styles.eye} />
            <h3>Watch</h3>
          </div>
        </div>
        <div className={styles.speaker}>
          <SpeakerNotesIcon className={styles.speakericon} />
          <div className={styles.description}>
            <h3>Description</h3>
            <TextField
              id="outlined-multiline-flexible"
              placeholder="Add a more detailed description..."
              multiline
              maxRows={10}
              className={styles.textbox}
            />
          </div>
        </div>
        <div className={styles.activity}>
          <div className={styles.activityicon}>
            <FormatListBulletedIcon />
            <h3>Activity</h3>
          </div>
          <p>Show details</p>
        </div>
        <div className={styles.comment}>
            <PersonIcon className={styles.person}/>
            <TextField 
            id="outlined-multiline-flexible"
            placeholder="Write a comment..."
            multiline
            maxRows={10}
            className={styles.commentbox}
            />
        </div>

      </div>
    </div>
  );
};

export default Description;
