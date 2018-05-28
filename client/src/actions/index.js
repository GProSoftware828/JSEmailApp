import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => asynch dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res });
};

export const handleToken = (token) => asynch dispatch => {
	const res = await axios.post('/api/stripe', token);

	dispatch({ type: FETCH_USER, payload: res.data});
};