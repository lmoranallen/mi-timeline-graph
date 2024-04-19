import { Line, getElementAtEvent } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale, 
    LinearScale,
    PointElement,
    ChartData,
    Legend,
    Tooltip,
} from 'chart.js'

import './TimeSeriesGraph.css'
import { useRef } from 'react'
import { draggableBackgroundCursorLine } from '../data/timeSeriesData'

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale,
    PointElement,
    Tooltip,
    Legend
)


interface TimeSeriesProps {
    data: any
    options: any
}

const TimeSeriesGraph = (props: TimeSeriesProps) => {
    const {data, options} = props
    
    const chartRef = useRef();

    const handleLineMovementEvent = (event: any) => {
        if (!chartRef.current) return;
        const positionOfCursor = getElementAtEvent(chartRef.current, event);
        console.log('STATUS: ', positionOfCursor);
    }

    return (
    <div className='graph'>
        <div className="data-segment"> 
            <h1>00 : 00 : 02 : 69</h1>

            <div className="value-segment">
                <h4> Value #1</h4>
                <input type="value"></input> 
                <div style={{backgroundColor: "red"}} id='colorTag'/>

            </div>

            <div className="value-segment">
                <h4> Value #2</h4>
                <input type="value"></input>
                <div style={{backgroundColor: "green"}} id='colorTag'/>

            </div>

            <div className="value-segment">
                <h4> Value #3</h4>
                <input type="value"></input> 
                <div style={{backgroundColor: "lightblue"}} id='colorTag'/>
            </div>
        </div>

        <div className='graph-segment'>
            <Line
                data = {data}
                options = {options}
                plugins={draggableBackgroundCursorLine}
                onClick={handleLineMovementEvent}
                ref={chartRef}
            />
        </div>
    </div>
)
}

export default TimeSeriesGraph;