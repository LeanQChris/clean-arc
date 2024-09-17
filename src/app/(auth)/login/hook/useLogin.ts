"use client"; // Ensure client-side execution

import { useFormik } from "formik";
import * as Yup from "yup";
import { apiLogin } from "../data/api";
import { ILoginDTO } from "../data/interface";
import showToast from "@/components/ui/toast/toaster";
import { useRouter } from "next/navigation";  // Call useRouter at the top level
import { useState } from "react";
import axios from "axios";

export default function useLogin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        validationSchema,
        initialValues: {
            username: "",
            password: "",
        } as ILoginDTO,
        onSubmit: async (values: ILoginDTO, { setErrors }) => {
            setLoading(true);
            try {
                const data = await apiLogin(values); // Ensure this function correctly handles redirects
                formik.resetForm();
                showToast({
                    title: "Successfully Signed In",
                    description: "Welcome to the platform",
                });
                router.push("/category");
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const { username, password } = error.response?.data?.error || {};
                    if (username || password) {
                        setErrors({ username, password });
                    } else {
                        showToast({
                            title: "Oops",
                            description: error.response?.data?.message || "An unexpected error occurred. Please try again.",
                        });
                    }
                } else {
                    showToast({
                        title: "Oops",
                        description: "An unexpected error occurred. Please try again.",
                    });
                }
            } finally {
                setLoading(false);
            }
        },
    });

    return { formik, loading };
}


export const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});
