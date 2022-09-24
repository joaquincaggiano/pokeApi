import React, { useEffect, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import axios from "axios";

const ModalQuestion = () => {
  // const questionsPokemon = [
  //     {
  //         id: 1,
  //         question: "¿Qué combinación de tipos tiene Gyarados?",
  //         answer1: "Agua y Dragón",
  //         answer2: "Agua",
  //         answer3: "Agua y volador",
  //         answer4: "Dragón y Hielo",
  //         correctAnswer: "Agua y volador",
  //     },
  //     {
  //         id: 2,
  //         question: "¿Quién es el creador de Pokémon?",
  //         answer1: "Keiji Inafune",
  //         answer2: "Gunpei Yokio",
  //         answer3: "Satoshi Tajiri",
  //         answer4: "Shingeru Miyamoto",
  //         correctAnswer: "Satoshi Tajiri",
  //     },
  //     {
  //         id: 3,
  //         question: "¿Cuál es el pokémon no legendario más fuerte de la primera generación según sus estadísticas?",
  //         answer1: "Aerodactyl",
  //         answer2: "Gyarados",
  //         answer3: "Dragonite",
  //         answer4: "Articuno",
  //         correctAnswer: "Dragonite",
  //     },
  //     {
  //         id: 4,
  //         question: "¿Cuántas medallas son necesarias para ir a la Liga Pokémon?",
  //         answer1: "6",
  //         answer2: "8",
  //         answer3: "7",
  //         answer4: "10",
  //         correctAnswer: "8",
  //     },
  //     {
  //         id: 5,
  //         question: "El Equipo Rocket era…",
  //         answer1: "Una organización científica que buscaba crear un nuevo mundo usando a los pokemón",
  //         answer2: "Una organización criminal que usaba a los pokemón para toda clase de fines ilícitos",
  //         answer3: "Una organización que pretendia ampliar el mar usando un pokemón legendario",
  //         answer4: "Una organización extremista que buscaba liberar a los pokemón de los humanos",
  //         correctAnswer: "Una organización criminal que usaba a los pokemón para toda clase de fines ilícitos",
  //     },
  //     {
  //         id: 6,
  //         question: "Gary, el rival de Ash en la serie animada es…",
  //         answer1: "El hijo del profesor Oak",
  //         answer2: "El nieto del profesor Oak",
  //         answer3: "El primo de Ash",
  //         answer4: "Un chico de otro pueblo",
  //         correctAnswer: "El nieto del profesor Oak",
  //     },
  //     {
  //         id: 7,
  //         question: "¿Qué número de Pokémon es Pikachu?",
  //         answer1: "50",
  //         answer2: "100",
  //         answer3: "25",
  //         answer4: "1",
  //         correctAnswer: "25",
  //     },
  //     {
  //         id: 8,
  //         question: "¿Quién es el autor de la música original de Pokémon?",
  //         answer1: "Satoru Iwata",
  //         answer2: "Kojhi Kondo",
  //         answer3: "Satoshi Tajiri",
  //         answer4: "Junichi Masuda",
  //         correctAnswer: "Junichi Masuda",
  //     },
  //     {
  //         id: 9,
  //         question: "¿Qué líder de gimnasio tenía un Raichu?",
  //         answer1: "Blaine",
  //         answer2: "Teniente Surge",
  //         answer3: "Erika",
  //         answer4: "Sabrina",
  //         correctAnswer: "Teniente Surge",
  //     },
  //     {
  //         id: 10,
  //         question: "El último líder de gimnasio en la primera temporada del anime y los tres primeros juegos era…",
  //         answer1: "El líder del equipo Rocket",
  //         answer2: "El profesor Oak",
  //         answer3: "Blaine",
  //         answer4: "El padre de Ash",
  //         correctAnswer: "El líder del equipo Rocket",
  //     },
  //     {
  //         id: 11,
  //         question: "En la primera generación de juegos, los pokémon evolucionaban de tres formas distintas, las que eran…",
  //         answer1: "Subiendo de nivel, con piedras evolutivas y entrenando en la  Zona Safari",
  //         answer2: "Subiendo de nivel, con piedras evolutivas y por amistad",
  //         answer3: "Subiendo de nivel, llevando algunos con el profesor Oak y con piedras evolutivas",
  //         answer4: "Subiendo de nivel, con piedras evolutivas y por intercambio",
  //         correctAnswer: "Subiendo de nivel, con piedras evolutivas y por intercambio",
  //     },
  //     {
  //         id: 12,
  //         question: "Si quiero derrotar a un Dragonite, ¿qué ataque es la mejor elección?",
  //         answer1: "Rayo Hielo",
  //         answer2: "Trueno",
  //         answer3: "Lanzallamas",
  //         answer4: "Rayo Solar",
  //         correctAnswer: "Rayo Hielo",
  //     },
  //     {
  //         id: 13,
  //         question: "Sin contar a Pikachu, ¿cuántos iniciales hay en todas las regiones de Pokémon?",
  //         answer1: "5",
  //         answer2: "3",
  //         answer3: "2",
  //         answer4: "4",
  //         correctAnswer: "3",
  //     },
  //     {
  //         id: 14,
  //         question: "Venusaur es un pokémon de dos tipos, uno es planta. ¿Cuál es el otro tipo?",
  //         answer1: "Normal",
  //         answer2: "Tierra",
  //         answer3: "Veneno",
  //         answer4: "Agua",
  //         correctAnswer: "Veneno",
  //     },
  //     {
  //         id: 15,
  //         question: "¿Cuál fue el primer Pokemon de Ash?",
  //         answer1: "Charmander",
  //         answer2: "Pikachu",
  //         answer3: "Squirtle",
  //         answer4: "Meowth",
  //         correctAnswer: "Pikachu",
  //     },
  //     {
  //         id: 16,
  //         question: "¿Quién le dio a Ash su primer Pokemon?",
  //         answer1: "El equipo Rocket",
  //         answer2: "Su mamá",
  //         answer3: "Profesor Oak",
  //         answer4: "Gary",
  //         correctAnswer: "Profesor Oak",
  //     },
  //     {
  //         id: 17,
  //         question: "¿Cuál fue el primer Pokemon que Ash atrapo?",
  //         answer1: "Onix",
  //         answer2: "Bulbasur",
  //         answer3: "Gyarados",
  //         answer4: "Caterpie",
  //         correctAnswer: "Caterpie",
  //     },
  //     {
  //         id: 18,
  //         question: "¿Cuál es la diferencia entre un Pikachu femenino y uno masculino?",
  //         answer1: "La forma de la cola",
  //         answer2: "El color",
  //         answer3: "La forma de las orejas",
  //         answer4: "La forma de los ojos",
  //         correctAnswer: "La forma de la cola",
  //     },
  //     {
  //         id: 19,
  //         question: "¿Quién es el número 1 en la Pokedex?",
  //         answer1: "Charmander",
  //         answer2: "Bulbasur",
  //         answer3: "Muk",
  //         answer4: "Staryu",
  //         correctAnswer: "Bulbasur",
  //     },
  //     {
  //         id: 20,
  //         question: "¿En qué evoluciona Squirtle?",
  //         answer1: "Nidorina y Nidoqueen",
  //         answer2: "Charmeleon y Charizard",
  //         answer3: "Ivysaur y Venasur",
  //         answer4: "Wartortle y Blastoise",
  //         correctAnswer: "Wartortle y Blastoise",
  //     },
  // ]
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3030/triviaApi/random")
      .then((response) => {
        if (response.status === 200) {
          setQuestion(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  function handleOnClick() {
    if (answer === question.correctAnswer) {
      console.log("CORRECT!!!");
    } else {
      console.log("INCORRECT");
    }
  }

  return (
    <div className="text-white">
      <ul>
        <li>{question?.question}</li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer1}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer1}</label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer2}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer2}</label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer3}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer3}</label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer4}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer4}</label>
        </li>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Submit Answer
        </button>
      </ul>
    </div>
  );
};

export default ModalQuestion;
