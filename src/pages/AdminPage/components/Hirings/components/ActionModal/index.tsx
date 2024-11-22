import React, { useEffect, useState } from 'react';
import { StyledActionModel } from './style';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BackButton } from 'ui';
import { useIntl } from 'react-intl';
import SvgSelector from 'assets/icons/SvgSelector';
import { BasicInformation, DetailsForm, EducationForm, SkillsForm } from '..';
import { Button, Card, Form, Input, Space, Tabs } from 'antd';
import useQueryApiClient from 'utils/useQueryApiClient';
import dayjs from 'dayjs';
import axios from 'axios';
import { routes } from 'config/config';
import Cookies from 'js-cookie';
import { CloseOutlined } from "@ant-design/icons";

interface RequestField {
  id: number;
  jobTitle?: string | undefined;
  minSalary?: string | undefined;
  maxSalary?: string | undefined;
  salaryPeriod?: string | undefined;
  workMode?: string | undefined;
  employmentType?: string | undefined;
  employmentDuration?: string | undefined;
  workloadMonth?: string | undefined;
  contractEnds?: string | undefined;
}
// const initialRequestFields = [
//   {
//     id: 1,
//     jobTitle: '',
//     minSalary: '',
//     maxSalary: '',
//     salaryPeriod: '',
//     workMode: '',
//     employmentType: '',
//     employmentDuration: '',
//     workloadMonth: '',
//     contractEnds: ''
//   }
// ];
// const initialEducationFields = [
//   {
//     id: 1,
//     degreeLevel: '',
//     fieldOfStudy: '',
//     specificCertification: ''
//   }
// ]

