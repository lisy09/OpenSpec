export const agentsTemplate_zh = `# OpenSpec 使用说明

面向在本项目中使用 OpenSpec 的 AI 编码助手。

## TL;DR 快速清单

- 搜索现有工作：\`openspec spec list --long\`、\`openspec list\`
- 确定范围：新增能力 或 修改现有能力
- 选择唯一的 \`change-id\`（kebab-case，动词开头：add-/update-/remove-/refactor-）
- 搭建提案骨架：\`proposal.md\`、\`tasks.md\`、（如需）\`design.md\` 与规格差异
- 编写规格差异：使用 \`## ADDED|MODIFIED|REMOVED Requirements\`，且每个需求至少包含一个 \`#### Scenario:\`
- 严格校验：\`openspec validate <id> --strict\`
- 获批后再开始实现

## 三阶段工作流

### 阶段 1：创建变更
当需要新增功能、引入破坏性变化、调整架构，或进行显著性能/安全改动时，请先创建提案（proposal）。

建议触发语（示例）：
- “帮我创建一个变更提案”
- “请规划一个改动方案”
- “我想创建一份规格提案”

可直接跳过提案的场景：
- Bug 修复（恢复既定行为）
- 拼写/格式/注释修正
- 非破坏性的依赖更新
- 针对既有行为的测试

步骤：
1. 阅读 \`openspec/project.md\`，执行 \`openspec list\` 与 \`openspec list --specs\` 获取上下文。
2. 在 \`openspec/changes/<id>/\` 下创建 \`proposal.md\`、\`tasks.md\`、按需 \`design.md\`，并为相关 capability 建立规格差异。
3. 在 \`changes/<id>/specs/<capability>/spec.md\` 中使用 \`## ADDED|MODIFIED|REMOVED Requirements\`，每个需求至少包含一个 \`#### Scenario:\`。
4. 运行 \`openspec validate <id> --strict\` 并修复所有问题后再提交审阅。

### 阶段 2：实现变更
将 \`tasks.md\` 作为待办清单逐项完成，保持改动最小化、聚焦所需结果，并在全部完成后更新勾选状态以反映真实进度。

### 阶段 3：归档变更
部署后请单独创建 PR 进行归档：
- 将 \`changes/[name]/\` 移动到 \`changes/archive/YYYY-MM-DD-[name]/\`
- 如有能力变更，更新 \`specs/\`
- 工具/文档类改动可使用 \`openspec archive <change-id> --skip-specs --yes\`
- 使用 \`openspec validate --strict\` 确认归档后的变更通过校验

## 目录结构

\"\"\"
openspec/
├── project.md              # 项目上下文与约定
├── specs/                  # 当前真实状态（已实现能力）
│   └── [capability]/
│       ├── spec.md         # 需求与场景
│       └── design.md       # 技术设计
├── changes/                # 提案（计划的变更）
│   ├── [change-name]/
│   │   ├── proposal.md
│   │   ├── tasks.md
│   │   ├── design.md       # 可选
│   │   └── specs/          # 规格差异
│   │       └── [capability]/
│   │           └── spec.md
│   └── archive/            # 已完成变更
\"\"\"

## 快速参考

\"\"\"bash
# 常用命令
openspec list                  # 列出进行中的变更
openspec list --specs          # 列出现有规格
openspec show [item]           # 显示变更或规格详情
openspec validate [item] --strict

# 归档
openspec archive <change-id> [--yes|-y]
\"\"\"

提示：更多规范与示例可通过 \`openspec show\`/\`openspec validate\` 查看，或直接阅读本目录中的文件。
`;
