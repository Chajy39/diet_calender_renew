import { JoinProps } from "@/types/FormType";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

const InputWrap = tw.div``;
const Subtitle = tw.h1`text-[1.2rem] font-semibold`;
const FormInput = tw.input`w-full border border-[#bbbbbb] rounded-md p-2 text-[0.75rem] mt-2`;

const SecondStep = ({ step, setStep, register }: JoinProps) => {
  const stepComponents = [
    {
      title: "당신의 성별은 무엇인가요?",
      component: (
        <FormInput
          id="gender"
          type="radio"
          {...register("sex", {})}
          disabled={step !== 7}
        />
      ),
    },
    {
      title: "당신은 몇세인가요?",
      component: (
        <FormInput id="age" {...register("age", {})} disabled={step !== 9} />
      ),
    },
  ];

  return stepComponents.slice(0, Math.floor(step / 2) + 1).map((item, idx) => {
    const isLast = idx === Math.floor(step / 2);
    return isLast ? (
      <InputWrap>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setStep((prev) => prev + 1)}
        >
          <Subtitle>{item.title}</Subtitle>
        </motion.div>
        {step % 2 === 1 && (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {item.component}
          </motion.div>
        )}
      </InputWrap>
    ) : (
      <InputWrap>
        <Subtitle>{item.title}</Subtitle>
        {item.component}
      </InputWrap>
    );
  });
};
export default SecondStep;
