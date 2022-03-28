import React, { useState } from "react";
import './style.css';

export const Semaforo = () => {
    const [selected, setSelected] = useState<"vermelho" | "amarelo"| "verde">();

    return (
        <div className="container">
            <h1>Selecione a cor que desejar para ver a mensagem!</h1>
            <div className="semafaro">
                <button className={`vermelho ${selected === "vermelho" ? "selected" : ""}`} onClick={() => setSelected("vermelho")}/>
                <button className={`amarelo ${selected === "amarelo" ? "selected" : ""}`} onClick={() => setSelected("amarelo")}/>
                <button className={`verde ${selected === "verde" ? "selected" : ""}`} onClick={() => setSelected("verde")}/>
            </div>
            <div className="info">
                {selected === 'vermelho' && <span>Cuidado! Espere o sinal abrir!</span>}
                {selected === 'amarelo' && <span>Atenção, irá fechar em breve!</span>}
                {selected === 'verde' && <span>Pode passar!</span>}
            </div>
        </div>
    )
}