export function ActionModalHirings() {
  const locations = useLocation();
  const navigate = useNavigate();
  const intl = useIntl();
  const params = useParams();
  const [form] = Form.useForm();
  const [activeKey, setActiveKey] = useState('basic-information');
  const [path, setPath] = useState('');
  const [image, setImage] = useState<boolean>(true);
  const [hiringImage, setHiringImage] = useState<boolean>(true);
  const [nextStep, setNextStep] = useState<boolean | null>(null);
  const [nextStepStatus, setNextStepStatus] = useState<boolean>(true);
  const [requestFields, setRequestFields] = useState<RequestField[]>();
  const [educationFields, setEducationFields] = useState();
  const [numberOfCandidates, setNumberOfCandidates] = useState(1);

  const [actionFormData, setActionFormData] = useState<{
    certificateField: any;
    educationField: any;
    skillsField: any;
    description: string;
  } | null>(null);
  const [disable, setDisable] = useState<boolean>(
    locations.pathname.includes('/admin/request-talent/view-talent/') ? true : false
  );

  const getHiringById = async () => {
    if (locations.pathname !== '/admin/request-talent/add-talent') {
      const config = {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      };

      try {
        const response = await axios.get(`${routes.api.baseUrl}/api/manage-cabinets/get/hiring/${params.id}`, config);
        const {
          jobTitle,
          companyName,
          companyCode,
          language,
          minSalary,
          maxSalary,
          jobLocation,
          employmentType,
          salaryPeriod,
          contractDuration,
          hiringEducation,
          hiringSertificates,
          hiringSkills,
          hiringDetails,
          location,
          anonymousOrganizationId,
          sequence,
          region,
        } = response.data.data;

        const skills =
          hiringSkills?.map((skill: any) => ({
            skillsId: skill.skillId,
            level: skill.level,
          })) || [];

        const education =
          hiringEducation?.map((edu: any) => ({
            educationName: edu.educationName,
            degrees: edu?.degrees?.map((deg: any) => deg.degree) || [],
          })) || [];

        const certificates =
          hiringSertificates?.map((cert: any) => ({
            certificateName: cert?.certificateName || '',
          })) || [];

        const { description, tags, publishedEndDate } = hiringDetails || {};

        setActionFormData({
          certificateField: certificates,
          educationField: education,
          skillsField: skills,
          description: description,
        });

        form.setFieldsValue({
          jobTitle,
          companyName,
          companyCode,
          minSalary: parseInt(minSalary) || null,
          maxSalary: parseInt(maxSalary) || null,
          jobLocation,
          employmentType,
          salaryPeriod,
          contractDuration,
          coutry: location,
          language,
          tags,
          region,
          hiringSkills: skills.length > 0 ? skills : [{ skillName: undefined, level: 'Beginner' }],
          hiringSertificates: certificates.length > 0 ? certificates : [{ certificateName: undefined }],
          hiringEducation: education,
          publishedEndDate: dayjs(publishedEndDate),
          anonymousCompanyId: anonymousOrganizationId,
          sequence: sequence,
        });
        if (response.data.data.image !== null) {
          setPath(response.data.data?.image?.path);
        } else {
          setHiringImage(false);
        }
      } catch (error) {
        return;
      }
    }
  };

  const handleNext = async () => {
    // console.log('activeKey: ', activeKey);
    const value = form.getFieldValue('hiringEducation');

    // console.log('value: ', value);


    try {
      const values = await form.validateFields();
      const currentIndex = tabsItem.findIndex((tab) => tab.key === activeKey);
      if (currentIndex < tabsItem.length - 1 && nextStepStatus) {
        setActiveKey(tabsItem[currentIndex + 1].key);
        setNextStep(true);
      }
    } catch (error) {
      console.log('Validation failed:', error);
    }
  };

  const handlePrev = () => {
    const currentIndex = tabsItem.findIndex((tab) => tab.key === activeKey);
    if (currentIndex > 0 && nextStepStatus) {
      setActiveKey(tabsItem[currentIndex - 1].key);
      setNextStep(false);
    }
  };

  const { appendData: createHiring, isLoading: loadingCreateHiring } = useQueryApiClient({
    request: {
      url: '/api/manage-cabinets/create/hiring',
      method: 'POST',
      multipart: true,
    },
    onSuccess() {
      if (activeKey != 'basic-information') {
        form.resetFields();
      }
    },
  });

  const { appendData: updateHiring, isLoading: loadingUpdateHiring } = useQueryApiClient({
    request: {
      url: `/api/manage-cabinets/update/hiring?id=${params.id}`,
      method: 'PUT',
      multipart: true,
    },
    onSuccess() {
      navigate('/admin/request-talent');
      form.resetFields();
    },
  });

  const validateEducation = async (changedValue: any) => {
    try {
      if (Array.isArray(changedValue.hiringEducation)) {
        const fieldPaths = changedValue.hiringEducation.flatMap((_: any, index: number) => [
          ['hiringEducation', index, 'degrees'],
          ['hiringEducation', index, 'educationName'],
        ]);

        await form.validateFields(fieldPaths);
      } else {
        await form.validateFields(['hiringEducation']);
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  const submit = async (changedValue: any, status: boolean) => {
    if (
      locations.pathname == '/admin/request-talent/add-talent' ||
      locations.pathname.includes('/admin/request-talent/copy-talent')
    ) {
      if (status) {
        var validateStatus = form.validateFields();
        validateStatus
          .then((values) => {
            const tagsArray = Array.isArray(changedValue?.tags)
              ? changedValue.tags
              : changedValue?.tags
                ? changedValue.tags.split(',').map((tag: any) => tag.trim())
                : [];
            const hiringSkills = changedValue.hiringSkills.map((skill: any) => ({
              skillsId: skill.value || skill.skillsId,
              level: skill.level || 'Beginner',
            }));

            createHiring({
              ...changedValue,
              hiringDetails: {
                description: changedValue?.description,
                tags: tagsArray,
                publishedEndDate: dayjs(changedValue?.publishedEndDate).format('YYYY-MM-DD HH:mm:ss'),
              },
              hiringStatus: status ? 0 : 2,
              language: changedValue.language,
              hiringSkills: hiringSkills,
              updateImage: image,
              isAnonymous: changedValue.anonymousCompanyId ? true : false,
            });
          })
          .catch((error) => {
            setActiveKey(tabsItem[0].key);
            return;
          });
      } else {
        if (await validateEducation(changedValue)) {
          const tagsArray = Array?.isArray(changedValue?.tags)
            ? changedValue.tags
            : changedValue?.tags
              ? changedValue.tags.split(',')?.map((tag: any) => tag.trim())
              : [];
          const hiringSkills = changedValue?.hiringSkills?.map((skill: any) => ({
            skillsId: skill.value || skill.skillsId,
            level: skill.level || 'Beginner',
          }));
          createHiring({
            ...changedValue,
            hiringDetails: {
              description: changedValue?.description,
              tags: tagsArray,
              publishedEndDate: dayjs(changedValue?.publishedEndDate).format('YYYY-MM-DD HH:mm:ss'),
            },
            hiringStatus: status ? 0 : 2,
            language: changedValue.language,
            hiringSkills: hiringSkills,
            updateImage: false,
            isAnonymous: changedValue.anonymousCompanyId ? true : false,
          });
        }
      }
    } else if (locations.pathname.includes('/admin/request-talent/edit-talent')) {
      if (status) {
        var validateStatus = form.validateFields();
        validateStatus
          .then((values) => {
            const tagsArray = Array.isArray(changedValue?.tags)
              ? changedValue.tags
              : changedValue?.tags
                ? changedValue.tags.split(',')?.map((tag: any) => tag.trim())
                : [];
            const hiringSkills = changedValue?.hiringSkills?.map((skill: any) => ({
              SkillsId: skill.value || skill.skillsId,
              level: skill.level || 'Beginner',
            }));

            updateHiring({
              ...changedValue,
              hiringDetails: {
                description: changedValue?.description,
                tags: tagsArray,

                publishedEndDate: dayjs(changedValue?.publishedEndDate).format('YYYY-MM-DD HH:mm:ss'),
              },
              hiringStatus: status ? 0 : 2,
              hiringSkills: hiringSkills,
              updateImage: image,
              isAnonymous:
                changedValue.anonymousCompanyId && typeof changedValue.anonymousCompanyId !== 'string' ? true : false,
              anonymousCompanyId:
                typeof changedValue.anonymousCompanyId === 'string' ? null : changedValue.anonymousCompanyId,
            });
          })
          .catch((error) => {
            return;
          });

        return;
      }

      if (await validateEducation(changedValue)) {
        const tagsArray = Array.isArray(changedValue?.tags)
          ? changedValue.tags
          : changedValue?.tags
            ? changedValue.tags.split(',')?.map((tag: any) => tag.trim())
            : [];
        const hiringSkills = changedValue?.hiringSkills?.map((skill: any) => ({
          SkillsId: skill.value || skill.skillsId,
          level: skill.level || 'Beginner',
        }));
        updateHiring({
          ...changedValue,
          hiringDetails: {
            description: changedValue?.description,
            tags: tagsArray,

            publishedEndDate: dayjs(changedValue?.publishedEndDate).format('YYYY-MM-DD HH:mm:ss'),
          },
          hiringStatus: status ? 0 : 2,
          hiringSkills: hiringSkills,
          updateImage: false,
          isAnonymous:
            changedValue.anonymousCompanyId && typeof changedValue.anonymousCompanyId !== 'string' ? true : false,
          anonymousCompanyId:
            typeof changedValue.anonymousCompanyId === 'string' ? null : changedValue.anonymousCompanyId,
        });
      }
    }
  };

  const handleDelete = (id: number) => {
    // const filteredRequestFields = requestFields.filter((item: any) => item.id != id);
    // setRequestFields(filteredRequestFields);
  }

  const handleCopyChange = (id: number, copyFrom: number) => {
    // const copyFromItem = requestFields.find(item => item.id == copyFrom);
    // const newFields = requestFields.map(item => {
    //   if (Number(item.id) == id) {
    //     return {
    //       ...copyFromItem,
    //       id
    //     }
    //   } else {
    //     return item
    //   }
    // })
    // setRequestFields(newFields);
  };

  const tabsItem = [
    {
      label: intl.formatMessage({ id: 'basic_information' }),
      key: 'basic-information',
      children: (
        <div>
          <BasicInformation
            setHiringImage={setHiringImage}
            hiringImage={hiringImage}
            disable={disable}
            setPath={setPath}
            form={form}
            requestFields={requestFields}
            handleDelete={handleDelete}
            handleCopyChange={handleCopyChange}
            setRequestFields={setRequestFields}
            numberOfCandidates={numberOfCandidates}
            setNumberOfCandidates={setNumberOfCandidates}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: 'education' }),
      key: 'education-information',
      children: (
        <div>
          <EducationForm
            setNextStepStatus={setNextStepStatus}
            nextStep={nextStep}
            disable={disable}
            actionFormData={actionFormData}
            form={form}
            educationFields={educationFields}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: 'skills' }),
      key: 'skills-information',
      children: (
        <div>
          <SkillsForm disable={disable} actionFormData={actionFormData} form={form} />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: 'hiring_details' }),
      key: 'details-information',
      children: (
        <div>
          <DetailsForm
            hiringImage={hiringImage}
            actionFormData={actionFormData}
            disable={disable}
            image={image}
            setImage={setImage}
            path={path}
            setPath={setPath}
            form={form}
          />
        </div>
      ),
    },
  ];

  // useEffect(() => {
  //   getHiringById();
  // }, []);

  // useEffect(() => {
  //   if (locations.pathname.includes('/admin/request-talent/view-talent')) setDisable(true);
  //   else setDisable(false);
  // }, [locations.pathname]);


  // useEffect(() => {
  //   let candidates = [];
  //   let education = [];
  //   for (let index = 1; index <= numberOfCandidates; index++) {
  //     candidates.push({
  //       id: index,
  //       jobTitle: '',
  //       minSalary: '',
  //       maxSalary: '',
  //       workMode: '',
  //       employmentType: '',
  //       employmentDuration: '',
  //       workloadMonth: '',
  //       contractEnds: '',
  //       salaryPeriod: '',
  //     });
  //     education.push({
  //       id: index,
  //       degreeLevel: '',
  //       fieldOfStudy: '',
  //       specificCertification: ''
  //     })
  //   }
  //   setRequestFields(candidates);
  //   setEducationFields(education);
  // }, [numberOfCandidates]);

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <StyledActionModel>
      <BackButton onClick={() => navigate(-1)} color="black" label={intl.formatMessage({ id: 'back' })} />
      <div className="title-container">
        <h1 className="title">
          {locations.pathname === '/admin/request-talent/add-talent' ||
          locations.pathname.includes('/admin/request-talent/copy-talent') ? (
            intl.formatMessage({ id: 'add_hirings' })
          ) : locations.pathname.includes('admin/request-talent/view-talent') ? (
            <>
              {intl.formatMessage({ id: 'view_hirings' })}&nbsp;{params?.id?.toString()?.padStart(3, '0')}
            </>
          ) : (
            intl.formatMessage({ id: 'edit_hirings' })
          )}
        </h1>
        {locations.pathname.includes('/admin/request-talent/view-talent/') && (
          <>
            <Button
              className="edit-btn"
              icon={<SvgSelector id="edit" />}
              onClick={() => navigate('/admin/request-talent/edit-talent/' + params.id)}
            />
          </>
        )}
      </div>

      <Form
        onFinish={(values) => console.log('values: ', values)}
        form={form}
        layout='vertical'
        name="dynamic_form_complex"
        initialValues={{ 
          basicInformation: [{}],
          educations: [{}],
          // hiringEducation: [{}],
          // hiringSertificates: [{}]
        }}
        // style={{ maxWidth: 600 }}
        // autoComplete="off"
        // initialValues={{ items: [{}] }}
      >
        <Tabs activeKey={activeKey}>
          {tabsItem.map((tab) => (
            <Tabs.TabPane tab={tab.label} key={tab.key}>
              {tab.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
        

        <div className="tab-buttons">
          {activeKey !== 'basic-information' && (
            <div onClick={handlePrev} className="left prev-btn">
              <SvgSelector id="blue-chevron-svg" />
            </div>
          )}

          {activeKey !== 'details-information' && (
            <div onClick={handleNext} className="right next-btn">
              <SvgSelector id="blue-chevron-svg" />
            </div>
          )}
        </div>

        <div>
          {!locations.pathname.includes('/admin/request-talent/view-talent/') && activeKey == 'details-information' && (
            <div className="save-button">
              {/* <Button
                loading={loadingCreateHiring}
                className="btn"
                onClick={() => {
                  submit(form.getFieldsValue(), false);
                }}
                label={intl.formatMessage({ id: 'save_draft' })}
              /> */}
              {/* <Button
                loading={loadingCreateHiring}
                className="btn"
                onClick={() => {
                  submit(form.getFieldsValue(), true);
                }}
                label={intl.formatMessage({ id: 'save_publish' })}
              /> */}
            </div>
          )}
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </StyledActionModel>
  );
}
