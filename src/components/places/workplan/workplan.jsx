import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const Workplan = ({ placeData }) => {
	const { name, fullAddress, workplan, _id, startDate } = placeData;

	return (
		<div className='col-7 shadow p-5 mb-6 bg-white rounded border'>
			<div className='d-flex justify-content-between'>
				<h3>Workplans</h3>
				<Link to={`/main/places/${_id}/workplanEdit`}>
					<FiEdit
						style={{ width: '25px', height: '25px', color: 'gray' }}
						action='true'
					/>
				</Link>
			</div>
			<div className='row d-flex justify-content-between'>
				<div style={{ width: '400px' }}>
					<h3>{name}</h3>
					<h4>{fullAddress}</h4>
				</div>
				<div style={{ width: '320px' }}>
					<div>
						Contract start date: {`${new Date(startDate).toDateString()}`}
					</div>
					<div>
						Last workplan update: {`${new Date(startDate).toDateString()}`}
					</div>
				</div>
			</div>
			<br></br>
			<div>
				{workplan.map((worker, indexWorker) => (
					<div key={`worker-${indexWorker}`}>
						<h4>{`${worker.workerTypeValue.label} workplan`}</h4>
						<h4>{worker.assignedValue.label}</h4>
						{worker.assignment.map((task, indexAssign) => (
							<div key={`assignment-${indexAssign}`}>
								<h5>{`${
									task.frequency.value.label
								} on ${task.frequency.weekdays.map(
									(day) => `${day.label}`
								)}`}</h5>
								{task.tasks.map((job, indexInstruct) => (
									<div key={`instruction-${indexInstruct}`}>
										<h5>
											{`${
												job.amount > 1
													? job.amount + ' ' + job.taskValue.label + 's'
													: job.taskValue.label
											}`}
											<FaRegClock
												style={{
													margin: '0px 2px 0px 40px',
													width: '18px',
													height: '18px',
												}}
											/>
											{job.duration}
										</h5>
										<ul>
											{job.instruction.split('\n').map((step, indexStep) => (
												<li key={`step-${indexStep}`}>{step}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Workplan;
