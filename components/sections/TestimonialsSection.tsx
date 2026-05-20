"use client";

import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/lib/content/portfolio";
import { SectionShell } from "@/components/motion/SectionShell";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      label="Testimonials"
      title="Trusted by leaders who ship"
      className="bg-surface/30"
    >
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.author} className="md:basis-1/2">
              <blockquote className="glass flex h-full flex-col justify-between rounded-2xl p-8 md:p-10">
                <p className="font-display text-xl leading-relaxed md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="font-medium">{t.author}</p>
                  <p className="text-sm text-muted">
                    {t.role}, {t.company}
                  </p>
                </footer>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-1/2 border-border" />
        <CarouselNext className="right-0 translate-x-1/2 border-border" />
      </Carousel>
    </SectionShell>
  );
}
