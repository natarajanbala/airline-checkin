const flights = [
	{
		id: 111,
		flightNo: '332A',
		flightName: 'QATAR AIRWAYS',
		source: 'BLR',
		sourceFullName: 'Bengaluru',
		srcDepartureTime: '17:30',
		srcDepartureDate: '4/1/2020',
		destination: 'DOH',
		destFullName: 'Doha',
		destArrivalTime: '02:30',
		destArrivalDate: '4/2/2020',
		passengers: {},
		seats: [],
		logoPath: '/static/images/qatar-airways-emblem.png'
	},
	{
		id: 112,
		flightNo: '132F',
		flightName: 'AIR INDIA',
		source: 'BLR',	
		sourceFullName: 'Bengaluru',	
		srcDepartureTime: '18:30',
		srcDepartureDate: '4/1/2020',
		destination: 'BOM',
		destFullName: 'Bombay',
		destArrivalTime: '23:30',
		destArrivalDate: '4/1/2020',
		passengers: {},
		seats: [],
		logoPath: '/static/images/air-india-vector-logo.png'
	},
	{
		id: 113,
		flightNo: '432Y',
		flightName: 'EMIRATES AIRLINES',
		source: 'BLR',	
		sourceFullName: 'Bengaluru',	
		srcDepartureTime: '19:30',
		srcDepartureDate: '4/1/2020',
		destination: 'AUH',
		destFullName: 'Abu Dhabi',
		destArrivalTime: '03:30',
		destArrivalDate: '4/2/2020',
		passengers: {},
		seats: [],
		logoPath: '/static/images/emirates.png'
	},
	{
		id: 114,
		flightNo: '882D',
		flightName: 'SINGAPORE AIRLINES',
		source: 'BLR',	
		sourceFullName: 'Bengaluru',	
		srcDepartureTime: '22:30',
		srcDepartureDate: '4/1/2020',
		destination: 'MAA',
		destFullName: 'Chennai',
		destArrivalTime: '01:30',
		destArrivalDate: '4/2/2020',
		passengers: {},
		seats: [],
		logoPath: '/static/images/singapore-airlines-vector-logo-small.png'
	},
	{
		id: 115,
		flightNo: '782M',
		flightName: 'SRILANKAN AIRLINES',
		source: 'BLR',
		sourceFullName: 'Bengaluru',
		srcDepartureTime: '23:30',
		srcDepartureDate: '4/1/2020',
		destination: 'CMB',
		destFullName: 'Colombo',
		destArrivalTime: '08:30',
		destArrivalDate: '4/2/2020',
		passengers: {},
		seats: [],
		logoPath: '/static/images/srilankan-airlines-vector-logo.png'
	}
];

