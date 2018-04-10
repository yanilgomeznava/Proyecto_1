//ESTRUCTURA DE LA CLASE ESCUELA
export class Escuela {
    _id: string;
    nombreEscuela: String;
    universidad: string;
    programa: Array<programa>;

}

export class programa{
    nombrePrograma: String;
      mallas: Array<mallas>;
}

export class mallas{
    nombreMalla: String;
        materias:Array<materias>;
}

export class materias{
    nombreMateria: String;
    codigoMateria: String;
    nombreMalla: Array<String>;
    temasMateria: Array<temasMateria>;

}

export class temasMateria{
    tituloTema: String;
    tituloSubtema: Array<String>;

}