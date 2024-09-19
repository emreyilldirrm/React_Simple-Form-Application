import { isInteger } from 'formik';
import * as yup from 'yup';

export const registerSchemas = yup.object().shape({
    email: yup.string().email("Lütfen doğru formatta email giriniz").required("Email adresi zorunludur"),
    age: yup.number().positive("Lütfen yaşınızı doğru giriniz").required("Yaş zorunludur").integer("Tam sayı olmalıdır"),
    pass: yup.string().required("Şifre alanı zorunludur"),
    passConfirm: yup.string()
        .oneOf([yup.ref("pass")], "Şifreler eşleşmelidir")
        .required("Şifre tekrarı zorunludur"),
    term: yup.boolean().required('Lütfen kutucuğu onaylayınız')
});