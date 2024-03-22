import mongoose from "mongoose";
import database from "@/db/db";
import FaqModel from "@/models/FaqModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await database()
    const data = await FaqModel.find();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
};
