import {useEffect, useState} from 'react';
import SquareVeilles from './SquareVeilles';

const Veilles = () => {

    const [veilles, setVeilles] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/veilles')
        .then(res => res.json())
        .then(data => setVeilles(data))
    }, [])
    
    return (
        <div className="section-veilles" id="veilles">
            <div className="container text-center">
                <div className="row">
                    <h2 className="f-syne-black title-presentation p-12 z-2">veilles 🗒️</h2>
                    <div className="col-c w-100">
                        <div className="col square-s-big"  data-aos="zoom-in-up" data-aos-delay="300">
                            <h3 className="f-syne-black title-s">L'IA chez Nvidia</h3>
                            <br/>
                            <p className="f-syne veilles-pres-text">
                                    J'ai choisi le thème de l'intelligence artificielle car c'est en relation avec nos cours en C# et Mathématiques
                                    car nous y ferons des algorithmes. Je me suis basé sur NVIDIA.
                                    <br/>
                                    <br/>
                                    NVIDIA est une entreprise américaine spécialisée dans la fabrication de cartes graphiques pour PC ou de processeurs graphiques pour les consoles de jeux vidéos.
                                    Elle est également connue pour ses recherches en intelligence artificielle et les intelligences artificielles proposées par celle-ci
                                    sont surprenante. Pour exemple, on peut prendre Gaugan qui permet de transformer un simple dessin en photo réaliste.
                                    <br/>
                                    <br/>
                                    Vous retrouvez juste en dessous les différentes veilles que j'ai pu réaliser à porpos d'NVIDIA.
                            </p>
                        </div>
                        <div className="row row-no-mr no-padding-row-left-right">
                            {veilles.map((veille, index) => (
                                <SquareVeilles key={index} title={veille.title} description={veille.description} file={veille.doc}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Veilles;