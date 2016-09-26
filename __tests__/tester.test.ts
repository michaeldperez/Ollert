declare var jest, test, expect

jest.autoMockOff();

import add from '../src/test';

test('it adds two numbers', () => {
    expect(add(1,2)).toBe(3);
});
