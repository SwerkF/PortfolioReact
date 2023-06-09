import { useEffect, useState } from 'react';
import SquareOne from './SquareOne';

const Projets = () => {
    
    //any array
    const [projets, setProjets] = useState<any[]>([])
    
    let colors = [
        "prim",
        "sec",
        "white",
    ]

    useEffect(() => {
       fetch('http://localhost:3000/api/projets')
         .then(res => res.json())
            .then(data => {
                setProjets(data)
            })
    })

    setTimeout(() => {
        console.log(projets)
    }, 3000)

    return (
        <div className="section-projets" id="projets">
            <div className="container text-center">
                <div className="row">
                    <h2 className="f-syne-black title-projets pt-12 z-2" data-aos="fade-up">projets 💻</h2>
                    <div className="row row-no-mr no-padding-row-left-right justify-content-around">
                        {projets.map((projet, index) => {
                            if(projet.perso == 0) {
                                return (
                                    <SquareOne key={index} lang={projet.lang} title={projet.title} link={projet.link} description={projet.description} color={colors[index % colors.length]} />
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="row">
                    <h2 className="f-syne-black title-projets pt-12 z-2" data-aos="fade-up">perso.</h2>
                    <div className="row row-no-mr no-padding-row-left-right justify-content-around">
                        {projets.map((projet, index) => {
                            if(projet.perso == 1) {
                                return (
                                    <SquareOne key={index} lang={projet.lang} title={projet.title} link={projet.link} description={projet.description} 
                                    //random 
                                    color={colors[index % colors.length]}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projets;