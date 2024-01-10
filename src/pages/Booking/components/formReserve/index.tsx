import * as S from "./styles";
import PatternLines from "images/pattern-lines.svg";
import BgImage from "images/pattern-curve-top-right.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

interface Props {
  setReserveData: React.Dispatch<React.SetStateAction<FormProps | null>>;
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
}

export type FormProps = z.infer<typeof schema>;

const schema = z.object({
  name: z
    .string()
    .min(1, "Name is empty")
    .transform((value) => {
      const words = value.split(" ");
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      return capitalizedWords.join(" ");
    }),
  email: z.string().min(1, "E-mail is empty").email(),
  month: z.string().min(1, "Field is empty"),
  day: z.string().min(1, "Field is empty"),
  year: z.string().min(1, "Field is empty"),
  hour: z.string().min(1, "Field is empty"),
  minute: z.string().min(1, "Field is empty"),
  ampm: z.string().min(1, "Field is empty"),
});

export default function index({
  setReserveData,
  setPeople,
  setModalOpen,
  modalOpen,
}: Props) {
  const [initialPeople, setInitialPeople] = useState<number>(1);

  const hours = Array.from({ length: 12 }, (_, index) => index + 1);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  const Increment = () => {
    setPeople((prevPeople) => (prevPeople < 10 ? prevPeople + 1 : prevPeople));
    if (!modalOpen) {
      setInitialPeople((prevPeople) =>
        prevPeople < 10 ? prevPeople + 1 : prevPeople
      );
    }
  };

  const Decrement = () => {
    setPeople((prevPeople) => (prevPeople > 1 ? prevPeople - 1 : prevPeople));
    if (!modalOpen) {
      setInitialPeople((prevPeople) =>
        prevPeople > 1 ? prevPeople - 1 : prevPeople
      );
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    reset,
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setReserveData(data);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
    reset();
    setPeople(initialPeople);
    setInitialPeople(1);
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <S.Container>
      <S.BackgroundImg src={BgImage} alt="" />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.PatternLineImg src={PatternLines} />

        <S.Input placeholder="Name" type="text" {...register("name")} />
        {errors.name && <S.Error>{errors.name.message}</S.Error>}

        <S.Input placeholder="E-mail" type="text" {...register("email")} />
        {errors.email && <S.Error>{errors.email.message}</S.Error>}

        <S.Label htmlFor="month">Pick a date</S.Label>

        <S.ContentSelects>
          <S.DateInputGroup>
            <S.Select id="month" {...register("month")}>
              <option value="">MM</option>
              {months.map((month) => (
                <option key={month} value={month.toString().padStart(2, "0")}>
                  {month.toString().padStart(2, "0")}
                </option>
              ))}
            </S.Select>

            {errors.month && <S.Error>{errors.month.message}</S.Error>}
          </S.DateInputGroup>

          <S.DateInputGroup>
            <S.Input
              className="limit-width"
              placeholder="DD"
              type="text"
              id="DD"
              {...register("day")}
            />

            {errors.day && <S.Error>{errors.day.message}</S.Error>}
          </S.DateInputGroup>

          <S.DateInputGroup>
            <S.Select id="year" {...register("year")}>
              <option value="">YY</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </S.Select>

            {errors.year && <S.Error>{errors.year.message}</S.Error>}
          </S.DateInputGroup>
        </S.ContentSelects>

        <S.Label htmlFor="">Pick a time</S.Label>
        <S.ContentSelects>
          <S.DateInputGroup>
            <S.Select id="hours" {...register("hour")}>
              <option value="">HH</option>
              {hours.map((hour) => (
                <option key={hour} value={hour.toString().padStart(2, "0")}>
                  {hour.toString().padStart(2, "0")}
                </option>
              ))}
            </S.Select>
            {errors.hour && <S.Error>{errors.hour.message}</S.Error>}
          </S.DateInputGroup>

          <S.DateInputGroup>
            <S.Select id="minutes" {...register("minute")}>
              <option value="">MN</option>
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </S.Select>
            {errors.minute && <S.Error>{errors.minute.message}</S.Error>}
          </S.DateInputGroup>

          <S.DateInputGroup>
            <S.Select id="ampm" {...register("ampm")}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </S.Select>
            {errors.ampm && <S.Error>{errors.ampm.message}</S.Error>}
          </S.DateInputGroup>
        </S.ContentSelects>

        <S.Counter>
          <S.CounterManipulator type="button" onClick={Decrement}>
            -
          </S.CounterManipulator>
          <strong>
            <span>{initialPeople}</span> people
          </strong>
          <S.CounterManipulator type="button" onClick={Increment}>
            +
          </S.CounterManipulator>
        </S.Counter>

        <S.Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "MAKE A RESERVATION"}
        </S.Button>
      </S.Form>
    </S.Container>
  );
}
