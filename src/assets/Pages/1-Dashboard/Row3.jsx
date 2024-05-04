import {  Paper, Stack, Typography, useTheme } from "@mui/material"
import Bar from "../8-BarChart/Bar"
import Pie from "../9-PieChart/Pie"
import Geo from "../11-GeographyChart/Geo"

const Row3 = () => {
  const theme =useTheme()
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={2}>
    <Paper  sx={{ minWidth:"400px",flexGrow:1, width: "28%"}}>

    <Typography
    
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

      <Pie indashboard={true}/>

      <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>

  
    </Paper>




    <Paper  sx={{minWidth:"400px",flexGrow:1, width: "33%"}}>
    <Bar indashboard={true}/>
    </Paper>
    <Paper  sx={{minWidth:"400px",flexGrow:1, width: "33%"}}>
      <Geo indashboard={true}/>
    </Paper>
    </Stack>
  )
}

export default Row3
