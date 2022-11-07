const sumOfString = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof sumOfString('12345');

	expect(type).toBe('number');
});

test('Тест. str: "12345"', () => {
	const res = sumOfString('12345');

	expect(res).toBe(15);
});

test('Тест. str: ""', () => {
	const res = sumOfString('');

	expect(res).toBe(0);
});

test('Тест. str: "9"', () => {
	const res = sumOfString('9');

	expect(res).toBe(9);
});

test('Тест. str: "6831"', () => {
	const res = sumOfString('6831');

	expect(res).toBe(18);
});

test('Тест. str: "25788"', () => {
	const res = sumOfString('25788');

	expect(res).toBe(30);
});

test('Тест. str: "14294112470"', () => {
	const res = sumOfString('14294112470');

	expect(res).toBe(35);
});

test('Auto: random outcomes', () => {
	let failed = false;

	const getStr = () => {
		let str = '';
		const iterations = getRandomInt(0, 40);

		for (let i = 0; i < iterations; i++) {
			str += getRandomInt(0, 9);
		}

		return str;
	};

	for (let i = 0; i < 100; i++) {
		const str = getStr();

		if (solution(str) !== sumOfString(str)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});