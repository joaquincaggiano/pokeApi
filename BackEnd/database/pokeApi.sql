-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 27-09-2022 a las 16:45:08
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pokeApi`
--
CREATE DATABASE IF NOT EXISTS `pokeApi` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pokeApi`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokeFavorites`
--

CREATE TABLE `pokeFavorites` (
  `id` int(11) NOT NULL,
  `pokemon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokeFavorites_users`
--

CREATE TABLE `pokeFavorites_users` (
  `id` int(11) NOT NULL,
  `pokemonId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokeTrivia`
--

CREATE TABLE `pokeTrivia` (
  `id` int(11) NOT NULL,
  `question` varchar(200) NOT NULL,
  `answer1` varchar(200) NOT NULL,
  `answer2` varchar(200) NOT NULL,
  `answer3` varchar(200) NOT NULL,
  `answer4` varchar(200) NOT NULL,
  `correctAnswer` varchar(200) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pokeTrivia`
--

INSERT INTO `pokeTrivia` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `correctAnswer`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '¿Qué combinación de tipos tiene Gyarados?', 'Agua y Dragón', 'Agua', 'Agua y volador', 'Dragón y Hielo', 'Agua y volador', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(2, '¿Quién es el creador de Pokémon?', 'Keiji Inafune', 'Gunpei Yokio', 'Satoshi Tajiri', 'Shingeru Miyamoto', 'Satoshi Tajiri', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(3, '¿Cuál es el pokémon no legendario más fuerte de la primera generación según sus estadísticas?', 'Aerodactyl', 'Gyarados', 'Dragonite', 'Articuno', 'Dragonite', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(4, '¿Cuántas medallas son necesarias para ir a la Liga Pokémon?', '6', '8', '7', '10', '8', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(5, 'El Equipo Rocket era…', 'Una organización científica que buscaba crear un nuevo mundo usando a los pokemón', 'Una organización criminal que usaba a los pokemón para toda clase de fines ilícitos', 'Una organización que pretendia ampliar el mar usando un pokemón legendario', 'Una organización extremista que buscaba liberar a los pokemón de los humanos', 'Una organización criminal que usaba a los pokemón para toda clase de fines ilícitos', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(6, 'Gary, el rival de Ash en la serie animada es…', 'El hijo del profesor Oak', 'El nieto del profesor Oak', 'El primo de Ash', 'Un chico de otro pueblo', 'El nieto del profesor Oak', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(7, '¿Qué número de Pokémon es Pikachu?', '50', '100', '25', '1', '25', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(8, '¿Quién es el autor de la música original de Pokémon?', 'Satoru Iwata', 'Kojhi Kondo', 'Satoshi Tajiri', 'Junichi Masuda', 'Junichi Masuda', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(9, '¿Qué líder de gimnasio tenía un Raichu?', 'Blaine', 'Teniente Surge', 'Erika', 'Sabrina', 'Teniente Surge', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(10, 'El último líder de gimnasio en la primera temporada del anime y los tres primeros juegos era…', 'El líder del equipo Rocket', 'El profesor Oak', 'Blaine', 'El padre de Ash', 'El líder del equipo Rocket', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(11, 'En la primera generación de juegos, los pokémon evolucionaban de tres formas distintas, las que eran…', 'Subiendo de nivel, con piedras evolutivas y entrenando en la  Zona Safari', 'Subiendo de nivel, con piedras evolutivas y por amistad', 'Subiendo de nivel, llevando algunos con el profesor Oak y con piedras evolutivas', 'Subiendo de nivel, con piedras evolutivas y por intercambio', 'Subiendo de nivel, con piedras evolutivas y por intercambio', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(12, 'Si quiero derrotar a un Dragonite, ¿qué ataque es la mejor elección?', 'Rayo Hielo', 'Trueno', 'Lanzallamas', 'Rayo Solar', 'Rayo Hielo', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(13, 'Sin contar a Pikachu, ¿cuántos iniciales hay en todas las regiones de Pokémon?', '5', '3', '2', '4', '3', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(14, 'Venusaur es un pokémon de dos tipos, uno es planta. ¿Cuál es el otro tipo?', 'Normal', 'Tierra', 'Veneno', 'Agua', 'Veneno', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(15, '¿Cuál fue el primer Pokemon de Ash?', 'Charmander', 'Pikachu', 'Squirtle', 'Meowth', 'Pikachu', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(16, '¿Quién le dio a Ash su primer Pokemon?', 'El equipo Rocket', 'Su mamá', 'Profesor Oak', 'Gary', 'Profesor Oak', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(17, '¿Cuál fue el primer Pokemon que Ash atrapo?', 'Onix', 'Bulbasur', 'Gyarados', 'Caterpie', 'Caterpie', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(18, '¿Cuál es la diferencia entre un Pikachu femenino y uno masculino?', 'La forma de la cola', 'El color', 'La forma de las orejas', 'La forma de los ojos', 'La forma de la cola', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(19, '¿Quién es el número 1 en la Pokedex?', 'Charmander', 'Bulbasur', 'Muk', 'Staryu', 'Bulbasur', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL),
(20, '¿En qué evoluciona Squirtle?', 'Nidorina y Nidoqueen', 'Charmeleon y Charizard', 'Ivysaur y Venasur', 'Wartortle y Blastoise', 'Wartortle y Blastoise', NULL, '2022-09-23 18:08:53', '2022-09-23', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `file` varchar(255) NOT NULL DEFAULT 'default-img.jpg',
  `deletedAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userName`, `email`, `password`, `file`, `deletedAt`, `updatedAt`, `createdAt`) VALUES
(5, 'ivysaur', 'ivysaur@pokeapi.com', '$2a$10$oX6WuETmDRqAOTyf.3viGun4TWQXvxhqGQ.360vF6tuCsdTFY46sK', 'default_image.jpeg', NULL, '2022-09-08', '2022-09-08 23:44:20'),
(6, 'Chikorita', 'chikorita@pokeapi.com', '$2a$10$fULkkGa2/K75l.YLSIrHrOIkTvtXCumRdGgRosExvAQUTtgGUnwSu', 'default_image.jpeg', NULL, '2022-09-09', '2022-09-09 17:56:42'),
(7, 'Squirtle', 'squirtle@poke.com', '$2a$10$uO9VJ7Dw8wnQ2JMRhb1amuI5wcHT.8L3i4/HgJv6xbwIaPMjfBpgS', 'default_image.jpeg', NULL, '2022-09-16', '2022-09-16 15:18:27'),
(8, 'Totito', 'totodile@poke.com', '$2a$10$MTZzQ7cEBXBe1ElSA/GL5uZO0F0M7CFv28LCZr6R25m1DgIvCUlZ.', '1663355819883_img.jpeg', NULL, '2022-09-20', '2022-09-16 19:17:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pokeFavorites`
--
ALTER TABLE `pokeFavorites`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pokeFavorites_users`
--
ALTER TABLE `pokeFavorites_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pokemonId` (`pokemonId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `pokeTrivia`
--
ALTER TABLE `pokeTrivia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pokeFavorites_users`
--
ALTER TABLE `pokeFavorites_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pokeTrivia`
--
ALTER TABLE `pokeTrivia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pokeFavorites_users`
--
ALTER TABLE `pokeFavorites_users`
  ADD CONSTRAINT `pokefavorites_users_ibfk_1` FOREIGN KEY (`pokemonId`) REFERENCES `pokeFavorites` (`id`),
  ADD CONSTRAINT `pokefavorites_users_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
