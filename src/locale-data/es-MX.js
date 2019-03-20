export default {
	'locale': 'es-MX',
	'date': {
		'hour24': true,
		'formats': {
			'dateFormats': {
				'full': 'dddd d\' de \'MMMM\' de \'yyyy',
				'medium': 'd\' de \'MMMM\' de \'yyyy',
				'short': 'dd/MM/yyyy',
				'monthYear': 'MMMM yyyy',
				'monthDay': 'd\' de \'MMMM'
			},
			'fuzzyFormats': {
				'yesterdayAtTime': 'Ayer a las {time}',
				'dayAtTime': '{day} a las {time}',
				'justNow': 'Recién',
				'oneMinuteAgo': 'Hace un minuto',
				'minutesAgo': 'Hace {numMinutes} minuto(s)',
				'oneHourAgo': 'Hace una hora',
				'hoursAgo': 'Hace {numHours} horas',
			},
			'timeFormats': {
				'full': 'HH:mm ZZZ',
				'medium': 'HH:mm',
				'short': 'HH:mm'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 0,
			'weekendStartDay': 6,
			'weekendEndDay': 0,
			'months': {
				'short': [
					'ene.',
					'feb.',
					'mar.',
					'abr.',
					'may.',
					'jun.',
					'jul.',
					'ago.',
					'sep.',
					'oct.',
					'nov.',
					'dic.'
				],
				'long': [
					'enero',
					'febrero',
					'marzo',
					'abril',
					'mayo',
					'junio',
					'julio',
					'agosto',
					'septiembre',
					'octubre',
					'noviembre',
					'diciembre'
				]
			},
			'days': {
				'narrow': [
					'D',
					'L',
					'M',
					'M',
					'J',
					'V',
					'S'
				],
				'short': [
					'dom.',
					'lun.',
					'mar.',
					'mié.',
					'jue.',
					'vie.',
					'sáb.'
				],
				'long': [
					'domingo',
					'lunes',
					'martes',
					'miércoles',
					'jueves',
					'viernes',
					'sábado'
				]
			},
			'dayPeriods': {
				'am': 'a.m.',
				'pm': 'p.m.'
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
			'bytes': 'bytes',
			'byte': 'byte'
		}
	}
};
