import React from "react";
import type { PropsWithChildren, ReactNode } from "react";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";

interface Props {
  onSubmit: SubmitHandler<any>;
  form: UseFormReturn<any, object>;
}

export function Form(props: PropsWithChildren<Props>) {
  const {
    onSubmit,
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
    children,
  } = props;

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
