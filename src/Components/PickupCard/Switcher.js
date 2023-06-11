import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Grid, IconButton } from '@mui/material';

const Switcher = () => {
  return (
    <Grid container borderRadius={"13px"} sx={{ backgroundColor: '#3563E9', boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;" }} height={"75px"} width={"80px"} justifyContent={"center"} textAlign={"center"} alignItems={"center"}>
      <IconButton sx={{ width: "75px", height: "75px" }} >
        <ImportExportIcon sx={{ fontSize: "30px", color: "white", margin: "auto", textAlign: "center", alignItems: "center" }} />
      </IconButton>
    </Grid>
  )
}

export default Switcher