import { User } from "@types/user";
import { useContext } from "react";
import { Table } from "antd";
import { listToColumns } from "./columnMapper";

interface IUserTableProps {
  users: User[];
  columnList: string[];
}

const UserTable = ({ users, columnList }: IUserTableProps) => {
  return (
    <div>
      <Table columns={listToColumns(columnList)} dataSource={users} />;
    </div>
  );
};

export default UserTable;
