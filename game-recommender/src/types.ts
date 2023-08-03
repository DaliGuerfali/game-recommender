import { tags } from "./utils"

export type StepState<T extends 0 | 1> = T[]

export type PlatformType = "PC" | "Console" | "Browser"

type StringToUnion<S extends string> = S extends `${infer Head}, ${infer Tail}`
  ? Lowercase<Head> | StringToUnion<Tail>
  : Lowercase<S>

export type TagType = StringToUnion<typeof tags>


export interface GameInfo {
    thumbnail: string
    title: string
    description: string
    platform: string
    developer: string
    publisher: string
    release_date: string
    game_url: string
} 