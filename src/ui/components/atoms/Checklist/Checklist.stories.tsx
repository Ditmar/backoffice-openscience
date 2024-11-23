import type { Meta, StoryObj } from '@storybook/react';
import Checklist from './Checklist';

const meta: Meta<typeof Checklist> = {
  title: 'ui/components/atoms/Checklist',
  component: Checklist,
  argTypes: {
    onCheck: {
      action: 'clicked',
    },
    onSeleonCategorySelect: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checklist>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex' }}>
      <div>
        <Checklist
          items={['Columns', 'Rows', 'Cells']}
          onCheck={args.onCheck}
          number={[]}
          onSeleonCategorySelect={() => {}}
        />
      </div>
      <div>
        <Checklist
          items={[' 10', ' 20', ' 30', ' 40', ' 50']}
          onSeleonCategorySelect={args.onSeleonCategorySelect}
          onCheck={() => {}}
          number={[10, 20, 30, 40, 50]}
        />
      </div>
    </div>
  ),
};
