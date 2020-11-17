import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should return empty string if start is larger than end', () => {
    //given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return empty string if start is not in range [1,10]', () => {
    //given
    const table = new MultiplicationTable()
    const start = 0
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return empty string if end is not in range [1,10]', () => {
    //given
    const table = new MultiplicationTable()
    const start = 1
    const end = 11

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return empty string if start or end is not integer', () => {
    //given
    const table = new MultiplicationTable()
    const start = 1.1
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return correct multiplication table for 2, 4', () => {
    //given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })

  it('should render multiplication table of (2, 10)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 10

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe(`1*1=1
1*2=2    2*2=4
1*3=3    2*3=6    3*3=9
1*4=4    2*4=8    3*4=12   4*4=16
1*5=5    2*5=10   3*5=15   4*5=20   5*5=25
1*6=6    2*6=12   3*6=18   4*6=24   5*6=30   6*6=36
1*7=7    2*7=14   3*7=21   4*7=28   5*7=35   6*7=42   7*7=49
1*8=8    2*8=16   3*8=24   4*8=32   5*8=40   6*8=48   7*8=56   8*8=64
1*9=9    2*9=18   3*9=27   4*9=36   5*9=45   6*9=54   7*9=63   8*9=72   9*9=81
1*10=10  2*10=20  3*10=30  4*10=40  5*10=50  6*10=60  7*10=70  8*10=80  9*10=90  10*10=100`)
  })
})
