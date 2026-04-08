import React from "react";
import BookingModal from "./BookingModal";
import { Button } from "./ui/button";

interface BookingButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "xs" | "icon-xs" | "icon-sm" | "icon-lg";
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
}

export default function BookingButton({ children, ...props }: BookingButtonProps) {
  return (
    <BookingModal>
      <Button {...props}>
        {children}
      </Button>
    </BookingModal>
  );
}
