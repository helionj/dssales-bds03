import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';

import './styles.css';
import { makeRequest } from '../../util/request';
import { ChartData, FilterData, SaleByDate } from '../../types';
import { formatDate, formatPrice } from '../../util/formatters';

type Props = {
  filterData?: FilterData;
};

const SalesByDate = ({ filterData }: Props) => {
  const [chartSeriesData, setChartSeriesData] = useState<ChartData[]>([]);
  const [totalSum, setTotalSum] = useState<number>(0);

  useEffect(() => {
    makeRequest
      .get<SaleByDate[]>(
        '/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE'
      )
      .then((response) => {
        const series = buildChartSeries(response.data);
        setChartSeriesData(series);
        setTotalSum(sumSalesByDate(response.data));
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução de vendas</h4>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {formatDate(filterData?.dates?.[0])} até{' '}
            {formatDate(filterData?.dates?.[1])}
          </span>
        )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
          <span className="sales-by-date-quantity-label">
            Vendas no período
          </span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[
              {
                name: 'Vendas',
                data: chartSeriesData,
              },
            ]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};
export default SalesByDate;
