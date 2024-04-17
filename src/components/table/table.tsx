import { Table, TableProps } from 'antd';
import defaultStyles from '../styles/table.module.scss';
import { EditableCell, EditableRow } from './cell';

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

interface ICustomTable<T, ColumnsType> {
  dataSource: T[];
  columns: ColumnsType;
  onSave?: (data: T) => void;
}

export const CustomTable = <DataType, ColumnsType>({
  dataSource,
  columns,
  onSave,
  ...props
}: ICustomTable<DataType, ColumnsType[]> & TableProps) => {
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell<DataType>,
    },
  };

  const definedColumns = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: onSave,
      }),
    };
  });

  return (
    <Table
      pagination={false}
      components={components}
      rowClassName={() => defaultStyles.editable_row}
      bordered
      dataSource={dataSource}
      columns={definedColumns as ColumnTypes}
      className={defaultStyles.table}
      size="small"
      {...props}
    />
  );
};
