import React, { useEffect, useRef } from 'react';
import { useUpdate } from 'react-use';
import { calcTextHeight } from '../../utilities/layOutFunctions';

import Select from 'react-select';

const InstructForm = ({ index, inputData, instruct, onChangeInput }) => {
	const { taskTypes } = inputData;

	const instructionInput = useRef();
	const notesInput = useRef();

	useEffect(() => {
		instructionInput.current.style.height = `${calcTextHeight(
			instruct.instruction
		)}px`;
		notesInput.current.style.height = `${calcTextHeight(instruct.notes)}px`;
	});

	return (
		<div>
			<div className='col-7 d-inline-flex'>
				<div className='col-2 d-inline-flex'>
					<div style={{ margin: '0px 0px 0px 10px' }}>
						<label htmlFor='numericInput'>#</label>
						<input
							className='form-control'
							id='numericInput'
							min='0'
							max='100'
							name='amount'
							value={instruct.amount}
							type='number'
							onChange={(e) =>
								onChangeInput(e.target.value, index, 'INSTRUCT', 'amount')
							}
						/>
					</div>
				</div>
				<div className='col-8'>
					<label htmlFor='taskSelection'>Job area/description:</label>
					<Select
						id='taskSelection'
						options={taskTypes}
						value={instruct.taskValue}
						onChange={(value) =>
							onChangeInput(value, index, 'INSTRUCT', 'taskValue')
						}
					/>
				</div>
				<div className='col-3'>
					<label htmlFor='minInput' style={{ margin: '0px 0px 0px 30px' }}>
						min
					</label>
					<div style={{ margin: '0px 26px 0px 30px' }}>
						<input
							className='form-control pe-1'
							id='minInput'
							name='duration'
							min={0}
							max={3000}
							value={instruct.duration}
							onChange={(e) =>
								onChangeInput(e.target.value, index, 'INSTRUCT', 'duration')
							}
							type='number'
						/>
					</div>
				</div>
				<div className='col-2'>
					<label htmlFor='minInput'>total min</label>
					<div style={{ margin: '0px 26px 0px 0px' }}>
						<div className='form-control'>
							{instruct.amount * instruct.duration}
						</div>
					</div>
				</div>
				<div className='col-5 d-inline-flex' style={{ marginTop: '30px' }}>
					<label htmlFor='displayInstruct' style={{ fontSize: '10px' }}>
						Always display instructions
					</label>
					<input
						id='displayInstruct'
						name='displayInstructForWorker'
						type='radio'
					/>
					<label
						htmlFor='dontDisplayInstruct'
						style={{ fontSize: '10px', marginLeft: '22px' }}
					>
						Make display optional
					</label>
					<input
						id='dontDisplayInstruct'
						name='displayInstructForWorker'
						style={{ marginLeft: '6px' }}
						type='radio'
					/>
				</div>
			</div>
			<div className='m-2 form-floating'>
				<textarea
					autoCorrect='on'
					className='form-control'
					id='instructInput'
					ref={instructionInput}
					name='instruction'
					onChange={(e) =>
						onChangeInput(e.target.value, index, 'INSTRUCT', 'instruction')
					}
					spellCheck='true'
					style={{
						lineHeight: '24px'
					}}
					type='textarea'
					value={instruct.instruction}
					wrap='soft'
				/>
				<label htmlFor='instructInput'>Job instructions</label>
			</div>
			<div className='m-2 form-floating'>
				<textarea
					autoCorrect='on'
					className='form-control'
					id='notesInput'
					name='notes'
					onChange={(e) =>
						onChangeInput(e.target.value, index, 'INSTRUCT', 'notes')
					}
					ref={notesInput}
					spellCheck='true'
					style={{ height: '120px', lineHeight: '20px' }}
					type='textarea'
					value={instruct.notes}
					wrap='soft'
				/>
				<label htmlFor='notesInput'>Important notes</label>
			</div>
		</div>
	);
};

export default InstructForm;
