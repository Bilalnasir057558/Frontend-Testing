import test from "node:test";
import { getFormattedWord } from "./getFormattedWord";

test('capitalizes the first letter of a word', () => {
    expect(getFormattedWord('hello')).toBe('Hello');
} )