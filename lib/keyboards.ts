import {
  InlineKeyboard,
  Keyboard,
} from "https://deno.land/x/grammy@v1.32.0/mod.ts";

export const acceptKeyboard = new Keyboard().text("Да!").text(
  "Нет, хочу изменить",
)
  .resized(true).oneTime(true);


export const changesKeyboard = new Keyboard().text(
  "Хочу заполнить профиль заново",
)
  .row().text("Имя").text("Возраст").row().text("Интересы").text("Геопозицию")
  .row().text("Удобное время").resized(true).oneTime(true);

export const yesOrNo = new InlineKeyboard().text("Да✅", "interestsDone").text(
  "Нет❌",
  "interestsNotDone",
);

export const menuKeyboard = new Keyboard().text("Мой профиль 👤");

export const interesKeyboard = new InlineKeyboard()
  .text("Скуратов. 70 лет Октября, 7").row()
  .text("Скуратов. Мира, 7А").row()
  .text("Скуратов. Красный Путь, 63").row()
  .text("Скуратов. Иртышская Набережная, 30").row()
  .text("Энитайм. Лобкова, 6/1");


export const coffeeKeyboard=new InlineKeyboard()
  .text("Codding").row()
  .text("Web-desigm").row()
  .text("SMM").row()
  .text("UX-design").row()
  .text("UI-design").row()
  .text("PC-building").row()
  .text("PC-repair");
