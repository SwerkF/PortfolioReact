interface SquareCertifProps {
    title: string;
    description: string;
    img: string;
}

const SquareCertif = (props:any) => {
    return (
        <div className="col square-c" data-aos="zoom-in-up" data-aos-delay="300">
            <h2 className="f-syne-black color-white title-s" >{props.title}</h2>
            <p className="color-white">{props.description}</p>
            <div className="square-c-content">
            <img src={"http://localhost:3000/api/imgs/"+props.img} alt={props.img} className="img-certif" />
            </div>
        </div>
    );
};

export default SquareCertif;