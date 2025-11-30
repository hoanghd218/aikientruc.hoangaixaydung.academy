# Component Tree Structure

## Before Refactoring
```
ContentSections.jsx (309 lines)
├── Features() - lines 4-114
│   ├── FeaturesHeader (inline)
│   ├── PainPointCard[] (inline)
│   └── ProcessComparison (inline)
├── Curriculum() - lines 116-157
│   └── CurriculumModule[] (inline)
└── Instructor() - lines 159-305
    ├── InstructorHeader (inline)
    ├── InstructorProfileImage (inline)
    ├── InstructorContent (inline)
    ├── InstructorStats (inline)
    └── InstructorStatCard[] (inline)
```

## After Refactoring
```
ContentSections.jsx (3 lines - re-exports only)
│
├── Features/ (4 files)
│   ├── index.jsx (main container)
│   ├── FeaturesHeader.jsx
│   ├── PainPointCard.jsx
│   └── ProcessComparison.jsx
│
├── Curriculum/ (2 files)
│   ├── index.jsx (main container)
│   └── CurriculumModule.jsx
│
└── Instructor/ (6 files)
    ├── index.jsx (main container)
    ├── InstructorHeader.jsx
    ├── InstructorProfileImage.jsx
    ├── InstructorContent.jsx
    ├── InstructorStats.jsx
    └── InstructorStatCard.jsx
```

## Import Hierarchy

### App.jsx
```
App.jsx
└── import { Features, Curriculum, Instructor } from './components/ContentSections'
    │
    ├── Features (Features/index.jsx)
    │   ├── FeaturesHeader
    │   ├── PainPointCard[] (Features/PainPointCard.jsx)
    │   └── ProcessComparison (Features/ProcessComparison.jsx)
    │
    ├── Curriculum (Curriculum/index.jsx)
    │   └── CurriculumModule[] (Curriculum/CurriculumModule.jsx)
    │
    └── Instructor (Instructor/index.jsx)
        ├── InstructorHeader (Instructor/InstructorHeader.jsx)
        ├── InstructorProfileImage (Instructor/InstructorProfileImage.jsx)
        └── InstructorContent (Instructor/InstructorContent.jsx)
            ├── InstructorStats (Instructor/InstructorStats.jsx)
            │   └── InstructorStatCard[] (Instructor/InstructorStatCard.jsx)
```

## File Statistics

| Metric | Before | After |
|--------|--------|-------|
| Total Files | 1 | 13 |
| Largest File | 309 lines | ~50 lines |
| Lines of Code | 309 | 309 (same) |
| Components | 7 | 13 |
| Avg Lines/Component | 44 | 24 |

## Component Responsibilities

| Component | Size | Purpose |
|-----------|------|---------|
| FeaturesHeader | ~20 lines | Display section header with badge |
| PainPointCard | ~35 lines | Render individual pain point cards |
| ProcessComparison | ~30 lines | Show before/after process comparison |
| CurriculumModule | ~10 lines | Render single curriculum module |
| InstructorHeader | ~25 lines | Display instructor section header |
| InstructorProfileImage | ~35 lines | Render profile image with badge |
| InstructorContent | ~45 lines | Display bio, description, and stats |
| InstructorStats | ~35 lines | Grid layout for stat cards |
| InstructorStatCard | ~15 lines | Individual stat card display |


