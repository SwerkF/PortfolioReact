import SquareLarge from "./SquareLarge";

const Stages = () => {

    return (
        <div className="section-stages pt-12" id="stages">
            <div className="container text-center">
                <h2 className="f-syne-black title-presentation">Stages 📌</h2> 
                <div className="col">
                    <SquareLarge title="Test Title" description="Test Description" dateDebut="2020-03-11" dateFin="2020/03/image.png93" file="test.doc" />
                    <SquareLarge title="Test Title" description="Test Description" dateDebut="2020-03-11" dateFin="2020/03/93" file="test.doc" />
                </div>
            </div>
        </div>
    );
};

export default Stages;