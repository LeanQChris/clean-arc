"use client"; // Ensure client-side execution

import { useFormik } from "formik";
import * as Yup from "yup";
import { apiLogin } from "../data/api";
import { ILoginDTO } from "../data/interface";
import showToast from "@/components/ui/toast/toaster";
import { useRouter } from "next/navigation";  // Call useRouter at the top level

export default function useLogin() {
    const router = useRouter();
    const onSubmit = async (values: ILoginDTO) => apiLogin(values).then(() => {
        showToast({
            title: "Successfully Signed In",
            description: "Welcome to the platform",
        });
        formik.resetForm();
        router.push("/category");
    }).catch((error) => {
        const { username, password } = error.response?.data?.error || {};
        if (username || password) {
            formik.setErrors({ username, password });
        } else {
            const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again.";
            showToast({
                title: "Oops",
                description: errorMessage
            });
        }
    });

    const formik = useFormik({
        validationSchema,
        initialValues: {
            username: "",
            password: "",
        } as ILoginDTO,
        onSubmit,
    });

    return { formik };
}


export const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});
