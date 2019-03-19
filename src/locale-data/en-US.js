export default {
	'locale': 'en-US',
	'date': {
		'hour24': false,
		'formats': {
			'dateFormats': {
				'full': 'dddd, MMMM d, yyyy',
				'medium': 'MMM d, yyyy',
				'short': 'M/d/yyyy',
				'monthYear': 'MMMM yyyy',
				'monthDay': 'MMMM d'
			},
			'fuzzyFormats': {
				'yesterdayAtTime': 'Yesterday at {time}',
				'dayAtTime': '{day} at {time}',
				'justNow': 'Just now',
				'oneMinuteAgo': '1 minute ago',
				'minutesAgo': '{numMinutes} minutes ago',
				'oneHourAgo': '1 hour ago',
				'hoursAgo': '{numHours} hours ago',
			},
			'timeFormats': {
				'full': 'h:mm tt ZZZ',
				'medium': 'h:mm tt',
				'short': 'h:mm tt'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 0,
			'weekendStartDay': 6,
			'weekendEndDay': 0,
			'months': {
				'short': [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],
				'long': [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				]
			},
			'days': {
				'narrow': [
					'S',
					'M',
					'T',
					'W',
					'T',
					'F',
					'S'
				],
				'short': [
					'Sun',
					'Mon',
					'Tue',
					'Wed',
					'Thu',
					'Fri',
					'Sat'
				],
				'long': [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday'
				]
			},
			'dayPeriods': {
				'am': 'AM',
				'pm': 'PM'
			}
		}
	},
	'number': {
		'patterns': {
			'decimal': {
				'positivePattern': '{number}',
				'negativePattern': '-{number}'
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
			'gigabyte': 'GB',
			'megabyte': 'MB',
			'kilobyte': 'KB',
			'bytes': 'Bytes',
			'byte': 'Byte'
		}
	}
};
