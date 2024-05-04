import { Box, Paper, Stack, Typography ,useTheme, IconButton} from "@mui/material"
import Line from "../10-LineChart/Line"
import { DownloadOutlined } from "@mui/icons-material"
import { Transactions } from "./data"

const Row2 = () => {
  const theme =useTheme()
  return (
    <Stack direction={"row"} justifyContent={"space-between"} flexWrap={'wrap'} gap={1}>

      <Paper  sx={{maxWidth:900,flexGrow:1}}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >

<Box>
        <Typography variant="body1" sx={{mb:1,mt:2,ml:4}} color={theme.palette.secondary.main}  fontWeight={"bold"} >Recent Transactions</Typography>
        <Typography variant="body1"   sx={{ml:4}} >$59,342.32</Typography>
</Box>
<Box>
  <IconButton sx={{mr:3}} >
    <DownloadOutlined/>
    
  </IconButton>
</Box>

        </Stack>

     <Line indashboard={true}/>
      </Paper>



      <Box  sx={{maxHeight:350,minWidth:"280px" , overflow:"auto",flexGrow:1,p:1}}>

        <Paper>
          <Typography variant="body1" color={theme.palette.secondary.main} p={1.2} fontWeight={"bold"} >Recent Transactions</Typography>
        </Paper>

        {Transactions.map((item)=>{
          return(
            <Paper
            key={item.cost}
            sx={{
              mt: 0.4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box p={1.2}>
              <Typography variant="body1">{item.txId}</Typography>
              <Typography variant="body2">{item.user} </Typography>
            </Box>
            <Typography variant="body1">{item.date} </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body2"
            >
              ${item.cost}
            </Typography>
          </Paper>
          )
        })}

        
      </Box>
      
    </Stack>
  )
}

export default Row2
