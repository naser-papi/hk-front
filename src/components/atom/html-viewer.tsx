import "@/components/atom/html-viewer.css";
interface HTMLViewerProps {
    content: string;
}
const HtmlViewer = ({ content }: HTMLViewerProps) => {
    return (
        <article
            className="rich-content"
            dangerouslySetInnerHTML={{ __html: content }}
        ></article>
    );
};
export default HtmlViewer;
