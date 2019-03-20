export default {
	'locale': 'ko',
	'date': {
		'hour24': false,
		'formats': {
			'dateFormats': {
				'full': 'yyyy년 M월 d일 dddd',
				'medium': 'yyyy년 M월 d일',
				'short': 'yyyy-MM-dd',
				'monthYear': 'yyyy년 M월',
				'monthDay': 'M월 d일'
			},
			'fuzzyFormats':{
				'yesterdayAtTime': '어제 {time}',
				'dayAtTime': '{day}, {time}',
				'justNow': '방금',
				'oneMinuteAgo': '1분 전',
				'minutesAgo': '{numMinutes}분 전',
				'oneHourAgo': '1시간 전',
				'hoursAgo': '{numHours}시간 전',
			},
			'timeFormats': {
				'full': 'tt h:mm ZZZ',
				'medium': 'tt h:mm',
				'short': 'tt h:mm'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 0,
			'weekendStartDay': 6,
			'weekendEndDay': 0,
			'months': {
				'short': [
					'1월',
					'2월',
					'3월',
					'4월',
					'5월',
					'6월',
					'7월',
					'8월',
					'9월',
					'10월',
					'11월',
					'12월'
				],
				'long': [
					'1월',
					'2월',
					'3월',
					'4월',
					'5월',
					'6월',
					'7월',
					'8월',
					'9월',
					'10월',
					'11월',
					'12월'
				]
			},
			'days': {
				'narrow': [
					'일',
					'월',
					'화',
					'수',
					'목',
					'금',
					'토'
				],
				'short': [
					'일',
					'월',
					'화',
					'수',
					'목',
					'금',
					'토'
				],
				'long': [
					'일요일',
					'월요일',
					'화요일',
					'수요일',
					'목요일',
					'금요일',
					'토요일'
				]
			},
			'dayPeriods': {
				'am': '오전',
				'pm': '오후'
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
			'fileSizePattern': '{number}{unit}'
		},
		'units' : {
			'gigabyte': 'GB',
			'megabyte': 'MB',
			'kilobyte': 'KB',
			'bytes': '0]바이트',
			'byte': '0]바이트'
		}
	}
};
