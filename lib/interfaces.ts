import { Context } from "https://deno.land/x/grammy@v1.32.0/mod.ts";

export interface UserInfo {
  id: number;
  name: string;
  age: number;
  interests: string;
  coffee:string;
  done: boolean;
  state: string;
  time: string;
  rating: number;
}



export type MyContext = Context & {
  config: UserInfo;
};


