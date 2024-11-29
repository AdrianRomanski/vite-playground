import { expect, vi, it } from 'vitest'

it('mocking', () => {
  const fn = vi.fn()

  fn('hello', 1)

  expect(vi.isMockFunction(fn)).toBe(true)
  expect(fn.mock.calls[0]).toEqual(['hello', 1])

  fn.mockImplementation((arg: string) => 'hello ' + arg)

  fn('world', 2)

  expect(fn.mock.results[1].value).toBe('hello world')
})

