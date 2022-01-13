import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Stack } from '@mui/material';

const Home = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Stack>
                        <Stack direction={{sm: 'row', xs:'column'}} spacing={{ sm: 2, xs: 2 }} >
                            <h1>Track N Trace</h1>
                        </Stack>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="HOME" value="1" />
                            <Tab label="HISTORY" value="2" />
                        </TabList>
                    </Stack>
                </Box>
                <TabPanel value="1">Home tab</TabPanel>
                <TabPanel value="2">History tab</TabPanel>
            </TabContext>
        </div>
    );
};

export default Home;