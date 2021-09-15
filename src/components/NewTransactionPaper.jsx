// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const drawerWidth = 400;

// const useStyles = makeStyles({
//   table: {
//     // width: '500px',
//     height: '100%',
//     position:'absolute',
//     width: drawerWidth,
//     // display: 'flex',
//   },
// });

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }
// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }
// const invoiceSubtotal = subtotal(rows);

// function createData(name, quantity, price, amount) {
//   return { name, quantity, price, amount};
// }

// const rows = [
//   createData('Abeille Royale Oil', 1, 216, 216),
//   createData('Abeille Royale Oil', 1, 216, 216),
//   createData('Abeille Royale Oil', 1, 216, 216),

// ];

// export default function NewTransactionPaper() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.table}>
//     <CardContent>
//       <Typography className={classes.title} color="textSecondary" gutterBottom>
//       Order #11111  
//       </Typography>

//       <Table aria-label="simple table">


//             <TableHead>
//             <TableRow>
//             <TableCell>Item &nbsp; Price</TableCell>
//                 <TableCell align="right">Quantity</TableCell>
//                 <TableCell align="right">Price</TableCell>
//                   </TableRow>
//             </TableHead>
//             <TableBody>
//             {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.quantity}</TableCell>
//               <TableCell align="right">{row.price}</TableCell>
//             </TableRow>
//           ))}
//           <TableRow>
//             <TableCell rowSpan={3} />
//             <TableCell colSpan={2}>Subtotal</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>




//       <Typography className={classes.pos} color="textSecondary">
//         Total
//       </Typography>
//       <Typography variant="body2" component="p">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </Card>
//   )
// }


// //   return (
// //     <TableContainer component={Paper}>
// //       <Table className={classes.table} aria-label="simple table">


// //         <TableHead>
// //           <TableRow>
// //             <TableCell>Item &nbsp; Price</TableCell>
// //             <TableCell align="right">Quantity</TableCell>
// //             <TableCell align="right">Price</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {rows.map((row) => (
// //             <TableRow key={row.name}>
// //               <TableCell component="th" scope="row">
// //                 {row.name}
// //               </TableCell>
// //               <TableCell align="right">{row.quantity}</TableCell>
// //               <TableCell align="right">{row.price}</TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //   );
  
// // }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    height: 600,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Abeille Royale Oil', 1, 216),
  createRow('Rouge G Lipstick', 2, 48),
  createRow('Aqua Allegoria EDT 100ml', 1, 119),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={4}>
              Order #1111
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
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
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
    </TableContainer>
  );
}