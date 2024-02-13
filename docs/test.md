## Work Branches
There are 5 types of working branches: feature, bugfix, release, hotfix and demo.

|No|Name|Purpose| Branched from | Merge targets | Name example | Env | Merge policy |
|-|-|-|-|-|-|-|-|
|1 | demo | Ongoing development branch, use to demo the sprint development | master | none | demo/sprint-9 | dev, QA | merge commit |
| 2 | feature | Adding new bussiness logic features | master | demo, release | feature/IOT-1234-add-stuff | dev | merge commit |
| 3	| bugfix | Fixing bugs reported by QA team on QA envs and bugs found by devs in DEV env | master, release | demo, release | bugfix/IOT-1234-repaired-stuff | dev | merge commit |
| 3 | hotfix | Fixing bugs reported by users on PROD | master | release | hotfix/IOT-1234-repaired-stuff | dev, QA | merge commit |
| 4 | release | Preparing and stabilizing releases of code increments to PROD | master | master | release/sprint-9 | dev, QA, Pre-Prod |merge commit |
