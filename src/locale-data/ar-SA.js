export default {
	'locale': 'ar-SA',
	'date': {
		'hour24': false,
		'formats': {
			'dateFormats': {
				'full': 'dddd, d MMMM, yyyy',
				'medium': 'dd MMMM, yyyy',
				'short': 'dd/MM/yyyy',
				'monthYear': 'MMMM, yyyy',
				'monthDay': 'd MMMM'
			},
			'timeFormats': {
				'full': 'h:mm tt ZZZ',
				'medium': 'h:mm tt',
				'short': 'h:mm tt'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 6,
			'weekendStartDay': 4,
			'weekendEndDay': 5,
			'months': {
				'short': [
					'يناير',
					'فبراير',
					'مارس',
					'أبريل',
					'مايو',
					'يونيو',
					'يوليو',
					'أغسطس',
					'سبتمبر',
					'أكتوبر',
					'نوفمبر',
					'ديسمبر'
				],
				'long': [
					'يناير',
					'فبراير',
					'مارس',
					'أبريل',
					'مايو',
					'يونيو',
					'يوليو',
					'أغسطس',
					'سبتمبر',
					'أكتوبر',
					'نوفمبر',
					'ديسمبر'
				]
			},
			'days': {
				'narrow': [
					'أ',
					'إ',
					'ث',
					'أر',
					'خ',
					'ج',
					'س'
				],
				'short': [
					'أحد',
					'إثنين',
					'ثلاثاء',
					'أربعاء',
					'خميس',
					'جمعة',
					'سبت'
				],
				'long': [
					'الأحد',
					'الإثنين',
					'الثلاثاء',
					'الأربعاء',
					'الخميس',
					'الجمعة',
					'السبت'
				]
			},
			'dayPeriods': {
				'am': 'ص',
				'pm': 'م'
			}
		}
	},
	'number': {
		'patterns': {
			'decimal': {
				'positivePattern': '{number}',
				'negativePattern': '{number}-'
			},
			'percent': {
				'positivePattern': '{number} %',
				'negativePattern': '-{number} %'
			}
		},
		'symbols': {
			'decimal': '.',
			'group': ',',
			'negative': '-',
			'percent': '%'
		},
		'groupSize': 3
	},
	'fileSize': {
		'patterns': {
			'fileSizePattern': '{number} {unit}'
		},
		'units' : {
			'gigabyte': 'غيغا بايت',
			'megabyte': 'ميغا بايت',
			'kilobyte': 'كيلو بايت',
			'bytes': 'بايت',
			'byte': 'بايت'
		}
	}
};
