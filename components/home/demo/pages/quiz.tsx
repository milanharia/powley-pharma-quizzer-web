import {
  Flex,
  Box,
  Text,
  Stack,
  Button,
  Collapse,
  SlideFade,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  faBookmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Toolbar } from "../components";
import { DataPageProps, Option, Pages, Question } from "../types";

const questions: Question[] = [
  {
    id: "1",
    question:
      "Which warning sign indicates that a patient on ropinirole should be withdrawn off therapy or have their dose reduced until the symptoms resolve?",
    explanation:
      "BNF ropinirole important safety information - treatment with dopamine-receptor agonists is associated with impulse control disorders, including pathological gambling, binge eating, and hypersexuality. Switching between dopamine receptor agonists will not control these side effects",
    options: [
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: false,
      },
      { option: "Binge eating", isCorrect: true },
      { option: "Option 2", isCorrect: false },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      { option: "Liver function tests", isCorrect: false },
    ],
  },
  {
    id: "2",
    question:
      "Which of the following statements regarding the use of sodium valproate is incorrect?",
    explanation:
      "BNF mania and hypomania - valproic acid and sodium valproate must not be used during pregnancy in bipolar disorder",
    options: [
      { option: "Binge eating", isCorrect: false },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: false,
      },
      { option: "Liver function tests", isCorrect: false },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: true,
      },
      { option: "Option 4", isCorrect: false },
    ],
  },
  {
    id: "3",
    question:
      "A patient has been taking antibiotics for the past 3 days and has noticed that their urine has turned dark yellow, and occasionally brown. Which of the following antibiotics is most likely to have caused this?",
    explanation:
      "SPC - nitrofurantoin can colour urine dark yellow/brown, which is harmless. Rifampicin/rifabutin can turn urine a reddish orange colour.",
    options: [
      { option: "Binge eating", isCorrect: false },
      { option: "Liver function tests", isCorrect: false },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      { option: "Nitrofurantoin", isCorrect: true },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: false,
      },
    ],
  },
  {
    id: "4",
    question:
      "Which of the following tests is least likely to be conducted whilst taking Priadel?",
    explanation:
      "BNF lithium monitoring requirements - body weight/BMI, serum electrolyte, eGFR, thyroid function every 6 months",
    options: [
      { option: "Binge eating", isCorrect: false },
      { option: "Liver function tests", isCorrect: true },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: false,
      },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      { option: "Nitrofurantoin", isCorrect: false },
    ],
  },
  {
    id: "5",
    question:
      "A 6-week pregnant lady would like to purchase multivitamins. She has a history of asthma and sickle cell disease. Which of the following would be the most appropriate advice?",
    explanation:
      "BNF neural tube defects (prevention in pregnancy) - folic acid 5 mg daily should be prescribed during pregnancy to reduce the risk of neural tube defects in those with sickle cell disease",
    options: [
      { option: "Binge eating", isCorrect: false },
      { option: "Liver function tests", isCorrect: false },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: true,
      },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      { option: "Nitrofurantoin", isCorrect: false },
    ],
  },
  {
    id: "6",
    question:
      "Ms Powley is 68 years old and was recently diagnosed with moderate active rheumatoid arthritis. Which of the following statements is true?",
    explanation:
      "BNF rheumatoid arthritis - conventional DMARDs have a slow onset of action and can take 2-3 months to take effect. Consider short-term bridging treatment with a corticosteroid (by oral, intramuscular, or intra-articular administration)",
    options: [
      { option: "Binge eating", isCorrect: false },
      { option: "Liver function tests", isCorrect: false },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: true,
      },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      {
        option:
          "A short bridging course of intramuscular corticosteroid can be used whilst a DMARD takes effect (about 2-3 months)",
        isCorrect: true,
      },
    ],
  },
  {
    id: "7",
    question:
      "Select the incorrect statement with regards to the use of quinine",
    explanation:
      "BNF nocturnal leg cramps - treatment should be interrupted at intervals of approximately 3 months to assess the need for further quinine treatment. Also see BNF monograph for quinine.",
    options: [
      {
        option:
          "Treatment should be interrupted every 6 months, to review treatment need",
        isCorrect: false,
      },
      { option: "Liver function tests", isCorrect: false },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: true,
      },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      {
        option:
          "A short bridging course of intramuscular corticosteroid can be used whilst a DMARD takes effect (about 2-3 months)",
        isCorrect: false,
      },
    ],
  },
  {
    id: "8",
    question:
      "Select the correct statement with regards to treatments for the eye",
    explanation:
      "BNF eye - when two different eye preparations are used at the same time of day, the patient should leave an interval of at least 5 minutes between the two, to allow the first to be fully absorbed; eye ointment should be applied after drops",
    options: [
      {
        option:
          "Treatment should be interrupted every 6 months, to review treatment need",
        isCorrect: false,
      },
      {
        option:
          "Eye ointments should generally be applied after eye drops (with an interval)",
        isCorrect: true,
      },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: false,
      },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      {
        option:
          "A short bridging course of intramuscular corticosteroid can be used whilst a DMARD takes effect (about 2-3 months)",
        isCorrect: false,
      },
    ],
  },
  {
    id: "9",
    question:
      "Which of the following medicines is the least likely to affect thyroid function?",
    explanation:
      "See BNF monographs for each drug. Amiodarone and lithium can cause thyroid disorders.",
    options: [
      {
        option:
          "Treatment should be interrupted every 6 months, to review treatment need",
        isCorrect: false,
      },
      {
        option:
          "Eye ointments should generally be applied after eye drops (with an interval)",
        isCorrect: false,
      },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: false,
      },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      { option: "Azathioprine", isCorrect: true },
    ],
  },
  {
    id: "10",
    question:
      "Which of the following conditions is least likely to develop as a result of using hormonal replacement therapy?",
    explanation:
      "BNF sex hormones -  oestrogen given systemically in the perimenopausal and postmenopausal period or tibolone given in the postmenopausal period also DIMINISH postmenopausal osteoporosis",
    options: [
      { option: "Osteoporosis", isCorrect: true },
      {
        option:
          "Eye ointments should generally be applied after eye drops (with an interval)",
        isCorrect: false,
      },
      {
        option: "See her GP for a prescription for folic acid 5 mg",
        isCorrect: false,
      },
      {
        option:
          "Sodium valproate can be used as a last line therapy in pregnancy to manage bipolar disorder",
        isCorrect: false,
      },
      { option: "Azathioprine", isCorrect: false },
    ],
  },
];

