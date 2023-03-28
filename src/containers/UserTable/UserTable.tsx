import { UserTableComponent } from "@components/UserTable";
import { User } from "@types/user";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const UserTable = ({ columnList }: { columnList: string[] }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <UserTableComponent users={users} columnList={columnList} />
    </div>
  );
};

export default UserTable;
