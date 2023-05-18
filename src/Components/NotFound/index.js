import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const index = () => {
  return (
    <Link onClick={window.scrollTo(0, 0)} to={"/"}>
      <Box
        sx={{
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          width: "99%",
          borderRadius: "15px",
          height: "740px",
          backgroundImage: "url('assets/background.png')",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
        }}
      />
    </Link>
  );
};

export default index;
