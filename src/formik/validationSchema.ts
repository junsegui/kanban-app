import * as Yup from "yup";

export const addTaskValidationSchema = Yup.object({
    task: Yup.string().required(),
})