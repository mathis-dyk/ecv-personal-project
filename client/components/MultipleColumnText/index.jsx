import styles from './index.module.scss'

const MultipleColumnText = ({ data }) => {
  const { columns, content } = data

  return (
    <p
      className={styles.MultipleColumnText}
      style={{ columnCount: columns }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MultipleColumnText;
