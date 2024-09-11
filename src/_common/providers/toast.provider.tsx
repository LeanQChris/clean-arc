"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../../components/ui/toast/toast"
import { useEffect, useState } from "react";

export function Toaster() {
  const { toasts } = useToast()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering the Toaster during SSR
  }


  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="hero-gradient">
            <div className="grid gap-1">
              {title && <ToastTitle className="text-white lexend font-bold text-xl">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-white lexend font-semibold text-lg">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
