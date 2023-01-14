import { useForm } from "react-hook-form";
import React from "react";
import style from "./form.module.css"
import axios from "axios";


export default function Form(){

    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = (data) => {
        axios.post(`https://638632f3beaa64582676413d.mockapi.io/form`, data)
        alert("Заявка отправлена")
    }

    return(
        <div className={style.form}>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Заполните заявку на обратный звонок</h1>
            <div>
                <div className="input-group mb-3"> 
                     <input
                     {...register("lastName", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i  
                        })}
                     type="text"
                     className="form-control"
                     placeholder="Фамилия"
                    />
                </div>
                {errors?.lastName?.type === "required" &&(
                    <p>Поле Фамилия обязательно для заполнения</p>
                )}
                {errors?.lastName?.type === "maxLength" &&(
                    <p>Фамилия не может содержать более 50 символов</p>
                )}
                {errors?.lastName?.type === "pattern" &&(
                    <p>Поле заполненно некорректно</p>
                )}
                <div className="input-group mb-3"> 
                     <input
                     {...register("firstName", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i 
                     })}
                     type="text"
                     className="form-control"
                     placeholder="Имя"
                    />
                </div>
                {errors?.firstName?.type === "required" &&(
                    <p>Поле Имя обязательно для заполнения</p>
                )}
                {errors?.firstName?.type === "maxLength" &&(
                    <p>Имя не может содержать более 50 символов</p>
                )}
                {errors?.firstName?.type === "pattern" &&(
                    <p>Поле заполненно некорректно</p>
                )}
                <div className="input-group mb-3"> 
                     <input
                     {...register("middleName", {
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i 
                     })}
                     type="text"
                     className="form-control"
                     placeholder="Отчество"
                    />
                </div>
                {errors?.middleName?.type === "maxLength" &&(
                    <p>Отчество не может содержать более 50 символов</p>
                )}
                {errors?.middleName?.type === "pattern" &&(
                    <p>Поле заполненно некорректно</p>
                )}
                <div className="input-group mb-3"> 
                     <input
                     {...register("email", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[A-Za-z@._-]+$/i 
                     })}
                     type="text"
                     className="form-control"
                     placeholder="Email"
                    />
                </div>
                {errors?.email?.type === "required" &&(
                    <p>Поле Email обязательно для заполнения</p>
                )}
                {errors?.email?.type === "maxLength" &&(
                    <p>Email не может содержать более 50 символов</p>
                )}
                {errors?.email?.type === "pattern" &&(
                    <p>Поле заполненно некорректно</p>
                )}
            </div>
            <div>
                <input className="btn btn-outline-primary" type="submit"/>
            </div>
            </form>
        </div>
    )
}