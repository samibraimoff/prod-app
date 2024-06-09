import { classNames } from './classNames';

describe('classNames', () => {
    test('works with only first param', () => {
        const expected = 'someclass'
        const result = classNames('someclass', {}, [])
        expect(result).toBe(expected)
    })

    test('works with first two params', () => {
        const expected = 'someclass hover'
        const result = classNames('someclass', { hover: true, select: false }, [])
        expect(result).toBe(expected)
    })

    test('works with all three params', () => {
        const expected = 'someclass passedClass hover';
        const result = classNames('someclass', { hover: true, select: false }, ['passedClass'])
        expect(result).toBe(expected)
    })
})