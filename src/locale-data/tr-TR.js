export default {
	'locale': 'tr-TR',
	'date': {
		'hour24': true,
		'formats': {
			'dateFormats': {
				'full': 'dd MMMM yyyy dddd',
				'medium': 'dd MMMM yyyy',
				'short': 'dd.MM.yyyy',
				'monthYear': 'MMMM yyyy',
				'monthDay': 'dd MMMM'
			},
			'fuzzyFormats': {
				'yesterdayAtTime': 'Dün şu saatte: {time}',
				'dayAtTime': '{day} günü şu saatte: {time}',
				'justNow': 'Şimdi',
				'oneMinuteAgo': '1 dakika önce',
				'minutesAgo': '{numMinutes} dakika önce',
				'oneHourAgo': '1 saat önce',
				'hoursAgo': '{numHours} saat önce',
			},
			'timeFormats': {
				'full': 'HH:mm ZZZ',
				'medium': 'HH:mm',
				'short': 'HH:mm'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 1,
			'weekendStartDay': 6,
			'weekendEndDay': 0,
			'months': {
				'short': [
					'Oca',
					'Şub',
					'Mar',
					'Nis',
					'May',
					'Haz',
					'Tem',
					'Ağu',
					'Eyl',
					'Ek',
					'Kas',
					'Ara'
				],
				'long': [
					'Ocak',
					'Şubat',
					'Mart',
					'Nisan',
					'Mayıs',
					'Haziran',
					'Temmuz',
					'Ağustos',
					'Eylül',
					'Ekim',
					'Kasım',
					'Aralık'
				]
			},
			'days': {
				'narrow': [
					'P',
					'P',
					'S',
					'Ç',
					'P',
					'C',
					'C'
				],
				'short': [
					'Paz',
					'Pzt',
					'Sal',
					'Çar',
					'Per',
					'Cum',
					'Cmt'
				],
				'long': [
					'Pazar',
					'Pazartesi',
					'Salı',
					'Çarşamba',
					'Perşembe',
					'Cuma',
					'Cumartesi'
				]
			},
			'dayPeriods': {
				'am': 'ÖÖ',
				'pm': 'ÖS'
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
				'positivePattern': '%{number}',
				'negativePattern': '-%{number}'
			}
		},
		'symbols': {
			'decimal': ',',
			'group': '.',
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
			'bytes': 'Bayt',
			'byte': 'Bayt'
		}
	}
};
