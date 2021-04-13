use biblioteca;
#drop database biblioteca;
show tables;
describe autores;

insert into autor (nome) values ('Escritor Crepusculo');
insert into obras (titulo, editora) values ('Romeu tem que morrer', 'Editora qualquer');
insert into obras (titulo, editora) values ('Crepusculo', 'Teste');
insert into autorObra (idObra, idAutor) values (2, 3);



alter table autores modify column idAutores INT auto_increment;

select * from autor;
SELECT * FROM obras;

select * from obras inner join autorObra on obras.idObra = autorObra.idObra;



select titulo, editora, foto, nome from obras inner join autorObra
 on obras.idObra = autorObra.idObra
 inner join autor on autorObra.idAutor = autor.idAutor 
 group by titulo;