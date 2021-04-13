-- MySQL Workbench Synchronization
-- Generated: 2021-04-06 12:23
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Gustavo

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `biblioteca`.`obras` (
  `idObra` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `editora` VARCHAR(45) NULL DEFAULT NULL,
  `foto` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idObra`),
  UNIQUE INDEX `id_UNIQUE` (`idObra` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `biblioteca`.`autores` (
  `idautores` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idautores`),
  UNIQUE INDEX `idautores_UNIQUE` (`idautores` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `biblioteca`.`autoresObras` (
  `idAutores` INT(11) NOT NULL,
  `idObras` INT(11) NOT NULL,
  PRIMARY KEY (`idAutores`, `idObras`),
  INDEX `fk_autores_has_obras_obras1_idx` (`idObras` ASC) ,
  INDEX `fk_autores_has_obras_autores_idx` (`idAutores` ASC) ,
  CONSTRAINT `fk_autores_has_obras_autores`
    FOREIGN KEY (`idAutores`)
    REFERENCES `biblioteca`.`autores` (`idautores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autores_has_obras_obras1`
    FOREIGN KEY (`idObras`)
    REFERENCES `biblioteca`.`obras` (`idObra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `biblioteca`.`autoresObras` (
  `idAutores` INT(11) NOT NULL,
  `idObras` INT(11) NOT NULL,
  PRIMARY KEY (`idAutores`, `idObras`),
  INDEX `fk_autores_has_obras_obras1_idx` (`idObras` ASC) ,
  INDEX `fk_autores_has_obras_autores_idx` (`idAutores` ASC) ,
  CONSTRAINT `fk_autores_has_obras_autores`
    FOREIGN KEY (`idAutores`)
    REFERENCES `biblioteca`.`autores` (`idautores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autores_has_obras_obras1`
    FOREIGN KEY (`idObras`)
    REFERENCES `biblioteca`.`obras` (`idObra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
