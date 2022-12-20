import React, { useState } from "react";
import 'animate.css';
import "./hojas-de-estilo/Imgmeme.css";
import html2canvas from "html2canvas";
import { CompactPicker } from "react-color";
import { useThemeContext } from "../context/ThemeContext";

const Imgmeme = () => {
  const { contextTheme } = useThemeContext();

  const [imgmeme, setImgmeme] = useState("");
  const [textmeme, setTextmeme] = useState("");
  const [color, setColor] = useState("");
  const [fontSize, setFontSize] = useState(22);

  //otro texto
  const [text2meme, setText2meme] = useState("");

  const seleccionarImg = (e) => {
    setImgmeme(e.target.value);
  };

  const seleccionarImgCarga = () => {
    setImgmeme("memes/1.jpg");
  };

  const textomeme = (e) => {
    setTextmeme(e.target.value);
  };
  //otro texto
  const texto2meme = (e) => {
    setText2meme(e.target.value);
  };

  const Descargar = (e) => {
    html2canvas(document.querySelector("#exportar")).then(function(canvas) {
      let img = canvas.toDataURL("memes/jpg");
      let link = document.createElement("a");
      link.download = "memepropio.jpg";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="Contenedor">
      <div className="row">
        <h1 className=" animate__animated animate__bounceInUp tipografia">Edita tu propio meme</h1>
        {/* columna izquierda */}
        <div className="col-5 composicionMeme">
          <h6 className="mt-3 text-center">Elegí tu imagen</h6>
          <select
            onLoad={seleccionarImgCarga}
            onChange={seleccionarImg}
            className="form-select form-select-sm mb-3 w-50 m-auto"
            arial-label=".form-select-lg example"
          >
            <option value={1}>Futurama</option>
            <option value={2}>Bob esponja</option>
            <option value={3}>Señora</option>
            <option value={4}>Calamardo</option>
            <option value={5}>Señora llorando</option>
            <option value={6}>Hombre en problemas</option>
            <option value={7}>Chica </option>
            <option value={8}>Alienígenas Ancestrales</option>
            <option value={9}>Albert Eisnten</option>
            <option value={10}>Perdiendo la cabeza</option>
            <option value={11}>Enojado</option>
            <option value={12}>Bebe padrino</option>
            <option value={13}>En mis tiempos</option>
            <option value={14}>Novia enojada</option>
            <option value={15}>Batman abofeteando a Robin</option>
          </select>

          <h6 className="mt-3">Ingresá el texto del meme</h6>
          <input
            onChange={textomeme}
            className="form-control w-75 text-left m-50 m-auto d-block"
            type="text"
            placeholder="Pone tu frase"
            name="meme"
            arial-label="default input example"
          ></input>

          <h6 className="mt-3">Podés ingresar otro texto...</h6>
          <input
            onChange={texto2meme}
            className="form-control w-75 text-left m-50 m-auto d-block"
            type="text"
            placeholder="Pone tu frase"
            name="meme"
            arial-label="default input example"
          ></input>

          {/* color y tamaño de fuente */}
          <div className="row">
            <div className="col-4">
              <p className="h6 pt-2 pb-0">Font size</p>
              <button className="btn btn-warning btn-sm  border border-2" onClick={() => setFontSize(fontSize + 2)}>+</button>
              <button className="btn btn-warning btn-sm ms-2 ps-2 border border-2" onClick={() => setFontSize(fontSize - 2)}>-</button>
            </div>
            
            <div className="col-8">
              <p className="h6 pt-2 ">Color de texto</p>
              <CompactPicker
                color={color}
                onChangeComplete={(color) => {
                  setColor(color.hex);
                }}
              />
            </div>
          </div>
        </div>
        {/* columna derecha */}
        <div className="col-7">
          <figure className="imagenMeme" id="exportar">
            <p
              style= {{fontSize: `${fontSize}px`, color: `${color}` }}
              id="texto1"
            >
              {textmeme}
            </p>
            <p
              style={{fontSize: `${fontSize}px`,color: `${color}` }}
              id="texto2"
            >
              {text2meme}
            </p>

            <img
              /* src={imgmeme===""?`./memes/1.jpg`:`./memes/${imgmeme}.jpg`} */
              src={`./memes/${imgmeme}.jpg`} 
              className="figure-img imagenMeme mt-3 d-block m-auto"
              alt="meme"
            />
          </figure>

          <button
            onClick={Descargar}
            type="button"
            className="btn btn-warning mt-1 border border-2"
          >
            Descargar meme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imgmeme;
