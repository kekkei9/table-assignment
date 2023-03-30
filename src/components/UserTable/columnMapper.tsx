import { Address } from "@src/types/address";
import { Company } from "@src/types/company";
import { User } from "@src/types/user";

export const columnMapper = {
  id: {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  name: {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  username: {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  phone: {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  company: {
    title: "Company",
    dataIndex: "company",
    key: "company",
    render: (record: Company) => <div>{record.name}</div>,
  },
  address: {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (record: Address) => <div>{record.city}</div>,
  },
  website: {
    title: "Website",
    dataIndex: "website",
    key: "website",
  },
  email: {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
};

export const listToColumns = (columnList: string[]) =>
  columnList.map((column) => columnMapper[column as keyof typeof columnMapper]);
