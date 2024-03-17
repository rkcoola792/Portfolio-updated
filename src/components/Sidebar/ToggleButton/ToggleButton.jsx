import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const TOggleButton = ({setOpen,open}) => {

  return (
    <div>
      <button
        onBlur={() => setOpen(false)}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? <CloseIcon /> : <MenuIcon></MenuIcon>}
      </button>
    </div>
  );
}

export default TOggleButton
