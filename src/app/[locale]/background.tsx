import "./background.css";
import { getRandom } from "@/helpers";

const ShapeBackground = () => {
    return (
        <div className={"area absolute left-0 top-0 z-0"}>
            <ul className={"circles"}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};
const ImageBackground = () => {
    return (
        <div
            className={
                "image-background absolute left-0 top-0 h-screen w-screen"
            }
        ></div>
    );
};
const Background = () => {
    const rand = getRandom(1, 10);
    if (rand <= 5) return <ShapeBackground />;
    return <ImageBackground />;
};
export default Background;
