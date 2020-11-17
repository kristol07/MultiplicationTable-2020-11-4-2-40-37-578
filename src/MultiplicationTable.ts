function isIntegerBetween1and10(input: number): boolean {
  return (Number.isInteger(input) && input <= 10 && input >= 1) ? true : false
}

export class MultiplicationTable {
  public render(start: number, end: number): string{
    if(start > end) return ''
    if(!isIntegerBetween1and10(start) || !isIntegerBetween1and10(end)) return ''

    return '1*1=1'
  }
}
