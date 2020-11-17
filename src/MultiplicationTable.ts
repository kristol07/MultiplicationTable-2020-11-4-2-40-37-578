class Expression {
  // static create(first: number,second: number){
  //   return {firstMultiplicator: first, secondMultiplicator: second }
  // }

  constructor(public firstMultiplicator: number, public secondMultiplicator: number) { }
}

function isIntegerBetween1and10(input: number): boolean {
  return (Number.isInteger(input) && input <= 10 && input >= 1) ? true : false
}

function getCombination(start: number, end: number): Expression[] {
  let i: number, j: number
  const combination: Expression[] = []
  for (i = start; i <= end; i++) {
    for (j = start; j <= i; j++) {
      const expression = new Expression(j, i)
      combination.push(expression)
    }
  }
  return combination
}

function renderMultiplicationExpression(firstMultiplicator: number, secondMultiplicator: number, start: number, end: number) {
  const header: string = firstMultiplicator===start ? '' : ' '
  const tail: string = secondMultiplicator===firstMultiplicator ? '\n' : ' '
  return `${header}${firstMultiplicator}*${secondMultiplicator}=${firstMultiplicator * secondMultiplicator}${tail}`
}

function renderCombinationExpression(start: number, end: number): string[] {
  const combination = getCombination(start, end)
  const combinationExpression = combination.map(expression => renderMultiplicationExpression(expression.firstMultiplicator, expression.secondMultiplicator, start, end))
  return combinationExpression
}

function renderMultiplicationTable(combinationExpression: string[]): string {
  return combinationExpression.join('').slice(0, -1)
}

export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (start > end) return ''
    if (!isIntegerBetween1and10(start) || !isIntegerBetween1and10(end)) return ''

    const combinationExpression = renderCombinationExpression(start, end)
    const multiplicationTable = renderMultiplicationTable(combinationExpression)

    return multiplicationTable
  }
}
