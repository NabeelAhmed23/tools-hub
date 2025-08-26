"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Plus, Trash2, Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdPlaceholder from "@/components/AdPlaceholder";

interface Subject {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

interface GPAResult {
  gpa: number;
  totalCredits: number;
  totalPoints: number;
  classification: string;
}

const gradePoints: { [key: string]: number } = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
};

const numericGrades: { [key: string]: number } = {
  "100": 4.0,
  "99": 4.0,
  "98": 4.0,
  "97": 4.0,
  "96": 4.0,
  "95": 4.0,
  "94": 3.9,
  "93": 3.8,
  "92": 3.7,
  "91": 3.6,
  "90": 3.5,
  "89": 3.4,
  "88": 3.3,
  "87": 3.2,
  "86": 3.1,
  "85": 3.0,
  "84": 2.9,
  "83": 2.8,
  "82": 2.7,
  "81": 2.6,
  "80": 2.5,
  "79": 2.4,
  "78": 2.3,
  "77": 2.2,
  "76": 2.1,
  "75": 2.0,
  "74": 1.9,
  "73": 1.8,
  "72": 1.7,
  "71": 1.6,
  "70": 1.5,
  "69": 1.4,
  "68": 1.3,
  "67": 1.2,
  "66": 1.1,
  "65": 1.0,
  "64": 0.9,
  "63": 0.8,
  "62": 0.7,
  "61": 0.6,
  "60": 0.5,
};

const getClassification = (gpa: number): string => {
  if (gpa >= 3.8) return "Summa Cum Laude";
  if (gpa >= 3.6) return "Magna Cum Laude";
  if (gpa >= 3.4) return "Cum Laude";
  if (gpa >= 3.0) return "Honor Roll";
  if (gpa >= 2.0) return "Good Standing";
  return "Academic Probation";
};

