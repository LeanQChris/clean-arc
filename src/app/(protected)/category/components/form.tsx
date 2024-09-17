"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/ui/forms/input";
import useCategory from "../hook/useCategory";

const CategoryForm = () => {
  const { formik } = useCategory()
  return (
    <form className="flex flex-col gap-6 w-full" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput
          value={formik.values.name}
          placeholder="Hospitality"
          type="text"
          label="Name"
          name="name"
        />
      </div>
      <Button>Save</Button>
    </form>
  );
}

export default CategoryForm