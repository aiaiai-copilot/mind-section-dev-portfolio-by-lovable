export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "sdd-intro",
    title: "SDD shifts the paradigm",
    excerpt: "SDD (Spec-Driven Development), a paradigm where LLMs handle routine coding based on specifications. This is our intro to a series sharing our early experience and best practices for this transformative approach.",
    content: `This year, the already long list of "-DD" abbreviations for software development approaches (TDD, DDD, BDD, FDD, MDD, ADD, ...) has been expanded with a new one: **SDD - Spec-Driven Development**.

SDD has emerged this year thanks to the rapid development of software technologies using artificial intelligence, which, in turn, has been driven by the even more explosive growth of the LLM industry.

In fact, SDD is more than just an approach; it's a new paradigm for creating software products that significantly changes many familiar processes.

In short, the essence of SDD lies in using artificial intelligence models to perform routine coding tasks and related activities based on given specifications.

This introductory post is the preface to a series of publications, released hot on the heels of developing a small web application prototype using SDD. For the purposes of this series, neither the name nor the specific functionality of the application matters, but for clarity, let's tentatively call it **SomeApp**.

The main goal of this series is to share my own, still limited, experience with the SDD paradigm (it's new for everyone, right?).
It's also an effort to contribute to the collective experience and best practices being developed by the community of SDD pioneers.

I hope that someone will find something interesting and useful in these publications.

---
[Next](sdd-backstory)
`,
    date: "2025-10-13",
    readTime: "1 min read",
    category: "SDD",
    featured: true
  },
  {
    id: "sdd-backstory",
    title: "Backstory",
    excerpt: "The 'Vibe Coding' boom, fueled by tools like Lovable and Replit, is great for quick MVPs, but the real question is scalability. We're wondering whether LLMs can move from 'wow effects' to managing the long-term growth and maintenance of complex brownfield projects.",
    content: `## Vibe Coding: Euphoria, Expectations and Questions

The emergence of the term **Vibe Coding** (coined by Andrej Karpathy) at the beginning of this year (2025) and the endless stream of demonstrations showing the rapid creation of web applications using AI services like Lovable, Bolt, Replit, etc., were likely met with mixed feelings by many.

On one hand, there was undeniable progress: nothing like this had been seen before.
On the other hand, the uniformity of these examples was very unsettling.

Each time, a very quick creation—in a matter of ten or twenty minutes—of simple, yet fully functional, applications was demonstrated based on straightforward, one or two-paragraph prompt requirements, often even recorded by voice. Clearly, these tools were perfect for small websites, web application prototypes, and simple MVPs.

However, no one demonstrated what might happen to these applications afterward: how suitable they were for **further growth** and to what extent these, or any other AI tools, could support such growth.

Could the established development pace be maintained, or at least not significantly slowed down, during the product's further evolution, or would it be back to the "do-it-yourself" method, using one's own hands?

Not to mention the question of whether this miraculous AI toolkit could somehow be applied to existing, so-called **brownfield projects**, which virtually all existing codebases consist of.

Ultimately, people wanted to see something more serious than mere **"wow effects,"** which, obviously, won't sustain anyone for long. The question arose about the possibility of using LLMs to manage **long-term software development processes**.

---
[Previous](sdd-intro) | [Next](sdd-backstory-tbd)
`,
    date: "2025-10-14",
    readTime: "1 min read",
    category: "sdd",
    featured: true
  },
  {
    id: "sdd-backstory-tbd",
    title: "TBD",
    excerpt: "TBD",
    content: `## TBD
---
[Previous](sdd-backstory)
`,
    date: "2025-10-14",
    readTime: "1 min read",
    category: "sdd",
    featured: false
  }
];
