import React, { useState } from 'react';

const SignUp = (props) => {
	const { onChangeAuthMode, onSubmit, errorData } = props;
	const [user, setUser] = useState({
		name: '',
		company: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		let newUserState = user;
		newUserState[e.target.name] = e.target.value;
		setUser(newUserState);
		return;
	};

	return (
		<div className='Auth-form-container'>
			<form className='Auth-form'>
				<div className='Auth-form-content'>
					<h3 className='Auth-form-title'>Sign Up</h3>
					<div className='text-center'>
						Already registered?{' '}
						<span
							style={{ cursor: 'pointer' }}
							className='link-primary'
							onClick={onChangeAuthMode}
						>
							Sign In
						</span>
					</div>
					<div className='form-group mt-3'>
						<label>Full Name</label>
						<input
							name='name'
							type='text'
							className={`form-control mt-1 ${
								errorData.name === 'name' ? 'border-danger' : ''
							}`}
							placeholder='e.g Jane Doe'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className='form-group mt-3'>
						<label>Company Name</label>
						<input
							name='company'
							type='text'
							className={`form-control mt-1 ${
								errorData.name === 'company' ? 'border-danger' : ''
							}`}
							placehol='e.g Jane Doe'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className='form-group mt-3'>
						<label>Email address</label>
						<input
							name='email'
							type='email'
							className={`form-control mt-1 ${
								errorData.name === 'email' ? 'border-danger' : ''
							}`}
							placeholder='Email Address'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className='form-group mt-3'>
						<label>Password</label>
						<input
							name='password'
							type='password'
							className={`form-control mt-1 ${
								errorData.name === 'password' ? 'border-danger' : ''
							}`}
							placeholder='Password'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					{errorData.message ? (
						<div className='mt-3 alert alert-danger d-flex align-items-center'>
							<span>{errorData.message}</span>
						</div>
					) : null}
					<div className='d-grid gap-2 mt-3'>
						<button
							className='btn btn-primary'
							onClick={(e) => onSubmit(e, user, 'users')}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
