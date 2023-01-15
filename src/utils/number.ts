const formatterShort = new Intl.NumberFormat('en-US')
const formatterFull = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
})

export const formatNumber = (inputVal: number) =>
  inputVal.toString().length > 5
    ? formatterFull.format(inputVal)
    : formatterShort.format(inputVal)
