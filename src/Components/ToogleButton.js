import React from "react";
import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  background:${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadowInset};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 64px;
  height: 32px;
  border-radius: 50px;
  border: none;
  align-self: flex-end;
  margin: 16px 16px 0 0;
  position: relative;
  padding: 0 0.5rem;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  background: ${({ theme }) => theme.background};
  content: '';
  position: absolute;
  left: 2px;
  box-shadow: 0 0.25rem 0.25rem 0.25rem var(--darkShadow);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  transition: 0.2s;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`

const Switch = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
};

export default Switch;