import './styles.css';
import { FC } from 'react';
import { UserType } from '../../models/UserType';
import List from '../List';
import ListItem from '../ListItem';

type ListUserType = {
  users: UserType[];
};

const ListUsers: FC<ListUserType> = ({ users }: ListUserType) => {
  return (
    <div className="list-users">
      <div>
        <List>
          <ListItem className="mb-1.5 text-[0.9875rem] font-semibold text-slate-700">
            Usuários
          </ListItem>

          {users.map((user: UserType) => (
            <ListItem
              key={user.id}
              className="flex items-center rounded-md p-1.5"
            >
              {user.name} - {user.phone}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ListUsers;
