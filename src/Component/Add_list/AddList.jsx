import styles from "./AddList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";
import React, { useState } from "react";


export default function AddList() {
    const [isVisible, setIsVisible] = useState(true);






return (
    <div
        style={{ marginLeft: "20px" }}
        className={`${styles.container} ${isVisible ? "" : styles.expanded}`}
      >

        {isVisible ? (
          <div className={styles.btnWrapper} >
            <AddIcon /> <span> Add another list</span>
          </div>
        ) : (
          <div className={styles.inputWrapper}>
            <input
              type="text"
            //   value={listName}
            //   onChange={(e) => setListName(e.target.value)}
              className={styles.inputField}
              placeholder="Enter list title..."
            />
            <div className={styles.innerDiv}>
        <Button  variant="contained">
                Add List
                </Button>:
            <Button color="error" onClick={()=>Swal.fire('Please enter a list name')} variant="contained">
              Enter Title
              </Button>
                
                <Button color="secondary" id={styles.closeIcon} startIcon={<CloseIcon/>} variant='contained' onClick={()=>setIsVisible(!isVisible)}>Close</Button>
              {/* <CloseIcon
                onClick={() => setIsVisible(!isVisible)}
                id={styles.closeIcon}
              /> */}
            </div>
          </div>
        )}
      </div>
    
  );
            }

