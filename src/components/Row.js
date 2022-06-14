import Tiles from "./Tiles";
import Box from '@mui/material/Box';




function Row() {
    const text_contest = `To get the details for all the past and upcomming contest click on the below button`;
    const text_user = `To search any user or to get any information about any user click on the below button`;
    const text_problem = `This section will show the different problem set for all the contest`;
    const text_blogs = `If you are interested in recent happenings in the codeforces website or want to learn something then click on the below button`

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            <Tiles name='Contests' text={text_contest} link='contests'></Tiles>
            <Tiles name='User info' text={text_user} link='user'></Tiles>
            <Tiles name='Problem set' text={text_problem} link='problems'></Tiles>
            <Tiles name='Blogs' text={text_blogs} link='blogs'></Tiles>
        </Box>
    )
}

export default Row