import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { showcaseProjects } from '@/data/showcaseProjects';

const ShowcaseViewer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find project by ID
  const project = showcaseProjects.find(p => p.id === id);
  
  // Build full URL: use previewUrl if available, otherwise build dynamically
  const showcaseUrl = project 
    ? (project.previewUrl || `${import.meta.env.VITE_BASE_URL || window.location.origin}${project.showcasePath}`)
    : null;

  if (!showcaseUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Showcase not found</h1>
          <Button onClick={() => navigate('/showcase')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Showcase
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with controls */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-14 px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/showcase')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Showcase
          </Button>
          
          <Button
            variant="outline"
            asChild
            className="gap-2"
          >
            <a href={showcaseUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Open in Full Window
            </a>
          </Button>
        </div>
      </div>

      {/* Iframe container */}
      <div className="flex-1 relative">
        <iframe
          src={showcaseUrl}
          className="absolute inset-0 w-full h-full border-0"
          title="Showcase Preview"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
};

export default ShowcaseViewer;
