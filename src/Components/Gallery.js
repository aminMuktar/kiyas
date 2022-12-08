import GridGallery from "./GridGallery.js";
import Deer from "../assets/deer.jpg";
import House from "../assets/house.jpg";
import Wall from "../assets/wall.jpg";

export default function Gallery() {
    const images = [
        Deer,
        House,
        Wall,
        Deer,
        Deer,
        House,
        Wall,
        Deer,
        Deer,
        House,
        Wall,
        Deer,
    ];
    return <GridGallery images={images} />;
}