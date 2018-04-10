export class Foro {
    _id: string;
    grupo: string;
    tema: Array<tema>;
}

export class tema{
    tituloTema: String;
    post: Array<post>;
}

export class post{
    tituloPost: String;
    texto: String;
    autor: String;
}

