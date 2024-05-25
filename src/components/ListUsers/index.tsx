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
          <ListItem className="list-users__title">Usuários</ListItem>

          {users.map((user: UserType) => (
            <ListItem key={user.id} className="list-users__item">
              {user.name} - {user.phone}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ListUsers;
