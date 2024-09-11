import { useFormik } from "formik";
import * as Yup from "yup";
import { apiLogin } from "../data/api";
import { ILoginDTO } from "../data/interface";
import showToast from "@/components/ui/toast/toaster";

export default function useLogin() {
    const formik = useFormik({
        validationSchema,
        initialValues: {
            email: "",
            password: "",
        } as ILoginDTO,
        onSubmit: (values: ILoginDTO, { setErrors }) => {
            apiLogin(values)
                .then(() => {
                    formik.resetForm();
                    showToast({
                        title: "Successfully Signed In",
                        description: "Welcome to the platform",
                    });
                })
                .catch((error) => {
                    const { email, password } = error.response?.data?.error || {};
                    if (email || password) {
                        setErrors({ email, password });
                    } else {
                        showToast({
                            title: "OOOPS",
                            description: error.response?.data?.message,
                        });
                    }
                });
        },
    });
    return { formik };
}
export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});
