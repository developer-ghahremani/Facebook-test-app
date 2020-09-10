import React from "react";
import { Modal } from "antd";
import MyAnim from "../MyAnim";
import { useSelector } from "react-redux";

const ProgressModal = () => {
  const { progress } = useSelector((state) => state);
  return (
    <Modal visible={progress} footer={null} closable={false}>
      <MyAnim />
    </Modal>
  );
};

export default ProgressModal;
