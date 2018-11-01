export default {
	'locale': 'pt-BR',
	'date': {
		'hour24': true,
		'formats': {
			'dateFormats': {
				'full': 'dddd, d\' de \'MMMM\' de \'yyyy',
				'medium': 'd\' de  \'MMMM\' de \'yyyy',
				'short': 'd/M/yyyy',
				'monthYear': 'MMMM yyyy',
				'monthDay': 'MMMM d'
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
					'jan',
					'fev',
					'mar',
					'abr',
					'mai',
					'jun',
					'jul',
					'ago',
					'set',
					'out',
					'nov',
					'dez'
				],
				'long': [
					'janeiro',
					'fevereiro',
					'março',
					'abril',
					'maio',
					'junho',
					'julho',
					'agosto',
					'setembro',
					'outubro',
					'novembro',
					'dezembro'
				]
			},
			'days': {
				'narrow': [
					'D',
					'S',
					'T',
					'Q',
					'Q',
					'S',
					'S'
				],
				'short': [
					'dom',
					'seg',
					'ter',
					'qua',
					'qui',
					'sex',
					'sáb'
				],
				'long': [
					'domingo',
					'segunda-feira',
					'terça-feira',
					'quarta-feira',
					'quinta-feira',
					'sexta-feira',
					'sábado'
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
				'positivePattern': '{number}%',
				'negativePattern': '-{number}%'
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
			'bytes': 'Bytes',
			'byte': 'Byte'
		}
	}
};
