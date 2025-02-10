import s from "./ImageCard.module.css"
const ImageCard = ({
  image: {
    urls: { small, regular },
    alt_description,
    likes,
    description,
  },
  openModal,
}) => {
  return (
    <div>
          <img
              width="440"
              height="320"
        src={small}
        alt={alt_description}
        onClick={() => openModal(regular, alt_description, description)}
      />
    </div>
  );
};
export default ImageCard;






























// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import s from "./ContactForm.module.css";
// const ContactForm = ({ handleSubmit}) => {
//     const initialValues = {
//         name: "",
//         phone: "",
//     };
            
//     const onlyLaters = /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\s]+$/;
//     const phoneValidation = /^\+?\d{9,15}$/;
//      const applySchema = Yup.object().shape({
//     name: Yup.string()
//       .required("поле обов'язкове")
//       .min(3, "мінімум 3 символи")
//       .max(20, "максимум 20 символів")
//       .matches(onlyLaters, "введіть літери!"),
//     phone: Yup.string()
//       .matches(phoneValidation, "Невірний формат номера телефону")
//       .required("поле обов'язкове"),
//   });
    
//     return (
//         <div className={s.container}>
//             <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={applySchema}>
//                 <Form className={s.form}>
//                     <p className={s.text}>Name</p>
//                     <Field className={s.field} name="name"
//                         placeholder="Введіть ім'я"
//                     ></Field>
//                     <ErrorMessage
//                         className={s.mesege}
//                         name="name"
//                         component="p"
//                     />
//                     <p className={s.text}>Phone number</p>
//                     <Field className={s.field}  name="phone"
//                     placeholder="Введіть номер телефону"
//                     ></Field>
//                     <ErrorMessage
//                         name="phone"
//                         component="p"
//             />
//                     <button className={s.addbtn} type="submit">Add contact</button>
//                 </Form>
//             </Formik>
//         </div>

        
//    )
   
// }
// export default ContactForm;