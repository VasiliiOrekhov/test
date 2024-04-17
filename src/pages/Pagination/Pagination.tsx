import { Button, Form, FormProps, Input, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useLazyGetPostsQuery } from 'store/services/postService/postsApiService';
type TUser = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type FieldType = {
  page: number;
};
const columns = [
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'userId',
    sorter: { multiple: 1 },
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    sorter: { multiple: 1 },
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'body',
    dataIndex: 'body',
    key: 'body',
  },
];

export const WithPagination = () => {
  const [getUsers, { data, isLoading }] = useLazyGetPostsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const total = 100;
  useEffect(() => {
    getUsers({ page: currentPage });
  }, [currentPage]);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      console.log(values);
      await getUsers({ page: currentPage });
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  const paginationConfig = {
    total,
    pageSize,
    current: currentPage,
    onChange: handlePageChange,
  };
  const changeSort = (pagination, filters, sorter) => {
    console.log('pagination', pagination);
    console.log('filters', filters);

    console.log('sorter', sorter);
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item<FieldType> label="page" name="page">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          fetch
        </Button>
      </Form>
      <Table
        dataSource={data}
        columns={columns}
        pagination={paginationConfig}
        onChange={changeSort}
      />
    </div>
  );
};
