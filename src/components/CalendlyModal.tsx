import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Book a Demo</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full">
          <iframe
            src="https://calendly.com/"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a Demo"
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
