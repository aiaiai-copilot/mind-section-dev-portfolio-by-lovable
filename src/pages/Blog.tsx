import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "The True Cost of Technical Debt: A 5-Year Case Study",
      excerpt: "How one client's rushed initial development led to 300% increased maintenance costs and what we learned from the complete architecture overhaul.",
      content: `When MegaCorp approached us in 2019, they had a working product but were drowning in technical debt. Their initial "move fast and break things" approach had resulted in a codebase that was nearly impossible to maintain.

      ## The Problem

      * 6-month feature development cycles for simple changes
      * New developer onboarding took 3-4 weeks
      * 40% of development time spent on bug fixes
      * Zero automated testing coverage
      * No API documentation

      ## The Solution

      We implemented a complete specification-driven rebuild:

      1. **Comprehensive Code Audit**: 2-week deep dive into existing architecture
      2. **Specification Development**: Complete technical specifications before any code changes
      3. **Incremental Migration**: Gradual replacement of legacy components
      4. **Documentation-First Approach**: Every API endpoint documented before implementation
      5. **Test Coverage**: 95% test coverage with automated testing pipeline

      ## The Results

      After 18 months of specification-driven development:

      * Feature development time reduced by 70%
      * New developer onboarding reduced to 3 days
      * Bug reports decreased by 85%
      * Team velocity increased by 200%

      The initial investment in proper architecture and documentation paid for itself within 8 months through increased development speed and reduced maintenance costs.`,
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Case Study",
      featured: true
    },
    {
      title: "Specification-Driven Development: More Than Just Documentation",
      excerpt: "Why writing comprehensive specifications before coding isn't overhead—it's the fastest way to build maintainable applications.",
      content: `Specification-Driven Development (SDD) isn't about creating more paperwork. It's about creating a shared understanding that prevents the costly miscommunication and rework that plagues most software projects.

      ## What Is SDD?

      Specification-Driven Development is a methodology where complete technical specifications are created before any implementation begins. This includes:

      * API contracts with full request/response schemas
      * Database schemas with relationships and constraints  
      * Component interfaces and data flow diagrams
      * Error handling and edge case documentation
      * Performance requirements and acceptance criteria

      ## Why It Works

      **1. Shared Understanding**
      When everyone works from the same specification, there are no surprises. Frontend developers know exactly what data they'll receive, backend developers know what responses are expected, and QA knows what to test.

      **2. Faster Development**
      While it seems counterintuitive, teams move faster when they have a clear roadmap. No time is wasted on "figuring it out as we go" or refactoring due to misunderstood requirements.

      **3. Better Testing**
      With specifications in place, comprehensive test cases can be written before implementation begins. This leads to higher quality code and fewer production bugs.

      ## Implementation Strategy

      Start small. Choose one feature and create a complete specification before implementation. Measure the time saved in development and the reduction in bugs. The results will speak for themselves.`,
      date: "2024-03-10",
      readTime: "6 min read", 
      category: "Methodology",
      featured: false
    },
    {
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
    {
      title: "Building Component Libraries That Last: A Maintainable Approach",
      excerpt: "How proper documentation and specification-driven component design creates UI libraries that teams actually want to use.",
      content: `Component libraries often start with good intentions but end up as unmaintained collections of inconsistent, poorly documented components. Here's how to build component libraries that stand the test of time.

      ## The Problem with Most Component Libraries

      * Inconsistent API design across components
      * Missing or outdated documentation
      * No clear usage patterns or examples
      * Components tightly coupled to specific use cases

      ## A Specification-Driven Approach

      **1. Component Specifications**
      Before writing any code, define:
      * Props interface with TypeScript
      * Usage examples for common scenarios
      * Accessibility requirements  
      * Visual design tokens and variants

      **2. Documentation-First Development**
      * Write Storybook stories before implementation
      * Create usage guidelines and best practices
      * Document accessibility patterns
      * Provide code examples and migration guides

      **3. Consistent Design System**
      * Define design tokens in a single source of truth
      * Create semantic color and spacing systems
      * Establish typography and animation standards
      * Build variant systems for consistent styling

      ## Case Study: TechStart's Design System

      When TechStart needed a component library for their 8 different applications:

      **Before**: 6 different button implementations across applications
      **After**: 1 button component with 12 variants covering all use cases

      **Results**:
      * 60% reduction in UI development time
      * 100% accessibility compliance across applications
      * Zero breaking changes in 18 months of active development
      * 95% developer satisfaction score in internal surveys

      ## Implementation Guidelines

      1. **Start Small**: Begin with 3-5 core components
      2. **Documentation First**: Write Storybook stories before code
      3. **Type Safety**: Use TypeScript for all component props
      4. **Testing**: Include visual regression testing
      5. **Versioning**: Semantic versioning with detailed changelogs

      A well-designed component library isn't just about reusable code—it's about creating a shared language for your entire design system.`,
      date: "2024-02-28",
      readTime: "9 min read",
      category: "Frontend",
      featured: true
    }
  ];

  const categories = ["All", "Case Study", "Methodology", "API Design", "Frontend"];
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Development Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights on maintainable development, specification-driven architecture, 
            and building software that stands the test of time.
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="shadow-elegant hover-scale border-0 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto group/btn">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Recent Articles</h2>
          <div className="space-y-6">
            {regularPosts.map((post, index) => (
              <Card key={index} className="shadow-card border-0 hover-scale group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                    <Button variant="outline" className="group/btn flex-shrink-0">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-secondary/30 p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get weekly insights on maintainable development practices, architecture patterns, 
            and specification-driven development delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-input rounded-md bg-background flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;