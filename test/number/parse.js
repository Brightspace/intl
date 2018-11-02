import parse from '../../src/number/parse.js';

var expect = chai.expect;

function getValueHelper(input, locale) {
	var numberParse = new parse('en-US', {locale:locale});
	var value = numberParse.parse(input);
	return value;
}

describe('NumberParse', function() {

	describe('parse', function() {

		describe('edge', function() {

			[
				undefined,
				null,
				'',
				'  		 ',
				' 0 	',
				'0',
				',',
				'  ,  ,'
			].forEach(function(input) {
				it('should parse "' + input + '" as 0', function() {
					var value = getValueHelper(input);
					expect(value).to.equal(0);
				});
			});

			[
				'abc',
				'a3',
				'-D4'
			].forEach(function(input) {
				it('should return NaN for invalid input "' + input + '"', function() {
					var value = getValueHelper(input);
					expect(isNaN(value)).to.be.true;
				});
			});

			[
				{val: '1b', expected: 1},
				{val: '1.44e', expected: 1.44},
				{val: ' - 0.2ab09', expected: -0.2},
				{val: '4,593  	329.2b392-', expected: 4593329.2}
			].forEach(function(input) {
				it('should stop on first invalid char "' + input.val + '"', function() {
					var value = getValueHelper(input.val);
					expect(value).to.equal(input.expected);
				});
			});

		});

		describe('decimals', function() {

			it('should parse decimal number', function() {
				var value = getValueHelper('1000.20349');
				expect(value).to.equal(1000.20349);
			});

			it('should handle custom decimal symbol', function() {
				var locale = {number: {symbols: {decimal: '@'}}};
				var value = getValueHelper('0@2194', locale);
				expect(value).to.equal(0.2194);
			});

			it('should ignore subsequent decimal places', function() {
				var value = getValueHelper('1000.203.49.');
				expect(value).to.equal(1000.20349);
			});

		});

		describe('groups', function() {

			it('should handle group separators', function() {
				var value = getValueHelper('4,193,018.2028');
				expect(value).to.equal(4193018.2028);
			});

			it('should ignore spaces', function() {
				var value = getValueHelper(' 9  2	9322, 293.29 	382 ');
				expect(value).to.equal(929322293.29382);
			});

			['|', ' '].forEach(function(sep) {
				it('should handle "' + sep + '" as a group separator', function() {
					var locale = {number: {symbols: {group: sep}}};
					var value = getValueHelper('4' + sep + '193' + sep + '018.2028', locale);
					expect(value).to.equal(4193018.2028);
				});
			});

		});

		describe('negative', function() {

			[
				'({number})',
				'- {number}',
				'{number}-',
				'{number} -',
				'-{number}',
				'({number})',
				'- {number}',
				'{number}-',
				'{number} -',
				'-{number}'
			].forEach(function(pattern) {
				it('should handle negative pattern "' + pattern + '"', function() {
					var input = pattern.replace('{number}', '3.14');
					var value = getValueHelper(input);
					expect(value).to.equal(-3.14);
				});
			});

			it('should parse with custom negative symbol', function() {
				var locale = {number: {symbols: {negative: '^'}}};
				var value = getValueHelper('^ 42', locale);
				expect(value).to.equal(-42);
			});

		});

	});

});
