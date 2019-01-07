import { Injectable } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  private config: Microsoft.ApplicationInsights.IConfig = {

  };

  logPageView(name?: string,
    url?: string,
    properties?: any,
    measurements?: any,
    duration?: number) {
      AppInsights.trackPageView(name, url, properties, measurements, duration);
    }

  logEvent(name: string, properties?: any, measurements?: any) {
    AppInsights.trackEvent(name, properties, measurements);
  }

  logTrace(message: string, properties?: any, severityLevel?: any) {
    AppInsights.trackTrace(message, properties, severityLevel);
  }

  logException(e: any) {
    AppInsights.trackException(e);
  }

  constructor() {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
  }
}