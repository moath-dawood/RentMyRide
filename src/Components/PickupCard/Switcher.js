import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Grid, IconButton } from '@mui/material';

const Switcher = () => {
  return (
      <Grid container borderRadius={"13px"}  sx={{backgroundColor:'#3563E9'}} width={"75px"} height={"75px"} xs={12} justifyContent={"center"} textAlign={"center"} alignItems={"center"}>
      <IconButton sx={{width:"75px", height:"75px"}} >
      <ImportExportIcon sx={{fontSize:"30px", color:"white" ,margin:"auto", textAlign:"center", alignItems:"center"}}/>
      </IconButton>
      </Grid>
  )
}

export default Switcher