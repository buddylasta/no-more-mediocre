import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {
    const schema = yup.object().shape({
        embedID: yup.string().required("EmbedID is Required")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {
        console.log("Form submitted");
    };

    return (
        <form className="rounded-lg" onSubmit={handleSubmit(onSubmit)}>
            <input className="text-black" type="text" placeholder="Workout embedID" {...register("embedID")}></input>
            <p className="form-errors">{errors.embedID?.message}</p>
        </form>
    );
};