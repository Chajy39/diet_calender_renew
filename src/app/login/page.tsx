"use client";

import loginController from "@/libs/loginController";
import { LoginFormType } from "@/types/FormType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

const FormWrap = tw.form`w-full h-full p-[10%] flex flex-col items-center justify-between`;
const InputForm = tw.div`w-full flex flex-col gap-6`;
const FormInput = tw.input`w-full border-b border-[#bbbbbb] p-2 text-[0.75rem]`;
const SubmitButton = tw.button`w-full py-3 bg-[#44bb44] text-white font-semibold rounded-md`;
const JoinButton = tw.div`w-min text-[#333333] px-8 py-1 whitespace-nowrap mx-auto font-bold`;

const LoginPage = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<LoginFormType>();

  const mutation = useMutation({
    mutationFn: loginController.login,
    onSuccess: (data) => {
      if (data.code === "0000") {
        queryClient.setQueryData(["auth"], data);
      } else {
        console.log("failed", data.msg);
      }
    },
  });

  const onSubmit = async (data: LoginFormType) => {
    mutation.mutate(data);
  };

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <InputForm>
        <FormInput
          {...register("id", {
            required: "' - ' 를 제외하고 입력해주세요",
          })}
          placeholder="' - ' 를 제외하고 입력해주세요"
        />
        <FormInput
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          placeholder="비밀번호를 입력해주세요"
        />
        <Link href="/join" passHref>
          <JoinButton>회원가입</JoinButton>
        </Link>
      </InputForm>
      <SubmitButton type="submit">로그인</SubmitButton>
    </FormWrap>
  );
};
export default LoginPage;
