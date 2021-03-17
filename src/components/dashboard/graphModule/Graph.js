import React from 'react'
import {Paper, Select, InputLabel, FormControl, Container} from '@material-ui/core'
import Chart from 'react-apexcharts'
import {makeStyles} from '@material-ui/styles'

const options = {
    chart: {
      background: '#f4f4f4',
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


const useStyles = makeStyles(() => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '24px',
        margin: '0px'
    },
    container:{
        padding: '0px'
    },
    formControl:{
        width:'192px'
    }
}))

const Graph = () =>{
    const classes = useStyles()
    return(
        <Paper className={classes.paper} elevation={2}>
            <Container className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel> label</InputLabel>
                    <Select></Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel> label</InputLabel>
                    <Select></Select>
                </FormControl>
            </Container>
            <Container className={classes.container}>
                <Chart options={options} series={series} type='bar' width='100%'/>
            </Container>

        </Paper>
    )
}

export default Graph