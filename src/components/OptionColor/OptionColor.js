import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const prepareColorClassName = (color) => {
  return styles[
    'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
  ];
};

const OptionColor = ({ colors, currentColor, setCurrentColor }) => (
  <ul className={styles.choices}>
    {colors.map((color) => (
      <li key={color}>
        <button
          type="button"
          onClick={() => setCurrentColor(color)}
          className={clsx(
            prepareColorClassName(color),
            color === currentColor && styles.active
          )}
        />
      </li>
    ))}
  </ul>
);

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;
