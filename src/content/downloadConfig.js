// Real store URLs are injected at build time via environment variables.
// Never hardcode production store links here — see .env.example.

export const downloadConfig = {
  android: import.meta.env.VITE_ANDROID_DOWNLOAD_URL || 'https://campuslyt.in/download-app/',
  ios: import.meta.env.VITE_IOS_DOWNLOAD_URL || '',
};

export const isAndroidAvailable = Boolean(downloadConfig.android);
export const isIOSAvailable = Boolean(downloadConfig.ios);
