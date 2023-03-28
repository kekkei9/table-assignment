import { Modal, Transfer } from "antd";
import { TransferDirection } from "antd/es/transfer";
import { Dispatch, SetStateAction, useState } from "react";

interface IChangeColumnModalProps {
  columnList: string[];
  setColumnList: Dispatch<SetStateAction<string[]>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const allColumnsList = [
  "id",
  "name",
  "username",
  "phone",
  "company",
  "address",
  "website",
  "email",
];

const ChangeColumnModal = ({
  columnList,
  setColumnList,
  isModalOpen,
  setIsModalOpen,
}: IChangeColumnModalProps) => {
  const [targetKeys, setTargetKeys] = useState(columnList);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleOk = () => {
    setColumnList(targetKeys);
    setIsModalOpen(false);
  };

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log("targetKeys:", nextTargetKeys);
    console.log("direction:", direction);
    console.log("moveKeys:", moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    console.log("sourceSelectedKeys:", sourceSelectedKeys);
    console.log("targetSelectedKeys:", targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (
    direction: TransferDirection,
    e: React.SyntheticEvent<HTMLUListElement>
  ) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={() => {
        setIsModalOpen(false);
      }}
    >
      <Transfer
        showSearch
        dataSource={allColumnsList.map((column) => ({
          key: column,
          title: column.toUpperCase(),
        }))}
        titles={["Source", "Target"]}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={(item) => item.title}
      />
    </Modal>
  );
};

export default ChangeColumnModal;
