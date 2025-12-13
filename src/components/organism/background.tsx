import "./background.css";
import { getRandom } from "@/helpers";
import { GetCompanyInfo } from "@/services/company-info";

const ShapeBackground = () => {
    return (
        <div className="shape-background absolute left-0 top-0 z-0 h-screen w-screen overflow-hidden">
            {/* Gradient Background */}
            <div className="shape-background-gradient absolute inset-0" />
            
            {/* Abstract Geometric Shapes - Representing Journey/Path */}
            <div className="shape-container">
                {/* Large flowing shapes representing movement and progress */}
                <div className="shape shape-flow shape-flow-1" />
                <div className="shape shape-flow shape-flow-2" />
                <div className="shape shape-flow shape-flow-3" />
                
                {/* Geometric nodes representing milestones/connections */}
                <div className="shape shape-node shape-node-1" />
                <div className="shape shape-node shape-node-2" />
                <div className="shape shape-node shape-node-3" />
                <div className="shape shape-node shape-node-4" />
                <div className="shape shape-node shape-node-5" />
                
                {/* Subtle accent shapes */}
                <div className="shape shape-accent shape-accent-1" />
                <div className="shape shape-accent shape-accent-2" />
                <div className="shape shape-accent shape-accent-3" />
            </div>
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
