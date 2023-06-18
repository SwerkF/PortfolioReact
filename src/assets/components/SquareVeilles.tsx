interface SquareVeillesProps {
    title: string;
    description: string;
    file: string;
}

const SquareVeilles = (props:SquareVeillesProps) => {

    const downloadFile = () => { 
        window.open(`http://localhost:3000/api/docs/${props.file}`, '_blank');
    }

    return (
        <div className="col-c square-v" data-aos="zoom-in-up" data-aos-delay="300">
            <h3 className="f-syne-black title-p">{props.title}</h3>
            <h4 className="f-krona color-white">{props.description}</h4>
            <div className="col text-center mt-4">
                <button className="btn button-2 btn2-border-color-white" onClick={() => downloadFile()}>Télécharger la veille</button>
            </div>
        </div>
    );
};

export default SquareVeilles;