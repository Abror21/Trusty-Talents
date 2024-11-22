import React, { useState } from 'react'
import { StyledEducationFormFields } from './style'
import { useIntl } from 'react-intl';
import { VscTriangleUp } from "react-icons/vsc";
import { FaRegTrashCan } from "react-icons/fa6";
import { Form, Select } from 'antd';
import { AddMoreButton, IconButton, Input, SelectOption } from 'ui';

const EducationFormFields = ({
    field,
    form,
    disable,
    isLoading,
    degreeData,
}: any) => {
    const intl = useIntl();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleRemoveOrClearField = (fieldName: any, fieldCount: any, removeFn: any) => {
        if (fieldCount > 1) {
            removeFn(fieldName);
        } else {
            form.setFieldsValue({
                hiringEducation: [{ educationName: undefined, degrees: null }],
            });
        }
    };
    const handleAddField = (addFn: any) => {
        addFn({ educationName: undefined, degrees: null });
    };

    const checkDuplicateNames = (_: any, value: any, callback: any) => {
        const educationNames = form
            .getFieldValue('hiringEducation')
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
        <StyledEducationFormFields className={`${isExpanded ? 'expanded' : ''}`}>
            <div className='fields-header'>Condidate #{field.name + 1}&nbsp;
                <span className='fields__hide' onClick={() => setIsExpanded(!isExpanded)}><VscTriangleUp /></span>&nbsp;
                <span className='fields__delete' onClick={() => { }}><FaRegTrashCan /></span>
            </div>
            <hr />
            <div className='toggle'>
               
                <div className="select-wrapper">
                    <Form.Item
                        label="Degree level"
                        name={[field.name, 'degrees']}
                        rules={[
                            // { required: true },
                        ]}
                    >
                        <Select
                            disabled={disable}
                            loading={isLoading}
                            mode="multiple"
                            placeholder={intl.formatMessage({ id: 'degree_hiring' })}
                        >
                            {degreeData?.data?.map((option: any) => (
                                <SelectOption key={option} value={option}>
                                    {intl.messages.option && intl.formatMessage({ id: option })}
                                </SelectOption>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Field of Study"
                        name={[field.name, 'educationName']}
                        rules={[
                            // { validator: checkDuplicateNames },
                            // { required: true },
                        ]}
                    >
                        <Input disabled={disable} placeholder={intl.formatMessage({ id: 'education_hiring' })} />
                    </Form.Item>
                    <Form.Item
                        label="Specific sertifications"
                        name={[field.name, 'certification']}
                    >
                        <Input />
                    </Form.Item>
                </div>
                {/* <Form.Item
                    label="Specific sertifications"
                    name={[field.name, 'certification']}
                >
                    <Input />
                </Form.Item> */}
            </div>
            {/* <Form.List name="hiringEducation">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <div className="select-wrapper" key={key}>
                                    <div className="select-box">
                                        <div className="select">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'degrees']}
                                                rules={[
                                                    {
                                                        required: form.getFieldValue(['hiringEducation', name, 'educationName']),
                                                        message: intl.formatMessage({ id: 'degree_required' }),
                                                    },
                                                ]}
                                            >
                                                <Select
                                                    disabled={disable}
                                                    loading={isLoading}
                                                    mode="multiple"
                                                    placeholder={intl.formatMessage({ id: 'degree_hiring' })}
                                                >
                                                    {degreeData?.data?.map((option: any) => (
                                                        <SelectOption key={option} value={option}>
                                                            {intl.messages.option && intl.formatMessage({ id: option })}
                                                        </SelectOption>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </div>
                                        <div className="level-select-wrapper">
                                            <div className="select select_input">
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'educationName']}
                                                    rules={[
                                                        { validator: checkDuplicateNames },
                                                        {
                                                            required: form.getFieldValue(['hiringEducation', name, 'degrees']),
                                                            message: intl.formatMessage({ id: 'education_name_required' }),
                                                        },
                                                    ]}
                                                >
                                                    <Input disabled={disable} placeholder={intl.formatMessage({ id: 'education_hiring' })} />
                                                </Form.Item>
                                            </div>
                                            <div className="mobile-hidden">
                                                <IconButton
                                                    disable={disable}
                                                    iconId="close-svg"
                                                    onClick={() => handleRemoveOrClearField(name, fields.length, remove)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="more-btn">
                                <Form.Item>
                                    <AddMoreButton
                                        disabled={disable}
                                        label={intl.formatMessage({ id: 'add_education_btn' })}
                                        onClick={() => handleAddField(add)}
                                    />
                                </Form.Item>
                            </div>
                        </>
                    )}
                </Form.List> */}
            {/* <Form.List name="hiringSertificates">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <div className="certificate_field" key={key}>
                                    <Form.Item>
                                        <Input
                                            disabled={disable}
                                            {...restField}
                                            name={[name, 'certificateName']}
                                            label={intl.formatMessage({ id: 'specific_certifications' })}
                                        />
                                    </Form.Item>
                                </div>
                            ))}
                        </>
                    )}
                </Form.List> */}
        
        </StyledEducationFormFields >
    )
}

export default EducationFormFields