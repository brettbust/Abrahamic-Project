import React, { useState } from 'react';

function LanguageMenu() {
  // Crea un estado para controlar si el menú está desplegado o no
  const [isOpen, setIsOpen] = useState(false);

  // Define una lista de Languages
  const languages = ['English', 'Korean', 'Chinese'];

  // Define un manejador de eventos para cambiar el Language
  const handleClick = language => {
    // Aquí puedes colocar el código necesario para cambiar el Language
  };

  // Renderiza un botón o un enlace para desplegar el menú
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Languages</button>
      {/* Renderiza un elemento que contenga la lista de Languages, sólo si el menú está desplegado */}
      {isOpen && (
        <ul>
          {languages.map(language => (
            <li key={language} onClick={() => handleClick(language)}>{language}</li>
            //video asisstant
  
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageMenu;
