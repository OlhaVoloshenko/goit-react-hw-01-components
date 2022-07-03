import propTypes from 'prop-types';
import style from './Statistics.module.css';

function BgcColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}

export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}

        <ul className={style.statList}>
          {stats.map(el => (
            <li
              className={style.item}
              key={el.id}
              style={{ backgroundColor: BgcColor() }}
            >
              <span clasName={style.label}>{el.label}</span>
              <span className={style.percentage}>{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
