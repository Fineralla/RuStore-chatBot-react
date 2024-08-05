import { personReducer } from './personReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore(personReducer);
