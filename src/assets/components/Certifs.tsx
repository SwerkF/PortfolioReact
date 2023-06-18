import { useState, useEffect } from "react";
import SquareCertif from "./SquareCertif";

const Certifs = () => {

    const [certifs, setCertifs] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/certifs')
            .then(response => response.json())
            .then(data => setCertifs(data));
    }, [])
    return (
        <div className="section-certifs" id="certif"> 
      <div className="container text-center">
        <div className="row custom-row">
          <h2 className="f-syne-black title-certifs pt-12 z-2">certif. ✅</h2>
          <div className="row align-items-center justify-content-center">
            {certifs.map((certif, index) => (
                <SquareCertif key={index} title={certif.title} description={certif.description} img={certif.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Certifs;