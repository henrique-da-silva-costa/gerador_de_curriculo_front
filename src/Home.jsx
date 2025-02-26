import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap';
import Formulario from './crud/Formulario';
import { Usuario } from './contexts/Usuario';
import { useNavigate } from 'react-router-dom';
import InfoUsuario from './components/InfoUsuario';
const Home = () => {
    const [usuario, setUsuario] = useState(sessionStorage.getItem("usuario") ? JSON.parse(sessionStorage.getItem("usuario")) : "");
    const nav = useNavigate();

    const inputs = {
        nome: "",
        img: "",
        estado_civil: "",
        telefone: "",
        data_nascimento: "",
        usuario_id: usuario.id,
    }

    return (
        <>
            <InfoUsuario />
            <Container>
                <h1>Cadastrar currículo</h1>
                <Button className="mt-2" onClick={() => nav("/curriculos")} color="primary">VER MEUS CURRÍCULOS</Button>
                <Formulario textoBotao={"CADASTRAR"} url={"cadastrar/curriculo"} inputs={inputs} tipoFormulario="curriculo" />
            </Container>
        </>
    )
}

export default Home
