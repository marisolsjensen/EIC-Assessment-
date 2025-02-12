import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const questions = [
  "Is the applicant an SME, a startup, or a small mid-cap (<500 employees)?",
  "Does the project involve high-risk, high-potential innovation beyond existing market solutions?",
  "Is the project at TRL 5-6+ (i.e., validated in a relevant environment or beyond)?",
  "Does the company require funding for market entry, scaling, or final development steps?",
  "Is the project targeting a significant market opportunity (>€100M) with scalable business potential?",
  "Which funding option are you exploring?",
  "Does the company have a strong team with technical and business expertise?",
  "Does the project involve a high risk of market or technology opportunity that prevents 100% private investments to fund the development?",
  "Do you have or are in the process of formalizing a patent?"
];

export default function EICAssessment() {
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [completed, setCompleted] = useState(false);

  const handleResponse = (index, response) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = response;
    setResponses(updatedResponses);
  };

  const handleSubmit = () => {
    if (responses.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setCompleted(true);
  };

  const isEligible = responses.every((response) => response === "yes");

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">EIC Accelerator Eligibility Assessment</h1>
      {completed ? (
        <Card className="p-4 mt-4">
          <CardContent>
            <h2 className="text-lg font-semibold">Assessment Result:</h2>
            <p className="mt-2">
              {isEligible
                ? "Your project is a strong fit for the EIC Accelerator. Proceed with application preparation."
                : "Your project may not fully align with EIC Accelerator criteria. Consider refining your proposal or exploring other funding programs."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div>
          {questions.map((question, index) => (
            <Card key={index} className="p-4 mt-2">
              <CardContent>
                <p>{question}</p>
                <div className="mt-2 flex gap-2">
                  {index === 5 ? (
                    <Select onValueChange={(value) => handleResponse(index, value)}>
                      <SelectTrigger>Choose funding option</SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grant-only">Grant-only</SelectItem>
                        <SelectItem value="grant+equity">Grant + Equity</SelectItem>
                        <SelectItem value="equity-only">Equity-only</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : index === 8 ? (
                    <Input placeholder="Enter details" onChange={(e) => handleResponse(index, e.target.value)} />
                  ) : (
                    <>
                      <Button onClick={() => handleResponse(index, "yes")} variant={responses[index] === "yes" ? "default" : "outline"}>
                        Yes
                      </Button>
                      <Button onClick={() => handleResponse(index, "no")} variant={responses[index] === "no" ? "default" : "outline"}>
                        No
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          <Button className="mt-4 w-full" onClick={handleSubmit}>
            Submit Assessment
          </Button>
        </div>
      )}
    </div>
  );
}