function getAnswerButtons(question: Question, filter?: "correct" | Option) {
  const correctOption = question.options.filter(
    (option) => option.isCorrect
  )[0];
  const buttons = Array.from(
    document.querySelectorAll("[data-answer-button]")
  ) as HTMLButtonElement[];
  if (filter === "correct")
    return buttons.filter(
      (button) => button.textContent === correctOption.option
    );
  if (typeof filter === "object")
    return buttons.filter((button) => button.textContent === filter.option);

  return buttons;
}

function toggleClass(
  el: HTMLElement,
  className: string,
  action: "add" | "remove"
) {
  const classList = el.classList;
  action === "add" ? classList.add(className) : classList.remove(className);
}

export function QuizPage({ setNextPage, incrementScore }: DataPageProps) {
  const [counter, setCounter] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const question = questions[counter];

  function handleAnswerClicked(option: Option) {
    if (!incrementScore || showExplanation) return;
    const selectedButton = getAnswerButtons(question, option)[0];
    const correctButton = getAnswerButtons(question, "correct")[0];
    if (option.isCorrect) {
      incrementScore();
      toggleClass(selectedButton, "correct", "add");
    } else {
      toggleClass(selectedButton, "incorrect", "add");
      toggleClass(correctButton, "correct", "add");
    }
    setShowExplanation(true);
  }

  function handleNextQuestion() {
    const answerButtons = getAnswerButtons(question);
    if (counter === 9) {
      setNextPage(Pages.FINAL);
    } else {
      setShowExplanation(false);
      answerButtons.forEach((btn) => {
        const className = btn.classList.contains("correct")
          ? "correct"
          : "incorrect";
        toggleClass(btn, className, "remove");
      });
      setCounter((prev) => prev + 1);
    }
  }

  return (
    <SlideFade in={true} offsetY="20px">
      <Flex flexDirection="column">
        <Toolbar
          start={
            <Box pl={4} pb={1}>
              <FontAwesomeIcon
                height="1.5rem"
                width="1.5rem"
                icon={faCircleExclamation}
                color={"#e44444"}
                cursor="not-allowed"
                opacity={0.5}
              />
            </Box>
          }
          end={
            <Box pr={4} pb={1}>
              <FontAwesomeIcon
                height="1.5rem"
                width="1.5rem"
                icon={faBookmark}
                color="#7579E7"
                cursor="not-allowed"
                opacity={0.5}
              />
            </Box>
          }
        >{`Question ${counter + 1} of 10`}</Toolbar>
        <Card>
          <Stack spacing={4}>
            <Text color="dark">{question.question}</Text>
            <Box>
              {question.options.map((option, index) => (
                <AnswerButton
                  onClick={() => handleAnswerClicked(option)}
                  key={index}
                >
                  {option.option}
                </AnswerButton>
              ))}
            </Box>
            <Collapse in={showExplanation}>
              <Stack spacing={4}>
                <Text color="dark">{question.explanation}</Text>
                <Button
                  borderRadius={"2rem"}
                  isFullWidth
                  colorScheme="blue"
                  onClick={handleNextQuestion}
                >
                  {counter < 9 ? "Next Question" : "Finish Quiz"}
                </Button>
              </Stack>
            </Collapse>
          </Stack>
        </Card>
      </Flex>
    </SlideFade>
  );
}

function AnswerButton({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      data-answer-button={true}
      className={"answerButton"}
      onClick={onClick}
    >
      <Text color="dark">{children}</Text>
    </button>
  );
}
