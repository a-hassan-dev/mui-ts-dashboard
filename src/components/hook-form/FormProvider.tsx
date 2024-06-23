import React, { FormEventHandler } from 'react';
// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type FormProviderProps = {
  children: React.ReactNode,
  methods: UseFormReturn<any>,
  onSubmit?: FormEventHandler<HTMLFormElement>,
};

export default function FormProvider({ children, onSubmit, methods }: FormProviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
