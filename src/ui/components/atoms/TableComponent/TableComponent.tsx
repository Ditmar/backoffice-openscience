import { useState } from 'react';
import type { IProps } from './types/IProps';
import styles from './TableComponent.module.scss';
import ButtonYesNo from '../ButtonYesNo/Button';
import Toggle from '../Toggle/Toggle';

function TableComponent({ data }: IProps) {
  const [visible, setVisible] = useState(false);
  const [protectedData, setProtectedData] = useState(false);
  function handleVisible(id: number) {
    const dataFind = data.find((row) => row.id === id);
    if (!dataFind) return;
    dataFind.visible = !dataFind.visible;
    setVisible(!visible);
  }
  function handleProtected(id: number) {
    const dataFind = data.find((row) => row.id === id);
    // eslint-disable-next-line no-console
    console.log(`Protected data: ${dataFind?.title}`);
    setProtectedData(!protectedData);
  }
  return (
    <div className={styles.table__component}>
      <table className={styles.table__component__table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Visible</th>
            <th>Protected</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody className={styles.table__component__body}>
          {data.map((row) => (
            <tr key={row.id} className={styles.table__component__fila}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>
                <ButtonYesNo
                  onClick={() => {
                    handleVisible(row.id);
                  }}
                  variant={row.visible ? 'secondary' : 'primary'}
                  aria-label={`Change visibility for ${row.title}`}
                >
                  {row.visible ? 'Yes' : 'No'}
                </ButtonYesNo>
              </td>
              <td>
                <Toggle
                  onChange={() => {
                    handleProtected(row.id);
                  }}
                  aria-label={`Toggle protection for ${row.title}`}
                />
              </td>
              <td>{row.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
