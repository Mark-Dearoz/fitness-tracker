import React from 'react'
import ApexChart from 'react-apexcharts'
import {useTheme} from '@material-ui/core/styles'
import {useMediaQuery} from '@material-ui/core'

const Chart = props => {
    const theme = useTheme()
    const isXL = useMediaQuery(theme.breakpoints.up('xl'))
    const isLG = useMediaQuery(theme.breakpoints.up('lg'))
    const isMD = useMediaQuery(theme.breakpoints.up('md'))

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
        name: props.axisName,
        data: props.data

    }]


    return(
        <>
            <ApexChart 
                options={options} 
                series={series} 
                type={props.type}
                height={isMD ? '95%' : 'auto'} 
                width={isXL ? '880px' : isLG ? '610px' : isMD ? '440px':'100%'}/>
        </>
    )
}

export default Chart