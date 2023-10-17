import "./style.css";
const cambioStyle = "background-color:green; font-size:18px; font-weight: bold "

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock"
const hardRock = "🤘 Hard Rock"
const clasica = "🎼 Clásica"

interface GrupoMusical {
    nombreGrupo: string;
    cantante: string;
    compositor: string;
    año: number;
    activo:boolean;
    genero:string
  }

  const grupoMusical1 : GrupoMusical = {
    nombreGrupo: "The Beatle",
    cantante: "",
    compositor:"",
    año:1960,
    activo:true,
    genero:popRock
  };
  const grupoMusical2 : GrupoMusical = {
    nombreGrupo: "Queen",
    cantante: "",
    compositor:"",
    año:1970,
    activo:false,
    genero:rock
  };
  const grupoMusical3: GrupoMusical = {
    nombreGrupo: "AC DC",
    cantante: "",
    compositor:"",
    año:1973,
    activo:true,
    genero:hardRock
  };
  const grupoMusical4 : GrupoMusical = {
    nombreGrupo: "Ludwig van Beethoven",
    cantante: "",
    compositor:"",
    año:1770,
    activo:false,
    genero:clasica
  };
  const grupoMusical5 : GrupoMusical = {
    nombreGrupo: "The Rolling Stones",
    cantante: "",
    compositor:"",
    año:1962,
    activo:true,
    genero:rock
  };


console.log(`%c${grupoMusical1.nombreGrupo}`,cambioStyle,`/ año ${grupoMusical1.año} / Activo: ${grupoMusical1.activo} / Género ${grupoMusical1.genero}`);
console.log(`%c${grupoMusical2.nombreGrupo}`,cambioStyle,`/ año ${grupoMusical2.año} / Activo: ${grupoMusical2.activo} / Género ${grupoMusical2.genero}`);
console.log(`%c${grupoMusical3.nombreGrupo}`,cambioStyle,`/ año ${grupoMusical3.año} / Activo: ${grupoMusical3.activo} / Género ${grupoMusical3.genero}`);
console.log(`%c${grupoMusical4.nombreGrupo}`,cambioStyle,`/ año ${grupoMusical4.año} / Activo: ${grupoMusical4.activo} / Género ${grupoMusical4.genero}`);
console.log(`%c${grupoMusical5.nombreGrupo}`,cambioStyle,`/ año ${grupoMusical5.año} / Activo: ${grupoMusical5.activo} / Género ${grupoMusical5.genero}`);