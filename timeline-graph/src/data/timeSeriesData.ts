

const indexes = [1,2,3,4,5,6,7,8,9]

export const data = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00",
             "05:00", "06:00", "07:00", "08:00"],
    datasets: [
        {
            label: "Value #1", 
            data: indexes.map(x => Math.cos(4 - 5*x)),
            backgroundColor: 'black',
            borderColor: 'red',
            pointBorderColor: 'black',
            fill: true,
            tension: 0.4
        },
        {
            label: "Value #2", 
            data: [1, -2.21, 3.9, 2.6,-1.2, -1.8, 3, 4.6, 1.83],
            backgroundColor: 'black',
            borderColor: 'green',
            pointBorderColor: 'black',
            fill: true,
            tension: 0.4
        },
        {
            label: "Value #3",
            data: indexes.map(x => Math.cos(5*x + 4)),
            backgroundColor: 'black',
            borderColor: 'lightblue',
            pointBorderColor: 'black',
            fill: true,
            tension: 0.4
        },
    ]
}

export const options = {
    plugins: {
        legend: true
    }
}

export const draggableBackgroundCursorLine: any = {
    id: 'draggableLine', 
    beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
        const { ctx, chartArea: { top, bottom, left, right, width, height}, scales: {x, y} } = chart
        ctx.save();

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black'
        ctx.moveTo(x.getPixelForValue(5), top);
        ctx.lineTo(x.getPixelForValue(5), bottom);
        ctx.stroke();

    }
}