import React from "react";
import FormFields from "./FormFields";

export default {
  title: "Components/FormFields",
  component: FormFields,
  argTypes: {
    placeholder: { control: "text", defaultValue: "Placeholder text" },
  },
};

export const Default: React.FC<any> = (args) => <FormFields {...args} />;

/*
import React from "react";
import FormFields from "./FormFields";

export default {
  title: "Components/FormFields",
  component: FormFields,
};

export const Default = () => <FormFields />;
*/