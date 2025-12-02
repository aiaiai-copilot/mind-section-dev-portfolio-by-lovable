export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  language: 'en' | 'ru';
}

const enPosts: BlogPost[] = [
  {
    id: "sdd-intro",
    title: "SDD shifts the paradigm",
    excerpt: "SDD (Spec-Driven Development), a paradigm where LLMs handle routine coding based on specifications. This is our intro to a series sharing our early experience and best practices for this transformative approach.",
    content: `This year, the already long list of "-DD" abbreviations for software development approaches (TDD, DDD, BDD, FDD, MDD, ADD, ...) has been expanded with a new one: SDD — Spec-Driven Development.

SDD has emerged this year thanks to the rapid development of software technologies using artificial intelligence, which, in turn, has been driven by the even more explosive growth of the LLM industry.

In fact, SDD is more than just an approach; it's a new paradigm for creating software products that significantly changes many familiar processes.

In short, the essence of SDD lies in using artificial intelligence models to perform routine coding tasks and related activities based on given specifications.

This introductory post is the preface to a series of publications, released hot on the heels of developing a small web application prototype using SDD.

The main goal of this series is to share my own, still limited, experience with the SDD paradigm (it's new for everyone, right?).
It's also an effort to contribute to the collective experience and best practices being developed by the community of SDD pioneers.

I hope that someone will find something interesting and useful in these publications.

---
[Next](sdd-backstory)
`,
    date: "2025-10-13",
    readTime: "1 min read",
    category: "SDD",
    featured: true,
    language: 'en'
  },
  {
    id: "sdd-backstory",
    title: "Backstory",
    excerpt: "The 'Vibe Coding' boom, fueled by tools like Lovable and Replit, is great for quick MVPs, but the real question is scalability. We're wondering whether LLMs can move from 'wow effects' to managing the long-term growth and maintenance of complex brownfield projects.",
    content: `## Vibe Coding: Euphoria, Expectations and Questions

The emergence of the term Vibe Coding (coined by Andrej Karpathy) at the beginning of this — 2025 — year and the endless stream of demonstrations showing the rapid creation of web applications using AI services like Lovable, Bolt, Replit, etc., were likely met with mixed feelings by many.

On one hand, there was undeniable progress: nothing like this had been seen before.
On the other hand, the uniformity of these examples was very unsettling.

Each time, a very quick creation—in a matter of ten or twenty minutes—of simple, yet fully functional, applications was demonstrated based on straightforward, one or two-paragraph prompt requirements, often even recorded by voice. Clearly, these tools were perfect for small websites, web application prototypes, and simple MVPs.

However, no one demonstrated what might happen to these applications afterward: how suitable they were for further growth and to what extent these, or any other AI tools, could support such growth.

Will we be able to maintain the current pace of development, or at least not significantly slowed down, during the product's further evolution, or will we have to return to the "do it yourself" method?

Not to mention the question of whether this miraculous AI toolkit could somehow be applied to existing, so-called **brownfield projects**, which virtually all existing codebases consist of.

Ultimately, people wanted to see something more serious than mere "wow effects," which, obviously, won't sustain anyone for long. The question arose about the possibility of using LLMs to manage long-term software development processes.

---
[Previous](sdd-intro) | [Next](sdd-first-experience)
`,
    date: "2025-10-14",
    readTime: "1 min read",
    category: "SDD",
    featured: true,
    language: 'en'
  },
  {
    id: "sdd-first-experience",
    title: "First SDD Experience",
    excerpt: "By treating contract tests as living specifications in a TDD cycle with AI, we gained the insight that specifications are the best way to govern and control LLM-generated code.",
    content: `[Previous](sdd-backstory)

I should mention that by the time Vibe Coding gained popularity, I already had a bit of experience with programming using LLMs—and, unusually, immediately in commercial development.

Back in 2023, on a company project, we needed a small logger for a client application. I didn't want to bother with connecting heavy-duty tools like Sentry, so I quickly developed my own, using the recently released, but already sensational, ChatGPT 3.5. Naturally, this involved copying and pasting the code from the chat into the IDE, as there were no other options back then.

The task itself was minimal, but I wanted to shift the main burden of implementation review onto tests. The model and I completed this in a TDD mode — the classic red-green-refactor cycle. Consequently, my manual review of the LLM-generated code was very brief, while test runs were quite numerous. In the end, everything went well; the logger was implemented and successfully deployed.

It's worth noting here that good tests are contract tests — those created to verify not the entire codebase, but only a specific part of the contract implemented by the program. This contract might be documented, but it can also be captured in the contract tests themselves, which then serve as a living specification.

Thus, when all tests in TDD are contract-based, development becomes not just Test-Driven, but, in a sense, Specification-First Development. And if it also involves using artificial intelligence, the result is precisely what is known today as Spec-Driven Development.

This is how we developed our mini-logger, and it was during this process that I first realized that it was possible to use predefined specifications to avoid programming errors made by LLMs and control their behavior.

---
[Previous](sdd-backstory)
`,
    date: "2025-10-15",
    readTime: "1 min read",
    category: "SDD",
    featured: false,
    language: 'en'
  },
  //   {
  //     id: "api-documentation-first",
  //     title: "Why Your API Needs Documentation-First Development",
  //     excerpt: "Learn how writing API documentation before code leads to better design decisions, fewer bugs, and happier developers. A practical guide to documentation-driven development.",
  //     content: `## The Documentation-First Approach

  // Writing documentation before code might seem backwards, but it's one of the most effective ways to build maintainable APIs. Here's why it works.

  // ---
  // `,
  //     date: "2025-10-10",
  //     readTime: "5 min read",
  //     category: "API Design",
  //     featured: false,
  //     language: 'en'
  //   },
  //   {
  //     id: "react-performance-tips",
  //     title: "React Performance Optimization: Beyond Memoization",
  //     excerpt: "Discover advanced techniques for optimizing React applications that go beyond the usual useMemo and useCallback advice.",
  //     content: `## Advanced React Performance

  // While memoization helps, there are many other techniques that can significantly improve your React app's performance.

  // ---
  // `,
  //     date: "2025-10-08",
  //     readTime: "7 min read",
  //     category: "Frontend",
  //     featured: false,
  //     language: 'en'
  //   },
  //   {
  //     id: "testing-strategies",
  //     title: "Testing Strategies for Modern Web Apps",
  //     excerpt: "A comprehensive guide to building a robust testing strategy that balances unit, integration, and e2e tests effectively.",
  //     content: `## Building a Testing Strategy

  // Learn how to create a testing pyramid that actually works for your team and project.

  // ---
  // `,
  //     date: "2025-10-05",
  //     readTime: "8 min read",
  //     category: "Methodology",
  //     featured: false,
  //     language: 'en'
  //   },
  //   {
  //     id: "typescript-patterns",
  //     title: "TypeScript Design Patterns for Scalable Applications",
  //     excerpt: "Explore essential TypeScript patterns that help you build type-safe, maintainable applications at scale.",
  //     content: `## TypeScript Patterns

  // Discover the patterns that make TypeScript truly shine in large codebases.

  // ---
  // `,
  //     date: "2025-10-01",
  //     readTime: "6 min read",
  //     category: "Frontend",
  //     featured: false,
  //     language: 'en'
  //   },
  //   {
  //     id: "microservices-communication",
  //     title: "Microservices Communication: Patterns and Pitfalls",
  //     excerpt: "An in-depth look at different communication patterns in microservices architecture and how to avoid common mistakes.",
  //     content: `## Microservices Communication

  // Understanding the tradeoffs between synchronous and asynchronous communication in distributed systems.

  // ---
  // `,
  //     date: "2025-09-28",
  //     readTime: "10 min read",
  //     category: "API Design",
  //     featured: false,
  //     language: 'en'
  //   },
  //   {
  //     id: "code-review-best-practices",
  //     title: "Code Review Best Practices for Teams",
  //     excerpt: "Transform your code review process from a bottleneck into a powerful tool for knowledge sharing and quality improvement.",
  //     content: `## Effective Code Reviews

  // Learn how to make code reviews constructive, efficient, and educational for your entire team.

  // ---
  // `,
  //     date: "2025-09-25",
  //     readTime: "4 min read",
  //     category: "Methodology",
  //     featured: false,
  //     language: 'en'
  //   }
];

