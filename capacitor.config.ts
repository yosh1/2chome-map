import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.map.2chome',
  appName: '2chome-map',
  webDir: 'out',
  bundledWebRuntime: false,
  ios: {
    scrollEnabled: false,
    allowsLinkPreview: false
  }
};

export default config;