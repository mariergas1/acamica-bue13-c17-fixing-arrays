console.log('Ejercicio 4: ');

var misLibros = ['Harry Potter', 'Game of Thrones', 'Sherlock', 'Dracula'];

console.log('No recuerdo en que posicion de mi biblioteca deje el libro de Sherlock. ' + misLibros);

var posicion = misLibros.indexOf('Sherlock');

console.log('Estaba en la posicion: ' + posicion)

console.log('Porque en verdad solo era la tapa, adentro esta el Libro de la Selva.');

misLibros[2]=('Libro de la Selva')

console.log('Me regalaron para navidad el libro de La divina comedia. La voy a agregar al fondo de mi biblioteca');

misLibros.push('La Divina Comedia')

console.log('Ahora si, finalmente mi biblioteca quedo completa: ' + misLibros);
