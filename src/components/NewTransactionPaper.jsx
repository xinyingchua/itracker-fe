import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // width: '500px',
    height: '100vh'
  },
});

function createData(name, quantity, price, amount) {
  return { name, quantity, price, amount};
}

const rows = [
  createData('Abeille Royale Oil', 1, 216, 216),
  createData('Abeille Royale Oil', 1, 216, 216),
  createData('Abeille Royale Oil', 1, 216, 216),

];

export default function NewTransactionPaper() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="h2">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        adjective
      </Typography>
      <Typography variant="body2" component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}


//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">


//         <TableHead>
//           <TableRow>
//             <TableCell>Item &nbsp; Price</TableCell>
//             <TableCell align="right">Quantity</TableCell>
//             <TableCell align="right">Price</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.quantity}</TableCell>
//               <TableCell align="right">{row.price}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
  
// }