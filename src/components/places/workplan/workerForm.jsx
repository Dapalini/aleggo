import Select from 'react-select';

const WorkerForm = ({ index, onChangeInput, workerTypes, workers, worker }) => {
	return (
		<div>
			<div className='row'>
				<div className='col-4'>
					<span>Worker type:</span>
					<span>
						<Select
							className='mb-2'
							noOptionsMessage={() => "Don't find this worker type"}
							onChange={(e) =>
								onChangeInput(e, index, 'WORKER', 'workerTypeValue')
							}
							options={workerTypes}
							placeholder='Worker type'
							value={worker.workerTypeValue}
						/>
					</span>
				</div>
				<div className='col-4'>
					<span>Worker:</span>
					<span>
						<Select
							className='mb-2'
							noOptionsMessage={() => "Don't find this worker"}
							onChange={(e) =>
								onChangeInput(e, index, 'WORKER', 'assignedValue')
							}
							options={workers}
							placeholder='Worker type'
							value={worker.assignedValue}
						/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default WorkerForm;
