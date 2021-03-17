import React, {useState} from 'react'
import WorkoutModal from '../workoutModal/WorkoutModal'
import {Paper, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, IconButton} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(() => ({
    paper: {
        padding: '8px',
        
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px'
    },
    divider:{
        margin: '8px 0px'
    },
    body:{
        overflow: 'scroll',
        scrollbarWidth: '1px',
        overflowX: 'hidden',
        padding: '0px',
        height: '400px',
        '&::-webkit-scrollbar': {
            width: '0px'
          }
    },
    accordion:{
        margin: '0px'
    }
}))

const DayCard = () =>{
    const classes = useStyles()

    const [modalOpen, setModalOpen] = useState(false)

    return(
        <>
        <Paper elevation={4} className={classes.paper}>
            <Container className={classes.header}>
                <Typography variant='h4'>
                    DATE
                </Typography>
                <IconButton onClick={() => setModalOpen(true)}>
                    <EditIcon fontSize='large'/>
                </IconButton>
            </Container>
            <Divider className={classes.divider}/>
            <Container className={classes.body}>
                <Accordion className={classes.accordion}>
                    <AccordionSummary>
                        Muscle Group 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Paper>

        {modalOpen ?  <WorkoutModal onClose={()=> setModalOpen(false)}> </WorkoutModal> : null}
        </>
    )
}

export default DayCard