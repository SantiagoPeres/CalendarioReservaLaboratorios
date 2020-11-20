import { useField } from '@unform/core';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import arrow from '../../assets/icons/arrow-down.png';
import {
  Container,
  ContainerSelect,
  ContainerImg,
  Label,
  SelectInput,
  Options,
  Img,
  ContainerSearch,
  Option,
} from './styles';

export default function Select({
  name,
  label,
  list = [],
  disabled,
  color = '#fafafa',
  onSelectElement,
  ...rest
}) {
  const inputRef = useRef(null);
  const inputLabelRef = useRef(null);
  const optionsRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);
  const [value] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const searchOptions = useCallback((event) => {
    if (!open) setOpen(true);

    if (event.target.value === '' && inputRef.current) inputRef.current.value = '';

    setSearch(event.target.value);
  }, [open]);

  const selectList = useMemo(() => {
    if (search.length) {
      const filteredList = list.filter((item) => item.label.toLowerCase()
        .includes(search.toLowerCase()));

      return filteredList;
    }

    return list;
  }, [list, search]);

  return (
    <Container
      onClick={() => {
        setSearch('');
        setOpen(!open);

        inputLabelRef.current.focus();
      }}
    >
      <Label disabled={disabled}>{label}</Label>
      <ContainerSearch>
        <ContainerSelect>
          <SelectInput
            ref={inputLabelRef}
            defaultValue={value}
            onChange={searchOptions}
            placeholder="Selecione uma opção..."
            open={open}
            color={color}
            {...rest}
          />
          <input ref={inputRef} hidden {...rest} />
        </ContainerSelect>
        <ContainerImg>
          <Img src={arrow} open={open} />
        </ContainerImg>
      </ContainerSearch>
      <Options
        ref={optionsRef}
        open={open}
      >
        {selectList.map((item, key) => (
          <Option
            title={item.label}
            value={item.value}
            key={key}
            disabledSelected={item.disabled}
            onClick={() => {
              setSearch('');

              if (inputLabelRef.current && inputRef.current) {
                inputLabelRef.current.value = item.label;
                inputRef.current.value = item.value;
              }

              if (onSelectElement && !item.disabled) onSelectElement(item);
            }}
          >
            {item.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
}
