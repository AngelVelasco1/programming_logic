/*
* DIFICULTAD EXTRA(opcional):
* Dada una lista de estudiantes(con sus nombres, fecha de nacimiento y
    * lista de calificaciones), utiliza funciones de orden superior para
        * realizar las siguientes operaciones de procesamiento y análisis:
* - Promedio calificaciones: Obtiene una lista de estudiantes por nombre
   * y promedio de sus calificaciones.
* - Mejores estudiantes: Obtiene una lista con el nombre de los estudiantes
   * que tienen calificaciones con un 9 o más de promedio.
* - Nacimiento: Obtiene una lista de estudiantes ordenada desde el más joven.
* - Mayor calificación: Obtiene la calificación más alta de entre todas las
   * de los alumnos.
* - Una calificación debe estar comprendida entre 0 y 10 (admite decimales).
*/

type grades = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface Students {
   name: string,
   bornDate: Date,
   grades: grades[]
}

const Students1: Students[] = [
   {
      name: "Angel",
      bornDate: new Date(2005, 25, 9),
      grades: [10, 10, 8, 9, 9, 10]
   },
   {
      name: "Veronica",
      bornDate: new Date(2005, 25, 9),
      grades: [5, 4, 8, 7, 4, 9]
   },
   {
      name: "Sara",
      bornDate: new Date(2005, 25, 9),
      grades: [10, 4, 8, 9, 9, 9]
   },
   {
      name: "Pedro",
      bornDate: new Date(2005, 25, 9),
      grades: [9, 8, 8, 9, 8, 6]
   }
]

const average = (student: Students): number => {
   const total = student.grades.reduce((prev, curr) => {
      return prev + curr
   })
   const result = total / student.grades.length
   return result
}



/* Average list */
const averageList = Students1.map((student) => ({
   name: student.name,
   bornDate: student.bornDate,
   result: average(student)
}))
console.log(averageList);


/* Better students */
const betterStudents = (student: any) => {
   return student.result >= 9
}

const betterStudentsList = averageList.filter(betterStudents)
console.log(betterStudentsList);

/* Sort by born date */
const DateToNumber = (date: Date) => {
   return date.getTime()
}
const sortByBornDate = averageList.sort((a, b) => DateToNumber(a.bornDate) - DateToNumber(b.bornDate))
console.log(sortByBornDate);

const maxGrade = Math.max(...Students1.map((student) => {
   return Math.max(...student.grades)

}))

console.log(maxGrade);

