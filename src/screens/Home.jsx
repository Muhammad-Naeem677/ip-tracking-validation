import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Button, Container, Stack } from '@mui/material';
import HomeDataTable from '../components/HomeDataTable';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import styles from '../styles/commonStyle.css'; 
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import Dropzone from 'react-dropzone';
import { DropDownSection, FileDiv } from '../styles/Home';



const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid    ",
      },
    },
    toolbar:{

        backgroundColor: "#ffffff",
        color:"#000000",
    }
  }));
  

const rows = [
    { id: 1, tID: 'R12553kcd', bookingDate: '14-01-2022', pinCode: '35', amount: '2309', validate: 'Booked' },
    { id: 2, tID: 'KPL25sMQt', bookingDate: '14-01-2022', pinCode: '42', amount: '2309', validate: 'Booked' },
    { id: 3, tID: 'R12553kcd', bookingDate: '14-01-2022', pinCode: 'NA', amount: 'NA', validate: 'Not Booked' },
    { id: 5, tID: 'R12553kcd', bookingDate: '11-01-2022', pinCode: null, amount: '2309', validate: 'Booked' },
    { id: 4, tID: '234u54446', bookingDate: '14-01-2022', pinCode: 'NA', amount: 'NA', validate: 'Not Booked' },
    { id: 7, tID: '66fh467hp', bookingDate: '14-01-2022', pinCode: '44', amount: '2309', validate: 'Booked' },
    { id: 6, tID: 'R12553kcd', bookingDate: '14-01-2022', pinCode: 'NA', amount: 'NA', validate: 'Not Booked' },
    { id: 9, tID: '72fftyRDs', bookingDate: '14-01-2022', pinCode: '65', amount: '2309', validate: 'Booked' },
    { id: 8, tID: 'R12553kcd', bookingDate: '14-01-2022', pinCode: 'NA', amount: 'NA', validate: 'Not Booked' },
];

const Home = () => {
    const [value, setValue] = React.useState('1');
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <TabContext value={value}>
            <AppBar position="static"  className={classes.toolbar} >
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                    Track & Trace
                    </Typography>
                    <div className={classes.navlinks}>
                    </div>
                </Toolbar>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', p:2 }}>
                    <Stack>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="HOME" value="1" />
                            <Tab label="HISTORY" value="2" />
                        </TabList>
                    </Stack>
                </Box>
            </AppBar>
                <TabPanel value="1">
                    <Stack>
                        <Container sx={{p:5}}>
                            <Stack>
                                {/* <FileDiv>
                                    <b>File:&nbsp;&nbsp;</b>
                                    <p>No File Seleted</p>
                                </FileDiv> */}
                                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    <DropDownSection>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                         <img src={require('../img/upload.png')}  style={{width:'200px'}} />
                                        <h2>Drag & Drop Files Here</h2>
                                        <Button variant="contained">Brows file</Button>
                                    </div>
                                    </DropDownSection>
                                )}
                                </Dropzone>
                            </Stack>
                        </Container>
                        <HomeDataTable rows={rows} />
                    </Stack>
                    </TabPanel>
                <TabPanel value="2">History tab</TabPanel>
            </TabContext>
        </div>
    );
};

export default Home;