import React, { useState } from 'react';
import { Browser, Mug, Ghost, Cat, Planet } from 'react-kawaii';
import { CSSTransition } from 'react-transition-group';
import './MealSuggestion.css';

const MealSuggestion = () => {
  const [suggestion, setSuggestion] = useState('🍔');
  const [character, setCharacter] = useState(<Browser size={200} mood="excited" color="#E6E6E6" showBlush={true} animationLoop={true} animationMode="swing" />);

  const changeSuggestion = () => {
    const suggestions = ['🍕', '🥗', '🍣', '🌮', '🍜'];
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    setSuggestion(suggestions[randomIndex]);

    const characters = [
      <Browser size={200} mood="excited" color="#E6E6E6" showBlush={true} animationLoop={true} animationMode="swing" />,
      <Mug size={200} mood="excited" color="#E6E6E6" showBlush={true} animationLoop={true} animationMode="swing" />,
      <Ghost size={200} mood="excited" color="#E6E6E6" showBlush={true} animationLoop={true} animationMode="swing" />,
      <Cat size={200} mood="excited" color="#E6E6E6" showBlush={true} animationLoop={true} animationMode="swing" />,
      <Planet size={200} mood="excited" color="#E6E6E6" showBlush={true} animationLoop={true} animationMode="swing" />,
    ];
    setCharacter(characters[randomIndex]);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
      <div className="flex flex-col items-center">
        <CSSTransition in={true} timeout={500} classNames="character" unmountOnExit>
          {character}
        </CSSTransition>
        <div className="relative mt-8">
          <div className="absolute top-0 right-0 -mr-8 -mt-8">
            <CSSTransition in={true} timeout={500} classNames="suggestion" unmountOnExit>
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-4xl font-bold text-pink-600">{suggestion}</span>
              </div>
            </CSSTransition>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 text-lg">
              Hey there! How about a delicious {getMealName(suggestion)} for your next meal? It's a fantastic choice that's sure to delight your taste buds!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
              onClick={changeSuggestion}
            >
              Give me another suggestion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const getMealName = (suggestion) => {
  switch (suggestion) {
    case '🍕':
      return 'pizza';
    case '🥗':
      return 'salad';
    case '🍣':
      return 'sushi';
    case '🌮':
      return 'taco';
    case '🍜':
      return 'noodle dish';
    default:
      return 'burger';
  }
};

export default MealSuggestion;