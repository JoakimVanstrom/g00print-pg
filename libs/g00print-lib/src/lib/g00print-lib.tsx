import styles from './g00print-lib.module.scss';

/* eslint-disable-next-line */
export interface G00printLibProps {}

export function G00printLib(props: G00printLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to G00printLib!</h1>
    </div>
  );
}

export default G00printLib;
