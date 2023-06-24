import React, {useState} from 'react';
import moment from 'moment';

const PhotoEmbed = (props:any) => {

    const [showPhoto, setShowPhoto] = useState<boolean>(false)

    const handleShow = (e: any) => {
        e.preventDefault()
        setShowPhoto(true)
    }

    const handleClose = (e: any) => {
        e.preventDefault()
        setShowPhoto(false)
    }
    
    return (
        <>
            {showPhoto && 
            <div className='photo-embed d-flex align-items-center'>
                <div className='photo-square'>
                    <div className="row">
                        <div className='img-wrapper text-right w-100'>
                            <a className="photo-download p-2 m-3 color-white" href={`http://localhost:3000/api/uncompressed/${props.file}.webp`}>V | Télécharger ici</a>
                            <a className="close-button p-2 color-white" onClick={handleClose}>X | Fermer</a>
                        </div>
                        <img src={props.link} alt={props.description} className="img-fluid pt-3" />
                    </div>

                </div>
            </div>
            }
            <div className="col img-div">
                <img src={`http://localhost:3000/api/photos/${props.file}.webp`} alt={props.title} className="img-photos" id={props.id} onClick={handleShow}  />
                <div className="row">
                    <p className='pt-3 color-white'>{props.description} - {moment(props.date).format('DD/MM/YYYY')}</p>
                    
                </div>
            </div>
        </>
        
    );
};

export default PhotoEmbed;