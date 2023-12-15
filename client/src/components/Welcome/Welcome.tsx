import { NavLink } from "react-router-dom";
import styles from "./welcome.module.css";

export type WelcomeProps = {
  // types...
};

const Welcome: React.FC<WelcomeProps> = ({}) => {
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

    <NavLink to={'/login'} >
<button className={styles.button}>
	     Ingresar

</button>

    </NavLink>


    

	  </div>

	  </div>
    </div>
  );
};

export default Welcome;
