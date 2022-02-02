function Card({title, desc, img, alt, link}) {
    return (
        <article>
            <h1>{title}</h1>
            <p>{desc}</p>
            <img src={img} alt={alt}/>
            <a href={link} title={link}>Le lien</a>
        </article>
    )
}

export default Card;