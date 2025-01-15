import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "./ui/use-toast";

export function HireModal() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Send email using mailto
    window.location.href = `mailto:brianonchezz@gmail.com?subject=Job Opportunity from ${data.name}&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you soon!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#FFB6A3] hover:bg-[#FFB6A3]/90 text-black">Hire Me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#1A1A1A] text-white">
        <DialogHeader>
          <DialogTitle className="text-[#FFB6A3]">Let's Work Together</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              className="bg-[#121212] border-[#FFB6A3]/20"
              required
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              className="bg-[#121212] border-[#FFB6A3]/20"
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              className="bg-[#121212] border-[#FFB6A3]/20 min-h-[100px]"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#FFB6A3] hover:bg-[#FFB6A3]/90 text-black">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}