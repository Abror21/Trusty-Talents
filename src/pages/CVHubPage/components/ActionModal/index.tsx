import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Button, Checkbox, Input, Modal, Select, SelectOption, TextArea } from 'ui';
import { StyledActionModal } from './style';
import useQueryApiClient from 'utils/useQueryApiClient';
import { Form } from 'antd';

export function ActionModal({ actionModal, setActionModal }: any) {
  const intl = useIntl();
  const [selectedRequests, setSelectedRequests] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();
  const { isLoading, data: hiringData } = useQueryApiClient({
    request: {
      url: '/api/hirings/filter',
      method: 'GET',
    },
  });

  const toggleSelection = (id: number) => {
    if (selectedRequests.includes(id)) {
      setSelectedRequests(selectedRequests.filter((item) => item !== id));
    } else {
      setSelectedRequests([...selectedRequests, id]);
    }
  };

  return (
    <Modal
      width={550}
      onCancel={() => {
        setActionModal(undefined);
        setIsOpen(false);
      }}
      open={actionModal?.open}
      footer={[
        <div className="w-100" style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            label={intl.messages.save && intl.formatMessage({ id: 'save' })}
            onClick={() => setActionModal(undefined)}
          />
        </div>,
      ]}
    >
      <Form form={form} name="hiring_form" layout="vertical" labelAlign="right">
        <StyledActionModal>
          <h1 className="title">
            {actionModal?.actionType === 'request'
              ? intl.formatMessage({ id: 'cv_hub_action_modal_title' })
              : intl.formatMessage({ id: 'share_cv_hub_action_modal_title' })}
          </h1>
          <div className="description">
            <div className="text">
              <h4>
                {intl.formatMessage({ id: 'cv_hub_action_modal_subtitle' })}:&nbsp;{actionModal?.userId}
              </h4>
              <p>
                {actionModal?.actionType === 'request'
                  ? intl.formatMessage({ id: 'cv_hub_action_modal_text' })
                  : intl.formatMessage({ id: 'enter_description' })}
                &nbsp;
              </p>
            </div>

            <div className="select">
              {actionModal?.actionType === 'request' ? (
                <div className="custom-select">
                  <div className="custom-select-field" onClick={() => setIsOpen(!isOpen)}>
                    {selectedRequests.length > 0 ? `Выбрано: ${selectedRequests.length}` : 'Выберите запросы'}
                  </div>

                  <div className={`custom-select-dropdown ${isOpen ? 'open' : ''}`}>
                    {hiringData?.data?.items?.map((item: any) => (
                      <div
                        className="custom-select-item"
                        key={item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSelection(item.id);
                        }}
                      >
                        <Checkbox
                          checked={selectedRequests.includes(item.id)}
                          onChange={() => toggleSelection(item.id)}
                        />
                        {item.jobTitle}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <TextArea placeholder={intl.formatMessage({ id: 'free_text' })} />
              )}

              {actionModal?.actionType !== 'request' && (
                <div className="action_user_email">
                  <Input
                    placeholder={intl.formatMessage({ id: 'enter_email_address' })}
                    label={intl.formatMessage({ id: 'cv_hub_action_modal_user_email' })}
                    rules={[
                      {
                        required: true,
                        message: intl.formatMessage({ id: 'company_name_required' }),
                      },
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
        </StyledActionModal>
      </Form>
    </Modal>
  );
}
