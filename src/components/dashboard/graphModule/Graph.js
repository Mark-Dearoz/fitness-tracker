import React from 'react'
import {Paper, Select, InputLabel, FormControl, Container} from '@material-ui/core'
import Chart from 'react-apexcharts'
import {makeStyles} from '@material-ui/core/styles'

const options = {
    chart: {
      background: 'rgba(255,255,255,0.5)',
      foreColor: '#333'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    plotOptions: {
        bar: {
            horizontal: false
        },
        fill: {
            colors: ['#f44336']
        }
    }
}
const series = [{
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
}]


const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.primary.main,
        padding: '24px',
        margin: '0px',
        height: 'calc(50vh - 60px)'
    },
    formControl:{
        width:'192px'
    }
}))

const Graph = () =>{
    const classes = useStyles()
    return(
        <Paper className={classes.paper} elevation={2}>
            <Container>
                <FormControl className={classes.formControl}>
                    <InputLabel> label</InputLabel>
                    <Select></Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel> label</InputLabel>
                    <Select></Select>
                </FormControl>
            </Container>
            <div style={{height: '90%', padding: '24px'}}>
                <Chart options={options} series={series} type='bar' height='100%'/>
            </div>

        </Paper>
    )
}

export default Graph