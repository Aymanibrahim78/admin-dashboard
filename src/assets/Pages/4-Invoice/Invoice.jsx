// @ts-nocheck
import { Box } from '@mui/material';
import { columns, rows } from '../3-Contacts/data';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Header from '../../Components/Header'



const Invoice = () => {


  return (
    <Box sx={{ height: 670, width: '94%' ,mx:"auto" }}>
            <Header title={"INVOICES"}  subTitle={"List of Invoice Balances"}/>

    <DataGrid 
    checkboxSelection
      slots={{
    toolbar: GridToolbar,
  }} rows={rows} columns={columns} />
  </Box>
  )
}

export default Invoice
