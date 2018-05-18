export default function getEcOption(data) {
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
      type: 'candlestick',
      data,
      itemStyle
    }
  ]
  const option = {
    xAxis: {
      type: 'category'
      // data: ['10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00']
    },
    yAxis: {
      type: 'value'
    },
    series
  }
  return {option}
}
