import React from 'react'
import { useFormik } from 'formik';
import '../css/Register_Form.css'
import { registerSchemas } from '../schemas/RegisterFormsSchemas';
function Register_Form() {
    const submit = (values, action) => {
        console.log(values)
        console.log(action)

        setTimeout(() => {
            action.resetForm()

        }, 2000)
    }
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: '',
            age: "",
            pass: "",
            passConfirm: "",
            term: ""
        },
        validationSchema: registerSchemas,
        onSubmit: submit
    })


    console.log(errors)
    return (

        <div>

            <form onSubmit={handleSubmit} className='form-Container'>
                <div className="div_Container">
                    <label htmlFor="email">Email</label>
                    <input className='div_input' value={values.email} onChange={handleChange} type="text" placeholder='Email giriniz' id='email' />
                    {errors.email && <span className='err'>{errors.email}</span>}
                </div>
                <div className="div_Container">
                    <label htmlFor="age">Yaş</label>
                    <input className='div_input' value={values.age} onChange={handleChange} type="number" placeholder='Yaşınızı giriniz' id='age' />
                    {errors.age && <span className='err'>{errors.age}</span>}
                </div>
                <div className="div_Container">
                    <label htmlFor="pass">Şifre</label>
                    <input className='div_input' value={values.pass} onChange={handleChange} type="password" placeholder='Şifrenizi giriniz' id='pass' />
                    {errors.pass && <span className='err'>{errors.pass}</span>}
                </div>
                <div className="div_Container">
                    <label htmlFor="passConfirm">Şifre Tekrarı</label>
                    <input className='div_input' value={values.passConfirm} onChange={handleChange} type="password" placeholder='Şifrenizi tekrar giriniz' id='passConfirm' />
                    {errors.passConfirm && <span className='err'>{errors.passConfirm}</span>}
                </div>
                <div className="div_Container-check">
                    <input value={values.term} onChange={handleChange} type="checkbox" placeholder='şifrenizi tekrar giriniz' id='term' />
                    <label >Kullanıcı Sözleşmesini Kabul Ediyorum</label>

                </div>
                {errors.term && <span className='err'>{errors.term}</span>}
                <button type='submit' className='form-btn'>Kaydet</button>
            </form>
        </div>
    )
}

export default Register_Form