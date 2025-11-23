import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => (
  <ul className={styles.choices}>
    {sizes.map((size) => (
      <li key={size.name}>
        <button
          type="button"
          className={clsx(size.name === currentSize && styles.active)}
          onClick={() => setCurrentSize(size.name)}
        >
          {size.name}
        </button>
      </li>
    ))}
  </ul>
);

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
