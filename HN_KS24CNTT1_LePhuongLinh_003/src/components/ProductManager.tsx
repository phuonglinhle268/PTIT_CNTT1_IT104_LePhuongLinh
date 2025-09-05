import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Select,
  Modal,
  Form,
  Tag,
  Pagination,
} from "antd";

const {Option} = Select;

export default function ProductManager() {
    const [form] = Form.useForm();
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Laptop Dell XPS 13",
            price: "2.999.0000 đ",
            status: "active",
        },
          {
            id: 2,
            name: "Chuột Logitech MX Master 35",
            price: "2.490.000 đ",
            status: "unactive",
        },
          {
            id: 3,
            name: "Bàn phím Keychron K6",
            price: "2.190.000 đ",
            status: "active",
        },
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [pageSize, setPageSize] = useState(3);
    const [isDeleteModalVisible, setIsDeleteModeVisible] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const onFinish = (values) => {
        const newProduct = {
            id: Date.now(),
            ...values,
        };
        setProducts([...products, newProduct]);
        form.resetFields();
    };

    const handleDelete = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const confirmDelete = () => {
        setProducts(products.filter((p) => p !== productToDelete));
        setIsDeleteModeVisible(false);
        setProductToDelete(null);
    };

    const handleEdit = (record) => {
        setEditingProduct(record);
        setIsModalVisible(true);
    };
    const handleUpdate = (values) => {
        setProducts(
            products.map((p) => (p.id === editingProduct.id ? {...p, ...values} : p))
        );
        setIsModalVisible(false);
        setEditingProduct(null);
    };

    const columns = [
        {
            title:"Tên sản phẩm",
            dataIndex:"name",
            key:"name",
            render: (text) => <a>{text}</a>,
        },
        {
            title:"Giá",
            dataIndex:"price",
            key:"price",
        },
        {
            title:"Trạng thái",
            dataIndex:"status",
            key:"status",
            render: (status) =>
                status === "acitve" ? (<Tag color="green">Còn hàng</Tag>) : (<Tag color="red">Hết hàng</Tag>),
        },
        {
            title:"Hành động",
            key:"action",
            render: (_, record) => (
                <>
                <Button type="primary" size="small" onClick={() => handleEdit(record)} style={{marginRight: 8}}>Đánh dấu</Button>
                <Button type="primary" danger size="small" onClick={() => handleDelete(record.id)}>Xóa</Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <h1 style={{
                background: "#1677ff",
                color: "white",
                textAlign:"center",
                padding: "26px",
                borderRadius: 8,
                marginBottom: 20,
            }}>Quản lí sản phẩm</h1>

            <Form form={form} layout="inline" onFinish={onFinish}
            style={{
                margin: "20px 0", 
                padding: 20,
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0, 0,, 0, 0.15)",
            }}
            >
                <Form.Item
                name="name"
                rules={[{required:true, message: "Tên sản phẩm không để trống!"}]}
                >
                    <Input placeholder="Tên sản phẩm" style={{width:200}}/>
                </Form.Item>

                <Form.Item
                name="price"
                rules={[{required:true, message:"Nhập giá tiền cho sản phẩm!"}]}
                >
                    <Input placeholder="Giá (0đ)" style={{width:200}}/>
                </Form.Item>

                <Form.Item name="status" initialValue="Còn hàng">
                    <Select style={{width:120, marginBottom:"20px"}}>
                        <Option value="active">Còn hàng</Option>
                        <Option value="unactive">Hết hàng</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>
            </Form>

            <Table
            dataSource = {products}
            columns={columns}
            rowKey="id"
            pagination={false}
            bordered
            />

            <div style={{marginTop:20, texAlign:"right", padding:"0 20px"}}>
                <Pagination
                current={1}
                total={products.length}
                pageSize={pageSize}
                onShowSizeChange={(current, size) => setPageSize(size)}
                onShowSizeOptions={["1", "5", "7"]}
                showSizeChanger
                style={{display:"inline-block", marginRight:10}}
                />
                <span style={{verticalAlign:"middle"}}>
                    {pageSize}/pages
                </span>
            </div>

            <Modal
            title="Xác nhận xóa"
            open={isDeleteModalVisible}
            onCancel={() => setIsDeleteModalVisible(false)}
            onOk={confirmDelete}
            okText="Đồng ý"
            cancelText="Hủy"
            >
                <p>Bạn có chắc muốn xóa sản phẩm này không?</p>
            </Modal> 
        </div>
    );
}
