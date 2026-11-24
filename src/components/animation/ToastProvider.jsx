import React from 'react';
import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={12}
      containerClassName="z-50"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#070E1A',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '14px 18px',
          borderRadius: '16px',
          fontSize: '13px',
          fontWeight: 600,
          boxShadow: '0 20px 40px -15px rgba(2, 6, 18, 0.65)',
        },
        success: {
          iconTheme: {
            primary: '#0098D4',
            secondary: '#ffffff',
          },
        },
        error: {
          iconTheme: {
            primary: '#EF4444',
            secondary: '#ffffff',
          },
        },
      }}
    />
  );
}
