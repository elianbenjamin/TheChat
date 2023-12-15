import  { useState, FormEvent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import styles from './login.module.css'


interface LoginProps {}

export default function Login(props: LoginProps): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function validateForm(): boolean {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Add your login logic here
  }

  return (
    <div className={styles.container}>

    <div className={styles.Login}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button  size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <NavLink to={'/'}>
        VOLVER
      </NavLink>
    </div>

    </div>
  );
}
