import { formatDateToServer } from './formatters';
import axios from 'axios';
import { FilterData } from '../types';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL,
});

export const buildFilterParameters = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender,
    ...extraParams,
  };
};
