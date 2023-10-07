
import React from "react";

function ContactoForm() {
  return (
    <form>
      <label htmlFor="fname">Nombre:</label><br />
      <input type="text" id="fname" name="nombre" defaultValue="Miguel Testor" /><br /><br />

      <label htmlFor="lname">Apellido:</label><br />
      <input type="text" id="lname" name="apellido" defaultValue="Testor" /><br /><br />

      <label htmlFor="email">Correo:</label><br />
      <input type="text" id="email" name="correo" defaultValue="miguel.testor@example.com" /><br /><br />

      <label htmlFor="mensaje">Mensaje:</label><br />
      <input type="text" id="mensaje" name="mensaje" defaultValue="Hola!" /><br /><br />

      <div className="btn-box">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default ContactoForm;