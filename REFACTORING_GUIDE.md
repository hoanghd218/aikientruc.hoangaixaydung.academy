# Refactoring Guide: ContentSections Component

## What Changed?

The original `ContentSections.jsx` file (309 lines) has been split into organized, reusable components across three feature folders: **Features**, **Curriculum**, and **Instructor**.

## How to Use (No Breaking Changes!)

### Current Usage (Still Works!)
```javascript
// App.jsx - No changes needed!
import { Features, Curriculum, Instructor } from './components/ContentSections';

function App() {
  return (
    <>
      <Features />
      <Curriculum />
      <Instructor />
    </>
  );
}
```

### Alternative Usage (If you want direct imports)
```javascript
// Direct import from specific folders
import { Features } from './components/Features';
import { Curriculum } from './components/Curriculum';
import { Instructor } from './components/Instructor';

// Or import sub-components
import { PainPointCard } from './components/Features/PainPointCard';
import { CurriculumModule } from './components/Curriculum/CurriculumModule';
import { InstructorStatCard } from './components/Instructor/InstructorStatCard';
```

## Component Details

### Features Section

#### Features (`src/components/Features/index.jsx`)
Main Features container that orchestrates all feature-related components.

**Props:** None (contains hardcoded pain points data)

```javascript
import { Features } from './components/Features';

export default function App() {
  return <Features />;
}
```

#### FeaturesHeader (`src/components/Features/FeaturesHeader.jsx`)
Displays the section header with badge and headline.

**Props:** None

#### PainPointCard (`src/components/Features/PainPointCard.jsx`)
Individual card for each pain point.

**Props:**
```javascript
{
  title: string,           // Card title
  description: string,     // Card description
  image: string,          // Image URL
  icon: ReactElement      // Icon component from lucide-react
}
```

**Example:**
```javascript
<PainPointCard
  title="Sợ mất việc"
  description="AI đang thay đổi ngành kiến trúc..."
  image="/fear-job-loss.png"
  icon={<User className="h-6 w-6" />}
/>
```

#### ProcessComparison (`src/components/Features/ProcessComparison.jsx`)
Shows old vs new process comparison.

**Props:** None

---

### Curriculum Section

#### Curriculum (`src/components/Curriculum/index.jsx`)
Main Curriculum container with modules list.

**Props:** None (contains hardcoded modules data)

#### CurriculumModule (`src/components/Curriculum/CurriculumModule.jsx`)
Individual curriculum module item.

**Props:**
```javascript
{
  module: string  // Module name/description
}
```

**Example:**
```javascript
<CurriculumModule module="Module 1: Render ảnh ngoại thất" />
```

---

### Instructor Section

#### Instructor (`src/components/Instructor/index.jsx`)
Main Instructor container with all sections.

**Props:** None (contains hardcoded instructor data)

#### InstructorHeader (`src/components/Instructor/InstructorHeader.jsx`)
Section header with badge and title.

**Props:** None

#### InstructorProfileImage (`src/components/Instructor/InstructorProfileImage.jsx`)
Profile image with animated border and founder badge.

**Props:** None

#### InstructorContent (`src/components/Instructor/InstructorContent.jsx`)
Instructor bio, description, and stats.

**Props:** None

#### InstructorStats (`src/components/Instructor/InstructorStats.jsx`)
Grid container for stat cards.

**Props:** None (contains hardcoded stats data)

#### InstructorStatCard (`src/components/Instructor/InstructorStatCard.jsx`)
Individual stat card with icon and values.

**Props:**
```javascript
{
  icon: React.ComponentType,  // Icon component
  value: string,             // Main stat value
  label: string,             // Stat label
  colorClass: string,        // Tailwind color classes
  shadowClass: string        // Tailwind shadow classes
}
```

**Example:**
```javascript
<InstructorStatCard
  icon={User}
  value="8000+"
  label="Users BimSpeed"
  colorClass="from-blue-500/20 to-blue-600/10"
  shadowClass="shadow-blue-500/20"
/>
```

---

## Adding New Components

### To add a new pain point:
1. Add the data to `Features/index.jsx`
2. It will automatically render with `PainPointCard`

```javascript
// In Features/index.jsx
const painPoints = [
  // ... existing points
  {
    title: "New Pain Point",
    description: "Description here",
    image: "/image.png",
    icon: <IconComponent className="h-6 w-6" />
  }
];
```

### To customize an instructor stat:
Edit `Instructor/InstructorStats.jsx` directly:

```javascript
const stats = [
  {
    icon: User,
    value: "9000+",  // Updated value
    label: "Users BimSpeed",
    colorClass: "from-blue-500/20 to-blue-600/10",
    shadowClass: "shadow-blue-500/20",
    borderClass: "border-blue-500/30"
  },
  // ... more stats
];
```

---

## Updating Data

### Features Section
- **Pain Points:** Edit `src/components/Features/index.jsx` → `painPoints` array
- **Process Comparison:** Edit `src/components/Features/ProcessComparison.jsx`

### Curriculum Section
- **Modules:** Edit `src/components/Curriculum/index.jsx` → `modules` array

### Instructor Section
- **Stats:** Edit `src/components/Instructor/InstructorStats.jsx` → `stats` array
- **Bio:** Edit `src/components/Instructor/InstructorContent.jsx`

---

## Benefits of This Structure

✅ **Easier Maintenance** - Each component has a single responsibility  
✅ **Better Readability** - Smaller files are easier to understand  
✅ **Reusable** - Sub-components can be used independently  
✅ **Scalable** - Easy to add new sections or modify existing ones  
✅ **Testable** - Smaller components are easier to unit test  
✅ **Backward Compatible** - Existing imports still work!  

---

## Migration Timeline

**Phase 1 (Current):** Refactoring complete ✅
- All components split into organized folders
- Re-exports in main file for backward compatibility
- Build verified successfully

**Phase 2 (Future):** TypeScript Migration
- Add PropTypes or TypeScript for type safety
- Create component documentation

**Phase 3 (Future):** State Management
- Consider lifting data to context if needed
- Extract hardcoded data to configuration files

---

## File Size Improvements

| Metric | Before | After |
|--------|--------|-------|
| Main File Size | 309 lines | 3 lines |
| Largest Component | 309 lines | ~50 lines |
| Average Component Size | 309 lines | ~24 lines |
| Total Files | 1 | 13 |
| Maintainability | 🟡 Medium | 🟢 High |

---

## Support

For questions about the refactoring:
1. Check the component file structure: `src/components/{Features,Curriculum,Instructor}/`
2. Review component props and usage examples above
3. Check `COMPONENT_TREE.md` for visual hierarchy


