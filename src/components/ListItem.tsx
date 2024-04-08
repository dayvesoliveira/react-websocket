import { FC } from 'react';

type ListItemType = {
  children?: React.ReactNode;
  className?: string;
};

const ListItem: FC<ListItemType> = ({
  children,
  className = '',
}: ListItemType) => {
  return <li className={className}>{children}</li>;
};

export default ListItem;
