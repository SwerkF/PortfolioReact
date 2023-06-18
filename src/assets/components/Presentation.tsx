import { useEffect, useState } from "react";

const Presentation = () => {

    const [lang, setLang] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/lang')
            .then(response => response.json())
            .then(data => setLang(data));
    }, [])

    const downloadCV = () => {
        window.open(`http://localhost:3000/api/docs/skweres_cv.pdf`);
    }

    return (
        <div className="section-presentation" id="about">
            <h2 className="f-syne-black title-presentation pt-12 z-2 text-center" data-aos="fade-up">about me 🐻</h2>
            <div className="container d-flex flex-row pt-4 justify-content-around">
                <div className="col-md-6 ml-3 mr-3 mt-3">
                    <div className="row text-center">
                        <h3 className="f-syne-black subtitle-presentation z-2" data-aos="fade-up">Presentation 🤵</h3>
                        <div className="text-presentation z-2" data-aos="fade-up" data-aos-delay="300">
                            <p className="f-syne ">Je m'appelle Oliwer, j'ai 20 ans et j'habite à Evreux. Je suis une personne passionnée par l'informatique mais surtout par le web design. Je voudrais faire de cette activité un métier plus tard.</p>
                            <p className="f-syne">Si je devais citer quelques-unes de mes passions ce serait sûrement les jeux vidéos, la musique, les sorties entre amis et design. L'année prochaine, j'espère pouvoir poursuivre mes études à L'IPSSI.</p>
                            <p className="f-syne">Je travaille constament sur un projet personnel chez moi afin d'apprendre toujours plus.Acutellement, j'essaie d'apprendre d'autres langages web afin de me spécialiser dans l'un d'entre eux, comme React.</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <button className="btn button z-2" data-aos="fade-up" data-aos-delay="600" onClick={() => downloadCV()}>Trop long? Cliquez ici pour télécharger mon CV.</button>
                    </div>
                </div>
                <div className="col-md-6 ml-3 mr-3 mt-3">
                <div className="row text-center justify-content-center">
                        <h3 className="f-syne-black subtitle-presentation z-2" data-aos="fade-up">Compétences 💫</h3>
                        <div className="row row-no-mr no-padding-row-left-right justify-content-center" style={{maxWidth: '800px'}}>
                            {lang.map((langage, index) => (
                                //play fade up animation on load
                                <div key={index} className="col" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <div className="lang-box m-4 d-flex align-items-center justify-content-center" key={index}>
                                        <i className={'devicon-'+langage.title+'-plain lang'}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;