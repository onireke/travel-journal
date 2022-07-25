

function Travel(props){
    return(
        <div className="travel">
            <img src={`../images/${props.item.imageUrl}`} alt="" className="main-image" />
            <div className="description">
                <div className="location-google">
                    <div className="location-country">
                        <img src="/images/location.svg" className="locate"/>
                        <span className="country">{props.item.location}</span>
                    </div>
                    <a href={props.item.googleMapsUrl
                    }><p>View on Google Maps</p></a>

                </div>
                <h1 className="title">{props.item.title}</h1>
                <p className="start-end">
                    {props.item.startDate} - {props.item.endDate}
                </p>
                <p className="description">{props.item.description}</p>
            </div>

        </div>
    )
}

export default Travel