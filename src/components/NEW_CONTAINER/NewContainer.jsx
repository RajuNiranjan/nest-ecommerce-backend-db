import React from "react";
import "./NewContainer.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import New from "./New";
import { NavLink } from "react-router-dom";
import { NEWLIST } from "../../data/Data";


const NewContainer = () => {





  return (
    <div className="new-container">
      {
        NEWLIST?.map((e) => {
          return <div className="new-item-list">
            <div className="new-item-top" key={e.id}>
              <h3 className="new-item-top-name">{e.name}</h3>
            </div>
            <div className="new-item-center" >
              <New items={e.items} />
            </div>
            <NavLink to={'/'} className="new-item-bottom">
              <p className="new-item-bottom-name">View more</p>
              <KeyboardArrowRightIcon className="new-item-bottom-icon" />
            </NavLink>
          </div>
        })
      }

    </div>
  );
};

export default NewContainer;
