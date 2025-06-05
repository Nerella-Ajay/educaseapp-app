import styled from 'styled-components';

// Common layout
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem 1.5rem;
  align-items: center;
  background-color: #f9fafb;
  font-family: 'Rubik','sans-serif';
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #7c3aed;
  margin-bottom: 0.25rem;
  display: block;
`;

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
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 9.375rem;
  font-weight: 600;
  border-radius: 0.375rem;
  background-color: ${(props) => (props.valid ? '#7c3aed' : '#e0e0e0')};
  color: ${(props) => (props.valid ? 'white' : '#888')};
  cursor: ${(props) => (props.valid ? 'pointer' : 'not-allowed')};
  margin-bottom: 0.75rem;

  &:hover {
    background-color: ${(props) => (props.valid ? '#6d28d9' : '#e0e0e0')};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;

  input {
    accent-color: #7c3aed;
  }
`;