const ruPosts: BlogPost[] = [
  {
    id: "sdd-intro",
    title: "SDD: Смена парадигмы",
    excerpt: `SDD (Spec-Driven Development) — парадигма разработки программ, при которой рутинное кодирование выполняется LLM на основе заданных спецификаций.
              Это введение в серию статей о нашем раннем опыте и лучших практиках этого многообещающего подхода.`,
    content: `В этом году и без того длинный список "-DD" аббревиатур подходов к разработке ПО(TDD, DDD, BDD, FDD, MDD, ADD, ...) пополнился еще одной: SDD — Spec-Driven Development.

SDD появился в этом — 2025 — году благодаря бурному развитию программных технологий с использованием искусственного интеллекта, которое, в свою очередь, было обусловлено еще более взрывным ростом индустрии LLM.

На самом деле, SDD это больше, чем просто подход. Это уже новая парадигма создания программных продуктов, которая существенно меняет многие привычные процессы.

Коротко говоря, суть SDD заключается в использовании моделей искусственного интеллекта для выполнения рутинных задач по кодированию и смежных активностей на основе заданных спецификаций.

Этот вводный пост является предисловием к серии публикаций, выпущенных по горячим следам разработки прототипа небольшого веб-приложения с использованием SDD.

Главная цель этой серии — поделиться моим собственным опытом работы в парадигме SDD.
Кроме того, это попытка внести вклад в коллективный опыт и лучшие практики, разрабатываемые сообществом пионеров этого направления.

Надеюсь, что в этих публикациях многие найдут что-то интересное и полезное для себя.

---
  [Далее](sdd-backstory)
    `,
    date: "2025-10-13",
    readTime: "1 мин",
    category: "SDD",
    featured: true,
    language: 'ru'
  },
  {
    id: "sdd-backstory",
    title: "Предыстория",
    excerpt: "Вайб-кодинг, подпитываемый инструментами вроде Lovable и Replit, отлично подходит для быстрой проверки идей и создания прототипов, но к нему есть и вопросы. Например, смогут ли современные ИИ-агенты наряду с бесконечными 'вау-эффектами' показывать способность управления развитием и поддержкой сложных долгоживущих проектов?",
    content: `## Vibe Coding: эйфория, ожидания и вопросы

Появление термина Vibe Coding, введённого Андреем Карпаты в начале этого — 2025 — года и бесконечный поток демонстраций быстрого создания веб-приложений с использованием AI-сервисов, таких как Lovable, Bolt, Replit и т.д., сообщество разработчиков встретило со смешанными чувствами.

С одной стороны, прогресс был неоспорим: ничего подобного раньше никто не видел. С другой стороны, однообразие подобных примеров настораживало.

Каждый раз демонстрировалось очень быстрое создание — за десять-двадцать минут — простых, но полностью функциональных приложений на основе прямых требований в один, максимум в два абзаца, часто даже записанных голосом.
Очевидно, что такие инструменты идеально подходили для небольших сайтов, прототипов веб-приложений и самых простых MVP.

Однако никто не показывал того, что происходит с этими приложениями потом: насколько они пригодны для дальнейшего роста, и в какой степени эти или любые другие AI-инструменты могут развиваться с заданной скоростью.

Сможем ли мы сохранить текущий темп разработки, ну или хотя бы не сильно замедлиться в процессе дальнейшей эволюции продукта, или для продолжения работы над проектом уже придется включать режим ручного кодирования ?

  Не говоря уже о вопросе, а можно ли этот чудесный ИИ-инструментарий как-то применить к уже существующим, так называемым brownfield-проектам, которые среди прочих всегда составляют подавляющее большинство.

Как бы то ни было, люди хотят видеть уже что-то более серьёзное, чем одни только "вау-эффекты", которыми, очевидно, долго сыт не будешь. Вопрос о возможности использования LLM для управления долгосрочными процессами разработки ПО начинает подниматься всё настойчивее и чаще.

---
  [Назад](sdd-intro) | [Далее](sdd-first-experience)
    `,
    date: "2025-10-14",
    readTime: "1 мин",
    category: "SDD",
    featured: true,
    language: 'ru'
  },
  {
    id: "sdd-first-experience",
    title: "Первый опыт SDD",
    excerpt: "Когда все тесты в TDD основаны на контрактах, разработка становится Specification-First Development. А если при этом используются ещё и инструменты искусственного интеллекта, то получается как раз то, что сегодня называется SDD — Spec-Driven Development.",
    content: `[Назад](sdd-backstory)

Стоит упомянуть, что к тому времени, когда Vibe Coding успел набрать популярность, у меня уже был небольшой опыт программирования с использованием LLM и, что довольно необычно, — сразу в коммерческой разработке.

Еще в 2023 году на одном из проектов компании нам понадобилось разработать небольшой логгер для клиентского приложения. Тогда не хотелось возиться с подключением тяжелых инструментов вроде Sentry, поэтому было решено разработать свой собственный с помощью недавно вышедшего, но уже нашумевшего ChatGPT 3.5. Разумеется, это подразумевало копирование и вставку кода из чата в IDE, поскольку других вариантов тогда ещё не было. Но и без того всё происходящее уже воспринималось как безусловный прорыв.

Притом, что задача сама по себе была несложной, основную нагрузку по проверке её реализации интересно было с ревью кода переложить на автотесты. И это себя оправдало: на пару с моделью проверку получилось осуществить в режиме TDD — в классическом цикле Red-Green-Refactor. В результате ручной проверки кода, сгенерированного LLM, почти не потребовалось, а запусков тестов, напротив, было довольно много. В итоге все прошло хорошо: логгер был реализован и успешно развернут на проде.

Здесь стоит отметить, что хорошие тесты — контрактные тесты, то есть те, которые создаются для проверки не всей кодовой базы, а только её ключевой части — контрактов, реализуемых программой. Притом, что контракт может быть задокументирован, он также может быть зафиксирован и в контрактных тестах, которые в этом случае сами становятся уже не просто тестами, а живой спецификацией.

Таким образом, когда все тесты в TDD основаны на контрактах, разработка становится не просто Test-Driven, а, в определённом смысле уже и Specification-First Development. А если при этом используются ещё и инструменты искусственного интеллекта, то в результате получается именно то, что сегодня известно как Spec-Driven Development.

Именно так был разработан вышеупомянутый мини-логгер, и именно в процессе этой разработки впервые стало понятно, что заранее определенные спецификации можно использовать для того, чтобы, во-первых, избегать ошибок программирования, совершаемых LLM, а, во-вторых, контролировать их(LLM) поведение.

---
  [Назад](sdd-backstory)
    `,
    date: "2025-10-15",
    readTime: "1 мин",
    category: "SDD",
    featured: false,
    language: 'ru'
  }
];

export const getBlogPosts = (language: string = 'en'): BlogPost[] => {
  return language === 'ru' ? ruPosts : enPosts;
};

// Keep direct export for backward compatibility if needed, defaulting to English
export const blogPosts = enPosts;
