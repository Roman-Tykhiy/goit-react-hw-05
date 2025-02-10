import ImageCard from "../ImageCard/ImageCard";
import s from "./ImegeGalery.module.css"


const ImageGallery = ({ images, openModal }) => {
    console.log(images);
    
  return (
    <ul className={s.list}>
      {images.map(item => (
        <li className={s.card}  key={item.id}>
          <ImageCard image={item} openModal={openModal}/>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
























