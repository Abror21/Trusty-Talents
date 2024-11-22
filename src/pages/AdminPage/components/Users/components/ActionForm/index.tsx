import React, { useEffect, useState } from 'react';
import { StyledAddUserActionForm } from './style';
import { AddMoreButton, BackButton, Button, Checkbox, IconButton, Input, Select, SelectOption } from 'ui';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import SvgSelector from 'assets/icons/SvgSelector';
import { Form } from 'antd';

export function AddUserActionForm() {
  const navigate = useNavigate();
  const intl = useIntl();
  const locations = useLocation();
  const params = useParams();
  const [form] = Form.useForm();

  const [disable] = useState<boolean>(locations.pathname.includes('/admin/users/view-user') ? true : false);

  useEffect(() => {
    form.setFieldsValue({
      users: [{ name: null, surname: null }],
    });
  }, [form]);

  const handleAddField = (addFn: any) => {
    addFn({ name: null, surname: null });
  };

  const handleRemoveOrClearField = (fieldName: any, fieldCount: any, removeFn: any) => {
    if (fieldCount > 1) {
      removeFn(fieldName);
    } else {
      form.setFieldsValue({
        users: [{ name: null, surname: null }],
      });
    }
  };

  const checkDuplicateNames = (_: any, value: any, callback: any) => {
    const educationNames = form
      .getFieldValue('users')
      .map((item: any) => item?.educationName)
      .filter(Boolean);
    const hasDuplicates = educationNames.length !== new Set(educationNames).size;

    if (hasDuplicates) {
      callback(intl.formatMessage({ id: 'duplicate_education_name_error' }));
    } else {
      callback();
    }
  };

  return (
    <StyledAddUserActionForm>
      <BackButton onClick={() => navigate(-1)} color="black" label={intl.formatMessage({ id: 'back' })} />
      <div className="title-container">
        <h1 className="title">
          {locations.pathname === '/admin/users/add-users' ? (
            intl.formatMessage({ id: 'add_user' })
          ) : locations.pathname.includes('/admin/users/view-user') ? (
            <>{intl.formatMessage({ id: 'view_user' })}</>
          ) : (
            intl.formatMessage({ id: 'edit_user' })
          )}
        </h1>

        <div>
          
        </div>
        <Form form={form}>
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <div className="form-wrapper">
                {fields.map(({ key, name, ...restField }, index) => (
                  <div
                    className="input-wrapper"
                    key={key}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
                  >
                    <div style={{ flex: 1 }}>
                      <Form.Item
                        {...restField}
                        name={[name, 'name']}
                        rules={[{ required: true, message: 'Name is required' }]}
                      >
                        <Input placeholder="Name" />
                      </Form.Item>
                    </div>

                    <div style={{ flex: 1 }}>
                      <Form.Item
                        {...restField}
                        name={[name, 'surname']}
                        rules={[{ required: true, message: 'Surname is required' }]}
                      >
                        <Input placeholder="Surname" />
                      </Form.Item>
                    </div>

                    <div style={{ flex: 2 }}>
                      <Form.Item
                        {...restField}
                        name={[name, 'email']}
                        rules={[
                          { required: true, message: 'Email is required' },
                          { type: 'email', message: 'Enter a valid email' },
                        ]}
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                    </div>

                    <div>
                      <Form.Item {...restField} name={[name, 'administrator']} valuePropName="checked">
                        <Checkbox />
                      </Form.Item>
                    </div>

                    <div>
                      <Form.Item {...restField} name={[name, 'editor']} valuePropName="checked">
                        <Checkbox />
                      </Form.Item>
                    </div>

                    <div>
                      <Form.Item {...restField} name={[name, 'viewer']} valuePropName="checked">
                        <Checkbox />
                      </Form.Item>
                    </div>

                    {index > 0 ? (
                      <IconButton
                        iconId="close-svg"
                        onClick={() => handleRemoveOrClearField(name, fields.length, remove)}
                      />
                    ) : (
                      <Form.Item>
                        <AddMoreButton label={''} onClick={() => handleAddField(add)} />
                      </Form.Item>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Form.List>
        </Form>
        {locations.pathname.includes('/admin/users/view-user') && (
          <Button
            className="edit-btn"
            icon={<SvgSelector id="edit" />}
            onClick={() => navigate('/admin/users/edit-user/' + params.id)}
          />
        )}
      </div>
    </StyledAddUserActionForm>
  );
}
