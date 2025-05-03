import { UseFormRegister, UseFormTrigger, UseFormWatch } from "react-hook-form";

export type LoginFormType = {
  id: string;
  password: string;
};

export interface JoinProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  register: UseFormRegister<JoinFormType>;
  trigger?: UseFormTrigger<JoinFormType>;
  watch?: UseFormWatch<JoinFormType>;
  isRegister?: boolean;
  formValid?: boolean[];
  checkId?: () => Promise<boolean>;
  checkValid?: () => void;
}

export type JoinFormType = {
  id: string;
  password: string;
  confirmPassword: string;
  age: number;
  sex: string;
  height: number;
  weight: number;
};
