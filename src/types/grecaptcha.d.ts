// Tipos globales mínimos para grecaptcha (v2 y Enterprise)
// Evita errores de TS cuando se accede a métodos en el objeto global.

declare global {
  interface GrecaptchaEnterpriseAPI {
    render(container: HTMLElement | string, parameters: never): number;
    reset(widgetId?: number): void;
    execute(siteKey: string, options?: { action?: string }): Promise<string>;
    getResponse(widgetId?: number): string;
    ready(cb: () => void): void;
  }

  interface GrecaptchaAPI {
    render(container: HTMLElement | string, parameters: never): number;
    reset(widgetId?: number): void;
    execute(widgetId: number): void;
    getResponse(widgetId?: number): string;
    ready(cb: () => void): void;
    enterprise?: GrecaptchaEnterpriseAPI;
  }

  // Declaración del global inyectado por el script de reCAPTCHA
  var grecaptcha: GrecaptchaAPI;
}

export {};