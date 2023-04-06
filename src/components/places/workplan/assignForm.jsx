import { filterSelectableMonths } from '../../utilities/frequencyFunctions';
import Select from 'react-select';
import MyModal from './customFrequencyModal';

const AssignForm = ({ assign, inputData, index, onChangeInput, startDate }) => {
	const { frequencyTypes, monthOptions, weekdayOptions } = inputData;
	const { months, weekdays, value } = assign.frequency;

	const filteredMonthOptions = filterSelectableMonths(monthOptions, months);

	return (
		<div>
			<MyModal
				assign={assign}
				filteredMonthOptions={filteredMonthOptions}
				index={index}
				monthOptions={monthOptions}
				onChangeInput={onChangeInput}
				startDate={startDate}
				weekdayOptions={weekdayOptions}
			/>
			<div className='row form-group '>
				<div className='col-3 mb-1'>
					<label htmlFor='frequencyTypes'>Frequency</label>
					<Select
						options={frequencyTypes}
						dafaultInputValue={frequencyTypes[0]}
						value={value}
						onChange={(e) => {
							onChangeInput(e, index, 'ASSIGN', 'value');
						}}
						createOptionsPosition='last'
					/>
				</div>
				<div className='col-4 mb-1'>
					<label htmlFor='monthOptions'>Months</label>
					<Select
						className='basic-multi-select'
						closeMenuOnSelect={false}
						defaultValue={monthOptions[0]}
						isMulti
						options={filteredMonthOptions.options}
						value={filteredMonthOptions.selected}
						onChange={(e) => {
							onChangeInput(e, index, 'ASSIGN', 'months');
						}}
					/>
				</div>
				<div className='col-4 mb-1'>
					<label htmlFor='monthOptions'>{'Day(s)'}</label>
					<Select
						className='basic-multi-select'
						classNamePrefix='select'
						closeMenuOnSelect={false}
						id='monthOptions'
						isMulti
						options={weekdayOptions}
						value={weekdays}
						onChange={(e) => {
							onChangeInput(e, index, 'ASSIGN', 'weekdays');
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AssignForm;
