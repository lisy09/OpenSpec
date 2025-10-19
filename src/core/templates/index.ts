import { agentsTemplate } from './agents-template.js';
import { agentsTemplate_zh } from './agents-template.zh.js';
import { projectTemplate, ProjectContext } from './project-template.js';
import { projectTemplate_zh } from './project-template.zh.js';
import { claudeTemplate } from './claude-template.js';
import { agentsRootStubTemplate } from './agents-root-stub.js';
import { getSlashCommandBody, SlashCommandId } from './slash-command-templates.js';
import { getSlashCommandBodyZh } from './slash-command-templates.zh.js';
import { LanguageCode } from '../config.js';

export interface Template {
  path: string;
  content: string | ((context: ProjectContext) => string);
}

export class TemplateManager {
  private static currentLanguage: LanguageCode = 'en';

  static getTemplates(context: ProjectContext = {}, language: LanguageCode = 'en'): Template[] {
    this.currentLanguage = language ?? 'en';
    return [
      {
        path: 'AGENTS.md',
        content: this.getAgentsTemplate(language)
      },
      {
        path: 'project.md',
        content: this.getProjectTemplate(language, context)
      }
    ];
  }

  static getClaudeTemplate(): string {
    return claudeTemplate;
  }

  static getAgentsStandardTemplate(): string {
    return agentsRootStubTemplate;
  }

  static getSlashCommandBody(id: SlashCommandId): string {
    return getSlashCommandBody(id);
  }

  // Language-aware helpers
  private static getAgentsTemplate(language: LanguageCode): string {
    if (language === 'zh') {
      return agentsTemplate_zh;
    }
    return agentsTemplate;
  }

  private static getProjectTemplate(language: LanguageCode, context: ProjectContext): string {
    if (language === 'zh') {
      return projectTemplate_zh(context);
    }
    return projectTemplate(context);
  }

  static getSlashCommandBodyLang(id: SlashCommandId, language: LanguageCode = 'en'): string {
    if (language === 'zh') return getSlashCommandBodyZh(id);
    return getSlashCommandBody(id);
  }

  static setLanguage(language: LanguageCode): void {
    this.currentLanguage = language;
  }

  static getLanguage(): LanguageCode {
    return this.currentLanguage;
  }
}

export { ProjectContext } from './project-template.js';
export type { SlashCommandId } from './slash-command-templates.js';
