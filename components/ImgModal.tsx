import React from "react";
type Props = {
  children: React.ReactNode;
  props: object;
};
const ImgModal = ({ children }: Props) => {
  return (
    <div id="ImgModal" onClick={() => console.log(children?.props?.src)}>
      {children}
    </div>
  );
};

export default ImgModal;
