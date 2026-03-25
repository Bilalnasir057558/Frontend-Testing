const getFormattedWord = require('./getFormattedWord');

test('capitalizes the first letter of a word', () => {
    expect(getFormattedWord('hello')).toBe('Hello');
});

test('returns an empty str when no argument is provided', () => {
    expect(getFormattedWord()).toBe("");
})