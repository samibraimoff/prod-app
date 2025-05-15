import { classNames } from 'shared/lib/class-names/class-names';

describe('classNames', () => {
    it('should return correct class names', () => {
        const expected = 'class1 additional hovered active';
        const result = classNames('class1', {
            hovered: true,
            active: true,
        }, [
            'additional',
        ]);
        expect(result).toBe(expected);
    });

    it('should return one class name', () => {
        const expected = 'class1';
        const result = classNames('class1', {
            hovered: false,
            active: false,
        }, [
            '',
        ]);
        expect(result).toBe(expected);
    });

    it('should return only one mod class name', () => {
        const expected = 'hovered';
        const result = classNames(undefined, {
            hovered: true,
            active: false,
        }, [
            '',
        ]);
        expect(result).toBe(expected);
    });
});
