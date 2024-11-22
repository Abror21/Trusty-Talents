import React, { useEffect, useState } from 'react';
import { Form } from 'antd';

import { StyledLanguageSwitcher } from './style';
import { Select, SelectOption } from 'ui';
import { TbWorld } from "react-icons/tb";

type changedValue = {
  languageName: string;
};

const languages = [
  { id: 1, language: 'en', label: 'EN' },
  { id: 2, language: 'ru', label: 'RU' },
  { id: 3, language: 'uz', label: 'UZ' },
];

export const LanguageSwitcher = () => {
  const [form] = Form.useForm();
  const [language, setLanguage] = useState(languages[0].label);

  const handleChangeLanguage = (changedValue: changedValue) => {
    setLanguage(changedValue.languageName);
  };

  return (
    <StyledLanguageSwitcher>
      <Form form={form} onValuesChange={handleChangeLanguage}>
        <TbWorld />
        <Select
          className="language-switcher"
          name="languageName"
          showSearch={false}
          initialValue={`${languages && languages[0].language}`}
          variant="borderless"
        >
          {languages &&
            languages.map((lang, index) => (
              <SelectOption key={index} value={lang.language}>
                {lang.label}
              </SelectOption>
            ))}
        </Select>
      </Form>
    </StyledLanguageSwitcher>
  );
};
