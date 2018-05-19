export default class MarketDataHandler {
  constructor({data, name, symbol}) {
    this.data = data
    this.name = name
    this.symbol = symbol
  }

  get chartsData() {
    const {data} = this
    return data.map(
            ({ open, high, close, low, volume }) =>
              [open, high, close, low, volume])
  }

  get categoryData() {
    const {data} = this
    return data.map(({ date }) => date)
  }

  get volumes() {
    const {data} = this
    return data.map(({ open, close, volume }, idx) => [
      idx,
      volume,
      open > close ? 1 : -1
    ])
  }
}
