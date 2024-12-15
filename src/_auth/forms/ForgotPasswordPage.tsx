import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";

import { ForgotPasswordValidation } from "@/lib/validation";
import { useForgotPassword } from "@/lib/react-query/queries";

const ForgotPasswordPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutateAsync: forgotPassword, isLoading: isSendingReset } = useForgotPassword();

  const form = useForm<z.infer<typeof ForgotPasswordValidation>>({
    resolver: zodResolver(ForgotPasswordValidation),
    defaultValues: {
      email: "",
    },
  });

  const handleForgotPassword = async (data: z.infer<typeof ForgotPasswordValidation>) => {
    try {
      await forgotPassword(data);
      toast({ title: "Password reset email sent. Please check your inbox." });
      form.reset();
      navigate("/sign-in");
    } catch (error) {
      toast({ title: "Failed to send password reset email. Please try again." });
      console.log({ error });
    }
  };

  return (
    <div className="sm:w-420 flex-center flex-col">
      <img src="/assets/images/iman1.png" alt="logo" width={180} height={50} />

      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
        Forgot Password
      </h2>
      <p className="text-light-3 small-medium md:base-regular mt-2">
        Enter your email to receive a password reset link.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleForgotPassword)}
          className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary">
            {isSendingReset ? (
              <div className="flex-center gap-2">
                <Loader /> Sending...
              </div>
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordPage;