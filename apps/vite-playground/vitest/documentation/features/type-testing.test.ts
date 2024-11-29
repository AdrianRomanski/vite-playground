import { assertType, expectTypeOf, test } from 'vitest'

test('my types work properly', () => {
  const method = ({name: string}) => true;
  expectTypeOf(method).toBeFunction()
  expectTypeOf(method).parameter(0).toMatchTypeOf<{ name: string }>()
  assertType(method({ name: 42 }))
})
