import * as React from "react";
import { SystemWrapper, SystemBlock } from "../_utils/storybook";
import { Stack } from "../_foundations/common";
import { Breadcrumbs, BreadcrumbItem } from ".";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const readme = require("./README.md");

export default {
  title: "Component|Breadcrumbs",
  component: [Breadcrumbs, BreadcrumbItem],
  decorators: [SystemWrapper, withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const groupItem = "Item";
const groupLastItem = "Last Item";
export const Example = () => (
  <SystemBlock title="Breadcrumbs">
    <Stack spacing="xl">
      <Breadcrumbs separator="/">
        <BreadcrumbItem>{text("Item - 1", "BCC", groupItem)}</BreadcrumbItem>
        <BreadcrumbItem>
          {text("Item - 2", "Design System", groupItem)}
        </BreadcrumbItem>
        <BreadcrumbItem lastItem={boolean("Last Item", true, groupLastItem)}>
          {text("Item - 3", "Tabs", groupItem)}
        </BreadcrumbItem>
      </Breadcrumbs>
    </Stack>
  </SystemBlock>
);

export const Skelaton = () => (
  <SystemBlock title="Breadcrumbs">
    <Stack spacing="xl">
      <Breadcrumbs separator="/">
        <BreadcrumbItem className="skeleton">BCC</BreadcrumbItem>
        <BreadcrumbItem className="skeleton">Design System</BreadcrumbItem>
        <BreadcrumbItem className="skeleton" lastItem>
          Tabs
        </BreadcrumbItem>
      </Breadcrumbs>
    </Stack>
  </SystemBlock>
);
