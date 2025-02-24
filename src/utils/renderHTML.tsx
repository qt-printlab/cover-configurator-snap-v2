interface RenderHTMLProps {
  elementToRender: string;
  hintStyle?: string;
}

export const RenderHTML = ({ elementToRender, hintStyle }: RenderHTMLProps) => {
  return elementToRender ? (
    <span
      dangerouslySetInnerHTML={{ __html: elementToRender }}
      className={hintStyle}
    />
  ) : null;
};
