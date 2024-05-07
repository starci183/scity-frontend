import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

let savedJoinCode = ""

export const GET = async () => {
    return Response.json({ joinCode: savedJoinCode })
}

interface JoinCode {
    joinCode: string
}

export const POST = async (request: Request) => {
    const { joinCode } = await request.json() as JoinCode
    savedJoinCode = joinCode
    return Response.json({ message: "ok" })
}