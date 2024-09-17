import React from "react";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/ui/forms/input";

const CategoryForm = () => {
    
    return (
      <form className="flex flex-col gap-6">
        <div className="flex flex-col space-y-2">
          <FormInput
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