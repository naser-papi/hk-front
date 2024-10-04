import {cva,VariantProps} from "class-variance-authority"
import {BaseHTMLAttributes} from "react";

const bulletVariants=cva(["bullet-point", "w-6","h-6","border-1","border-cyan","rounded-full","drop-shadow-lg"],{
    variants:{
        active:{
            true:["bg-white"],
            false:["bg-secondary"]
        }
    }
});
interface BulletPointProps extends BaseHTMLAttributes<HTMLDivElement>, VariantProps<typeof bulletVariants>{

}
const BulletPoint = ({active}:BulletPointProps) => {
    return (
        <div className={bulletVariants({active})}>

        </div>
    );
};

export default BulletPoint;
