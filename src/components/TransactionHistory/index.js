import propTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(el => (
        <tbody key={el.id}>
          <tr>
            <td>{el.type}</td>
            <td>{el.emount}</td>
            <td>{el.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};
