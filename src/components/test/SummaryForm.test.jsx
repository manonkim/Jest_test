import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('초기상태', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('체크박스 클릭하면 버튼활성화, 해제하면 버튼 비활성화', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox');
  const confirmButton = screen.getByRole('button');

  fireEvent.click(checkBox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkBox);
  expect(confirmButton).toBeDisabled();
});
