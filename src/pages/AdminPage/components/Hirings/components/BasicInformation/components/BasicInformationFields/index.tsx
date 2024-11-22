import React, { memo, SetStateAction, useEffect, useState } from 'react'
import { VscTriangleUp } from "react-icons/vsc";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { StyledBasicInformationFields } from './style'
import { Input, Select, SelectOption } from 'ui';
import { useIntl } from 'react-intl';
import { Form } from 'antd';

interface FieldsProps {
  // form: HTMLFormElement;
  field: any;
  // index: number;
  // disable: any;
  add: Function;
  numberOfCandidates: number;
  remove: Function;
  loadingSalary: boolean;
  loadingJobLocation: boolean;
  loadingemploymentType: boolean;
  loadingContactDuration: boolean;
  hiringSalaryData: any;
  jobLocationData: any;
  employmentTypeData: any;
  contactDuration: any;
  fields: any;
  handleDelete: (id: number) => void;
  handleCopyChange: (id: number, value: string) => void;
  setRequestFields: React.Dispatch<SetStateAction<any>>;
}
// TODO: trash code
export default memo(({
  // form,
  fields,
  add,
  remove,
  field,
  numberOfCandidates,
  // index,
  // disable,
  loadingSalary,
  loadingJobLocation,
  loadingemploymentType,
  loadingContactDuration,
  hiringSalaryData,
  jobLocationData,
  employmentTypeData,
  contactDuration,
  handleCopyChange,
  setRequestFields
}: FieldsProps) => {

  const intl = useIntl();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log('fields: ', fields);
    
    if (numberOfCandidates > 1 && field.name == 0) {
      for (let i = 0; i < fields.length; i++) {
        setTimeout(() => {
          remove(fields[i].name);
        }, 10);
      }
      for (let i = 1; i < numberOfCandidates; i++) {
        setTimeout(() => {
          add();
        }, 1000);
      }
    }
  }, [numberOfCandidates])


  const onlyNumbersForWorkload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    // form.setFieldsValue({ [`workloadHours${index}`]: numericValue });
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>, name: string, select = false) => {
    // setRequestFields((prev: any) => {
    //   const newArr = prev.map((item: any) => {
    //     if(item.id == field.id){
    //       return {
    //         ...item,
    //         [name]: select ? e : e.target.value
    //       }
    //     } else{
    //       return item;
    //     }
    //   });
    //   return newArr;
    // });
  }

  return (
    <StyledBasicInformationFields className={`${isExpanded ? 'expanded' : ''}`}>
      <div className='fields-header'>Condidate #{field.name + 1}&nbsp;
        <span className='fields__hide' onClick={() => setIsExpanded(!isExpanded)}><VscTriangleUp /></span>&nbsp;
        <span className='fields__delete' onClick={() => {
          if (field.name > 0) {
            remove(field.name)
          }
        }}><FaRegTrashCan /></span>
      </div>
      <hr />
      <div className='toggle'>
        {
          (field.name > 0) &&
          <div className='fields-copy'>
            <FiCopy />
            Copy information from #
            <Input
              onChange={(e) => handleCopyChange(field.id, e.target.value)}
            />
          </div>
        }
        <div className="form-header">
          <div className="ant-form-item">
            <Form.Item
              label={intl.formatMessage({ id: 'job_title' })}
              name={[field.name, "jobTitle"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="form-header__salary">
            <span>{intl.formatMessage({ id: 'gross_salary' })}</span>
            <div className="salary-container">
              <Form.Item
                name={[field.name, "minSalary"]}
                rules={[{ required: true }]}
              >
                <Input className='salary-input' />
              </Form.Item>
              <span>-</span>
              <Form.Item
                name={[field.name, "maxSalary"]}
                rules={[{ required: true }]}
              >
                <Input
                  className='salary-input'
                />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                name={[field.name, "salaryPeriod"]}
              >
                <Select
                  loading={loadingSalary}
                >
                  {hiringSalaryData?.data?.map((item: any, index: number) => {
                    return (
                      <SelectOption allowClear value={item} key={index}>
                        {intl.messages[item] && intl.formatMessage({ id: item })}
                      </SelectOption>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="form-body">
          <div className="form-item">
            <Form.Item
              label={intl.formatMessage({ id: 'work_mode' })}
              name={[field.name, "workMode"]}
            >
              <Select
                loading={loadingJobLocation}
              >
                {jobLocationData?.data?.map((item: any, index: number) => {
                  return (
                    <SelectOption value={item} key={index}>
                      {intl.messages[item] && intl.formatMessage({ id: item })}
                    </SelectOption>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="form-item">
            <Form.Item
              name={[field.name, "employmentType"]}
              label={intl.formatMessage({ id: 'employment_type' })}
            >
              <Select
                loading={loadingemploymentType}
              >
                {employmentTypeData?.data?.map((item: any, index: number) => {
                  return (
                    <SelectOption value={item} key={index}>
                      {intl.messages[item] && intl.formatMessage({ id: item })}
                    </SelectOption>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="form-item">
            <Form.Item
              name={[field.name, "employmentDuration"]}
              label={intl.formatMessage({ id: 'employment_duration' })}
            >
              <Select
                loading={loadingContactDuration}
              >
                {contactDuration?.data?.map((item: any, index: number) => {
                  return (
                    <SelectOption value={item} key={index}>
                      {intl.messages[item] && intl.formatMessage({ id: item })}
                    </SelectOption>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="form-item">
            <Form.Item
              name={[field.name, "workloadMonth"]}
              label={intl.formatMessage({ id: 'work_hours' })}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="form-item">
            <Form.Item
              label={intl.formatMessage({ id: 'contract_ends_month' })}
              name={[field.name, "contractEnds"]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
      </div>
    </StyledBasicInformationFields>
  )
})

// export default BasicInformationFields