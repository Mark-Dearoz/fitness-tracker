import React, {useState} from 'react'
import WorkoutModal from '../workoutModal/WorkoutModal'
import {Card, CardHeader, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, IconButton} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    content:{
        padding: theme.spacing(0),
        margin: theme.spacing(2),
        marginTop: theme.spacing(0),
        height: 'calc(50vh - 240px)',
        overflow: 'scroll',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '0px'
          }
    },
    accordion:{
        backgroundColor: theme.palette.grey[900]
    }
}))

const DayCard = () =>{
    const classes = useStyles()
    const [modalOpen, setModalOpen] = useState(false)

    return(
        <>
        <Card elevation={4}>
            <CardHeader
                title={<Typography variant='h4'>DATE</Typography>}
                action= {<IconButton onClick={() => setModalOpen(true)}> 
                            <EditIcon fontSize='large'/> 
                        </IconButton>}
            />
            <CardContent className={classes.content}>
                <Accordion className={classes.accordion}>
                    <AccordionSummary>
                        Muscle Group 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Workout 1
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>

        {modalOpen ?  <WorkoutModal onClose={()=> setModalOpen(false)}> </WorkoutModal> : null}
        </>
    )
}

export default DayCard