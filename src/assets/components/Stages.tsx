import { useEffect, useState } from "react";
import SquareLarge from "./SquareLarge";

const Stages = () => {

    const [stages, setStages] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/stages')
            .then(response => response.json())
            .then(data => setStages(data));
    }, [])
    

    return (
        <div className="section-stages pt-12" id="stages">
            <div className="container text-center">
                <h2 className="f-syne-black title-presentation">Stages 📌</h2> 
                <div className="col">
                   {stages.map((stage, index) => (
                          <SquareLarge key={index} title={stage.title} description={stage.description} dateDebut={stage.datedebut} dateFin={stage.datefin} file={stage.doc} />
                   ))}
                </div>
            </div>
        </div>
    );
};

export default Stages;