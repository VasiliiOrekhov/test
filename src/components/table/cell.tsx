import { Form, GetRef, Input } from 'antd';
import type { InputRef } from 'antd';

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../styles/table.module.scss';

type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}

export const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface DataType {
  key: string;
  numberOfDesignStage: string;
  numberOfStageKSG: string;
  nameOfStage: string;
}

export interface EditableCellProps<T> {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  // TODO: fix error if use dataIndex: keof T
  // NOT working with generic record: T
  // Idk where is the problem if DataType is also passed
  // to the interface as generic T
  dataIndex: keyof DataType;
  record: DataType;
  handleSave: (record: T) => void;
}

export function EditableCell<T>({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}: EditableCellProps<T>) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.error('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item style={{ margin: 0, padding: 0 }} name={dataIndex} rules={[]}>
        <Input ref={inputRef} onPressEnter={save} onBlur={save} className={styles.input} />
      </Form.Item>
    ) : (
      <div
        className={styles.editable_cell_value_wrap}
        onClick={toggleEdit}
        style={{ minHeight: '15px' }}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
}
