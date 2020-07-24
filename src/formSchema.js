import * as yup from 'yup'

const formSchema = yup.object().shape({
    size: yup
        .string()
        .required('You must select a size'),
    sauce: yup
        .string()
        .required('You must select a sauce'),
    glutenfree: yup
        .boolean(),
    special: yup
        .string(),
    quantity: yup
        .number()
        .min(1, 'You must have at least one pizza'),
    name: yup
        .string()
        .min(2, 'name must be at least 2 characters long')
        .required('You must include your name')
})

export default formSchema