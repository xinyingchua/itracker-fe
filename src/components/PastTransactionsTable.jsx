import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    // width: '500px',
    // height: '100vh'
  },
});


export default function TransactionReceipt(props) {
  const classes = useStyles();

  const [cookies] = useCookies(['auth_token'])
  const [transactions, getTransactions] = React.useState([])
  // let history = useHistory()

  
  const fetchAPI = async (api) => {
    let response = null

    try {
      response = await axios.get(api, { headers: cookies })
    } catch (err) {
      return err
    }

    return response.data
    // console.log(response.data)
  }


  useEffect(() => {
    (async () => {
      const transactionData = await fetchAPI(
      'http://localhost:4000/transactions'
      )
      getTransactions(transactionData)
      // console.log(transactions)
    })()},[])
  
    console.log(transactions)


    
  // useEffect(async () => {
  //   let transactionData = await fetchAPI(
  //     'http://localhost:4000/transactions'
  //   )
  //   getTransactions(transactionData)
  // }, [])


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item &nbsp; Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}