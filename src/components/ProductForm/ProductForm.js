import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = ({
  sizes,
  currentSize,
  setCurrentSize,
  colors,
  currentColor,
  setCurrentColor,
  logInformation,
}) => (
  <form>
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
    </div>
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
    </div>
    <Button
      className={styles.button}
      onClick={(e) => {
        e.preventDefault();
        logInformation();
      }}
    >
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>
);

ProductForm.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  logInformation: PropTypes.func.isRequired,
};

export default ProductForm;
