// @ts-nocheck
import { DataGrid  } from '@mui/x-data-grid';
import { rows, } from './Data';
import { useTheme } from '@emotion/react';
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from '../../Components/Header'

const Team = () => {
const theme =useTheme()

 const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 33,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "access",
    headerName: "Access",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell :({row:{access}}) => {
      return(
        <Box 
        sx={{
          p:1,
          width:"99px",
          mx:"auto",
          my:1,
          borderRadius:"3px",
          textAlign:"center",
          display:"flex",
          justifyContent:"space-evenly",
          bgcolor: access==="Admin"?theme.palette.primary.dark: access==="Manager"?theme.palette.secondary.dark:"#3da58a",
        }}
        >
          {access==="Admin" && (<AdminPanelSettingsOutlined   sx={{color:"#fff"}} />)}
          {access==="Manager" && (<SecurityOutlined   sx={{color:"#fff"}} />)}
          {access==="User" && (<LockOpenOutlined  sx={{color:"#fff"}}  />)}

            <Typography sx={{fontSize:"13px",color:"#fff"}} variant="body1">{access}</Typography>
            
        </Box>
      )
    }
    
  },
];
  return (
    <Box sx={{ height: 600, width: '94%' ,mx:"auto" }}>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"}/>

    <DataGrid rows={rows} columns={columns} />
  </Box>
  )
}

export default Team
