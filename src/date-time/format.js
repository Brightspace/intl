import {default as formatTime} from './format-time';
import {default as formatDate} from './format-date';
import {default as localeProvider} from '../locale-provider';

export default class DateTimeFormat {
	constructor(locale, options) {
		options = options || {};
		this.options = options;
		this.localeData = localeProvider(locale, options.locale);
	}
	format(date) {
		let format = this.options.format || 'short';
		switch(format) {
			case 'full':
			case 'medium':
			case 'short':
				return this.formatDate(date) + ' ' + this.formatTime(date);
			case 'monthYear':
			case 'monthDay':
				break;
			case 'longDayOfWeek':
				format = 'dddd';
				break;
			case 'shortDayOfWeek':
				format = 'ddd';
				break;
			case 'longMonth':
				format = 'MMMM';
				break;
			case 'shortMonth':
				format = 'MMM';
				break;
		}
		const value = formatDate(date, this.localeData, {format: format});
		return value;
	}
	formatDate(date) {
		return formatDate(date, this.localeData, this.options);
	}
	formatTime(date) {
		return formatTime(date, this.localeData, this.options);
	}
}
