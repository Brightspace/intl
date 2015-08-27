import {default as calendarProvider} from '../../calendar/provider';

function getSeparator(localeData) {

	var re = new RegExp('\\W');
	var match = re.exec(localeData.date.formats.dateFormats.short);
	if(match !== null) {
		return match[0];
	}

	return '/';

}

function getParts(localeData) {

	var result = [];
	var separator = getSeparator(localeData);
	var parts = localeData.date.formats.dateFormats.short.split(separator);

	for( var i = 0; i < parts.length; i++ ) {
		var part = parts[i].trim();
		if( part === 'dd' || part === 'd' ) {
			result.push('d');
		} else if(part === 'MM' || part === 'M') {
			result.push('M');
		} else if(part == 'yyyy') {
			result.push('yyyy');
		}
	}

	if(result.length !== 3) {
		return ['M', 'd', 'yyyy'];
	}

	return result;

}

export default function(input, localeData, options) {

	if(input === undefined || input === null) {
		input = '';
	}

	var calendarSpecificYear = null;
	var calendarSpecificMonth = null;
	var calendarSpecificDay = null;

	input = input.toString().trim();
	var separator = getSeparator(localeData);
	var dateFormatParts = getParts(localeData);

	var dateParts = input.split(separator);
	if(dateParts.length !== dateFormatParts.length) {
		throw new Error('Invalid input date: not enough parts');
	}

	for( var i = 0; i < dateFormatParts.length; i++ ) {

		var dateFormatPart = dateFormatParts[i];
		var partValue = parseInt(dateParts[i]);
		if(isNaN(partValue)) {
			throw new Error('Invalid input date: part number value');
		}

		if(dateFormatPart === 'yyyy') {
			calendarSpecificYear = partValue;
		} else if(dateFormatPart === 'M') {
			calendarSpecificMonth = partValue;
		} else if(dateFormatPart === 'd') {
			calendarSpecificDay = partValue;
		}
	}

	var calendar = calendarProvider(localeData);
	var gregorianLocalDate = calendar.tryGetGregorianLocaleDateTime(
		calendarSpecificYear,
		calendarSpecificMonth,
		calendarSpecificDay
	);
	if(gregorianLocalDate === null ) {
		throw new Error('Invalid input date: part range value');
	}

	return gregorianLocalDate;

}
