const flights = [
	{
		id: 111,
		flightNo: '332A',
		flightName: 'Test flight1',
		arrivalTime: '09:30',
		arrivalDate: '4/1/2020',
		departureTime: '17:30',
		departureDate: '4/2/2020',
		arrivalAirport: 'Chennai',
		departureAirport: 'Chennai',
		source: 'MAS',
		destination: 'JFK',
    passengers: {},
    seats: []
	},
	{
		id: 112,
		flightNo: '132F',
		flightName: 'Test flight2',
		arrivalTime: '14:30',
		arrivalDate: '4/10/2020',
		departureTime: '23:30',
		departureDate: '4/11/2020',
		arrivalAirport: 'Mumbai',
		departureAirport: 'Mumbai',
		source: 'BLR',
		destination: 'GB',
    passengers: {},
    seats: []
	},
	{
		id: 113,
		flightNo: '432Y',
		flightName: 'Test flight3',
		arrivalTime: '03:30',
		arrivalDate: '4/2/2020',
		departureTime: '10:30',
		departureDate: '4/2/2020',
		arrivalAirport: 'Chennai',
		departureAirport: 'Chennai',
		source: 'MAS',
		destination: 'Doha',
    passengers: {},
    seats: []
	},
	{
		id: 114,
		flightNo: '882D',
		flightName: 'Test flight4',
		arrivalTime: '09:30',
		arrivalDate: '4/5/2020',
		departureTime: '14:30',
		departureDate: '4/5/2020',
		arrivalAirport: 'Chennai',
		departureAirport: 'Chennai',
		source: 'MAS',
		destination: 'DLH',
    passengers: {},
    seats: []
	},
	{
		id: 115,
		flightNo: '782M',
		flightName: 'Test flight5',
		arrivalTime: '05:30',
		arrivalDate: '4/1/2020',
		departureTime: '11:30',
		departureDate: '4/2/2020',
		arrivalAirport: 'Chennai',
		departureAirport: 'Chennai',
		source: 'MAS',
		destination: 'JFK',
    passengers: {},
    seats: []
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
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: null
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
		ancillaryServices: null
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
		ancillaryServices: null
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
		ancillaryServices: null
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
		ancillaryServices: null
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
		ancillaryServices: null
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
		ancillaryServices: null
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
		ancillaryServices: null
	},
	{
		id: 919,
		flightNo: '132F',
		passengerName: 'Karthik KK',
		passportDetails: 'AALBHH123',
		dob: '01/11/1984',
		address: 'Test address KK',
		seatNo: '',
		isCheckedIn: false,
		isPhysChallenged: false,
		isInfant: false,
		isCarryingInfant: false,
		ancillaryServices: null
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
      ],
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
