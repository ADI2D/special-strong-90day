const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Add grand-openings subcategory to special-strong if not exists
const ssCategory = data.categories.find(c => c.id === 'special-strong');
if (ssCategory && !ssCategory.subcategories.find(s => s.id === 'grand-openings')) {
  ssCategory.subcategories.push({ id: 'grand-openings', name: 'Grand Openings' });
}

// East Amherst NY Grand Opening - May 15, 2026
const goTasks = [
  {
    id: 'go-eastamherst-ny',
    title: 'East Amherst NY - Grand Opening Campaign',
    phase: 'phase-2',
    type: 'deliverable',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-05-15',
    dependencies: [],
    category: 'special-strong',
    subcategory: 'grand-openings',
    notes: 'Full GO campaign - 10 week timeline',
    subtasks: [
      'go-eastamherst-w10', 'go-eastamherst-w9', 'go-eastamherst-w8', 'go-eastamherst-w7',
      'go-eastamherst-w6', 'go-eastamherst-w5', 'go-eastamherst-w4', 'go-eastamherst-w3',
      'go-eastamherst-w2', 'go-eastamherst-w1', 'go-eastamherst-event', 'go-eastamherst-post'
    ]
  },
  {
    id: 'go-eastamherst-w10',
    title: 'Week 10: Clearance - Confirm event details',
    phase: 'phase-1',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-03-06',
    dependencies: [],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Confirm event date, time, location, theme, giveaways with franchise owner. Lock in writing.'
  },
  {
    id: 'go-eastamherst-w9',
    title: 'Week 9: Video Request from franchise owner',
    phase: 'phase-1',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-03-13',
    dependencies: ['go-eastamherst-w10'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: '30-sec video: funny, high-energy, mentions date/location/giveaways. For landing page + paid ads.'
  },
  {
    id: 'go-eastamherst-w8',
    title: 'Week 8: Soft Launch - Social media + email',
    phase: 'phase-1',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-03-20',
    dependencies: ['go-eastamherst-w9'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Soft announcements on social media and email lists.'
  },
  {
    id: 'go-eastamherst-w7',
    title: 'Week 7: Landing Page - Build & send to dev',
    phase: 'phase-1',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-03-27',
    dependencies: ['go-eastamherst-w9'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Duplicate GO template, update copy/video/images, create Google Doc with changes, send to dev.'
  },
  {
    id: 'go-eastamherst-w6',
    title: 'Week 6: Paid Ads Begin - Meta + Google',
    phase: 'phase-2',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-04-03',
    dependencies: ['go-eastamherst-w7'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Launch geo-targeted Meta + Google campaigns. Budget: $500 Facebook.'
  },
  {
    id: 'go-eastamherst-w5',
    title: 'Week 5: Automations - Email drip + text campaigns',
    phase: 'phase-2',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-04-10',
    dependencies: ['go-eastamherst-w7'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Email drip (announcement, reminders, see you soon). Text: signup, 24h before, 1h before. Test all.'
  },
  {
    id: 'go-eastamherst-w4',
    title: 'Week 4: Community Partnerships',
    phase: 'phase-2',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-04-17',
    dependencies: [],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Partner with local schools, therapy centers, churches, nonprofits. Reach parent support groups, Special Olympics, chamber.'
  },
  {
    id: 'go-eastamherst-w3',
    title: 'Week 3: PR & Media - Local news + Rebecca',
    phase: 'phase-2',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-04-24',
    dependencies: [],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Contact Rebecca for PR outreach: local news, community calendars, bloggers, influencers.'
  },
  {
    id: 'go-eastamherst-w2',
    title: 'Week 2: Direct Mail + QR Codes',
    phase: 'phase-2',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-05-01',
    dependencies: ['go-eastamherst-w7'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Send postcards ($1000 budget). Create QR code to landing page. Distribute flyers locally.'
  },
  {
    id: 'go-eastamherst-w1',
    title: 'Week 1: Final Push - Heavy promo',
    phase: 'phase-3',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-05-08',
    dependencies: [],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Heavy social media, email blasts, partnership promotions. Final countdown.'
  },
  {
    id: 'go-eastamherst-event',
    title: 'GO EVENT: East Amherst NY Grand Opening',
    phase: 'phase-3',
    type: 'milestone',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-05-15',
    dependencies: ['go-eastamherst-w1'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Event day! Full team involvement. Setter follow-up with attendees.'
  },
  {
    id: 'go-eastamherst-post',
    title: 'Post-GO: Follow-up & Remarketing',
    phase: 'phase-3',
    type: 'subtask',
    status: 'pending',
    owner: 'Alex',
    dueDate: '2026-05-22',
    dependencies: ['go-eastamherst-event'],
    category: 'special-strong',
    subcategory: 'grand-openings',
    parent: 'go-eastamherst-ny',
    notes: 'Thank you emails, social media recap, new member onboarding, retarget ads for engaged non-signups.'
  }
];

// Add tasks (avoid duplicates)
const existingIds = new Set(data.tasks.map(t => t.id));
for (const task of goTasks) {
  if (!existingIds.has(task.id)) {
    data.tasks.push(task);
  }
}

// Update lastUpdated
data.meta.lastUpdated = new Date().toISOString();

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Added East Amherst NY Grand Opening tasks to DAMB Plan');
