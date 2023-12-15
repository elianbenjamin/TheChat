// import { NavLink } from "react-router-dom";
import styles from "./welcome.module.css";
import { useState } from "react";
import { Login } from "../../views/Login";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export type WelcomeProps = {
  // types...
};

const Welcome: React.FC<WelcomeProps> = ({}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src="../../../public/fondo.png" alt="" className={styles.img} />
      </div>
      <h1 className={styles.h1}>Live Chat</h1>
      <br />
	  <div className={styles.containerText}>

      <h2 className={styles.span}>
        Bienvenido a la página de Live Chat. <br />
		Inicie sesión para comenzar una conversación en el chat.
      </h2>
	  <div className={styles.containerDiv}>

    {/* <NavLink to={'/login'} > */}
<Button variant="primary" onClick={handleShow}>
	     Ingresar

</Button>

    {/* </NavLink> */}
    {/* <LoginModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> */}
    <Modal show={show} onHide={handleClose}>
      <Login/>
    </Modal>

	  </div>

	  </div>
    </div>
  );
};

export default Welcome;
