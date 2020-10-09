import Masonry from "react-masonry-component";

const Gallery = ({ slice }) => {

    const photos = slice.items

    return (
        <div className="container mx-auto md:px-40 px-4">
        <Masonry className={"masonry"} elementType={"div"}>
          {photos.map((element, i) => (
              <div className="outer-box md:w-1/3 w-full" key={i}>
                  <div className="inner-box p-2">
                        <img
                            alt={element.photo.alt}
                            src={element.photo.url}
                        />
                  </div>
              </div>
            ))}
        </Masonry>
        </div>
    )
}

export default Gallery
