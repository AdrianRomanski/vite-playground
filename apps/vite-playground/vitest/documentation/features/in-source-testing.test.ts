
// the implementation
export function add(...args: number[]): number {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
// @ts-ignore
if (import.meta.vitest) {
  // @ts-ignore
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
