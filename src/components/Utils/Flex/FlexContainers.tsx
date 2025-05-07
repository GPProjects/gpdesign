import React from "react";
import Flex from "./Flex";
import { FlexProps } from "./FlexTypes";

export const Row = React.forwardRef(({ ...props }: FlexProps, ref) => {
  return <Flex direction="row" ref={ref} {...props} />;
});
export const Column = React.forwardRef(({ ...props }: FlexProps, ref) => {
  return <Flex direction="column" ref={ref} {...props} />;
});
