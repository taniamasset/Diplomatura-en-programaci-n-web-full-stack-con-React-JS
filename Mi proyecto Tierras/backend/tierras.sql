-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-09-2022 a las 20:36:37
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tierras`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'El futuro de Ethereum, según los expertos que anticipan \"el ciclo más grande de la historia\" de las criptomonedas', 'El evento que se realiza en la Ciudad de Buenos Aires trae novedades importantes sobre el ecosistema Ethereum imperdibles', 'La Ciudad de Buenos Aires se convirtió en sede de Ethereum Latam desde el jueves 11 de agosto, con una conferencia gratuita de tres días dedicada a reunir por primera vez en la Argentina a la comunidad de Ethereum a nivel global. En esta jornada emerge con fuerza el cambio de sistema de validación o Merge, que llegará en septiembre, como el mayor motivo de adopción de la moneda virtual en estos últimos días que podría estar acompañado por un posible rebote de precios.'),
(2, 'Cedears: tecnológicas treparon hasta 5% ante un enfriamiento de la inflación en EEUU', 'Los Cedears cerraron con alzas generalizadas ante la buena performance de los principales índices de Wall Street que finalizaron una cuarta semana consecutiva de ganancias ante la creciente evidencia de que la inflación podría haber tocado techo.', 'Los Certificados de Depósito Argentino cerraron con subas generalizadas ante el buen desempeño de los principales índices en Wall Street ya que los inversores volvieron a tener apetito por el riesgo ante una merma de la inflación en Estados Unidos.\r\nAdemás, esta jornada impulsó al alza a los Cedears más operados, la suba del dólar CCL Cedear que creció 0,4% y se ubicó en los $286,11.\r\nAsí este viernes se destacaron sobretodo las alzas de empresas tecnológicas y criptográficas. Coinbase encabezó las subas con el 7,7%. Tesla la seguió con el 4,6%. También se destacaron: Nvidia (+4,2%), Google (+2,8%) y Apple (+2,2%).');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
CREATE TABLE IF NOT EXISTS `proyectos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proyecto` varchar(250) NOT NULL,
  `descripcion` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `proyecto`, `descripcion`, `img_id`) VALUES
(1, 'Loteo Pueblo .....', 'El loteo consta de 50 lotes de ....', NULL),
(2, 'Loteo Pueblo .....', 'El loteo consta de 50 lotes de ....', 'sxja0za7motbjdw8s7hd'),
(7, 'fg', 'dfhd', NULL),
(9, '<x', 'sfa', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Tania', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
