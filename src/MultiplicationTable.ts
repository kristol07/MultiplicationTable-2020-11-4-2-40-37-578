class Expression {
  constructor(public first: number, public second: number) { }
}

function generateExpressionbyString(expression: string): Expression {
  const former = expression.split('=')[0]
  const first = Number(former.split('*')[0])
  const second = Number(former.split('*')[1])
  return new Expression(first, second)
}

function isIntegerBetween1and10(input: number): boolean {
  return (Number.isInteger(input) && input <= 10 && input >= 1) ? true : false
}

function getCombination(start: number, end: number): string[] {
  let i: number, j: number
  const combination: string[] = []
  for (i = start; i <= end; i++) {
    for (j = start; j <= i; j++) {
      const expression = `${j}*${i}=${j * i}`
      combination.push(expression)
    }
  }
  return combination
}

function getIndex(first: number, second: number, start: number) {
  return first - start + (1 + second - start) * (second - start) / 2
}


function renderMultiplicationExpression(expressions: string[], start: number, end: number): string[] {
  return expressions.map(expression => {
    const exp = generateExpressionbyString(expression)
    const first = exp.first
    const second = exp.second

    const targetIndex = getIndex(first, end, start)
    const targetLength = expressions[targetIndex].length
    const adjust = ' '.repeat(targetLength - expression.length)

    const header: string = first === start ? '' : ' '
    const tail: string = second === first ? '\n' : ' ' + adjust

    return `${header}${first}*${second}=${first * second}${tail}`
  })
}

function renderMultiplicationTable(start: number, end: number): string {
  const combination = getCombination(start, end)
  return renderMultiplicationExpression(combination, start, end).join('').slice(0, -1)
}

export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (start > end) return ''
    if (!isIntegerBetween1and10(start) || !isIntegerBetween1and10(end)) return ''

    const multiplicationTable = renderMultiplicationTable(start, end)

    return multiplicationTable
  }
}
