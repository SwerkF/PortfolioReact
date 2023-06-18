import moment from 'moment'

interface SquareLargeProps {
    title: string;
    description: string;
    dateDebut: string;
    dateFin: string;
    file: string;
}

const SquareLarge = (props:SquareLargeProps) => {

    const downloadDoc = () => {
        window.open(`http://localhost:3000/api/docs/${props.file}`);
    }

    console.log(props)

    return (
        <div className="col square-s-big" data-aos="fade-right">
            <h3 className="f-syne-black title-s">{props.title}</h3>
            <p className="f-syne">{"Stage effectué du " + moment(props.dateDebut).format('DD/MM/YYYY')  + " au " + moment(props.dateFin).format('DD/MM/YYYY')}</p>
            <div className="description-stages">
                <p className="f-syne text-stage">
                    {props.description}
                </p>
            </div>
            <button className="btn button-3" onClick={() => downloadDoc()}>
                Télécharger le document
            </button>
        </div>
    )
}

export default SquareLarge;