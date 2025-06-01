import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui';

function Main() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChangeValue = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      <h2>{t('pages.main.title')}</h2>
      <Input type="text" value={value} onChange={onChangeValue} placeholder="Enter your name" />
    </div>
  );
}

export default Main;
