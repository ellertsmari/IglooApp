import {apartmentCard, imageStyle} from './styles.js';
const Card = (props)=>{
    const apartment = props.data;
    
    return(
        <div key={apartment.id} style={apartmentCard}>
            <h3>{apartment.title}</h3>
            <img 
            style={imageStyle}
            alt={apartment.title}
            src={apartment.images[0].image.smaller}>
            </img>
        </div>
    )
}

export default Card;