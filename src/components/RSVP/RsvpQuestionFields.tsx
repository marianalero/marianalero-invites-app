import { Box, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Answer, Question } from "../../models/question";
import {
  normalizeQuestionType,
  parseOptions,
  readMultipleAnswer,
  writeMultipleAnswer,
} from "../../models/confirmation";

interface RsvpQuestionFieldsProps {
  questions: Question[];
  answers: Answer[];
  onChange: (answers: Answer[]) => void;
  disabled?: boolean;
  textColor?: string;
  bodyTypo?: string;
  colorButton?: string;
}

function upsert(answers: Answer[], questionId: number, response: string) {
  const next = [...answers];
  const index = next.findIndex((answer) => answer.questionId === questionId);
  if (index >= 0) next[index] = { ...next[index], response };
  else next.push({ questionId, response });
  return next;
}

export default function RsvpQuestionFields({
  questions,
  answers,
  onChange,
  disabled,
  textColor,
  bodyTypo,
  colorButton,
}: RsvpQuestionFieldsProps) {
  if (questions.length === 0) return null;

  const fieldSx = {
    minWidth: 300,
    "& label.Mui-focused": { color: colorButton },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": { borderColor: colorButton },
    },
  };

  return (
    <>
      {questions.map((question) => {
        const type = normalizeQuestionType(question.type);
        const response = answers.find((answer) => answer.questionId === question.id)?.response ?? "";
        const options = parseOptions(question.optionsJson);
        return (
          <Grid key={question.id} size={12} display="flex" justifyContent="center">
            <Box marginBottom={2} width="100%" maxWidth={420}>
              <Typography align="center" variant="body1" className={bodyTypo} sx={{ color: textColor, marginTop: 2 }}>
                {question.text}{question.isRequired ? " *" : ""}
              </Typography>
              {type === "long_text" || type === "short_text" ? (
                <TextField
                  disabled={disabled}
                  placeholder="Escribe tu respuesta"
                  multiline={type === "long_text"}
                  minRows={type === "long_text" ? 3 : undefined}
                  sx={fieldSx}
                  value={response}
                  onChange={(event) => onChange(upsert(answers, question.id, event.target.value))}
                  fullWidth
                />
              ) : null}
              {type === "single_choice" && (
                <RadioGroup
                  value={response}
                  onChange={(event) => onChange(upsert(answers, question.id, event.target.value))}
                >
                  {options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      disabled={disabled}
                      control={<Radio sx={{ color: colorButton, "&.Mui-checked": { color: colorButton } }} />}
                      label={<Typography className={bodyTypo} sx={{ color: textColor }}>{option}</Typography>}
                    />
                  ))}
                </RadioGroup>
              )}
              {type === "multiple_choice" && (
                <FormGroup>
                  {options.map((option) => {
                    const selected = readMultipleAnswer(response);
                    const checked = selected.includes(option);
                    return (
                      <FormControlLabel
                        key={option}
                        disabled={disabled}
                        control={
                          <Checkbox
                            checked={checked}
                            sx={{ color: colorButton, "&.Mui-checked": { color: colorButton } }}
                            onChange={(event) => {
                              const next = event.target.checked
                                ? [...selected, option]
                                : selected.filter((item) => item !== option);
                              onChange(upsert(answers, question.id, writeMultipleAnswer(next)));
                            }}
                          />
                        }
                        label={<Typography className={bodyTypo} sx={{ color: textColor }}>{option}</Typography>}
                      />
                    );
                  })}
                </FormGroup>
              )}
            </Box>
          </Grid>
        );
      })}
    </>
  );
}
