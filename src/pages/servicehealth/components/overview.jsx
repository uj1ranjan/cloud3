import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { protectedResources } from '../../../authConfig';
import  useGraphWithMsal  from '../../../hooks/useGraphWithMsal';
import { useEffect, useState } from 'react';




export default function BasicTable() {
//   const { isLoading, error, data } = useQuery('repoData', () =>//     fetch('http://localhost:3000/service').then(res =>
//       res.json()
//     )
//   )

//   if (isLoading) return 'Loading...';

//   if (error) return 'An error has occurred: ' + error.message;
//   console.log(data);const [graphData, setGraphData] = useState(null);
    const [graphData, setGraphData] = useState(null);
    const { error, execute, result } = useGraphWithMsal({
        scopes: protectedResources.serviceAPI.scopes,
    }, protectedResources.serviceAPI.endpoint);   
     
    useEffect(() => {
        if (!!graphData) {
            return;
        }

        if (!graphData) {
            execute(protectedResources.serviceAPI.endpoint).then((data) => {
                setGraphData(data.value);
            });
        }

    }, [graphData, execute, result]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!graphData) {
      return <div>loading...</div>;
    }
    

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {graphData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}