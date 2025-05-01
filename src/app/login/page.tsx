"use client";

import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

type LoginFormType = {
  id: string;
  password: string;
};

const FormWrap = tw.form`w-f h-[80vh] flex flex-col items-center gap-2`;
const FormInput = tw.input`w-[80vw] border-b border-[#999999] p-1 text-[0.75rem]`;

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormType>();

  const onSubmit = (data) => {};

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <FormInput
        id="id"
        {...register("id", {
          required: "-빼고 입력해주세요",
        })}
        placeholder="-빼고 입력해주세요"
      />
      <FormInput
        id="password"
        type="password"
        {...register("password", {
          required: "비밀번호를 입력해주세요",
        })}
        placeholder="비밀번호를 입력해주세요"
      />
    </FormWrap>
  );
};
export default LoginPage;
