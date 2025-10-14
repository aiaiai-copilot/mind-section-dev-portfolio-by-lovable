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
    excerpt: "TBD",
    content: `TBD

---
[Previous](sdd-intro)
    `,
    date: "2025-10-13",
    readTime: "1 min read",
    category: "sdd",
    featured: false
  },
  {
    id: "api-documentation-first",
    title: "Why Your API Needs Documentation-First Development",
    excerpt: "OpenAPI specifications aren't just nice-to-have documentation—they're the foundation of maintainable, scalable backend architecture.",
    content: `API documentation shouldn't be an afterthought. When you write OpenAPI specifications before implementing endpoints, you create a contract that benefits every stakeholder in your project.

## The Documentation-First Approach

**1. Design the Contract**
Start with OpenAPI specifications that define exactly what each endpoint does:
* Request/response schemas
* Error codes and messages  
* Authentication requirements
* Rate limiting policies

**2. Generate Client SDKs**
Use your specifications to automatically generate client libraries in multiple languages. This ensures consistency and reduces integration time.

**3. Mock Services**
Create mock servers from your specifications so frontend development can begin immediately, even before backend implementation.

**4. Automated Testing**
Generate test cases directly from your specifications to ensure your implementation matches your contract.

## Real-World Benefits

A recent client project used documentation-first development for a complex integration with 12 external services:

* Integration time reduced from 6 weeks to 2 weeks
* Zero contract-related bugs in production  
* Frontend and backend development completed in parallel
* Automated testing coverage of 100% for API contracts

## Getting Started

1. Choose an API specification format (OpenAPI 3.0 recommended)
2. Write specifications for one endpoint
3. Generate a mock server  
4. Implement the endpoint to match the specification
5. Use automated tools to verify contract compliance

The investment in documentation-first development pays dividends in development speed, code quality, and team coordination.`,
    date: "2024-03-05",
    readTime: "7 min read",
    category: "API Design",
    featured: false
  },
];
