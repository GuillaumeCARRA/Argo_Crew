import React, {useState, useEffect} from 'react';
import db from '../../firebase';

import './main.css';

function Main() {

    const [crews, setCrew] = useState([]);
    const [input, setInput] = useState('');

    //when the app loads, we need to listen to the db 
    //and fetch new member as they get added 
    useEffect(() => {
        //this code here work when the app loads
        //onSnapshot each time the contents change, another call updates the document snapshot
        //docs.data return all my data in an object
        //.crew it's our field in our database from firebase
        db.collection('crews').onSnapshot(snapshot => {
         setCrew(snapshot.docs.map(doc => doc.data().crew));
       })
    }, [])

    const addCrewMember = (event) => {
        event.preventDefault();
        db.collection('crews').add({
            crew: input
        });
        setCrew([...crews, input]);
        setInput('');
    }

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
                    value={input}
                    onChange={(event) =>{
                        setInput(event.target.value);
                    }}
                />
                <button 
                onClick={addCrewMember}
                type="submit"
                >
                    Envoyer
                </button>
            </form>
            
            {/*Member list*/}
            <h2>Membres de l'équipage</h2>
                <section className="member-list">
                    {crews.map(crew =>(
                        <div key={crew}>
                            <div className="member-item">{crew}</div>
                        </div>
                    ))}
                </section>
        </main>
    )
}

export default Main
