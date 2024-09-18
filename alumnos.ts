class Alumno {
    public nombre : string;
    private nota : number;
    //-----------------------------------------------------------------------------------------
    constructor (nombre : string, nota : number) {
        this.nombre = nombre;
        this.nota = nota;
    }
    //-----------------------------------------------------------------------------------------
    setnombreAlumnos (nombre : string) : string {
        this.nombre = nombre;
        return this.nombre;
    }
    pasaDeAño () : string {
        if (this.nota > 6) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }
    setnota (nota : number) : number {
        this.nota = nota;
        return nota;
    }
}

let alumno1 = new Alumno ("Denise", 5);
let alumno2 = new Alumno ("Maria", 9);
let alumno3 = new Alumno ("Florencia", 10);
let alumno4 = new Alumno ("Pepe", 6);
let alumno5 = new Alumno ("Joaquin", 8);

//alumno3.setnombreAlumnos ("Pancho");
//alumno3.setnota (3);

const arrayClassAlumnos : Alumno [] = [alumno1, alumno2, alumno3, alumno4, alumno5];
//console.log (arrayClassAlumnos);

const arrayResultados = [alumno1.pasaDeAño(), alumno2.pasaDeAño(), alumno3.pasaDeAño(), alumno4.pasaDeAño(), alumno5.pasaDeAño()]
//console.log (arrayresultados);

const nombreAlumnosArray : string [] = [alumno1.nombre, alumno2.nombre, alumno3.nombre, alumno4.nombre, alumno5.nombre];
//console.log (nombreAlumnosArray);
export {nombreAlumnosArray, arrayResultados}