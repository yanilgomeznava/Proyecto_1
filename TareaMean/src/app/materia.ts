//clase de implementacion de materia
export class Materia {
    _id: String;
    universidad: String;
    escuela: String;
    carrera: String;
    nombreMateria: String;
    codigoMateria: String;
    nombreMalla: Array<nombreMalla>;
    }

    export class nombreMalla{
        nombreMalla: String;
        temas: Array<temas>;
    }

    export class temas {
        tituloTema: String;
        tituloSubtema: Array<tituloSubtema>;
    }

    export class tituloSubtema{
        tituloSubtema: String;
    }
