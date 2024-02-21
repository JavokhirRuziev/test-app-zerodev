import Header from "../../components/Layout/Header";
import Table from "../../components/Table";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Modal from "../../components/Modals/ModalBase";
import { useState } from "react";
import { useSelector } from "react-redux";
import Remove from "./components/Remove";

export default () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [selected, setSelected] = useState("");
  const openEditModal = (e) => {
    setShowEdit(true);
    setSelected(e);
  };
  const openCreateModal = (e) => {
    setShowCreate(true);
  };
  const openRemoveModal = (e) => {
    setShowRemove(true);
    setSelected(e);
  };
  // console.log(incomes);
  return (
    <>
      <Modal open={showRemove} setOpen={setShowRemove} maxHeight={200}>
        <Remove {...{ setShowRemove, selected }} />
      </Modal>
      <Modal open={showEdit} setOpen={setShowEdit}>
        <Edit {...{ setShowEdit, selected }} />
      </Modal>
      <Modal open={showCreate} setOpen={setShowCreate}>
        <Create {...{ setShowCreate }} />
      </Modal>
      <Header>
        <Table
          onCreate={openCreateModal}
          onEdit={openEditModal}
          onRemove={openRemoveModal}
          arr={expenses}
        />
      </Header>
    </>
  );
};
