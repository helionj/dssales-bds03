import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesByDate from './components/SalesByDate';
import SalesSummary from './components/SalesSummary';
import PieChartCard from './components/SalesSummary/PieChartCard';
import SalesTable from './components/SalseTable';
import {
  buildSalesByPaymentMethodChart,
  buildSalesByStoreChart,
} from './helpers';
import {
  FilterData,
  PieChartConfig,
  SalesByPaymentMethod,
  SalesByStore,
} from './types';
import { buildFilterParameters, makeRequest } from './util/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPaymentMethod, setSalesByPaymentMethod] =
    useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParameters(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByStore[]>('/sales/by-store', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStoreChart(response.data);
        setSalesByStore(newSalesByStore);
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMethod[]>('/sales/by-payment-method', { params })
      .then((response) => {
        const newSalesByPaymentMethod = buildSalesByPaymentMethodChart(
          response.data
        );
        setSalesByPaymentMethod(newSalesByPaymentMethod);
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
          <PieChartCard
            name="Lojas"
            labels={salesByStore?.labels}
            series={salesByStore?.series}
          />
          <PieChartCard
            name="Pagamento"
            labels={salesByPaymentMethod?.labels}
            series={salesByPaymentMethod?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
      </div>
    </>
  );
}

export default App;
