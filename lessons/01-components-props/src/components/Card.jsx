import { Bookmark } from 'lucide-react'


const Card = (props) => {

  return (
    <div className='card'>
        <div className="top">
            <div className="img"><img src={props.logo} alt={props.company} /></div>
            <button className="secondary">
                Save
                <Bookmark strokeWidth={1} size={16} />
            </button>
        </div>
        <div className="center">
            <h4>{props.company}<span>{props.posted}</span></h4>
            <h3>Senior UI/UX Designer</h3>
            <div className="tag">
                <h5>{props.type}</h5>
                <h5>{props.level}</h5>
            </div>
        </div>
        <div className="bottom">
            <div className="price">
                <h3>{props.salary}</h3>
                <h6>{props.location}</h6>
            </div>
            <button className="primary">
                Apply Now
            </button>
        </div>

    </div>
  )
}

export default Card