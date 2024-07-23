import Dropdown, { DropdownItem } from '@/[lng]/components/Dropdown';
import InputField from '@/[lng]/components/InputField';
import StyledButton from '@/[lng]/components/ThemesComponents/StyledButton';
import { TFunction } from 'i18next';
import React, { useMemo } from 'react';

interface IOrderForm {
  t: TFunction<string, string>
  lng: string
}

const OrderForm: React.FC<IOrderForm> = ({
  t,
  lng,
}) => {
  const dropdownItems = useMemo(() => [
    { label: 'Почта', value: 'post', price: 500 },
    { label: 'Сдэк', value: 'sdek', price: 555 },
  ], []);

  const [selectedDelivery, setSelectedDelivery] = React.useState<DropdownItem>(dropdownItems[0]);
  const [formValues, setFormValues] = React.useState({});

  const findLabel = useMemo(() => {
    return (dropdownItems.find(item => item.value === selectedDelivery.value)?.label || '')
  }, [dropdownItems, selectedDelivery]);

  const onSelect = (value: DropdownItem) => setSelectedDelivery(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form values:', { ...formValues, delivery: selectedDelivery.value });
  };

  return (
    <form className="flex flex-col w-full md:ml-0" onSubmit={handleSubmit}>
      <div className="flex flex-col text-base grow">
        <h2 className="max-w-full mb-4 text-xl">Укажите ваш адрес доставки</h2>
        <InputField title='Индекс' name='index' required onChange={handleInputChange} />
        <InputField title='Область' name='region' required onChange={handleInputChange} />
        <InputField title='Город' name='city' required onChange={handleInputChange} />
        <InputField title='Улица' name='street' required onChange={handleInputChange} />
        <InputField title='Дом' name='house' required onChange={handleInputChange} />
        <InputField title='Квартира' name='apartment' onChange={handleInputChange} />
        <InputField title='Комментарий' name='comment' as='textarea' onChange={handleInputChange} />
        <h2 className="mt-4 text-xl md:max-w-full">Получатель</h2>
        <InputField title='имя' name='name' required onChange={handleInputChange} />
        <InputField title='email' name='email' type='email' required onChange={handleInputChange} />
        <InputField title='телефон' name='phone' type='tel' required onChange={handleInputChange} />
        <div className="my-4 text-xl md:max-w-full">Доставка</div>
        <Dropdown items={dropdownItems} buttonText={findLabel || 'Доставка'} onSelect={onSelect} />
        <h2 className="mt-12 text-xl md:mt-10 md:max-w-full">способ оплаты</h2>
        <InputField title='номер карты*' name='card' required onChange={handleInputChange} />
        <div className="flex justify-center gap-5 mt-8 uppercase whitespace-nowrap md:flex-wrap">
          <div className="flex-1">
            <InputField title='cvv/cvc' name='cvv' required onChange={handleInputChange} />
          </div>
          <div className="flex-1">
            <InputField title='месяц/год' name='expiry' required onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <StyledButton
        customClassName="mt-8"
        text={t('оплатить2').toUpperCase()}
        type="submit"
        alternative
      />
    </form>
  );
};

export default OrderForm;
