import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


const reducerFn = (state = { counter: 0}, action) => {

       return state;
 }

const store = configureStore({reducerFn});

export default store;
