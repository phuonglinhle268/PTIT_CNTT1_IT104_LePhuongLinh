import React, { useState } from 'react';
import { Table, Button, Input, Select, Tag, Modal, Form, Pagination,} from 'antd';



const { Option } = Select;


const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    price: 29990000,
    status: 'inStock',
  },
  {
    id: 2,
    name: 'Chuột Logitech MX Master 3S',
    price: 2490000,
    status: 'outStock',
  },
  {
    id: 3,
    name: 'Bàn phím Keychron K6',
    price: 2190000,
    status: 'inStock',
  },
];

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const onFinish = (values: { name: string; price: number; status: 'inStock' | 'outStock' }) => {
    const newProduct: Product = {
      id: Date.now(),
      ...values,
    };
    setProducts([...products, newProduct]);
    form.resetFields();
  };

  const handleToggleStatus = (product: Product) => {
    const updatedStatus = product.status === 'inStock' ? 'outStock' : 'inStock';
    setProducts(products.map(p => p.id === product.id ? { ...p, status: updatedStatus } : p));
  };

  const handleDelete = (product: Product) => {
    setProductToDelete(product);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts(products.filter(p => p.id !== productToDelete.id));
    }
    setIsModalVisible(false);
    setProductToDelete(null);
  };

  const columns = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá (đ)',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `${price.toLocaleString()} đ`,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: 'inStock' | 'outStock') => (
        status === 'inStock' ? <Tag color="green">Còn hàng</Tag> : <Tag color="red">Hết hàng</Tag>
      ),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record: Product) => (
        <>
          <Button type="primary" onClick={() => handleToggleStatus(record)} style={{ marginRight: 8 }}>
            Đánh dấu
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(record)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ background: '#1677ff', color: '#fff', padding: '12px 20px', borderRadius: 8, textAlign: 'center', marginBottom: 20 }}>
         Quản lý Sản phẩm
      </h1>

      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
        style={{ marginBottom: 20, padding: 20, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Tên sản phẩm không được để trống!' }]}
        >
          <Input placeholder="Tên sản phẩm" style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          name="price"
          rules={[{ required: true, message: 'Nhập giá sản phẩm!' }]}
        >
          <Input placeholder="Giá (đ)" type="number" style={{ width: 150 }} />
        </Form.Item>
        <Form.Item name="status" initialValue="inStock">
          <Select style={{ width: 120 }}>
            <Option value="inStock">Còn hàng</Option>
            <Option value="outStock">Hết hàng</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>

      <Table
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={false}
        bordered
        title={() => 'Danh sách sản phẩm'}
      />

      <div style={{ textAlign: 'right', marginTop: 20 }}>
        <span style={{ marginRight: 10 }}>Tổng: {products.length} sản phẩm</span>
         <Pagination
          current={1}
          total={products.length}
          pageSize={3}
          showSizeChanger
          pageSizeOptions={['3', '5', '7']}
          style={{ display: 'inline-block' }}
        />
        <span style={{ marginLeft: 10 }}></span>
      </div>

      <Modal
      
        open={isModalVisible}
        onOk={confirmDelete}
        onCancel={() => setIsModalVisible(false)}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc muốn xóa sản phẩm này không"?</p>
      </Modal>
    </div>
  );
}