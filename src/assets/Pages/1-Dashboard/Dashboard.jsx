import { Box ,Button, Stack} from '@mui/material'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { DownloadOutlined } from '@mui/icons-material'
import Header from '../../Components/Header'


const Dashboard = () => {
  return (
    <Box>

<Stack direction={"row" } justifyContent={"space-between"} alignItems={"center"} >

        <Header title={"DASHBOARD"} isDashboard={true} subTitle={"Welcome to your dashboard"}/>
        
        <Box sx={{textAlign:"right",mb:1.3}}>
          <Button variant='contained' sx={{padding:"6px 8px ",textTransform:"capitalize"}}>
            <DownloadOutlined/>
            Download Reports
          </Button>

      </Box>
</Stack>

      <Row1/>
      <Row2/>
      <Row3/>
    
    </Box>
  )
}

export default Dashboard
