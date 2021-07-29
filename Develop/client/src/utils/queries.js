import { gql } from '@apollo/client';

export const ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            title
            description
            link
            image
        }
    }
}
`; 