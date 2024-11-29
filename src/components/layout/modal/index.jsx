import { useEffect, useState, useRef } from "react";
import { BoxStyle } from "./style";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import logo from "../../../assets/logo.png";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import api from "../../../services/api";

export function ModalHome() {
  const [open, setOpen] = useState(!sessionStorage.getItem('modal'));
  const [, setStorage] = useState('');

  const inputName = useRef()
  const inputEmail = useRef()

  async function createtUsers() {
    await api.post("/users", {
      name: inputName.current.value,
      email: inputEmail.current.value
    });
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      setStorage(sessionStorage.setItem('modal',true));
    
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyle component="form" noValidate autoComplete="off">
          <img src={logo} />
          <Typography variant="h2" gutterBottom>
            Ganhe 15% de desconto
          </Typography>
          <p>Preencha seus dados, é rapidinho ;)</p>

          <TextField
            inputRef={inputName}
            id="outlined-multiline-flexible"
            label="Nome"
            maxRows={12}
          />
          <TextField
            inputRef={inputEmail}
            id="outlined-multiline-flexible"
            label="E-mail"
            maxRows={12}
          />
          <Button onClick={createtUsers} type="button">Quero Desconto</Button>
        </BoxStyle>
      </Modal>
    </div>
  );
}
