import React, { useEffect, useState } from 'react';
import { PDFViewer, Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { FaUserAlt } from 'react-icons/fa';
import moment from 'moment';

const Pdf = () => {
    const [dados, setDados] = useState(localStorage.getItem("curriculo") ? JSON.parse(localStorage.getItem("curriculo")) : {});

    const [linkImagem] = useState(dados ? dados.img : "");

    const styles = StyleSheet.create({
        body: {
            padding: 20,
            fontFamily: 'Helvetica',
        },
        fs30: {
            fontSize: 30,
        },
        fs26: {
            fontSize: 26,
        },
        fs20: {
            fontSize: 20,
        },
        imagem: {
            maxWidth: "300px",
            height: "300px",
            objectFit: "contain"
        },
        titulo: {
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 8,
        },
        imagemDiv: {
            width: "40%",
        },
        descricao: {
            width: "100%",
        },
        conteudo: {
            flexDirection: "row",
            marginBottom: 8,
        },
        experiencias: {
            width: "60%",
        },
        sobre: {
            width: "40%",
        },
    });

    const MyDocument = () => (
        <Document title={"curriculo"}>
            <Page style={styles.body}>
                <View style={styles.titulo}>
                    <View style={styles.imagemDiv}>
                        {
                            linkImagem ? <Image style={styles.imagem} src={linkImagem} /> :
                                <FaUserAlt fontSize={50} />
                        }
                    </View>
                    <View style={styles.descricao}>
                        <Text style={styles.fs30}>{dados.nome}</Text>
                        <Text style={styles.fs20}>{dados.descricao}</Text>
                    </View>
                </View>
                <View style={styles.conteudo}>
                    <View style={styles.sobre}>
                        <Text style={styles.fs30}>Dados pessoais</Text>
                        <View>
                            <Text style={styles.fs26}>Informações de contato</Text>
                            <Text style={styles.fs20}>Estado civil: {dados.estado_civil}</Text>
                            <Text style={styles.fs20}>Telefone: {dados.telefone}</Text>
                            <Text style={styles.fs20}>Data de nascimento: {moment(dados.data_nascimento).format("DD/MM/YYYY")}</Text>
                        </View>
                        <View>
                            <Text style={styles.fs26}>Habilidades</Text>
                            <Text style={styles.fs20}>{dados.habilidades}</Text>
                        </View>
                    </View>
                    <View style={styles.experiencias}>
                        <Text style={styles.fs30}>Experiências</Text>
                        <View>
                            <Text style={styles.fs26}>Empresa: {dados.empresa}</Text>
                            <Text style={styles.fs26}>Cargo: {dados.cargo}</Text>
                            <Text style={styles.fs26}>Responsabilidades</Text>
                            <Text style={styles.fs20}>{dados.responsabilidades}</Text>
                            <View>
                                <Text style={styles.fs26}>Período</Text>
                                <Text style={styles.fs20}>de {moment(dados.data_inicio).format("DD/MM/YYYY")} a {moment(dados.data_fim).format("DD/MM/YYYY")}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );

    return (
        <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "100%"
        }}>
            <PDFViewer width={"100%"} height={"100%"}>
                <MyDocument />
            </PDFViewer>
        </div>
    );
};

export default Pdf;