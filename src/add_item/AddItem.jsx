import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import style from "./AddItem.module.css";

function AddItem() {
  const [titleForCard, setTitleForCard] = useState("");

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <textarea
          className={style.titleForItemField}
          type="text"
          placeholder="Enter a title for this card..."
          value={titleForCard}
          rows={3}
          onChange={(e) => setTitleForCard(e.target.value)}
        ></textarea>
      </div>
      <div className={style.addCardFooter}>
        <div>
          <button className={style.addCardBtn}>
            Add card
          </button>
          <CloseOutlinedIcon
            sx={{ marginBottom: "-8px", marginLeft: "7px", cursor:'pointer' }}
            color="disabled"
          />
        </div>
        <div>
          <MoreHorizIcon color="disabled" />
        </div>
      </div>
    </div>
  );
}

export default AddItem;