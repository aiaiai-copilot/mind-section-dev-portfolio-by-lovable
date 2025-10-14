import developerPhoto from '@/assets/developer-photo.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/data/blogPosts';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Blog = () => {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const categories = ["All", "Case Study", "Methodology", "API Design", "Frontend"];
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const allRegularPosts = blogPosts
    .filter(post => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const regularPosts = showAllPosts ? allRegularPosts : allRegularPosts.slice(0, 3);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={developerPhoto} 
              alt="Developer Photo" 
              className="w-48 md:w-56 h-auto rounded-lg border-4 border-primary/20 shadow-elegant"
            />
          </div>
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
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="p-0 h-auto group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" className="group/btn flex-shrink-0">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          {allRegularPosts.length > 3 && (
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPosts(!showAllPosts)}
                className="group/btn"
              >
                {showAllPosts ? 'Show Less' : 'View All Articles'}
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAllPosts ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        {/* <section className="bg-secondary/30 p-8 md:p-12 rounded-2xl text-center">
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
        </section> */}
      </div>
    </div>
  );
};

export default Blog;