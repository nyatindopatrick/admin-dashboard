import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Graph from './graph';
import Dougnut from './dougnut';
import Reports from './Reports';
import { greenChart, purpleChart, blueBar } from '../Icons';
import { useStyles } from '../Classes/classes';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://fikasafe.com/'>
        Fika Safe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>

        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={12}>
              <div className='main-overview' align='center'>
                <div className='card ' style={{ maxWidth: '14rem' }}>
                  <p>Total Sacco</p>
                  <div className='row'>
                    <div className='col-6'>
                      <h5>246</h5>
                    </div>
                    <div className='col-6'>
                      <img src={blueBar} alt='...' />
                    </div>
                  </div>
                </div>
                <div className='card ' style={{ maxWidth: '14rem' }}>
                  <p>Total Riders</p>
                  <div className='row'>
                    <div className='col-6'>
                      {' '}
                      <h5>2453</h5>
                    </div>
                    <div className='col-6'>
                      <img src={purpleChart} alt='...' />
                    </div>
                  </div>
                  <div className='bg-transparent '></div>
                </div>
                <div className='card ' style={{ maxWidth: '14rem' }}>
                  <p>SMS Usage</p>
                  <div className='row'>
                    <div className='col-6'>
                      <h5>394</h5>
                    </div>
                    <div className='col-6'>
                      <img src={greenChart} alt='...' />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            {/* Recent Deposits */}
            <div className='row' align='center'>
              <div className='col'>
                <Grid item xs={12} md={8} lg={7}>
                  <Paper className={fixedHeightPaper} align='center'>
                    <Dougnut />
                  </Paper>
                </Grid>
              </div>

              <div className='col'>
                <Grid item xs={12} md={8} lg={7}>
                  <Paper className={fixedHeightPaper}>
                    <Graph />
                  </Paper>
                </Grid>
              </div>
            </div>

            <Grid item lg={12}>
              <Reports />
            </Grid>

            {/* Recent Orders */}
          </Grid>
        </Container>
        <Copyright />
    </>
  );
}

