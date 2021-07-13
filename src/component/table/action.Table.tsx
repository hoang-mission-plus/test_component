import { Button, Table } from "@rt-commercial-engineering/rt-design-system";
import React from "react";
interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const renderItem = (
  _page: number,
  type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
  originalElement: any
) => {
  if (type === "prev") {
    return <Button icon="arrow-left" intent="primary" />;
  } else if (type === "next") {
    return <Button icon="arrow-right" intent="primary" />;
  } else {
    return originalElement;
  }
};
const ActionTable: React.FunctionComponent = () => {
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "age",
      dataIndex: "age",
      width: "15%",
      editable: true,
    },
    {
      title: "address",
      dataIndex: "address",
      width: "40%",
      editable: true,
    },
  ];
  return (
    <div>
      {" "}
      <Table
        columns={columns}
        dataSource={originData}
        pagination={{
          itemRender: renderItem,
        }}
      />
    </div>
  );
};

export default ActionTable;
