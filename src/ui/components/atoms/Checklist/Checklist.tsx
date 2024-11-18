import type React from 'react';
import classNames from 'classnames';
import type { IProps } from './types/IProps';
import style from './styles.module.scss';

function Checklist(props: IProps) {
  const { items, onCheck, className } = props;

  const handleCheck = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    onCheck(target.value);
  };

  const classNamesChecklist = classNames(style.checklist, className);

  return (
    <select
      form="checklist"
      className={`${classNamesChecklist}`}
      name="checklist"
      id="checklist"
      onChange={handleCheck}
    >
      {items.map((item) => (
        <option className={style.checklist__list} key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Checklist;
