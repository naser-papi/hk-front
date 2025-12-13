"use client";
import ReactDOM from "react-dom";
import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useRef } from "react";
import useTranslation from "@/helpers/i18n/use-translation";
import { Button } from "@/components/atom";
import { FaXmark } from "react-icons/fa6";

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
    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Focus trap and escape key handling
    useEffect(() => {
        if (!isOpen) return;

        // Store the previously focused element
        previousFocusRef.current = document.activeElement as HTMLElement;

        // Focus the modal when it opens
        const modalElement = modalRef.current;
        if (modalElement) {
            const firstFocusable = modalElement.querySelector(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) as HTMLElement;
            firstFocusable?.focus();
        }

        // Handle escape key
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        // Handle focus trap
        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== "Tab" || !modalElement) return;

            const focusableElements = modalElement.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.addEventListener("keydown", handleTab);

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("keydown", handleTab);
            // Restore focus to previously focused element
            previousFocusRef.current?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null; // Do not render when modal is closed

    return ReactDOM.createPortal(
        <div
            className={
                "modal fixed inset-0 z-50 flex items-center justify-center bg-blackLight"
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => {
                // Close modal when clicking backdrop
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div ref={modalRef} className={variants({ size })}>
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 id="modal-title" className="text-title">{title}</h2>
                    <button
                        onClick={onClose}
                        aria-label="Close dialog"
                        className={
                            "hover:animate-spinOnce cursor-pointer hover:text-secondary text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded p-1"
                        }
                    >
                        <FaXmark aria-hidden="true" />
                    </button>
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
                        variant={"secondary"}
                    />
                    <Button
                        onClick={onConfirm}
                        label={confirmButtonText || t("common.confirm")}
                        variant={"secondary"}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ModalContainer;