export default function GPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: "", credits: 3, grade: "" },
  ]);
  const [gradeSystem, setGradeSystem] = useState<"letter" | "numeric">(
    "letter"
  );
  const [gpaResult, setGPAResult] = useState<GPAResult | null>(null);

  const addSubject = () => {
    const newId = Math.max(...subjects.map((s) => s.id), 0) + 1;
    setSubjects([...subjects, { id: newId, name: "", credits: 3, grade: "" }]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  const updateSubject = (
    id: number,
    field: keyof Subject,
    value: string | number
  ) => {
    setSubjects(
      subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const calculateGPA = () => {
    const validSubjects = subjects.filter(
      (s) => s.name && s.grade && s.credits > 0
    );

    if (validSubjects.length === 0) return;

    let totalPoints = 0;
    let totalCredits = 0;

    validSubjects.forEach((subject) => {
      const points =
        gradeSystem === "letter"
          ? gradePoints[subject.grade] || 0
          : numericGrades[subject.grade] || 0;

      totalPoints += points * subject.credits;
      totalCredits += subject.credits;
    });

    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    const classification = getClassification(gpa);

    setGPAResult({
      gpa: Math.round(gpa * 100) / 100,
      totalCredits,
      totalPoints: Math.round(totalPoints * 100) / 100,
      classification,
    });
  };

  const reset = () => {
    setSubjects([{ id: 1, name: "", credits: 3, grade: "" }]);
    setGPAResult(null);
  };

  const getGradeOptions = () => {
    if (gradeSystem === "letter") {
      return Object.keys(gradePoints);
    } else {
      return Object.keys(numericGrades).sort(
        (a, b) => parseInt(b) - parseInt(a)
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            GPA Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate your Grade Point Average with multiple subjects and credit
            hours
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span>Grade System</span>
            </CardTitle>
            <CardDescription>
              Select your grading system before adding subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button
                variant={gradeSystem === "letter" ? "default" : "outline"}
                onClick={() => setGradeSystem("letter")}
              >
                Letter Grades (A-F)
              </Button>
              <Button
                variant={gradeSystem === "numeric" ? "default" : "outline"}
                onClick={() => setGradeSystem("numeric")}
              >
                Numeric Grades (0-100)
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Subjects & Grades</CardTitle>
                <CardDescription>
                  Add your subjects with their respective credits and grades
                </CardDescription>
              </div>
              <Button onClick={addSubject} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Subject
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjects.map((subject) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-muted/20 rounded-lg"
                >
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium block mb-1">
                      Subject Name
                    </label>
                    <Input
                      placeholder="e.g., Mathematics"
                      value={subject.name}
                      onChange={(e) =>
                        updateSubject(subject.id, "name", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Credits
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="10"
                      value={subject.credits}
                      onChange={(e) =>
                        updateSubject(
                          subject.id,
                          "credits",
                          parseInt(e.target.value) || 0
                        )
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Grade
                    </label>
                    <Select
                      value={subject.grade}
                      onValueChange={(value) =>
                        updateSubject(subject.id, "grade", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {getGradeOptions().map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}{" "}
                            {gradeSystem === "letter"
                              ? `(${gradePoints[grade]})`
                              : `(${numericGrades[grade]})`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeSubject(subject.id)}
                      disabled={subjects.length <= 1}
                      className="w-full"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4 mt-6">
              <Button onClick={calculateGPA} className="flex-1">
                <Calculator className="w-4 h-4 mr-2" />
                Calculate GPA
              </Button>
              <Button variant="outline" onClick={reset}>
                Reset All
              </Button>
            </div>
          </CardContent>
        </Card>

        {gpaResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Your GPA Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {gpaResult.gpa.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">
                      {gpaResult.totalCredits}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Credits
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">
                      {gpaResult.totalPoints}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Points
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Standing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-6 bg-muted/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {gpaResult.classification}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Based on GPA of {gpaResult.gpa.toFixed(2)}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {subjects
                    .filter((s) => s.name && s.grade)
                    .map((subject) => {
                      const points =
                        gradeSystem === "letter"
                          ? gradePoints[subject.grade] || 0
                          : numericGrades[subject.grade] || 0;
                      const totalSubjectPoints = points * subject.credits;

                      return (
                        <div
                          key={subject.id}
                          className="flex justify-between items-center py-2 border-b"
                        >
                          <div>
                            <span className="font-medium">{subject.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">
                              ({subject.credits} credits)
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{subject.grade}</div>
                            <div className="text-sm text-muted-foreground">
                              {totalSubjectPoints.toFixed(1)} points
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>
                Grade Scale ({gradeSystem === "letter" ? "Letter" : "Numeric"})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {gradeSystem === "letter" ? (
                  Object.entries(gradePoints).map(([grade, points]) => (
                    <div
                      key={grade}
                      className="flex justify-between p-2 bg-muted/30 rounded"
                    >
                      <span>{grade}</span>
                      <span>{points}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                      <span>90-100</span>
                      <span>3.5-4.0</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                      <span>80-89</span>
                      <span>2.5-3.4</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                      <span>70-79</span>
                      <span>1.5-2.4</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                      <span>60-69</span>
                      <span>0.5-1.4</span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Classifications</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Summa Cum Laude:</span>
                <span>3.8 - 4.0</span>
              </div>
              <div className="flex justify-between">
                <span>Magna Cum Laude:</span>
                <span>3.6 - 3.79</span>
              </div>
              <div className="flex justify-between">
                <span>Cum Laude:</span>
                <span>3.4 - 3.59</span>
              </div>
              <div className="flex justify-between">
                <span>Honor Roll:</span>
                <span>3.0 - 3.39</span>
              </div>
              <div className="flex justify-between">
                <span>Good Standing:</span>
                <span>2.0 - 2.99</span>
              </div>
              <div className="flex justify-between">
                <span>Academic Probation:</span>
                <span>Below 2.0</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>About GPA Calculation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>
              GPA (Grade Point Average) is calculated by dividing the total
              number of grade points earned by the total number of credit hours
              attempted. Each grade is assigned a point value, which is
              multiplied by the number of credit hours for that course.
            </p>
            <p>
              <strong>Formula:</strong> GPA = Total Grade Points ÷ Total Credit
              Hours
            </p>
            <p>
              This calculator supports both letter grade (A-F) and numeric grade
              (0-100) systems, automatically converting them to the standard 4.0
              scale.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" className="mt-8" />
    </div>
  );
}
