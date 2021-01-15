import React from "react";
import { Button } from "semantic-ui-react";
import "./SettignsForm.scss";

export default function SettignsForm() {
  return (
    <div className="settigns-form">
      <Button onClick={onChangePassoword}>Cambiar contraseña</Button>
      <Button onClick={onChangeEmail}>Cambiar email</Button>
      <Button onClick={onChangeDescription}>Descripción</Button>
      <Button onClick={onChangeSiteWeb}>Sitio web</Button>
      <Button onClick={onLogout}>Cerrar sesión</Button>
      <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  );
}
