const inputData = {
	workerTypes: [
		{ value: 'cleaner', label: 'Cleaner' },
		{ value: 'vicevært', label: 'Vicevært' },
		{ value: 'windowCleaner', label: 'Window Cleaner' },
		{ value: 'snowWorker', label: 'Snow Worker' },
		{ value: 'gardener', label: 'Gardener' },
	],

	workers: [
		{ value: 'worker1', label: 'Peter Hundash' },
		{ value: 'worker2', label: 'Mario Barrio' },
		{ value: 'worker3', label: 'Mash Fash' },
		{ value: 'worker4', label: 'Silvia Silberton' },
		{ value: 'worker5', label: 'Feshda Simkahoots' },
	],

	taskTypes: [
		{ value: 'task1', label: 'Laundry space' },
		{ value: 'task2', label: 'Stair' },
		{ value: 'task3', label: 'Central Heating' },
		{ value: 'task4', label: 'Pavement' },
	],

	frequencyTypes: [
		{ value: 'weekly', label: 'Weekly' },
		{ value: '14Days', label: 'Every 14 days' },
		{ value: 'Monthly', label: 'Monthly' },
		{ value: '2Months', label: 'Every 2 months' },
		{ value: '4TimesYear', label: '4 times a year' },
		{ value: '3TimesYear', label: '3 times a year' },
		{ value: '2TimesYear', label: '2 times a year' },
		{ value: 'customFrequency', label: 'Create new frequency' },
	],

	weekdayOptions: [
		{ value: 1, label: 'Mon' },
		{ value: 2, label: 'Tue' },
		{ value: 3, label: 'Wed' },
		{ value: 4, label: 'Thu' },
		{ value: 5, label: 'Fri' },
		{ value: 6, label: 'Sat' },
		{ value: 7, label: 'Sun' },
	],
	monthOptions: [
		{ value: 'allYear', label: 'All year' },
		{ value: [4, 5, 6, 7, 8, 9], label: 'Summer (Apr - Sep)' },
		{ value: [1, 2, 3, 10, 11, 12], label: 'Winter (Oct - Mar)' },
		{ value: [1], label: 'Jan' },
		{ value: [2], label: 'Feb' },
		{ value: [3], label: 'Mar' },
		{ value: [4], label: 'Apr' },
		{ value: [5], label: 'May' },
		{ value: [6], label: 'Jun' },
		{ value: [7], label: 'Jul' },
		{ value: [8], label: 'Aug' },
		{ value: [9], label: 'Sep' },
		{ value: [10], label: 'Oct' },
		{ value: [11], label: 'Nov' },
		{ value: [12], label: 'Dec' },
	],
};

export default inputData;
