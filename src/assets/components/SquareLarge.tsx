interface SquareLargeProps {
    title: string;
    description: string;
    dateDebut: string;
    dateFin: string;
    file: string;
}

const SquareLarge = (props:SquareLargeProps) => {

    const downloadDoc = () => {
        alert('Downloading...')
    }

    return (
        <div className="col square-s-big" data-aos="fade-right">
            <h3 className="f-syne-black title-s">{props.title}</h3>
            <p className="f-syne">{"Stage effectué du " + props.dateDebut + " au " + props.dateFin}</p>
            <p className="f-syne text-stage">
                {props.description}
            </p>
            <button className="btn button-3" onClick={() => downloadDoc}>
                Télécharger le document
            </button>
        </div>
    )
}

export default SquareLarge;