import React, { useState, useEffect } from 'react';
import { useUpdate } from 'react-use';
import Select from 'react-select';
import { filterSelectableMonths } from '../../utilities/frequencyFunctions';

const MyModal = (props) => {
	const {
		assign,
		filteredMonthOptions,
		index,
		monthOptions,
		weekdayOptions,
		onChangeInput,
	} = props;

	const update = useUpdate();

	let today = new Date().toISOString().split('T')[0];

	const initialFrequencyObj = {
		amount: 0,
		endDate: today,
		daysType: '',
		frequencyType: '',
		frequencyName: '',
		interval: '',
		isCustomFrequency: false,
		isEndDate: false,
		months: filteredMonthOptions,
		occurence: '',
		scheduleType: '',
		startType: 'contractStart',
		startDate: props.startDate,
		weekdays: assign.frequency.weekdays,
		yearInterval: 'everyYear',
	};

	const [customFrequencyObj, setCustomFrequencyObj] =
		useState(initialFrequencyObj);

	const {
		amount,
		endDate,
		daysType,
		frequencyType,
		frequencyName,
		interval,
		isCustomFrequency,
		isEndDate,
		months,
		occurence,
		startType,
		startDate,
		weekdays,
		yearInterval,
	} = customFrequencyObj;

	const handleCancel = () => {
		setCustomFrequencyObj(initialFrequencyObj);
		update();
		return;
	};

	const handleSave = () => {
		onChangeInput(
			{
				amount,
				endDate,
				daysType,
				frequencyType,
				frequencyName,
				interval,
				isCustomFrequency: true,
				isEndDate,
				occurence,
				startType,
				startDate,
				yearInterval,
			},
			'ASSIGN',
			['frequency', 'customFrequency']
		);
		onChangeInput(months.selected, index, 'ASSIGN', 'months');
		onChangeInput(weekdays, index, 'ASSIGN', 'weekdays');
	};

	const onChangeCustomInput = (newValue, path) => {
		let newCustomFrequencyObj = customFrequencyObj;
		if (path === 'months') {
			const newFilteredMonthOptions = filterSelectableMonths(
				monthOptions,
				newValue
			);
			newCustomFrequencyObj[path] = newFilteredMonthOptions;
			setCustomFrequencyObj(newCustomFrequencyObj);
			update();
			return;
		}
		newCustomFrequencyObj[path] = newValue;
		setCustomFrequencyObj(newCustomFrequencyObj);
		update();
		return;
	};

	const customFrequencyInput = {
		detailedFrequencyTypes: [
			{ value: 'daily', label: 'Daily' },
			{ value: 'weekly', label: 'Weekly' },
			{ value: 'Monthly', label: 'Monthly' },
			{ value: '2ndMonth', label: 'Every 2nd month' },
			{ value: '4TimesYear', label: '4 times a year' },
			{ value: '3TimesYear', label: '3 times a year' },
			{ value: '2TimesYear', label: '2 times a year' },
		],
		occurence: [
			{ value: 1, label: 'first' },
			{ value: 2, label: 'second' },
			{ value: 3, label: 'third' },
			{ value: 4, label: 'fourth' },
		],
		amount: 0,
		interval: [
			{ value: 'days', label: 'day(s)' },
			{ value: 'weeks', label: 'week(s)' },
			{ value: 'months', label: 'month(s)' },
			{ value: 'years', label: 'year(s)' },
		],
		daysType: [
			{ value: [1, 2, 3, 4, 5], label: 'work days' },
			{ value: [1, 2, 3, 4, 5, 6, 7], label: 'all days' },
		],
	};

	return (
		<div
			className='modal fade'
			id={`customFrequencyModal-${index[0]}-${index[1]}`}
			aria-hidden='true'
			aria-labelledby='customFrequencyModalLabel'
			tabIndex='-1'
		>
			<div className='modal-dialog modal-lg modal-dialog-centered'>
				<div className='modal-content p-2'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalToggleLabel'>
							Custom frequency
						</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
							onClick={() => {
								handleCancel();
							}}
						></button>
					</div>
					<div className='form-group p-2'>
						<div className='row mb-2'>
							<div className='col-6'>
								<label className='form-label' htmlFor='customFrequencyLabel'>
									Frequency name
								</label>
								<input
									className='form-control'
									id='customFrequencyLabel'
									onChange={(e) =>
										onChangeCustomInput(e.target.value, 'frequencyName')
									}
									type='text'
									value={frequencyName}
								/>
							</div>
						</div>
						<div className='modal-header p-1'></div>
						<div className='row ms-1 mt-3 mb-2'>
							<div
								className='col-1'
								style={{ marginLeft: '-12px', width: '40px' }}
							>
								<input
									checked={frequencyType === 'specificDay'}
									id='specificDay'
									name={`freqyencyType-${index[0]}-${index[1]}`}
									type='radio'
									value='specificDay'
									onChange={(e) =>
										onChangeCustomInput(e.target.value, 'frequencyType')
									}
								/>
							</div>
							{`Schedule by specific time of month`}
						</div>
						<div className='row mb-4'>
							<div className='col-3'>
								<label
									style={{
										color: `${
											!frequencyType || frequencyType === 'specificFrequency'
												? 'lightGray'
												: ''
										}`,
									}}
									htmlFor='occurence'
								>
									Occurence
								</label>
								<Select
									isDisabled={
										!frequencyType ||
										frequencyType === 'specificFrequency' ||
										occurence === 'daily'
									}
									className='basic-multi-select'
									id='occurence'
									options={customFrequencyInput.occurence}
									value={
										frequencyType === 'specificFrequency' || !frequencyType
											? null
											: occurence
									}
									onChange={(e) => {
										onChangeCustomInput(e, 'occurence');
									}}
								/>
							</div>
							<div className='col-2'>
								<label
									style={{
										color: `${
											!frequencyType || frequencyType === 'specificFrequency'
												? 'lightGray'
												: ''
										}`,
									}}
									htmlFor='days'
								>
									{'Day'}
								</label>
								<Select
									isDisabled={
										!frequencyType || frequencyType === 'specificFrequency'
									}
									className='basic-multi-select'
									id='days'
									options={weekdayOptions}
									value={
										frequencyType === 'specificFrequency' || !frequencyType
											? null
											: weekdays
									}
									onChange={(e) => {
										onChangeCustomInput(e, 'weekdays');
									}}
								/>
							</div>
						</div>
						<div className='modal-header p-1'></div>
						<div className='row ms-1 mt-3 mb-2'>
							<div
								className='col-1'
								style={{ marginLeft: '-12px', width: '40px' }}
							>
								<input
									checked={frequencyType === 'specificFrequency'}
									id='specificFrequency'
									name={`freqyencyType-${index[0]}-${index[1]}`}
									type='radio'
									value='specificFrequency'
									onChange={(e) =>
										onChangeCustomInput(e.target.value, 'frequencyType')
									}
								/>
							</div>
							{`Schedule with specific intervals.`}
						</div>
						<div className='row'>
							<h5
								style={{
									margin: '28px 0px 0px 0px',
									width: '70px',
									color: `${
										!frequencyType || frequencyType === 'specificDay'
											? 'lightGray'
											: ''
									}`,
								}}
							>
								Every
							</h5>
							<div className='col-1'>
								<label
									htmlFor='amountInput'
									style={{
										color: `${
											!frequencyType || frequencyType === 'specificDay'
												? 'lightGray'
												: ''
										}`,
									}}
								>
									amount
								</label>
								<div>
									<input
										disabled={!frequencyType || frequencyType === 'specificDay'}
										className='form-control'
										id='amountInput'
										min={0}
										max={31}
										name='amountInput'
										onChange={(e) =>
											onChangeCustomInput(e.target.value, 'amount')
										}
										style={{ width: '60px', margin: '0px 26px 0px 0px' }}
										value={amount}
										type='number'
									/>
								</div>
							</div>
							<div className='col-3'>
								<label
									htmlFor='interval'
									style={{
										color: `${
											!frequencyType || frequencyType === 'specificDay'
												? 'lightGray'
												: ''
										}`,
									}}
								>
									interval
								</label>
								<Select
									isDisabled={frequencyType === 'specificDay' || !frequencyType}
									className='basic-multi-select'
									classNamePrefix='select'
									defaultValue={
										frequencyType === 'specificDay' || !frequencyType
											? null
											: interval
									}
									id='interval'
									options={customFrequencyInput.interval}
									onChange={(e) => {
										onChangeCustomInput(e, 'interval');
									}}
									value={interval}
								/>
							</div>
							<h5
								style={{
									color: `${
										!frequencyType || frequencyType === 'specificDay'
											? 'lightGray'
											: ''
									}`,
									margin: '28px 0px 0px -10px',
									width: '36px',
								}}
							>
								on
							</h5>
							<div className='col-3'>
								<label
									style={{
										color: `${
											frequencyType === 'specificDay' ||
											!frequencyType ||
											(interval?.value === 'days' &&
												customFrequencyObj.amount % 7 !== 0)
												? 'lightGray'
												: ''
										}`,
									}}
									htmlFor='days'
								>
									{'Day'}
								</label>
								<Select
									isDisabled={
										frequencyType === 'specificDay' ||
										!frequencyType ||
										(interval?.value === 'days' && amount % 7 !== 0)
									}
									className='basic-multi-select'
									id='days'
									options={weekdayOptions}
									value={
										frequencyType === 'specificDay' || !frequencyType
											? null
											: weekdays
									}
									onChange={(e) => {
										onChangeCustomInput(e, 'weekdays');
									}}
								/>
							</div>
							<div className='col-3'>
								<label
									style={{
										color: `${
											interval?.value === 'weeks' ||
											interval?.value === 'months' ||
											interval?.value === 'years' ||
											(interval?.value === 'days' && amount % 7 === 0) ||
											frequencyType === 'specificDay' ||
											!frequencyType
												? 'lightGray'
												: ''
										}`,
									}}
									htmlFor='days'
								>
									{'Work / all days'}
								</label>
								<Select
									isDisabled={
										interval?.value === 'weeks' ||
										interval?.value === 'months' ||
										interval?.value === 'years' ||
										(interval?.value === 'days' && amount % 7 === 0) ||
										frequencyType === 'specificDay' ||
										!frequencyType
									}
									className='basic-multi-select'
									id='days'
									options={customFrequencyInput.daysType}
									value={
										frequencyType === 'specificDay' || !frequencyType
											? null
											: daysType
									}
									onChange={(e) => {
										onChangeCustomInput(e, 'daysType');
									}}
								/>
							</div>
						</div>
						<div className='modal-header p-1'></div>
						<div className='row mt-2'>
							<div className='col-7'>
								<label htmlFor='monthOptions'>{`Month(s)`}</label>
								<Select
									className='basic-multi-select'
									closeMenuOnSelect={false}
									id='monthOptions'
									isMulti
									options={months.options}
									value={months.selected}
									onChange={(e) => {
										onChangeCustomInput(e, 'months');
									}}
								/>
							</div>
							<div style={{ width: '80px', margin: '24px 0px 0px 10px' }}>
								<div className='row d-flex justify-content-start'>
									<input
										checked={yearInterval === 'everyYear'}
										name={`yearInterval-${index[0]}-${index[1]}`}
										onChange={(e) =>
											onChangeCustomInput(e.target.value, 'yearInterval')
										}
										type='radio'
										value='everyYear'
										style={{ width: '12px' }}
									/>
									<div
										style={{
											width: '66px',
											fontSize: '12px',
										}}
									>
										Every year
									</div>
								</div>
							</div>
							<div style={{ width: '90px', margin: '24px 0px 0px 10px' }}>
								<div className='row d-flex justify-content-start'>
									<input
										checked={yearInterval === '2ndYear'}
										style={{ width: '12px' }}
										name={`yearInterval-${index[0]}-${index[1]}`}
										type='radio'
										value='2ndYear'
										onChange={(e) =>
											onChangeCustomInput(e.target.value, 'yearInterval')
										}
									/>
									<div
										style={{
											width: '76px',
											fontSize: '12px',
										}}
									>
										Every 2nd year
									</div>
								</div>
							</div>
							<div style={{ width: '100px', margin: '24px 0px 0px 10px' }}>
								<div className='row d-flex justify-content-start'>
									<input
										checked={yearInterval === '3rdYear'}
										style={{ width: '12px' }}
										name={`yearInterval-${index[0]}-${index[1]}`}
										type='radio'
										value='3rdYear'
										onChange={(e) =>
											onChangeCustomInput(e.target.value, 'yearInterval')
										}
									/>
									<div
										style={{
											width: '80px',
											fontSize: '12px',
										}}
									>
										Every 3rd year
									</div>
								</div>
							</div>
						</div>
						<div className='modal-header p-1'></div>
						<div className='row d-flex justify-content-start'>
							<h6 className='m-1 mt-4' style={{ width: '94px' }}>
								Job start
							</h6>
							<div className='mt-3' style={{ width: '140px' }}>
								<div className='row d-flex justify-content-start'>
									<input
										checked={startType === 'contractStart'}
										style={{ width: '12px' }}
										id='constractStart'
										name={`startType-${index[0]}-${index[1]}`}
										type='radio'
										value='contractStart'
										onChange={(e) =>
											onChangeCustomInput(e.target.value, 'startType')
										}
									/>
									<label
										htmlFor='contractStart'
										style={{
											width: '120px',
											fontSize: '12px',
										}}
									>
										Same as contract start
									</label>
								</div>
							</div>
							<div className='mt-3' style={{ width: '180px' }}>
								<div className='row d-flex justify-content-start'>
									<input
										checked={startType === 'customStart'}
										style={{ width: '12px' }}
										id='customStart'
										name={`startType-${index[0]}-${index[1]}`}
										type='radio'
										value='customStart'
										onChange={(e) =>
											onChangeCustomInput(e.target.value, 'startType')
										}
									/>
									<label
										htmlFor='customStart'
										style={{
											width: '140px',
											fontSize: '12px',
											color: `${
												startType === 'customStart' ? 'black' : 'lightGray'
											}`,
										}}
									>
										Choose start date:
										<input
											disabled={startType !== 'customStart'}
											type='date'
											value={startType === 'customStart' ? startDate : ''}
											onChange={(e) => {
												onChangeCustomInput(e.target.value, 'startDate');
											}}
										/>
									</label>
								</div>
							</div>
							<div className='mt-3' style={{ width: '160px' }}>
								<div className='row d-flex justify-content-start'>
									<input
										checked={isEndDate}
										style={{ width: '12px' }}
										id='endDateCheck'
										name={`endDateCheck-${index[0]}-${index[1]}`}
										type='checkBox'
										onChange={() =>
											onChangeCustomInput(!isEndDate, 'isEndDate')
										}
									/>
									<label
										htmlFor='endDateCheck'
										style={{
											width: '140px',
											fontSize: '12px',
											color: `${isEndDate ? 'black' : 'lightGray'}`,
										}}
									>
										Choose end date:
										<input
											disabled={!isEndDate}
											type='date'
											value={isEndDate ? endDate : ''}
											onChange={(e) => {
												onChangeCustomInput(e.target.value, 'endDate');
											}}
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className='modal-footer'>
						<button
							className='btn btn-secondary'
							data-bs-toggle='modal'
							onClick={() => {
								handleCancel();
							}}
						>
							Cancel
						</button>
						<button
							className='btn btn-primary'
							data-bs-toggle='modal'
							onClick={() => {
								handleSave();
							}}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyModal;
