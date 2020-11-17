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
})
