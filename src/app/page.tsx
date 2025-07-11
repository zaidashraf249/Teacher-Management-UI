"use client";

// Teacher Management Dashboard - Built using React + Tailwind

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define teacher ka data structure
interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
}

// Initial teachers ka dummy data
const initialTeachers: Teacher[] = [
  { id: 1, name: "Mr. Sharma", subject: "Maths", email: "sharma@example.com" },
  { id: 2, name: "Ms. Iqra", subject: "English", email: "iqra@example.com" },
];

export default function TeacherDashboard() {
  // Teachers list ke liye state
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);

  // Form inputs ke liye state
  const [form, setForm] = useState({ name: "", subject: "", email: "" });

  // Email validate karne ke liye function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Teacher add karne ka logic
  const handleAddTeacher = () => {
    const { name, subject, email } = form;

    // Sab fields filled hai ya nahi check kar raha hu
    if (!name || !subject || !email) {
      alert("Please fill in all fields.");
      return;
    }

    // Email valid hai ya nahi check kar raha hu
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Naya teacher object bana raha hu
    const newTeacher: Teacher = {
      id: Date.now(), // Unique ID based on timestamp
      ...form,
    };

    // Teachers list update kar raha hu
    setTeachers((prev) => [...prev, newTeacher]);

    // Form reset kar raha hu
    setForm({ name: "", subject: "", email: "" });
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-100 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <main className="max-w-5xl mx-auto space-y-8">

        {/* Add Teacher Section */}
        <section>
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                Add Teacher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Name Input */}
                <div>
                  <Label className="text-sm text-gray-700 dark:text-gray-300">
                    Full Name
                  </Label>
                  <Input
                    placeholder="e.g. Mr. Ahuja"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="focus:ring-2 focus:ring-purple-300"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <Label className="text-sm text-gray-700 dark:text-gray-300">
                    Subject
                  </Label>
                  <Input
                    placeholder="e.g. Science"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="focus:ring-2 focus:ring-purple-300"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <Label className="text-sm text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="e.g. ahuja@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="focus:ring-2 focus:ring-purple-300"
                  />
                </div>
              </div>

              {/* Add Button */}
              <div className="mt-4">
                <Button
                  onClick={handleAddTeacher}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  ➕ Add Teacher
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Teacher List Section */}
        <section>
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-pink-700 dark:text-pink-300">
                Teacher List
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="p-4 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        👩‍🏫 {teacher.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        📘 {teacher.subject}
                      </p>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-300">
                      📧 {teacher.email}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}