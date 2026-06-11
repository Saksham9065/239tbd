import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Task from '@/models/Task';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    
    // Await params to access the ID correctly in modern Next.js
    const { id } = await params;
    
    const deletedTask = await Task.findByIdAndDelete(id);
    
    if (!deletedTask) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error("DELETE Task Error:", error);
    return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
  }
}