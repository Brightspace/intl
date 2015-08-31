import {default as parseDate} from './parse-date';
import {default as parseTime} from './parse-time';
import {default as localeProvider} from '../locale-provider';

export default class NumberParse {
	constructor(locale, options) {
		options = options || {};
		this.localeData = localeProvider(locale, options.locale);
		this.options = options;
	}
	parseDate(input) {
		return parseDate(input, this.localeData, this.options);
	}
	parseTime(input) {
		return parseTime(input, this.localeData, this.options);
	}
}
