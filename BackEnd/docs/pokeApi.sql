-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2022 a las 00:04:11
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pokeapi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokefavorites`
--

CREATE TABLE `pokefavorites` (
  `id` int(11) NOT NULL,
  `pokemon` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pokefavorites`
--

INSERT INTO `pokefavorites` (`id`, `pokemon`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '3', '2022-09-27 18:30:36', '2022-09-27', NULL),
(2, '4', '2022-09-27 18:33:27', '2022-09-27', NULL),
(3, '4', '2022-09-27 20:57:44', '2022-09-27', NULL),
(4, '4', '2022-09-27 20:58:24', '2022-09-27', NULL),
(5, '1', '2022-09-27 21:02:43', '2022-09-27', NULL),
(6, '1', '2022-09-27 21:03:33', '2022-09-27', NULL),
(7, '6', '2022-09-27 21:04:57', '2022-09-27', NULL),
(8, '6', '2022-09-27 21:09:07', '2022-09-27', NULL),
(9, '14', '2022-09-27 21:12:39', '2022-09-27', NULL),
(10, '17', '2022-09-28 21:51:58', '2022-09-28', NULL),
(11, '17', '2022-09-28 21:55:09', '2022-09-28', NULL),
(12, '13', '2022-09-28 21:55:28', '2022-09-28', NULL),
(13, '20', '2022-09-28 21:58:44', '2022-09-28', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokefavorites_users`
--

CREATE TABLE `pokefavorites_users` (
  `id` int(11) NOT NULL,
  `pokemonId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pokefavorites_users`
--

INSERT INTO `pokefavorites_users` (`id`, `pokemonId`, `userId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 13, 9, '2022-09-28 21:58:44', '2022-09-28', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `poketrivia`
--

CREATE TABLE `poketrivia` (
  `id` int(11) NOT NULL,
  `question` varchar(200) NOT NULL,
  `answer1` varchar(200) NOT NULL,
  `answer2` varchar(200) NOT NULL,
  `answer3` varchar(200) NOT NULL,
  `answer4` varchar(200) NOT NULL,
  `correctAnswer` varchar(200) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `poketrivia`
--

INSERT INTO `poketrivia` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `correctAnswer`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
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
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userName`, `email`, `password`, `file`, `deletedAt`, `updatedAt`, `createdAt`) VALUES
(5, 'ivysaur', 'ivysaur@pokeapi.com', '$2a$10$oX6WuETmDRqAOTyf.3viGun4TWQXvxhqGQ.360vF6tuCsdTFY46sK', 'default_image.jpeg', NULL, '2022-09-08', '2022-09-08 23:44:20'),
(6, 'Chikorita', 'chikorita@pokeapi.com', '$2a$10$fULkkGa2/K75l.YLSIrHrOIkTvtXCumRdGgRosExvAQUTtgGUnwSu', 'default_image.jpeg', NULL, '2022-09-09', '2022-09-09 17:56:42'),
(7, 'Squirtle', 'squirtle@poke.com', '$2a$10$uO9VJ7Dw8wnQ2JMRhb1amuI5wcHT.8L3i4/HgJv6xbwIaPMjfBpgS', 'default_image.jpeg', NULL, '2022-09-16', '2022-09-16 15:18:27'),
(8, 'Totito', 'totodile@poke.com', '$2a$10$MTZzQ7cEBXBe1ElSA/GL5uZO0F0M7CFv28LCZr6R25m1DgIvCUlZ.', '1663355819883_img.jpeg', NULL, '2022-09-20', '2022-09-16 19:17:00'),
(9, 'charmander', 'charmander@gmail.com', '$2a$10$ot3OMFCm48I.vcUYaOT8Q.zP86ZYjC16yAcKxTBtEDz31wfNVMQ6O', '1664298523962_img.jpg', NULL, '2022-09-27', '2022-09-27 17:08:44');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pokefavorites`
--
ALTER TABLE `pokefavorites`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pokefavorites_users`
--
ALTER TABLE `pokefavorites_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pokemonId` (`pokemonId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `poketrivia`
--
ALTER TABLE `poketrivia`
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
-- AUTO_INCREMENT de la tabla `pokefavorites`
--
ALTER TABLE `pokefavorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `pokefavorites_users`
--
ALTER TABLE `pokefavorites_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `poketrivia`
--
ALTER TABLE `poketrivia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pokefavorites_users`
--
ALTER TABLE `pokefavorites_users`
  ADD CONSTRAINT `pokefavorites_users_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `pokefavorites_users_ibfk_3` FOREIGN KEY (`pokemonId`) REFERENCES `pokefavorites` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
