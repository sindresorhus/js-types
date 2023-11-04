import test from 'ava';
import jsTypes from './index.js';

test('main', t => {
	t.true(Array.isArray(jsTypes));
	t.true(jsTypes.length > 0);
	t.true(jsTypes.includes('Array'));
	t.true(jsTypes.includes('Number'));
});
