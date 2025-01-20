import { formatNumber } from "./formatNumber"

describe('when FormatNumber', () => {
  it('should return string with truly comma', () => {
    const result = formatNumber(0)
    const result1 = formatNumber(100)
    const result2 = formatNumber(10000)
    const result3 = formatNumber(10000000)

    expect(result).toEqual('0')
    expect(result1).toEqual('100')
    expect(result2).toEqual('1,0000')
    expect(result3).toEqual('10,000,000')
  })
})