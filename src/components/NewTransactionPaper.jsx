import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from './Buttons'


const useStyles = makeStyles({
  table: {
    minWidth: 400,
    height: 600,
  },
});


function priceRow(qty, unit) {
  return qty * unit;
}


function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}



export default function SpanningTable(props) {
  const classes = useStyles();

  const transactionsItemsList = props.transactionItems;



  const invoiceSubtotal = subtotal(transactionsItemsList);
  console.log(transactionsItemsList)

  
  const invoiceTotal = invoiceSubtotal;

  
  function ccyFormat(num) {
    return `${parseFloat(num).toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  

  console.log("hello" , transactionsItemsList)


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={4}>
              Transaction Summary:
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log("check", transactionsItemsList[0])}
          {transactionsItemsList.map((item) => (
            <TableRow key={item.desc}>
              <TableCell>{item.desc}</TableCell>
              <TableCell align="right">{item.qty}</TableCell> 
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{ccyFormat(priceRow(item.price, item.unit))} </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={1}>Subtotal</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>

      
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>


        </TableBody>
      </Table>
      <Button
            type='submit'
            // fullWidth
            color="secondary"
            variant="contained"
            style={{ marginTop: '10px', color:'#3565BA', width: "50px"}}
            children="submit"
            onClick={()=> {
              console.log("creating transaction") 
              props.createTransaction()
            }
            }
            />
    </TableContainer>
  );
}