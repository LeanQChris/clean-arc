import { InputHTMLAttributes } from "react";

export interface FormField extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeHolder?: string;
    label?: string;
    type?: FormFieldType;
    options?: any[];
    isChecked?: boolean;
    onChange?: any;
    child?: any;
    visible?: (values: any) => boolean;
    disabled?: boolean;
    getValue?: (value: any) => any;
    min?: number;
    max?: number;
    required?: boolean,
    prefix?: any
    suffix?: any;
    error?:any
}

export type FormFieldType =
    | "text"
    | "number"
    | "email"
    | "password"
    | "textarea"
    | "checkbox"
    | "checkboxList"
    | "radio"
    | "select"
    | "date"
    | "file"
    | "switch";