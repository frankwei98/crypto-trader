export default function getEcOption({chartData, volumes, categoryData}) {
  const itemStyle = {
    normal: {
      color: '#f5222d',
      color0: '#52c41a',
      borderColor: '#ff4d4f',
      borderColor0: '#73d13d',
      borderWidth: 1,
      opacity: 1
    }
  }
  const series = [
    {
      name: 'Market',
      type: 'candlestick',
      data: chartData,
      itemStyle
    },
    {
      name: 'Volume',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: volumes
    }
  ]
  const option = {
    grid: [
      {
        left: '10%',
        right: '8%',
        height: '50%'
      },
      {
        left: '10%',
        right: '8%',
        top: '63%',
        height: '10%'
      }
    ],
    visualMap: {
      show: false,
      seriesIndex: 5,
      dimension: 2,
      pieces: [{
        value: 1,
        color: '#52c41a'
      }, {
        value: -1,
        color: '#f5222d'
      }]
    },
    xAxis: [
      {
        type: 'category',
        data: categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: {onZero: false},
        splitLine: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      },
      {
        type: 'category',
        gridIndex: 1,
        data: categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: {onZero: false},
        axisTick: {show: false},
        splitLine: {show: false},
        axisLabel: {show: false},
        splitNumber: 20,
        min: 'dataMin'
        // max: 'dataMax'
      }],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true
        }
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: {show: false}
      }
    ],
    series,
    animation: false,
    dataZoom: [
      {
        type: 'inside',
        filterMode: 'empty',
        start: 75,
        end: 100
      }
    ]
  }
  console.log(option)
  return {option}
}
