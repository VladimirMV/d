// Libs
import * as yup from 'yup';

export const validationSchema = yup
  .object()
  .shape({
    drink: yup.string().required(),
    drinkThumb: yup.mixed().test(file => (file ? true : false)),
    about: yup.string().required(),
    category: yup
      .object()
      .shape({ label: yup.string().required(), value: yup.string() })
      .required(),
    glass: yup
      .object()
      .shape({ label: yup.string().required(), value: yup.string() })
      .required(),
    ingredients: yup
      .array()
      .of(
        yup
          .object()
          .shape({
            title: yup
              .object()
              .shape({ label: yup.string().required(), value: yup.string() })
              .required(),
            measure: yup
              .object()
              .shape({ label: yup.string().required(), value: yup.string() })
              .required(),
          })
          .required()
      )
      .min(2)
      .required(),
    instructions: yup.string().required(),
  })
  .required();