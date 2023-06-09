const Presentation = () => {

    const downloadCV = () => {
        alert("Téléchargement du CV en cours...")
    }

    return (
        <div className="section-presentation" id="about">
            <div className="container">
                <div className="row text-center">
                    <h2 className="f-syne-black title-presentation pt-12 z-2" data-aos="fade-up">about me 🐻</h2>
                    <div className="text-presentation z-2" data-aos="fade-up" data-aos-delay="300">
                        <p className="f-syne ">Je m'appelle Oliwer, j'ai 20 ans et j'habite à Evreux. Je suis une personne passionnée par l'informatique mais surtout par le web design. Je voudrais faire de cette activité un métier plus tard.</p>
                        <p className="f-syne">Si je devais citer quelques-unes de mes passions ce serait sûrement les jeux vidéos, la musique, les sorties entre amis et design. L'année prochaine, j'espère pouvoir poursuivre mes études à L'IPSSI.</p>
                        <p className="f-syne">Je travaille constament sur un projet personnel chez moi afin d'apprendre toujours plus.Acutellement, j'essaie d'apprendre d'autres langages web afin de me spécialiser dans l'un d'entre eux, comme React.</p>
                    </div>
                </div>
                <div className="col text-center ">
                    <button className="btn button z-2" data-aos="fade-up" data-aos-delay="600" onClick={() => downloadCV}>Trop long? Cliquez ici pour télécharger mon CV.</button>
                </div>
            </div>
            <img src="src/assets/imgs/circle3.png" alt="circle3" className="circle-pres-rand-1" data-aos="fade-up"/>
            <img src="src/assets/imgs/circle3.png" alt="circle3" className="circle-pres-rand-2" data-aos="fade-left"/>
            <img src="src/assets/imgs/circle3.png" alt="circle3" className="circle-pres-rand-3" data-aos="fade-right"/>
        </div>
    );
};

export default Presentation;