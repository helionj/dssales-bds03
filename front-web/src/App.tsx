import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesByDate from './components/SalesByDate';
import SalesSummary from './components/SalesSummary';
import PieChartCard from './components/SalesSummary/PieChartCard';
import SalesTable from './components/SalseTable';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
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
