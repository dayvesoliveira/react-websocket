import { FC } from 'react';

type ListType = {
  children?: React.ReactNode;
  className?: string;
};

const List: FC<ListType> = ({
  children,
  className = 'border-t border-slate-400/20 px-3.5 py-3',
}: ListType) => {
  return <ul className={className}>{children}</ul>;
};

export default List;
