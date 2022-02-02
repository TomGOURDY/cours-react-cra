function RoadMap({percentage, title, content}) {
    return (
        <div>
            <span>{percentage}</span>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default RoadMap;