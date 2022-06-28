export enum Pages {
  HOME,
  OPTIONS,
  QUIZ,
  FINAL,
}

export interface PageProps {
  setNextPage: (nextPage: Pages) => void;
}

export interface DataPageProps extends PageProps {
  score?: number;
  incrementScore?: () => void;
  resetScore?: () => void;
}

export type Question = {
  id: string;
  question: string;
  explanation: string;
  options: Option[];
  topics?: string[];
};

export type Option = {
  option: string;
  isCorrect: Boolean;
};
