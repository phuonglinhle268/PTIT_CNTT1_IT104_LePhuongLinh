import React, { useState } from "react";
import {
  Table,
  Button,
  Input,
  Select,
  Modal,
  Form,
  Tag,
  Pagination,
} from "antd";

const { Option } = Select;

export default function MemberManager() {
  const [form] = Form.useForm();
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Nguyễn Văn An",
      phone: "0987654321",
      status: "active",
    },
    {
      id: 2,
      name: "Trần Thị Bình",
      phone: "0912345678",
      status: "locked",
    },
    {
      id: 3,
      name: "Lê Văn Cường",
      phone: "0905558889",
      status: "active",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [pageSize, setPageSize] = useState(3); //

  //thêm
  const onFinish = (values) => {
    const newMember = {
      id: Date.now(),
      ...values,
    };
    setMembers([...members, newMember]);
    form.resetFields();
  };

  //xóa
  const handleDelete = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  //sửa
  const handleEdit = (record) => {
    setEditingMember(record);
    setIsModalVisible(true);
  };
  const handleUpdate = (values) => {
    setMembers(
      members.map((m) => (m.id === editingMember.id ? { ...m, ...values } : m))
    );
    setIsModalVisible(false);
    setEditingMember(null);
  };

  const columns = [
    {
      title: "Tên thành viên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "active" ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Bị khóa</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            size="small"
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
          >
            Sửa
          </Button>
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => handleDelete(record.id)}
          >
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1
        style={{
          background: "#1677ff",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        Quản lí Thành viên
      </h1>

      {/* form thêm thành viên */}
      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
        style={{
          margin: "20px 0",
          padding: 20,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        }}
      >

        {/* tên thành viên */}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
        >
          <Input placeholder="Tên thành viên" style={{ width: 200 }} />
        </Form.Item>

        {/* số điện thoại */}
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại!" },
            {
              pattern: /^[0-9]+$/,
              message: "Số điện thoại chỉ được nhập số!",
            },
          ]}
        >
          <Input placeholder="Số điện thoại" style={{ width: 200 }} />
        </Form.Item>

        {/* trạng thái */}
        <Form.Item name="status" initialValue="active">
          <Select style={{ width: 120 }}>
            <Option value="active">Hoạt động</Option>
            <Option value="locked">Bị khóa</Option>
          </Select>
        </Form.Item>

        {/* nút thêm */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>

      
      {/* Bảng danh sách */}
      <Table
        dataSource={members}
        columns={columns}
        rowKey="id"
        pagination={false}
        bordered
      />

      {/* Phân trang, sooss bản ghi 1 trang*/}
      <div style={{ marginTop: 20, textAlign: "right", padding: "0 20px" }}>
        <Pagination
          current={1}
          total={members.length}
          pageSize={pageSize}
          onShowSizeChange={(current, size) => setPageSize(size)}
          pageSizeOptions={["3", "8", "1", "7"]}
          showSizeChanger
          style={{ display: "inline-block", marginRight: 10 }}
        />
        <span style={{ verticalAlign: "middle" }}>
          {pageSize} bản ghi / trang
        </span>
      </div>

      {/* sửa thành viên */}
      <Modal
        title="Sửa thành viên"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={editingMember}
          onFinish={handleUpdate}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Tên thành viên"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern: /^[0-9]+$/,
                message: "Số điện thoại chỉ được nhập số!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="status" label="Trạng thái">
            <Select>
              <Option value="active">Hoạt động</Option>
              <Option value="locked">Bị khóa</Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
