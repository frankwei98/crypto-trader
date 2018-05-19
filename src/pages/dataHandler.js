export default class MarketDataHandler {
  constructor({data, name, symbol}) {
    this.data = data
    this.name = name
    this.symbol = symbol
  }

  get chartsData() {
    const {data} = this
    return data.map(
            ({ open, high, close, low, percent, date }) =>
              [date, open, high, close, low])
  }

  get categoryData() {
    const {data} = this
    return data.map(({ date }) => date)
  }

  get volumes() {
    const {data} = this
    return data.map(({ open, close, volume }) => [
      volume,
      open > close ? 1 : -1
    ])
  }
}
