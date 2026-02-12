import RelatedContents from "../organism/related-contents";

interface RelatedContentContainerProps {
    contentType: "blogs" | "events" | "services";
}
const RelatedContentContainer = ({ contentType }: RelatedContentContainerProps) => {
    return (
        <div className={"template related-contents"}>
            <RelatedContents contentType={contentType} />
        </div>
    );
};

export default RelatedContentContainer;