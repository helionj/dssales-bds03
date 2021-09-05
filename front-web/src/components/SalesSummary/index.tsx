import SalesSummaryCard from './SalesSummaryCard';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import './styles.css';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParameters, makeRequest } from '../../util/request';
type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  min: 0,
  max: 0,
  count: 0,
};

const SalesSummary = ({ filterData }: Props) => {
  const [summary, setSummaryData] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParameters(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummaryData(response.data);
      });
  }, [params]);
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard
        label="Média"
        value={summary.avg?.toFixed(2)}
        icon={<DoneIcon />}
      />
      <SalesSummaryCard
        label="Quantidade"
        value={summary.count}
        icon={<SyncIcon />}
      />
      <SalesSummaryCard
        label="Mínima"
        value={summary.min}
        icon={<BarChartIcon />}
      />
      <SalesSummaryCard
        label="Máxima"
        value={summary.max}
        icon={<AvatarIcon />}
      />
    </div>
  );
};

export default SalesSummary;
