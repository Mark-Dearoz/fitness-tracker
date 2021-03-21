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
            fontFamily: theme.typography.fontFamily,
            foreColor: theme.palette.primary.contrastText,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: "gradient",
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                opacityFrom: 0.9,
                opacityTo: 0.5,
            }   
        },
        grid: {
            borderColor: 'rgba(255,255,255,0.2)'
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        plotOptions: {
            bar: {
                horizontal: false
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            axisTicks: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            fillSeriesColor: true,
            marker: {
                show: false,
            },
            x: {
                show: false,
            }
        } 
    }
    
    const series = [{
        name: 'Weight',
        data: props.data
    }]


    return(
        <>
            {console.log(series)}
            <ApexChart 
                options={options} 
                series={series} 
                type={props.type} 
                width={mediaQuery ? '560px' : '100%'}/>
        </>
    )
}

export default Chart