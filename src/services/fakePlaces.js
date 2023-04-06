const places = [
	{
		_id: '5b21ca3eeb7f6fbccd471814',
		customerNumber: '1000',
		name: 'Ahlna',
		fullAddress: 'Alhnagade 10, 2500 Valby',
		addressLocation: 'Alhnagade 10, 2500 Valby',
		startDate:
			'Fri Dec 30 2022 21:58:40 GMT+0100 (Central European Standard Time)',
		endDate: null,
		basicInfo: {
			summaryData:
				'Small property with 3 stairs, 2 back stairs, laundry and vicevært service',
			importantNotes: 'Dont call in private',
			accessData: 'Key is in keybox, code 1234',
			contactData: [
				{
					contactType: { value: 'mainContact', label: 'Main contact' },
					data: [
						{
							label: { value: 'name', label: 'Name' },
							value: 'John Doe',
						},
						{
							label: { value: 'address', label: 'Address' },
							value: 'Jespers hovedgade 25',
						},
						{
							label: { value: 'email', label: 'Email' },
							value: 'example@gmail.com',
						},
					],
					contactNotes:
						'He is an old grumpy mean fart, doesnt find any joy in surroundings and complains at a dust stir. Keep strictly clear of this no good excuse for a creature.',
				},
				{
					contactType: { value: 'boardMember', label: 'Board Member' },
					data: [
						{
							label: { value: 'name', label: 'Name' },
							value: 'John Doe',
						},
						{
							label: { value: 'address', label: 'Address' },
							value: 'Jespers hovedgade 25',
						},
						{
							label: { value: 'email', label: 'Email' },
							value: 'example@gmail.com',
						},
					],
					contactNotes: '',
				},
				{
					contactType: { value: 'resident', label: 'Resident' },
					data: [
						{
							label: { value: 'name', label: 'Name' },
							value: 'John Doe',
						},
						{
							label: { value: 'address', label: 'Address' },
							value: 'Jespers hovedgade 25',
						},
						{
							label: { value: 'email', label: 'Email' },
							value: 'example@gmail.com',
						},
					],
					contactNotes: '',
				},
			],
		},

		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							customFrequency: { isCustomFrequency: false },
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
								{ value: [4], label: 'Apr' },
								{ value: [5], label: 'May' },
								{ value: [6], label: 'Jun' },
								{ value: [7], label: 'Jul' },
								{ value: [8], label: 'Aug' },
								{ value: [9], label: 'Sep' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside.',
								duration: 30,
								notes: 'Always remove the promo on postboxes',
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
								notes: 'Dont leave any cigarette butts',
							},
						],
					},
					{
						frequency: {
							value: { value: 'yearly', label: 'Yearly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
								notes:
									'Make sure to scrub on bottom, floor and vacuum the carpet',
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
								notes: '',
							},
						],
					},
					{
						frequency: {
							value: { value: 'monthly', label: 'Monthly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
								notes: '',
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Blather Mather' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Hubby' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '26 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471815',
		customerNumber: '1001',
		name: 'Ahlma',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471816',
		customerNumber: '1002',
		name: 'Ahlba',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471817',
		customerNumber: '1004',
		name: 'Ahlsa',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471818',
		customerNumber: '1005',
		name: 'Ahlka',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471819',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471820',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd4718121',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471822',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471823',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471824',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471825',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471269',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd4718237',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471828',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471829',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471830',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471831',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471832',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471833',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471834',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471835',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471836',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471837',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471838',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471839',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471841',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471840',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
	{
		_id: '5b21ca3eeb7f6fbccd471842',
		customerNumber: '1006',
		name: 'Ahlja',
		address: 'Alhnagade 10, 2500 Valby',
		workplan: [
			{
				workerTypeValue: { value: 'cleaner', label: 'Cleaner' },
				assignedValue: { value: 'worker1', label: 'Peter Hundash' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: [1], label: 'Jan' },
								{ value: [2], label: 'Feb' },
								{ value: [3], label: 'Mar' },
							],
							weekdays: [{ value: 1, label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task2', label: 'Stair' },
								instruction:
									'Sweep and wash the stairs all the way down to the basement, including under mats.\nRemove spiderwebs. \nChange defective lights. \nShake entrance mat outside',
								duration: 30,
							},
							{
								amount: 1,
								taskValue: { value: 'task4', label: 'Pavement' },
								instruction: 'Sweep and put order of pavement.',
								duration: 30,
							},
						],
					},
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 2,
								taskValue: { value: 'task1', label: 'Laundry space' },
								instruction:
									'Sweep and wash the floor.\nWipe surfaces. \nClean sink. \nEmpty garbage',
								duration: 30,
							},
						],
					},
				],
			},
			{
				workerTypeValue: { value: 'vicevært', label: 'Vicevært' },
				assignedValue: { value: 'wroker2', label: 'Mario Barrio' },
				assignment: [
					{
						frequency: {
							value: { value: 'weekly', label: 'Weekly' },
							intervalcalculation: 30,
							months: [
								{ value: 'jan', label: 'Jan' },
								{ value: 'feb', label: 'Feb' },
								{ value: 'mar', label: 'Mar' },
							],
							weekdays: [{ value: 'mon', label: 'Mon' }],
						},
						tasks: [
							{
								amount: 1,
								taskValue: { value: 'task3', label: 'Central Heating' },
								instruction:
									'Check on the central heating.\nFlush out dirty water from warm water container.\nFill out report on usage.',
								duration: 30,
							},
						],
					},
				],
			},
		],
		historyData: [
			{
				_id: '123456',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '123457',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '123458',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '123459',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '123460',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234524',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234563',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '1234572',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '1234581',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345911',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345112',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345213',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345614',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
			{
				_id: '12345715',
				label: 'Original Contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345816',
				label: 'Workplan',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'success',
			},
			{
				_id: '12345918',
				label: 'Offer',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'secondary',
			},
			{
				_id: '12345119',
				label: 'New contract',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'primary',
			},
			{
				_id: '12345220',
				label: 'Tilbud',
				creatDate: '25 July 2022',
				path: './dashboard',
				color: 'warning',
			},
		],
	},
];

export function getPlaces() {
	return places;
}
