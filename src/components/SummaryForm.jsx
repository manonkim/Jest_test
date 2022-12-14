import React, { useState } from 'react';
import styled from 'styled-components';

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div>
        <input
          type={'checkbox'}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>I agree to Terms and Conditions</span>
      </div>
      <ConfirmBtn disabled={!checked}>Comfirm order</ConfirmBtn>
    </div>
  );
};

export default SummaryForm;

const ConfirmBtn = styled.button`
  padding: 8px;
  margin-top: 10px;
`;
