import type { SlashCommandId } from './slash-command-templates.js';

const baseGuardrails = `**防护规则**
- 优先选择直接、最小可行的实现，仅在明确需要时增加复杂度。
- 将改动严格聚焦于请求的结果。
- 如需更多 OpenSpec 约定与说明，请参考 \`openspec/AGENTS.md\`（位于 \`openspec/\` 目录内）。`;

const proposalGuardrails = `${baseGuardrails}\n- 在编辑文件前，先识别不明确之处并提出必要的澄清问题。`;

const proposalSteps = `**步骤**
1. 阅读 \`openspec/project.md\`，执行 \`openspec list\` 与 \`openspec list --specs\`，并结合必要的代码/文档调研，识别信息缺口。
2. 选择唯一且动词开头的 \`change-id\`，在 \`openspec/changes/<id>/\` 下搭建 \`proposal.md\`、\`tasks.md\` 与（可选）\`design.md\`。
3. 将改动映射为具体能力/需求，对多范围改动拆分为若干规格差异并建立关联。
4. 当方案涉及多系统/新模式或需权衡时，在 \`design.md\` 记录关键架构决策与取舍。
5. 在 \`changes/<id>/specs/<capability>/spec.md\` 编写规格差异，使用 \`## ADDED|MODIFIED|REMOVED Requirements\`，且每个需求包含至少一个 \`#### Scenario:\`。
6. 在 \`tasks.md\` 中列出可验证的小步骤，包含测试与并行/依赖关系。
7. 使用 \`openspec validate <id> --strict\` 校验并修复所有问题后再提交。`;

const proposalReferences = `**参考**
- 失败时可通过 \`openspec show <id> --json --deltas-only\` 或 \`openspec show <spec> --type spec\` 检查详情。
- 在撰写新需求前，使用 \`rg -n "Requirement:|Scenario:" openspec/specs\` 搜索现有需求。
- 使用 \`rg\`、\`ls\` 或直接阅读文件确保提案与实现现状一致。`;

const applySteps = `**步骤**
将 \`tasks.md\` 作为待办逐项完成：
1. 阅读 \`changes/<id>/proposal.md\`、\`design.md\`（如有）与 \`tasks.md\` 明确范围与验收标准。
2. 逐步实现，保持改动最小化并聚焦目标。
3. 在确认全部完成前不要更新任务状态。
4. 完成后更新任务勾选，使其准确反映实际完成情况。
5. 在需要更多上下文时使用 \`openspec list\` 或 \`openspec show <item>\`。`;

const applyReferences = `**参考**
- 实施过程中，如需更多上下文，可使用 \`openspec show <id> --json --deltas-only\`。`;

const archiveSteps = `**步骤**
1. 确认需要归档的 change-id：若无法唯一确定，先通过 \`openspec list\` 与沟通确认。
2. 使用 \`openspec show <id>\` 确认变更存在、未归档且已满足归档条件。
3. 运行 \`openspec archive <id> --yes\` 完成归档（仅工具类改动可使用 \`--skip-specs\`）。
4. 检查输出确认规格已更新且变更位于 \`changes/archive/\`。
5. 使用 \`openspec validate --strict\` 复核，必要时 \`openspec show <id>\` 查看详情。`;

const archiveReferences = `**参考**
- 使用 \`openspec list\` 确认 change-id。
- 使用 \`openspec list --specs\` 检查刷新后的规格并处理校验问题。`;

const bodies: Record<SlashCommandId, string> = {
  proposal: [proposalGuardrails, proposalSteps, proposalReferences].join('\n\n'),
  apply: [baseGuardrails, applySteps, applyReferences].join('\n\n'),
  archive: [baseGuardrails, archiveSteps, archiveReferences].join('\n\n'),
};

export function getSlashCommandBodyZh(id: SlashCommandId): string {
  return bodies[id];
}
