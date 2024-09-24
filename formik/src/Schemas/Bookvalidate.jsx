import * as yup from 'yup';

export const BookValidate = yup.object().shape({
    bookTitle: yup.string().required("Book Title is required"),
    bookAuthor : yup.string().required("Book Author is required"),
    bookISBNNo: yup.string().required('ISBN number required').matches(/^\d{13}$/,'Enter a valid ISBN No,Give 13 number'),
    booksPublishDate:yup.date().max('2025-01-10','select lesser than current date').required("Book Publish date is required"),     
    authorName: yup.string().required("Author Name is required"),
    dateOfBirth:yup.date().max('2025-01-10','select lesser than current date').required("Author Date of Birth  is required"),
    authorbio: yup.string().required("Short Bio of Author is required"), 
  })