import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

export const GET = async () => {
    const filePath = join("tmp", "join-code.txt");

    const joinCode = existsSync(filePath) ?  readFileSync(filePath, "utf8") : ""
    return Response.json({ joinCode })
}

interface JoinCode {
    joinCode: string
}

export const POST = async (request: Request) => {
    const { joinCode } = await request.json() as JoinCode

    const filePath = join("./tmp", "join-code.txt");
    writeFileSync(join("./tmp", "join-code.txt"), joinCode, "utf8")
    return Response.json({ message: "ok" })
}