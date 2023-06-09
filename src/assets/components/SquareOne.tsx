
interface Square1Props {
    lang: string;
    title: string;
    color: string;
    link: string;
    description: string;
}

const Square1 = (props:Square1Props) => {

    const redirect = () => {
        window.location.href = props.link
    }

    return (
        <div className="col square-p" data-aos="zoom-in-up" data-aos-delay="300">
            <h3 className="f-syne-black title-p">{props.lang}</h3>
            <h4 className="f-krona text-under text-white">{props.title}</h4>
            <div className="description-container f-krona">
                <p className="description-projets">
                {props.description}
                </p>
            </div>
            <div className="col text-center button-container">
                <button className={"btn button-2 btn2-border-color-"+ props.color} onClick={() => redirect}>Télécharger le projet</button>
            </div>
        </div>
    );
};

export default Square1;