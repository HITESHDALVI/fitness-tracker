/// README.md
# Fitness Tracker

This repository is a minimal Expo React Native app implementing fitness app assignment.

Note: A screen recording of the app has been added to this repository for quick reference.
video file : appVideo.mov

## Screen Overview
1. Welcome Screen
2. User Info Screen
  -> Step-by-step profile setup with progress indicator
  Form inputs: Name, Age, Phone
  Radio button groups for Gender and Activity Level
  Smart validation with fixed bottom button
3. Confirmation Screen
4. Dashboard
  ->Daily greeting with circular progress indicator
  "X of Y goals completed" summary
  Quick stats: Current streak, weekly average, next goals
  Wellness goals in card format: 🏃 Move, 🍽 Eat, 😌 Calm
  Quick actions grid: Progress, Risk-o-meter
  Daily motivation section
5. Goal Cards Component
  -> Smart auto-assigned wellness icons
  Visual progress bars and completion badges
  Goal details: title, description, target
  Action buttons: "Mark Complete" ↔ "Completed", "Swap"
6. Progress Screen
  -> Against Plan Tracking: Today/Week/Month vs targets
  Quick stats: Total completed, daily average, best streak, success rate
7. Risk-o-meter Screen
  ->Overall health risk assessment with color-coded levels
  Risk categories: Cardio ❤️, Metabolic ⚡, Musculoskeletal 🦴
  Personalized recommendations and actionable health tips

## Features Implemented
1. Onboarding Flow

First-time users complete onboarding with name, email, and daily goal preferences.

Uses AsyncStorage to persist data.

Returning users skip onboarding and land on the dashboard directly.

2. Dashboard Screen

Displays user’s personalized greeting and active goals.

Simple cards show each goal with its target frequency.

Progress tracker shows completion counts.

3. Goal Completion Tracking

Users can mark goals as completed (e.g., “Workout done”).

Completed count persists in AsyncStorage and updates instantly.

Simulates habit-forming experience with streak-like progress.

4. Persistent Local Storage

User profile & goals stored in AsyncStorage.

Ensures data is available even after app restarts.

Includes helper functions (storage/profile.ts, storage/goals.ts) for clean data handling.

5. Reusable Components

GoalCard → clean card layout for goals.

ProgressBar → simple progress indicator with dynamic width.

All components styled with React Native StyleSheet for consistency.

## Tech Stack

React Native (Expo SDK 51) → cross-platform mobile app.

TypeScript → type safety & maintainability.

React Navigation (Native Stack) → navigation between screens.

AsyncStorage → persistent local storage.

React Native Reanimated → ready for animations.


## User Flow

Open app (first time) → Onboarding form (enter name, email, select goals).

Save profile → Navigates to Dashboard.

Dashboard → Shows active goals with progress bars.

Tap a goal → Opens detail screen → mark completions.

Return later → Data persists (profile & goals remembered).
## How to run
1. Install Expo CLI if not already: `npm install -g expo-cli`
2. Clone the repo or copy files.
3. `npm install` or `yarn`
4. `expo start` and open in Expo Go or a simulator using `npm run android` or `npm run ios`.

---

## Scaling v0 → v1

Replace local state with a backend API (Node.js/Express or Firebase).

Add real activity tracking (via HealthKit/Google Fit integrations).

Implement authentication and personalized plans.

Expand AI features:

AI-suggested goal swaps (e.g., adjust workouts/meals).

Predictive health risks with user inputs + wearable data.

Enhance UI with charts (weekly/monthly trends).
