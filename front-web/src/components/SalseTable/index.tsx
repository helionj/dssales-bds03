import './styles.css';
const SalesTable = () => {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/2020</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberaba</td>
            <td>Débtio</td>
            <td>R$ 521.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2020</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberaba</td>
            <td>Débtio</td>
            <td>R$ 521.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2020</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberaba</td>
            <td>Débtio</td>
            <td>R$ 521.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2020</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberaba</td>
            <td>Débtio</td>
            <td>R$ 521.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2020</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberaba</td>
            <td>Débtio</td>
            <td>R$ 521.000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
