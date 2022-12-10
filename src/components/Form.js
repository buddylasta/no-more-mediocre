import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {
    const schema = yup.object().shape({
        program: yup.string().required("Program is required"),
        skill: yup.string().required("Skill is required"),
        challenge: yup.string().required("Challenge is required")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {
        console.log("Form submitted");
    };

    return (
        <form className="flex flex-col justify center rounded-lg divide-y-23" onSubmit={handleSubmit(onSubmit)}>
            <input className="text-black" type="text" placeholder="Pick a Program" {...register("program")}></input>
            <p className="form-errors">{errors.embedID?.message}</p>
            <input className="text-black" type="text" placeholder="Pick a Skill" {...register("skill")}></input>
            <p className="form-errors">{errors.embedID?.message}</p>
            <input className="text-black" type="text" placeholder="Pick a Challenge" {...register("challenge")}></input>
            <p className="form-errors">{errors.embedID?.message}</p>
        </form>
    );
};