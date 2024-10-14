import { NextResponse } from "next/server";
import path from "path";
import {promises as fs} from "fs";

// get handler
export async function GET () {
    // ambil data dari file  data.json
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
// return JSON Data
    return NextResponse.json(data);
}