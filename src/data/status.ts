/** ISO date (YYYY-MM-DD) — edit when you publish a status refresh. */
export const STATUS_LAST_UPDATED = '2026-11-17';

export type StatusTone = 'green' | 'red' | 'blue';

export interface StatusLegendItem {
  tone: StatusTone;
  label: string;
  meaning: string;
}

export interface StatusPatchEntry {
  build: string;
  when: string;
  summary: string;
}

export interface StatusCheatUpdateEntry {
  when: string;
  summary: string;
  /** Set false when the changelog line is published (remove TODO from copy). */
  todo?: boolean;
}

/** Current store state. Green = updated and usable. */
export const STATUS_TONE: StatusTone = 'green';

export const STATUS_TONE_LABELS: Record<StatusTone, string> = {
  green: 'Ready',
  blue: 'Pending confirmation',
  red: 'Paused',
};

export function getStatusLabel(tone: StatusTone = STATUS_TONE): string {
  return STATUS_TONE_LABELS[tone];
}

/** Active state label for /status/ header and pills. */
export const STATUS_LABEL = getStatusLabel();

export const STATUS_EVRMA_BUILD = 'Pending confirmation';
export const STATUS_EVRMA_BUILD_RELEASE = 'PC';

export const STATUS_REQUIREMENTS = [
  'Windows 10 or 11 (64-bit)',
  'Call of Duty: Black Ops 7',
  'RICOCHET enabled',
] as const;

export const STATUS_LEGEND: StatusLegendItem[] = [
  { tone: 'green', label: 'Ready', meaning: 'The current build is updated.' },
  { tone: 'blue', label: 'Pending confirmation', meaning: 'Current compatibility has yet to be confirmed.' },
  { tone: 'red', label: 'Paused', meaning: "Not updated, don't launch." },
];

/** Black Ops 7 client notes (newest first). */
export const STATUS_GAME_PATCHES: StatusPatchEntry[] = [
  {
    build: 'Season 06 Patch',
    when: '5 Nov 2026',
    summary: 'Multiplayer weapon tuning for Peacekeeper Mk1, M10 Breacher, Warden 308 and Siren.',
  },
  {
    build: 'Season 06 Patch',
    when: '14 Oct 2026',
    summary: 'Final Multiplayer weapon balance pass (shotguns and TR51 Para nerfed, underused weapons buffed); Zombies bug fixes.',
  },
  {
    build: 'Season 06 Patch',
    when: '7 Oct 2026',
    summary: 'Zombies bug and exploit fixes, including Void Claw reuse and XM325 ammo.',
  },
  {
    build: 'Season 06 Patch',
    when: '30 Sep 2026',
    summary: 'VMP attachments unrestricted in Ranked Play; boss fight, save/load and collision fixes.',
  },
  {
    build: 'Season 06 Patch',
    when: '24 Sep 2026',
    summary: 'VMP SMG unrestricted in Ranked Play; Prestige UI and Rex Infernus fixes.',
  },
  {
    build: 'Season 06 Launch',
    when: '16 Sep 2026',
    summary: 'The Haunting event, new Quantum map, rethemed Bloodstead, four new weapons, Ranked SR changes, and the Tenshu Zombies map.',
  },
  {
    build: 'Season 05 Reloaded',
    when: '2 Sep 2026',
    summary: 'C-4 double-tap fix, Golden Armor tracking update, stability improvements.',
  },
  {
    build: 'Season 05 Reloaded',
    when: '28 Aug 2026',
    summary: 'Free Run: Descent fixes, Rex Infernus out-of-bounds patches, Endgame Fear spawn fix.',
  },
  {
    build: 'Season 05 Reloaded Launch',
    when: '19 Aug 2026',
    summary: 'Turbo Tilt map, Mace melee, Cranked Moshpit, Rex Infernus map, weapon tuning.',
  },
];

export const STATUS_BAN_RISK =
  'Third-party tools for Black Ops 7 can violate game terms and trigger RICOCHET action. You use this software at your own risk, including possible account or hardware restrictions.';

/** @deprecated Use STATUS_GAME_PATCHES */
export const STATUS_GAME_NOTES: never[] = [];

/** @deprecated Use STATUS_CHEAT_UPDATES */
export const STATUS_RECENT_UPDATES: never[] = [];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Format YYYY-MM-DD as "10 Nov 2026". */
export function formatStatusUpdated(isoDate: string = STATUS_LAST_UPDATED): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const label = MONTHS[month - 1];
  if (!label) return isoDate;
  return `${day} ${label} ${year}`;
}

/** Muted meta beside the status pill. */
export function formatLastUpdatedLine(isoDate: string = STATUS_LAST_UPDATED): string {
  return `Last updated ${formatStatusUpdated(isoDate)}`;
}

/** Pill label from current STATUS_TONE. */
export function formatStatusPillLabel(tone: StatusTone = STATUS_TONE): string {
  return getStatusLabel(tone);
}

/** Loader changelog for BO7 Cheats (newest first). */
export function getStatusCheatUpdates(): StatusCheatUpdateEntry[] {
  return [];
}