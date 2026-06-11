import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Task from '@/models/Task';

export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find({});
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("GET Tasks Error:", error);
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newTask = await Task.create(body);
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error("POST Task Error:", error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}