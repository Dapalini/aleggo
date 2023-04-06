import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Auth from './components/login/auth';
import MainLayout from './components/mainLayout/mainLayout';
import Home from './components/home/home';
import Todo from './components/home/todo';
import Overview from './components/home/overview';
import Calendar from './components/home/calendar';
import Places from './components/places/places';
import NotFound from './components/common/notFound';

function App() {
	const location = useLocation();

	return (
		<Routes>
			<Route path='/' element={<Auth />}></Route>
			<Route path='/main' element={<MainLayout user={location.state} />}>
				<Route index element={<Home />} />
				<Route path='home' element={<Home />}>
					<Route index element={<Overview />} />
					<Route path='overview' element={<Overview />} />
					<Route path='todo' element={<Todo />} />
					<Route path='calendar' element={<Calendar />} />
				</Route>
				<Route path='places/*' element={<Places />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
