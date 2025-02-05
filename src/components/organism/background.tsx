import "./background.css";
import { getRandom } from "@/helpers";
import { GetCompanyInfo } from "@/services/company-info";

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
const ImageBackground = async () => {
    const info = await GetCompanyInfo();
    if (!info || !info.backgrounds?.length) {
        return (
            <div
                style={{
                    backgroundImage: `url(https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg)`,
                }}
                className={
                    "image-background absolute left-0 top-0 h-screen w-screen"
                }
            ></div>
        );
    } else {
        const visibleIndex = getRandom(0, info.backgrounds.length - 1);
        return info.backgrounds.map((item, index) => (
            <div
                key={item.id}
                style={{
                    backgroundImage: `url(${item.url})`,
                    display: visibleIndex === index ? "block" : "none",
                }}
                className={
                    "image-background absolute left-0 top-0 h-screen w-screen"
                }
            ></div>
        ));
    }
};
const Background = () => {
    const rand = getRandom(1, 10);
    if (rand <= 5) return <ShapeBackground />;
    return <ImageBackground />;
};
export default Background;
