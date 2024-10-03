import type { ChildComponentProps } from './types/types';

function ChildComponent(props: ChildComponentProps) {
  const { time } = props;
  return <div>{time}</div>;
}
export default ChildComponent;
