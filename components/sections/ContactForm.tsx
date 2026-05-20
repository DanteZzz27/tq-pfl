"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please share a bit more detail"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="glass rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <p className="font-display text-2xl">Message sent</p>
        <p className="mt-2 text-muted">I&apos;ll be in touch within 48 hours.</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" className="mt-2" {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-accent">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" className="mt-2" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-accent">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" className="mt-2" {...register("company")} />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" className="mt-2" {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-xs text-accent">{errors.message.message}</p>
        )}
      </div>
      {status === "error" && (
        <p className="text-sm text-accent">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
