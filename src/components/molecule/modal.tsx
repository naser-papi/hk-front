"use client";
import ReactDOM from "react-dom";
import { cva, VariantProps } from "class-variance-authority";
import useTranslation from "@/helpers/i18n/use-translation";
import { Button } from "@/components/atom";
import { faClose } from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = cva(
    ["overflow-hidden", "rounded-lg", "bg-primary", "border-shadow"],
    {
        variants: {
            size: {
                small: ["w-1/4"],
                medium: ["w-1/2"],
                large: ["w-3/4"],
            },
        },
    }
);

interface ModalProps extends VariantProps<typeof variants> {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    children: JSX.Element | JSX.Element[];
    closeButtonText?: string;
    confirmButtonText?: string;
    hideActions?: boolean;
}

const ModalContainer = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    children,
    closeButtonText,
    confirmButtonText,
    size,
    hideActions,
}: ModalProps) => {
    const { t } = useTranslation();
    if (!isOpen) return null; // Do not render when modal is closed

    return ReactDOM.createPortal(
        <div
            className={
                "modal fixed inset-0 z-50 flex items-center justify-center bg-blackLight"
            }
            role="dialog"
            aria-modal="true"
        >
            <div className={variants({ size })}>
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <div className="text-title">{title}</div>
                    <FontAwesomeIcon
                        icon={faClose}
                        onClick={onClose}
                        className={
                            "hover:animate-spinOnce cursor-pointer hover:text-secondary"
                        }
                        size={"2x"}
                    />
                </div>

                {/* Modal Content */}
                <div className="px-6 py-4">{children}</div>

                {/* Modal Footer */}
                <div
                    className={`justify-end gap-4 border-t border-gray-200 px-6 py-4 ${hideActions ? "hidden" : "flex"}`}
                >
                    <Button
                        onClick={onClose}
                        label={closeButtonText || t("common.cancel")}
                        intend={"secondary"}
                    />
                    <Button
                        onClick={onConfirm}
                        label={confirmButtonText || t("common.confirm")}
                        intend={"secondary"}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ModalContainer;
