import React, {useState, useEffect} from 'react';
import PhotoEmbed from './PhotoEmbed';

const Photos = () => {

    const [photos, setPhotos] = useState<any[]>([])
    const [activePhotos, setActivePhotos] = useState<any[]>([])
    const [variable, setVariable] = useState<any[]>([])
    const [lastPhotoId, setLastPhotoId] = useState<any>(0)

    useEffect(() => {
        fetch('http://localhost:3000/api/photos')
            .then(response => response.json())
            .then((data) => {
                const photos = data.map((photo: any) => {
                    return {
                        id: photo.id,
                        description: photo.description,
                        date: photo.date,
                        file: photo.file,
                        link: `http://localhost:3000/api/photos/${photo.file}.webp`
                    }
                })
                setPhotos(photos)
                setActivePhotos(photos.slice(0, 3))
                setLastPhotoId(photos[photos.length - 4].id)
            })
    }, [])

    const handlePrevious = (e: any) => {
        e.preventDefault()
        if (lastPhotoId === 0) return
        const previousPhotos = photos.slice(lastPhotoId - 3, lastPhotoId - 6)
        setActivePhotos(previousPhotos)
        
    }

    const handleNext = (e: any) => {
        e.preventDefault()
        console.log(lastPhotoId)
        if (lastPhotoId === photos.length) return
        const nextPhotos = photos.slice(lastPhotoId, lastPhotoId + 3)
        setActivePhotos(nextPhotos)
    }

    return (
        <div className="section-photos" id="photos">
            <h2 className="f-syne-black title-photos pt-12 pb-4 z-2 text-center" data-aos="fade-up">photos 📸</h2>
            <div className='container d-flex flex-row pt-4 justify-content-around'>
                <div className="col-1 d-flex justify-content-center align-items-center">    
                    <a className="photo-button color-white" onClick={handlePrevious}>{'<'}</a>
                </div>
                <div className="photos-wrapper row-no-mr no-padding-row-left-right justify-content-center">
                    {activePhotos.map((photo, index) => (
                        <PhotoEmbed key={index} id={photo.id} link={photo.link} description={photo.description} file={photo.file} date={photo.date}/>
                    ))}
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <a className="photo-button color-white" onClick={handleNext}>{'>'}</a>
                </div>
            </div>
        </div>
    );
};

export default Photos;