import React from "react";
import Back from "./Back";
import { useState, useEffect } from "react";
import axios from "axios";
import ContestInfo from "./ContestInfo";
import './UpcommingContest.css'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PropTypes from 'prop-types';



function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Cupcake', 305, 3.7),
//     createData('Donut', 452, 25.0),
//     createData('Eclair', 262, 16.0),
//     createData('Frozen yoghurt', 159, 6.0),
//     createData('Gingerbread', 356, 16.0),
//     createData('Honeycomb', 408, 3.2),
//     createData('Ice cream sandwich', 237, 9.0),
//     createData('Jelly Bean', 375, 0.0),
//     createData('KitKat', 518, 26.0),
//     createData('Lollipop', 392, 0.2),
//     createData('Marshmallow', 318, 0),
//     createData('Nougat', 360, 19.0),
//     createData('Oreo', 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

function UpcommingContest() {

    const [posts, setPosts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState({
        hasError: false,
        message: ""
    })

    useEffect(() => {
        setLoaded(false)
        axios.get(`https://codeforces.com/api/contest.list`)
            .then((res) => {
                console.log(res)
                //console.log(res.data.result)
                if (res.data.status === "OK") {
                    console.log(`in`)
                    const arr = []
                    for (var i = 0; i < 10; i++) {
                        arr.push(res.data.result[i]);
                    }
                    setPosts(arr)
                    setLoaded(true)
                }
                else {
                    setError({
                        ...error,
                        hasError: true,
                        message: res.data
                    })
                }

            })
            .catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (error.hasError) {
        return (
            <>
                <div className="page-head">
                    Upcomming / Past Contests
                </div>
                <div>
                    {error.message}
                </div>
                <div className="page-head">
                    <Back />
                </div>

            </>
        )
    }
    else if (loaded) {
        console.log(posts)
        return (
            <>
            <Paper sx={{width: '80%', margin: 'auto'}} elevation={0}>
                <div className="page-head">
                    Upcomming / Past Contests
                </div>
                
                    <table className="table table-dark tableClass">
                        <thead>
                            <tr>
                                <th>Contest Id</th>
                                <th>Type</th>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Start Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(posts => (
                                <ContestInfo key={posts.id} info={posts} />
                            ))}
                        </tbody>


                    </table>
                </Paper>
                <div className="page-head">
                    <Back />
                </div>

            </>
        )
    }
    else {
        return (
            <>
                <div className="page-head">
                    Upcomming / Past Contests
                </div>
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="page-head">
                    <Back />
                </div>

            </>
        )
    }

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // // Avoid a layout jump when reaching the last page with empty rows.
    // const emptyRows =
    //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };


    // return (
    //     <TableContainer component={Paper} elevation={3} sx={{ color: (theme) => theme.palette.custom.contrastText, 
    //     backgroundColor: (theme) => theme.palette.custom.light }}>
    //         <Table sx={{ color: (theme) => theme.palette.custom.contrastText }} aria-label="simple table">
    //             <TableBody>
    //                 {(rowsPerPage > 0
    //                     ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //                     : rows
    //                 ).map((row) => (
    //                     <TableRow key={row.name}>
    //                         <TableCell component="th">
    //                             {row.name}
    //                         </TableCell>
    //                         <TableCell  align="right">
    //                             {row.calories}
    //                         </TableCell>
    //                         <TableCell  align="right">
    //                             {row.fat}
    //                         </TableCell>
    //                     </TableRow>
    //                 ))}

    //                 {emptyRows > 0 && (
    //                     <TableRow style={{ height: 53 * emptyRows }}>
    //                         <TableCell colSpan={6} />
    //                     </TableRow>
    //                 )}
    //             </TableBody>
    //             <TableFooter>
    //                 <TableRow>
    //                     <TablePagination
    //                         rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
    //                         colSpan={3}
    //                         count={rows.length}
    //                         rowsPerPage={rowsPerPage}
    //                         page={page}
    //                         SelectProps={{
    //                             inputProps: {
    //                                 'aria-label': 'rows per page',
    //                             },
    //                             native: true,
    //                         }}
    //                         onPageChange={handleChangePage}
    //                         onRowsPerPageChange={handleChangeRowsPerPage}
    //                         ActionsComponent={TablePaginationActions}
    //                     />
    //                 </TableRow>
    //             </TableFooter>
    //         </Table>
    //     </TableContainer>
    // )

}

export default UpcommingContest