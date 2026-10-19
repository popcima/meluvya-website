import { Plus } from "lucide-react";
import { questions } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  return <section className="faq" id="questions" aria-labelledby="faq-h"><div className="wrap faq-layout">
    <Reveal className="faq-intro"><p className="section-kicker">03 / THE DETAILS</p><h2 id="faq-h">A few things<br />you might wonder.</h2><p>A little clarity before you make something new.</p></Reveal>
    <Reveal className="list">
      {questions.map((item) => <details key={item.question}><summary>{item.question}<Plus aria-hidden="true" /></summary><p>{item.answer}</p></details>)}
    </Reveal>
  </div></section>;
}
