import React from 'react';

const AboutMe = () => {
    return (
        <div className="PersonalInfos">
            <div className="InfosTitle">
                <h1>Informations Perso:</h1>
            </div>
            <div className="Infos">
                <h2> Infos: </h2>
                <br /><br />
                <div className="rows">
                    <div className="LeftRow">
                        <a className="InfosContent">
                            Age:
                            <br /> <br/>
                            Date de naissance:
                            <br /> <br />
                            Promotion Epitech:
                            <br /> <br />
                            Niveau d'étude
                            <br /> <br />
                            Baccalauréat:
                            <br /> <br />
                            Taille: 
                            <br /> <br />
                            Ville:
                            <br /> <br />
                            Adresse:
                            <br /> <br />
                            Téléphone:
                            <br /> <br />
                            Mail:
                            <br /> <br />
                            Passion:
                        </a>
                    </div>
                    <div className="RightRow">
                        <a className="InfosContent">
                            23 ans
                            <br /> <br/>
                            25/07/1997
                            <br /> <br />
                            2023
                            <br /> <br />
                            3ème annnée
                            <br /> <br />
                            ES
                            <br /> <br />
                            1,80 m
                            <br /> <br />
                            Montreuil (93100)
                            <br /> <br />
                            41 Rue de Romainville
                            <br /> <br />
                            0767922847
                            <br /> <br />
                            ethan1.bendavid@epitech.eu
                            <br /> <br />
                            BasketBall, Informatique
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;