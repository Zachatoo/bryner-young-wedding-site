import React, {
  forwardRef,
  PropsWithChildren,
  ReactNode,
  useImperativeHandle,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ObjectSchema } from "yup";
import type { AnyObject } from "yup/lib/types";

export type FormHandle = {
  reset: () => void;
};

interface Props {
  defaultValues?: any;
  onSubmit: SubmitHandler<any>;
  schema: ObjectSchema<AnyObject>;
}

function FormWrapped(
  props: PropsWithChildren<Props>,
  ref: React.ForwardedRef<FormHandle>
) {
  const { defaultValues, children, onSubmit, schema } = props;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: schema ? yupResolver(schema) : undefined,
  });

  useImperativeHandle(ref, () => ({
    reset,
  }));

  function _recursiveMap(children: ReactNode, fn: Function): ReactNode {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }
      if (child.props.children) {
        child = React.cloneElement(child, {
          children: _recursiveMap(child.props.children, fn),
        });
      }
      return fn(child);
    });
  }

  function _addFormProps(child: ReactNode) {
    if (React.isValidElement(child) && child.props.name) {
      return React.createElement(child.type, {
        ...{
          ...child.props,
          register,
          error: errors[child.props.name],
        },
      });
    }
    return child;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {_recursiveMap(children, _addFormProps)}
    </form>
  );
}

export const Form = forwardRef<FormHandle, PropsWithChildren<Props>>(
  FormWrapped
);
