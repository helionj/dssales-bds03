import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesByDate from './components/SalesByDate';
import SalesSummary from './components/SalesSummary';
import PieChartCard from './components/SalesSummary/PieChartCard';
import SalesTable from './components/SalseTable';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

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
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlândia', 'Araguari', 'Uberaba']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[20, 40, 40]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
