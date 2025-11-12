import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  // TODO: Replace with your actual Calendly URL
  // Example: https://calendly.com/your-username/30min
  const calendlyUrl = 'YOUR_CALENDLY_URL_HERE';
  
  const isConfigured = calendlyUrl !== 'YOUR_CALENDLY_URL_HERE';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Book a Demo</DialogTitle>
          {!isConfigured && (
            <DialogDescription>
              Schedule a personalized demo with our team
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="w-full h-full flex items-center justify-center">
          {isConfigured ? (
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a Demo"
              className="rounded-lg"
            />
          ) : (
            <div className="text-center space-y-6 p-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <ExternalLink className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Calendly Integration Required</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  To enable demo booking, please update the Calendly URL in the CalendlyModal component
                  with your actual Calendly scheduling link.
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 max-w-xl mx-auto text-left">
                <p className="text-sm font-mono mb-2">src/components/CalendlyModal.tsx</p>
                <code className="text-xs text-muted-foreground block">
                  const calendlyUrl = 'https://calendly.com/your-username/30min';
                </code>
              </div>
              <Button
                onClick={() => window.open('https://calendly.com/', '_blank')}
                className="gradient-primary"
              >
                Go to Calendly
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
