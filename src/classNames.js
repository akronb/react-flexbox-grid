import styles from 'flexboxgrid2/dist/flexboxgrid.css';

export default function getClass(className) {
  return styles && styles[className] ? styles[className] : className;
}
