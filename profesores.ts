import {nombreAlumnosArray, arrayResultados} from "./alumnos";

class Profesores {
    public nombreDelMaestro : string;
    public dni: number;
    //-----------------------------------------------------------------------------------------
    constructor (nombreMaestros : string, dni: number) {
        this.nombreDelMaestro = nombreMaestros;
        this.dni = dni;
    }
    //-----------------------------------------------------------------------------------------
    setMaestros (nombreMaestros : string) : string {
        this.nombreDelMaestro = nombreMaestros;
        return nombreMaestros;
    }
    setDni (dni : number) : number {
        this.dni = dni;
        return dni;
    }
    verListadoAlumnos (nombreArray: string[]) {
        console.log ("\n Los resultados de los alumnos son:"); 
        console.table(nombreArray);
    }
}

let profesor1 = new Profesores ("Mauricio", 36665485);
let profesor2 = new Profesores ("Viviana", 30546621);
let profesor3 = new Profesores ("Karen", 37666544);

//profesor1.verListadoAlumnos (nombreAlumnosArray);

const arrayClassProfesores : Profesores [] = [profesor1, profesor2, profesor3];

const nombreProfesoresArray : string [] = [profesor1.nombreDelMaestro," " + profesor2.nombreDelMaestro," " + profesor3.nombreDelMaestro];
//console.log (nombreProfesoresArray);
//console.table (arrayClassProfesores)
export { arrayClassProfesores }