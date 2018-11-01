export default function prePadByZero(input, maxNum) {
	input = input.toString();
	var zero = '0';
	while (zero.length > 0 && input.length < maxNum) {
		input = zero + input;
	}
	return input;
}
