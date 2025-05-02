"use client";

import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

type JoinFormType = {
  id: string;
  password: string;
  age: number;
  sex: string;
  height: number;
  weight: number;
};

const JoinWrap = tw.div`w-full h-[80vh] flex flex-col py-[10%] px-[6%] gap-8`;
const InputWrap = tw.div``;
const Subtitle = tw.h1`text-[1.2rem] font-semibold`;
const FormInput = tw.input`w-full border border-[#bbbbbb] rounded-md p-2 text-[0.75rem] mt-2`;

const JoinPage = () => {
  const { register, handleSubmit } = useForm<JoinFormType>();

  return (
    <JoinWrap>
      <InputWrap>
        <Subtitle>휴대폰 번호를 입력해주세요</Subtitle>
        <FormInput
          id="id"
          {...register("id", {
            required: "' - ' 를 제외하고 입력해주세요",
          })}
          placeholder="' - ' 를 제외하고 입력해주세요"
        />
      </InputWrap>
      <InputWrap>
        <Subtitle>비밀번호를 입력해주세요</Subtitle>
        <FormInput
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
        />
      </InputWrap>
      <InputWrap>
        <Subtitle>비밀번호를 다시 입력해주세요</Subtitle>
        <FormInput
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
        />
      </InputWrap>
    </JoinWrap>
  );
};
export default JoinPage;
