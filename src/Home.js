import React, { useState } from 'react';
import "./Home.css";

function Home() {
  const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Hindi" },
    { id: 3, name: "Marathi" },
    { id: 4, name: "Tamil" },
    { id: 5, name: "Telugu" },
    { id: 6, name: "Kannada" },
    { id: 7, name: "Urdu" }
  ];

  const [selectedLangs, setSelectedLangs] = useState([]);

  // Function to handle language selection
  const toggleLanguage = (lang) => {
    if (selectedLangs.some(selectedLang => selectedLang.id === lang.id)) {
      // If the language is already selected, remove it
      setSelectedLangs(selectedLangs.filter(selectedLang => selectedLang.id !== lang.id));
    } else {
      // If the language is not selected, add it
      setSelectedLangs([...selectedLangs, lang]);
    }
  };

  return (
    <>
      <div className='main_container'>
        <div className='selection'>
          Select Language:
          {languages.map((lang) => (
            <div
              onClick={() => toggleLanguage(lang)}
              className={selectedLangs.some(selectedLang => selectedLang.id === lang.id) ? "langselected" : "lang"}
              key={lang.id}
            >
              {lang.name}
            </div>
          ))}
        </div>
        <div className='show'>
          Selected Languages:
          <br />
          {selectedLangs.length > 0 ? (
            <div className='selected-languages'>
              {selectedLangs.map(lang => (
                <div className='langselected' key={lang.id}>
                  {lang.name}
                </div>
              ))}
            </div>
          ) : (
            <div>No languages selected  yet.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
