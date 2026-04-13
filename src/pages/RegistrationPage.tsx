import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import { registration } from "../api/register";
import { useNavigate } from "react-router-dom";

export type InitialValueType = {
    login: string,
    email: string,
    password: string,
    gender: string,
    age: string | number
}

const initialValues: InitialValueType = {
    login: '',
    email: '',
    password: '',
    gender: '',
    age: ''
}

export const RegistrationPage: React.FC = () => {
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        login: Yup.string().required("Логин обязательно"),
        email: Yup.string().email("Неверный email").required("Email обязателен"),
        password: Yup.string()
      .required("Пароль обязательно")
            .min(6, "Минимальная длина 6 символов"),
        gender: Yup.string().required("Пол обязательно"), 
        age: Yup.string().required("Возраст обязательно"),
}
)

    const handleSubmit = async(values: InitialValueType) => {
        await registration(values)
        navigate('/login')
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="form-login">
                    <h1>Зарегистрироваться</h1>
                    <div className="form-registr">
                        <label htmlFor="login">Логин</label>
                         <Field className="form-input" type="text" id="login" name="login" />
                         <ErrorMessage className="error" name="login" component="div" />
                    </div>

                    <div className="form-registr">
                        <label htmlFor="email">E-mail</label>
                         <Field className="form-input" type="text" id="email" name="email" />
                         <ErrorMessage className="error" name="email" component="div" />
                    </div>

                    <div className="form-registr">
                        <label htmlFor="password">Пароль</label>
                         <Field className="form-input" type="text" id="password" name="password" />
                         <ErrorMessage className="error" name="password" component="div" />
                    </div>

                    <div className="form-registr">
                        <label htmlFor="gender">Пол</label>
                        <Field className="form-input" type="text" id="gender" name="gender"/>
                         <ErrorMessage className="error" name="gender" component="div" />
                    </div>

                    <div className="form-registr">
                        <label htmlFor="age">Возраст</label>
                         <Field className="form-input" type="text" id="age" name="age" />
                         <ErrorMessage className="error" name="age" component="div" />
                    </div>

                    <button  className="search-btn" type="submit">Зарегистрироваться</button>
                </Form>

            </Formik>
        </>
    )
}