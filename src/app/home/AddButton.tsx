"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import tw from "tailwind-styled-components";

const ButtonWrap = tw.div`flex flex-col absolute bottom-4 right-8 items-end`;
const OpenButton = tw.button`transition-all duration-300 ease-in-out rounded-full bg-[#44bb44]`;
const ListWrap = tw.div`w-32 flex flex-col p-1 rounded-md shadow-md border border-[#efefef]`;
const ListItem = tw.button`flex items-center py-2 px-3 text-[0.75rem] gap-1`;

const BtnImg = tw(Image)<ImageProps>``;

const AddButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ButtonWrap>
      {isOpen && (
        <ListWrap>
          <ListItem>
            <BtnImg
              src={`/svg/ic_camera.svg`}
              alt="camera"
              width={18}
              height={18}
            />
            사진 촬영
          </ListItem>
          <ListItem>
            <BtnImg
              src={`/svg/ic_gallery.svg`}
              alt="gallery"
              width={18}
              height={18}
            />
            사진 가져오기
          </ListItem>
          <ListItem>
            <BtnImg
              src={`/svg/ic_note.svg`}
              alt="note"
              width={18}
              height={18}
            />
            직접 추가
          </ListItem>
        </ListWrap>
      )}
      <OpenButton
        onClick={onChangeIsOpen}
        className={`${isOpen ? "p-1 m-2" : "p-3"}`}
      >
        <BtnImg
          src={`/svg/${isOpen ? "ic_close" : "ic_add"}.svg`}
          alt="detail"
          width={24}
          height={24}
        />
      </OpenButton>
    </ButtonWrap>
  );
};

export default AddButton;
