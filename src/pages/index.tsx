import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { UserTableContainer } from "@containers/UserTable";
import { useState } from "react";
import { Button, Modal } from "antd";
import { ChangeColumnModal } from "@components/ChangeColumnModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [columnList, setColumnList] = useState<string[]>([
    "id",
    "name",
    "username",
    "phone",
  ]);

  return (
    <div className="px-20">
      <ChangeColumnModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        columnList={columnList}
        setColumnList={setColumnList}
      />
      <Button
        onClick={() => setIsModalOpen(true)}
        type="primary"
        className="m-5"
      >
        Select columns
      </Button>
      <UserTableContainer columnList={columnList} />
    </div>
  );
}
