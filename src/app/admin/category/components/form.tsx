"use client"
import React from "react";
import { Button } from "@/components/ui/buttons/button";
import FormInput from "@/components/ui/forms/input";
import useCategory from "../hook/useCategory";
import { categoryStore } from "../store";

const CategoryForm = () => {
  const { formik } = useCategory()
  const { toEditData } = categoryStore()

  // const parentDropdonn = React.useMemo(() => {
  //   return categories.map((category) => {
  //     return {
  //       label: category.name,
  //       value: category.id
  //     }
  //   })
  // }, [categories])

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
      <Button variant={"outline"} className="rounded">{toEditData ? "Update" : "Save"}</Button>
    </form>
  );
}

export default CategoryForm