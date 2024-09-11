"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/ui/forms/input";
import useLogin from "../hook/useLogin";

const LoginForm = () => {
  const { formik } = useLogin();
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col space-y-2">
        <FormInput
          placeholder="example@gmail.com"
          type="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          error={formik.errors.email}
        />
        <FormInput
          placeholder="************"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          error={formik.errors.password}
        />
      </div>
      <Button>Sign</Button>
    </form>
  );
}

export default LoginForm