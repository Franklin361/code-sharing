import { useToast } from '@/components/ui/toast/use-toast';

export const useCopy = () => {
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    try {
      await window.navigator.clipboard.writeText(text);
      toast({
        title: 'Code copied to your clipboard!',
        duration: 2000,
        class: 'toast-success',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'It was an error, try later',
        duration: 2000,
        class: 'toast-error',
      });
    }
  };

  return handleCopy;
};
