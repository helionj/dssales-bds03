import SalesSummaryCard from './SalesSummaryCard';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import './styles.css';

const SalesSummary = () => {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard label="Média" value={534.0} icon={<DoneIcon />} />
      <SalesSummaryCard label="Quantidade" value={651} icon={<SyncIcon />} />
      <SalesSummaryCard label="Mínima" value={250} icon={<BarChartIcon />} />
      <SalesSummaryCard label="Máxima" value={700} icon={<AvatarIcon />} />
    </div>
  );
};

export default SalesSummary;
