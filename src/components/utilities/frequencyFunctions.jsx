export function filterSelectableMonths(monthOptions, selectedMonths = []) {
	//  check if selected months is empty and return full options if so.
	if (selectedMonths.length < 1) {
		return { options: monthOptions, selected: [] };
	}
	// check if selected "all year"
	for (let i = 0; i < selectedMonths.length; i++) {
		if (selectedMonths[i].value === 'allYear') {
			return { options: [], selected: [selectedMonths[i]] };
		}
	}
	// create number array of selected months
	let selectedMonthsArr = [];
	for (let i = 0; i < selectedMonths.length; i++) {
		selectedMonthsArr = [...selectedMonthsArr, ...selectedMonths[i].value];
	}
	// create months array of just months (without full year, summer and winter)
	let pureMonthsArr = monthOptions.slice(3);
	const fullYearArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	// check if all months included and return that if so.
	if (fullYearArr.every((item) => selectedMonthsArr.includes(item))) {
		return { options: [], selected: [monthOptions[0]] };
	}
	// create array of purely non selected months, and summer/winter options
	// if they are not fully selected.
	let selectedFinalMonths = [];
	let optionsFinalMonths = [];
	optionsFinalMonths.push(monthOptions[0]);
	const summerArr = [4, 5, 6, 7, 8, 9];
	const winterArr = [1, 2, 3, 10, 11, 12];
	// check if selected includes all summer months, and put in selectedFinal then, or in options
	if (summerArr.every((month) => selectedMonthsArr.includes(month))) {
		selectedFinalMonths.push(monthOptions[1]);
		for (let i = 0; i < summerArr.length; i++) {
			selectedMonthsArr.splice(selectedMonthsArr.indexOf(summerArr[i]), 1);
		}
		// make winter an option
		optionsFinalMonths.push(monthOptions[2]);
		// put rest of non-summer months in final options or selected.
		let restWinterMonthOptions = [];
		let restWinterMonthSelected = [];
		// split numerical units in options or selected.
		for (let i = 0; i < winterArr.length; i++) {
			if (selectedMonthsArr.includes(winterArr[i])) {
				restWinterMonthSelected.push(winterArr[i]);
			} else {
				restWinterMonthOptions.push(winterArr[i]);
			}
		}
		// put options in final options.
		for (let i = 0; i < restWinterMonthOptions.length; i++) {
			for (let j = 0; j < pureMonthsArr.length; j++) {
				if (restWinterMonthOptions[i] === pureMonthsArr[j].value[0]) {
					optionsFinalMonths.push(pureMonthsArr[j]);
				}
			}
		}
		// put selected array into final selected.
		for (let i = 0; i < restWinterMonthSelected.length; i++) {
			for (let j = 0; j < pureMonthsArr.length; j++) {
				if (restWinterMonthSelected[i] === pureMonthsArr[j].value[0]) {
					selectedFinalMonths.push(pureMonthsArr[j]);
				}
			}
		}
		// return full final object
		return { options: optionsFinalMonths, selected: selectedFinalMonths };
	}
	// check if selected includes all winter months, and put in winterFinal then, or in options
	if (winterArr.every((month) => selectedMonthsArr.includes(month))) {
		selectedFinalMonths.push(monthOptions[2]);
		for (let i = 0; i < winterArr.length; i++) {
			selectedMonthsArr.splice(selectedMonthsArr.indexOf(winterArr[i]), 1);
		}
		// make summer an option
		optionsFinalMonths.push(monthOptions[1]);
		// put rest of non-winter months in final options or selected.
		let restSummerMonthOptions = [];
		let restSummerMonthSelected = [];
		// split numerical units in options or selected.
		for (let i = 0; i < summerArr.length; i++) {
			if (selectedMonthsArr.includes(summerArr[i])) {
				restSummerMonthSelected.push(summerArr[i]);
			} else {
				restSummerMonthOptions.push(summerArr[i]);
			}
		}
		// put options into final options
		for (let i = 0; i < restSummerMonthOptions.length; i++) {
			for (let j = 0; j < pureMonthsArr.length; j++) {
				if (restSummerMonthOptions[i] === pureMonthsArr[j].value[0]) {
					optionsFinalMonths.push(pureMonthsArr[j]);
				}
			}
		}
		// put selected array into final selected.
		for (let i = 0; i < restSummerMonthSelected.length; i++) {
			for (let j = 0; j < pureMonthsArr.length; j++) {
				if (restSummerMonthSelected[i] === pureMonthsArr[j].value[0]) {
					selectedFinalMonths.push(pureMonthsArr[j]);
				}
			}
		}
		// return full final object
		return { options: optionsFinalMonths, selected: selectedFinalMonths };
	}
	// make summer and winter an option as they were not selected
	optionsFinalMonths.push(monthOptions[1]);
	optionsFinalMonths.push(monthOptions[2]);
	// put rest of selected months (not winter/summer) in selected
	for (let i = 0; i < pureMonthsArr.length; i++) {
		if (selectedMonthsArr.includes(pureMonthsArr[i].value[0])) {
			selectedFinalMonths.push(pureMonthsArr[i]);
		}
	}
	for (let i = 0; i < pureMonthsArr.length; i++) {
		if (!selectedMonthsArr.includes(pureMonthsArr[i].value[0])) {
			optionsFinalMonths.push(pureMonthsArr[i]);
		}
	}
	return { options: optionsFinalMonths, selected: selectedFinalMonths };
}
