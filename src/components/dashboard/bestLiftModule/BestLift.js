import React from 'react'
import {Paper, Typography, FormControl, Select, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(3),
        minHeight: 'calc(25vh - 60px)',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    formControl:{
        width: '192px',
        marginBottom: theme.spacing(3)
    },
    repsWeight:{
        display: 'flex',
        gap: '24px',
        marginBottom: theme.spacing(3)
    },
    estimate: {
        transform: 'translateY(-8px)',
        marginBottom: theme.spacing(3)
    }
}))

const BestLift = () =>{
    const classes = useStyles()
    
    return(
        <Paper className={classes.paper}>
            <Typography variant='h4'> Best Lifts </Typography>
            <FormControl className={classes.formControl} id>
                <Select labelId='lift'>
                </Select>
            </FormControl>
            <Typography variant='body1'>April, 1 2020</Typography>
            <Box className={classes.repsWeight}>
                <Typography variant='body1'>10 repetitions</Typography>
                <Typography variant='body1'>400 pounds</Typography>
            </Box>
            <Typography variant='h5'>Max</Typography>
            <Box className={classes.estimate}>
                <Typography variant='caption'>(estimate)</Typography>
            </Box>
            <Typography variant='h4'>540 pounds</Typography>
        </Paper>
    )
}

export default BestLift