import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1.5rem;
    align-items: center;
    background-color: #f9fafb;
    font-family: 'Rubik', 'sans-serif';
`

export const Title = styled.h1`
    font-size: 1.875rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
    width: 66%;
`

export const Subtitle = styled.p`
    font-size: 1.125rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
    width: 66%;
`

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`

export const Label = styled.label`
    font-size: 0.875rem;
    font-weight: 500;
    color: #7c3aed;
    margin-bottom: 0.25rem;
    display: block;
`

export const InputField = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    outline: none;
    &:focus {
        border-color: #7c3aed;
        box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.4);
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 0.75rem 0;
    font-weight: 600;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    background-color: ${(props) => (props.valid ? '#7c3aed' : '#d1d5db')};
    color: white;
    cursor: ${(props) => (props.valid ? 'pointer' : 'not-allowed')};
    &:hover {
        background-color: ${(props) => (props.valid ? '#6d28d9' : '#d1d5db')};
    }
`