const passengers = [
	{
		id: 911,
		flightNo: '332A',
		passengerName: 'Bob Davis',
		passportDetails: 'AABBHH123',
		dob: '11/11/1978',
		address: 'Test address Bob',
		seatNo: '1A',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: [ 'Premium seat purchase', 'Special meals' ]
	},
	{
		id: 912,
		flightNo: '332A',
		passengerName: 'Mary Helen',
		passportDetails: 'LLBBHH453',
		dob: '02/14/1998',
		address: 'Test address Mary',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: true,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: [ 'Special meals', 'Wi-Fi pass' ]
	},
	{
		id: 913,
		flightNo: '332A',
		passengerName: 'Bruce Wayne',
		passportDetails: 'PPBBHH123',
		dob: '11/11/1988',
		address: 'Test address Bruce',
		seatNo: '',
		isCheckedIn: true,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: [ 'Special meals', 'Wi-Fi pass' ]
	},
	{
		id: 914,
		flightNo: '332A',
		passengerName: 'Kennedy F',
		passportDetails: 'KKYYHH197',
		dob: '08/17/1992',
		address: 'Test address Kennedy',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: []
	},
	{
		id: 915,
		flightNo: '332A',
		passengerName: 'Davida Thoma',
		passportDetails: 'BBBBHH123',
		dob: '10/07/1988',
		address: 'Test address Davida',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: true,
		ancillaryServices: [ 'Premium seat purchase', 'Special meals' ]
	},
	{
		id: 916,
		flightNo: '332A',
		passengerName: 'Siu Wong',
		passportDetails: 'IIBBHH123',
		dob: '11/11/2018',
		address: 'Test address Siu',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: true,
		isCarryingInfant: false,
		ancillaryServices: []
	},
	{
		id: 917,
		flightNo: '332A',
		passengerName: 'Brian Konar',
		passportDetails: 'OOBBHH123',
		dob: '11/12/1983',
		address: 'Test address Brian',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: [ 'Premium seat purchase', 'Wi-Fi pass' ]
	},
	{
		id: 918,
		flightNo: '332A',
		passengerName: 'Karthik K',
		passportDetails: 'AAGBHH123',
		dob: '01/11/1984',
		address: 'Test address Karthik',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: []
	},
	{
		id: 919,
		flightNo: '332A',
		passengerName: 'Karthik KK',
		passportDetails: 'AALBHH123',
		dob: '01/11/1984',
		address: 'Test address KK',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: [ 'Premium seat purchase', 'Special meals' ]
	},
	{
		id: 920,
		flightNo: '332A',
		passengerName: 'Mary Jim',
		passportDetails: 'MALBHH123',
		dob: '01/11/1984',
		address: 'Test address MJ',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: []
	},
	{
		id: 921,
		flightNo: '332A',
		passengerName: 'Jim Maida',
		passportDetails: 'JMLBHH123',
		dob: '01/11/1984',
		address: 'Test address JM',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: []
	},
	{
		id: 922,
		flightNo: '332A',
		passengerName: 'Natarajan C',
		passportDetails: 'NCLBHH123',
		dob: '01/11/1984',
		address: 'Test address CN',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: [ 'Premium seat purchase', 'Special meals', 'Wi-Fi pass' ]
	},
	{
		id: 923,
		flightNo: '332A',
		passengerName: 'Balaji N',
		passportDetails: 'BNLBHH123',
		dob: '01/11/1990',
		address: 'Test address BN',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: [ 'Special meals', 'Wi-Fi pass' ]
	}
];

const seats = [
	{
		id: 111,
		flightNo: '332A',
		data: {
			1: [
				{
					label: '1A',
					status: null,
					colorCode: null
				},
				{
					label: '1B',
					status: null,
					colorCode: null
				},
				{
					label: '1C',
					status: null,
					colorCode: null
				},
				{
					label: '1D',
					status: null,
					colorCode: null
				},
				{
					label: '1E',
					status: null,
					colorCode: null
				},
				{
					label: '1F',
					status: null,
					colorCode: null
				}
			],
			2: [
				{
					label: '2A',
					status: null,
					colorCode: null
				},
				{
					label: '2B',
					status: null,
					colorCode: null
				},
				{
					label: '2C',
					status: null,
					colorCode: null
				},
				{
					label: '2D',
					status: null,
					colorCode: null
				},
				{
					label: '2E',
					status: null,
					colorCode: null
				},
				{
					label: '2F',
					status: null,
					colorCode: null
				}
			],
			3: [
				{
					label: '3A',
					status: null,
					colorCode: null
				},
				{
					label: '3B',
					status: null,
					colorCode: null
				},
				{
					label: '3C',
					status: null,
					colorCode: null
				},
				{
					label: '3D',
					status: null,
					colorCode: null
				},
				{
					label: '3E',
					status: null,
					colorCode: null
				},
				{
					label: '3F',
					status: null,
					colorCode: null
				}
			]
		}
	},
	{
		id: 112,
		flightNo: '132F',
		data: {
			1: [
				{
					label: '1A',
					status: null,
					colorCode: null
				},
				{
					label: '1B',
					status: null,
					colorCode: null
				},
				{
					label: '1C',
					status: null,
					colorCode: null
				},
				{
					label: '1D',
					status: null,
					colorCode: null
				},
				{
					label: '1E',
					status: null,
					colorCode: null
				},
				{
					label: '1F',
					status: null,
					colorCode: null
				}
			],
			2: [
				{
					label: '2A',
					status: null,
					colorCode: null
				},
				{
					label: '2B',
					status: null,
					colorCode: null
				},
				{
					label: '2C',
					status: null,
					colorCode: null
				},
				{
					label: '2D',
					status: null,
					colorCode: null
				},
				{
					label: '2E',
					status: null,
					colorCode: null
				},
				{
					label: '2F',
					status: null,
					colorCode: null
				}
			]
		}
	}
];

const ancillaryServices = [ 'Special meals', 'in-flight shop' ];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
	flights,
	passengers,
	seats,
	ancillaryServices
};
