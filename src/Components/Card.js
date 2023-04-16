import "./Card.css"
import email from "../Icons/email.png"
import location from "../Icons/gps.png"
import phone from "../Icons/phone-call.png"
import profile from "../Icons/profile-user.png"

const Card = (props) =>{
    const {onDelete,onEdit}=props;
    return(
        <div className="card-component">
        <img src={props.imgUrl} width="200px" height="200px"/>
        <h2 className="card-title"><img src={profile} width="20px" height="20px"/> {props.name}</h2>
        <p className="card-data"><img src={phone} width="15px" height="15px"/> {props.phoneNo}</p>
        <p className="card-data"><img src={email} width="15px" height="15px"/>   {props.mail}</p>
        <p className="card-data"><img src={location} width="15px" height="15px"/>   {props.city}</p>
        <button type="button" onClick={onEdit} className="edit-button">EDIT</button>
        <button type="button" onClick={onDelete} className="delete-button">DELETE</button>
        </div>
    )
}
export default Card;