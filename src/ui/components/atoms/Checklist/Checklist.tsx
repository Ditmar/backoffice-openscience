import type React from 'react';
import classNames from 'classnames';
import type { IProps } from './types/IProps';
import style from './styles.module.scss';

function Checklist({ items, onCheck, SelectCategory, className }: IProps) {
  const handleCheck = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    onCheck(value);

    if (!Number.isNaN(Number(value))) {
      SelectCategory(value);
    }
  };

  const isNumberList = items.every((item) => !Number.isNaN(Number(item)));

  const classNamesChecklist = classNames(
    style.checklist,
    { [style.checknumber]: isNumberList },
    className,
  );

  const classNamesList = classNames(style.checklist__list, {
    [style.checknumber__list]: isNumberList,
  });

  return (
    <select
      form="checklist"
      className={classNamesChecklist}
      name="checklist"
      id="checklist"
      onChange={handleCheck}
    >
      {items.map((item) => (
        <option key={item} className={classNamesList} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Checklist;
