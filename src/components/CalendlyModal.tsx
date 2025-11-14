import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] md:max-w-4xl h-[90vh] p-0 gap-0 bg-background border-border overflow-hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-background border border-border shadow-lg transition-all hover:scale-110"
        >
          <X className="h-4 w-4" />
        </button>
        <iframe
          src="https://calendly.com/nebulahub-info/30min"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Book a Demo"
          className="w-full h-full"
        />
      </DialogContent>
    </Dialog>
  );
};
