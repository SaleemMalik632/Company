import React from 'react';
import { Grid, Paper  } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import '../App.css'
import { NavLink } from 'react-router-dom';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';




const ResponsiveGridExample = () => {
    return (
        <div className='Grid' >
            {/* item xs={12} sm={6} md={4} lg={3} */}
            <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Grid xs={12} sm={6} lg={3} md={6}>
                    <Paper className='Colur-Grid' elevation={5}>
                        <div style={{ marginTop: '-77px', marginLeft: '-77px' }}>
                            <SchoolOutlinedIcon style={{ backgroundColor: '#D5F5E3', padding: '10px', borderRadius: '10pc' }} />
                        </div>
                        <div style={{ minWidth: '300px', textAlign: 'center', marginLeft: '-90px' }}>
                            <NavLink><p >Simplified Internships</p></NavLink>
                            <p style={{ textAlign: 'justify', marginTop: '30px' }}>Explore virtual internships in Web Dev, App Dev, Full Stack, ML, and Data Science; focused learning</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} lg={3} md={6}>
                    <Paper className='Colur-Grid' elevation={5}>
                        <div style={{ marginTop: '-77px', marginLeft: '-77px' }}>
                            <DataObjectIcon style={{ backgroundColor: '#D5F5E3', padding: '10px', borderRadius: '10pc' }} />
                        </div>
                        <div style={{ minWidth: '300px', textAlign: 'center', marginLeft: '-90px' }}>
                            <NavLink><p >Build your Network</p></NavLink>
                            <p style={{ textAlign: 'justify', marginTop: '30px' }}>We believe in networking to connect with other interns who are interested in the same things.</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} lg={3} md={6}>
                    <Paper className='Colur-Grid' elevation={5}>
                        <div style={{ marginTop: '-77px', marginLeft: '-77px' }}>
                            <PersonOutlineOutlinedIcon style={{ backgroundColor: '#D5F5E3', padding: '10px', borderRadius: '10pc' }} />
                        </div>
                        <div style={{ minWidth: '300px', textAlign: 'center', marginLeft: '-90px' }}>
                            <NavLink><p >Building Student Trust</p></NavLink>
                            <p style={{ textAlign: 'justify', marginTop: '30px' }}>We ensures your success and building a trusted platform for valuable learning experiences.</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} lg={3} md={6}>
                    <Paper className='Colur-Grid' elevation={5}>
                        <div style={{ marginTop: '-77px', marginLeft: '-77px' }}>
                            <CodeRoundedIcon style={{ backgroundColor: '#D5F5E3', padding: '10px', borderRadius: '10pc' }} />
                        </div>
                        <div style={{ minWidth: '300px', textAlign: 'center', marginLeft: '-90px' }}>
                            <NavLink><p >Building Student Trust</p></NavLink>
                            <p style={{ textAlign: 'justify', marginTop: '30px' }}>Enjoy growth-oriented internship at Bharat Intern, tailored for maximum skill development.</p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>  

    );
};

export default ResponsiveGridExample;
