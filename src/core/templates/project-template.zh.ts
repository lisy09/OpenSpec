import type { ProjectContext } from './project-template.js';

export const projectTemplate_zh = (context: ProjectContext = {}) => `# ${context.projectName || '项目'} 上下文

## 目标
${context.description || '[描述项目的目标与价值]'}

## 技术栈
${context.techStack?.length ? context.techStack.map(tech => `- ${tech}`).join('\n') : '- [列出主要技术]\n- [例如：TypeScript, React, Node.js]'}

## 项目约定

### 代码风格
[说明代码风格、格式化规则与命名约定]

### 架构模式
[记录架构决策与模式]

### 测试策略
[说明测试类型、覆盖率要求与执行方式]

### Git 工作流
[描述分支策略与提交规范]

## 领域背景
[补充 AI 助手理解所需的领域知识]

## 重要约束
[列出技术、业务或合规方面的约束]

## 外部依赖
[记录关键外部服务、API 或系统]
`;
