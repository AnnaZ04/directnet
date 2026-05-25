import {render, screen, waitFor} from '@testing-library/react'
import  userEvent  from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Contact from './components/Contact'

describe('Contact Form', () => {
    test('renders inputs', () => {
        render (<Contact/>)

        expect(screen.getByPlaceholderText('Prénom')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Nom')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Téléphone')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    })
    test('user can type in input', async() => {
        render (<Contact/>)

        const input = screen.getByPlaceholderText('Prénom')
        await userEvent.type(input, 'Anna')
        expect (input).toHaveValue('Anna')
    })

    test ('submits form successfully', async() => {
        render (<Contact/>)

        await userEvent.type(
            screen.getByPlaceholderText('Prénom'),
            'Anna'
        )
        await userEvent.type(
            screen.getByPlaceholderText('Nom'),
            'Smith'
        )
        await userEvent.type(
            screen.getByPlaceholderText('Téléphone'),
            '0987536459'
        )
        await  userEvent.type(
            screen.getByPlaceholderText('Message'),
            'Hello'
        )
        await userEvent.click(
            screen.getByRole('button',{name:/envoyer/i})
        )
        await waitFor(() =>{
         expect(
             screen.getByText(/Votre demande a été envoyée !/i)
         ).toBeInTheDocument()
        })
    })
})

