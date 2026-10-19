import { Plus } from "lucide-react";
import { questions } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  return <section className="faq" id="questions" aria-labelledby="faq-h"><div className="wrap">
    <Reveal className="head"><h2 id="faq-h">Questions, answered</h2></Reveal>
    <Reveal className="list">
      {questions.map((item) => <details key={item.question}><summary>{item.question}<Plus aria-hidden="true" /></summary><p>{item.answer}</p></details>)}
    </Reveal>
  </div></section>;
}
