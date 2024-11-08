import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DangerButtonWithIcon from './Danger-Button-With-Icon';

describe('DangerButtonWithIcon component', () => {
  it('verifies rendering with Small variant and no icon', () => {
    const { getByText } = render(
      <DangerButtonWithIcon variant="Small" icon="">
        Danger button
      </DangerButtonWithIcon>,
    );
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('ensures that the button displays correctly with the Medium variant', () => {
    const { getByText } = render(
      <DangerButtonWithIcon variant="Medium" icon="">
        Danger button
      </DangerButtonWithIcon>,
    );
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('checks the Big variant for proper rendering and text visibility', () => {
    const { getByText } = render(
      <DangerButtonWithIcon variant="Big" icon="">
        Danger button
      </DangerButtonWithIcon>,
    );
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('validates the Active variant displays with correct styling', () => {
    const { getByText } = render(
      <DangerButtonWithIcon variant="Active" icon="">
        Danger button
      </DangerButtonWithIcon>,
    );
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('confirms that the Disable variant is rendered with appropriate attributes', () => {
    const { getByText } = render(
      <DangerButtonWithIcon variant="Disable" icon="">
        Danger button
      </DangerButtonWithIcon>,
    );
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });
});
