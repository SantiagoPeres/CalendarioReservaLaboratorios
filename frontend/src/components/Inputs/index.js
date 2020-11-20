import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import {
  Container, Label, StyledInput, ErrorSpan,
} from './styles';

export default function Input({
  name,
  label,
  disabled,
  color = '#333333',
  type = 'text',
}) {
  const [inputType, setInputType] = useState(type);
  const inputRef = useRef(null);
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

  return (
    <Container>
      <Label disabled={disabled}>{label}</Label>
      <StyledInput
        ref={inputRef}
        type={inputType}
        defaultValue={value}
      />
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </Container>
  );
}
