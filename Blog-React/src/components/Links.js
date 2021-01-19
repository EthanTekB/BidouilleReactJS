import React from 'react';

export default class Links extends React.Component {
    render() {
        return (
            <div className="Links">
                <h1>Réseaux Sociaux:</h1>
                <div className="Link-List">
                    <div className="FB">
                        <i className="fab fa-facebook-square"></i>
                        <a href="https://fr-fr.facebook.com/ethan.mj.bendavid">facebook.com/ethan.mj.bendavid</a>
                    </div>
                    <div className="Insta">
                        <i className="fab fa-instagram"></i>
                        <a href="https://www.instagram.com/ethanmjb97"> instagram.com/ethanmjb97</a>
                    </div>
                    <div className="Linkd">
                        <i className="fab fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/ethan-bendavid-95a82217b/"> linkedin.com/in/ethan-bendavid</a>
                    </div>
                </div>
            </div>
        );
    }
}
