import React from 'react'
import ApexChart from 'react-apexcharts'
import {useTheme} from '@material-ui/core/styles'
import {useMediaQuery} from '@material-ui/core'

const Chart = props => {
    const theme = useTheme()
    const mediaQuery = useMediaQuery(theme.breakpoints.up('lg'))

    const options = {
        chart: {
            toolbar: {
                show: false
            },
            background: 'rgba(0,0,0,0)',
        },
        plotOptions: {
            bar: {
                horizontal: false
            },
            fill: {
                colors: ['#f44336']
            }
        },
        xaxis: {
            labels: {
                style: {
                    colors: theme.palette.primary.contrastText
                },
                offsetY: -2
            },
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: theme.palette.primary.contrastText,
                    fontFamily: theme.typography.fontFamily
                },
                offsetX: 4
            },
            axisTicks: {
                show: false,
            },
            title: {
                text: props.yaxis,
                style: {
                    color: theme.palette.primary.contrastText,
                    fontSize: theme.typography.fontSize,
                    fontFamily: theme.typography.fontFamily
                }
            }
        }
        
    }
    
    const series = [{
        data: [[1991,30],[1992,40],[1993,45],[1994,50],[1995,49],[1996,60],[1997,90]]
    }]


    return(
        <>
            <ApexChart 
                options={options} 
                series={series} 
                type={props.type} 
                width={mediaQuery ? '560px' : '100%'}/>
        </>
    )
}

export default Chart