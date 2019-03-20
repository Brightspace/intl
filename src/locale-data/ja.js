export default {
	'locale': 'ja',
	'date': {
		'hour24': true,
		'formats': {
			'dateFormats': {
				'full': 'yyyy年M月d日',
				'medium': 'yyyy年M月d日',
				'short': 'yyyy/MM/dd',
				'monthYear': 'yyyy年M月',
				'monthDay': 'M月d日'
			},
			'fuzzyFormats': {
				'yesterdayAtTime': '昨日 {time} 時',
				'dayAtTime': '{day} 日 {time} 時',
				'justNow': '今',
				'oneMinuteAgo': '1 分前',
				'minutesAgo': '{numMinutes} 分前',
				'oneHourAgo': '1 時間前',
				'hoursAgo': '{numHours} 時間前',
			},
			'timeFormats': {
				'full': 'H:mm ZZZ',
				'medium': 'H:mm',
				'short': 'H:mm'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 0,
			'weekendStartDay': 6,
			'weekendEndDay': 0,
			'months': {
				'short': [
					'1 月',
					'2 月',
					'3 月',
					'4 月',
					'5 月',
					'6 月',
					'7 月',
					'8 月',
					'9 月',
					'10 月',
					'11 月',
					'12 月'
				],
				'long': [
					'1 月',
					'2 月',
					'3 月',
					'4 月',
					'5 月',
					'6 月',
					'7 月',
					'8 月',
					'9 月',
					'10 月',
					'11 月',
					'12 月'
				]
			},
			'days': {
				'narrow': [
					'日',
					'月',
					'火',
					'水',
					'木',
					'金',
					'土'
				],
				'short': [
					'日',
					'月',
					'火',
					'水',
					'木',
					'金',
					'土'
				],
				'long': [
					'日',
					'月',
					'火',
					'水',
					'木',
					'金',
					'土'
				]
			},
			'dayPeriods': {
				'am': '午前',
				'pm': '午後'
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
				'positivePattern': '{number}%',
				'negativePattern': '-{number}%'
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
			'bytes': 'バイト',
			'byte': 'バイト'
		}
	}
};
