import { render, screen, fireEvent } from '@testing-library/react';
import Cadastro from './Cadastro'; // Importe seu componente

describe('Cadastro Component', () => {
  test('renders email input', () => {
    render(<Cadastro />);
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    render(<Cadastro />);
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders name input', () => {
    render(<Cadastro />);
    const nameInput = screen.getByPlaceholderText(/nome/i);
    expect(nameInput).toBeInTheDocument();
  });

  test('renders last name input', () => {
    render(<Cadastro />);
    const lastNameInput = screen.getByPlaceholderText(/sobrenome/i);
    expect(lastNameInput).toBeInTheDocument();
  });

  test('renders date of birth input', () => {
    render(<Cadastro />);
    const dobInput = screen.getByPlaceholderText(/data de nascimento/i);
    expect(dobInput).toBeInTheDocument();
  });

  test('submits the form', () => {
    render(<Cadastro />);
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const submitButton = screen.getByText(/cadastrar/i);

    fireEvent.change(emailInput, { target: { value: 'teste@example.com' } });
    fireEvent.click(submitButton);

    // Verifique se algo acontece após o envio, como uma mensagem
    const successMessage = screen.getByText(/cadastro realizado com sucesso/i);
    expect(successMessage).toBeInTheDocument();
  });
});
