import React from 'react';

import './main.css';

function Main() {
    return (
        <main>
  
            {/*New member form*/}
            <h2>Ajouter un(e) Argonaute</h2>
            <form className="new-member-form">
                <label for="name">
                    Nom de l'Argonaute
                </label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Charalampos" 
                />
                <button type="submit">
                    Envoyer
                </button>
            </form>
            
            {/*Member list*/}
            <h2>Membres de l'équipage</h2>
            <section className="member-list">
                <div className="member-item">Eleftheria</div>
                <div className="member-item">Gennadios</div>
                <div className="member-item">Lysimachos</div>
                <div className="member-item">Lysimachos</div>
                <div className="member-item">Lysimachos</div>
                <div className="member-item">Lysimachos</div>
                <div className="member-item">Lysimachos</div>
                
            </section>
        </main>
    )
}

export default Main
