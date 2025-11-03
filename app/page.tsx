'use client';

import { useState } from 'react';

type Dialogue = {
  speaker: string;
  content: string;
  aside?: string;
};

type Scene = {
  title: string;
  lines: Dialogue[];
};

const scenes: Scene[] = [
  {
    title: 'Scene 1: The Trap is Sprung',
    lines: [
      {
        speaker: 'Naruto',
        aside: '(panicking internally)',
        content: 'Oh no. Oh no. That?s a binding contract in girl language.',
      },
      {
        speaker: 'Hinata',
        aside: '(sweet smile that hides danger)',
        content: 'So? you?ll do anything, right?',
      },
      {
        speaker: 'Naruto',
        content:
          'Uh? I mean? anything anything? Or like? anything as in? homework-related anything?',
      },
      {
        speaker: 'Hinata',
        content: 'You didn?t specify.',
        aside: 'smiles like Neji just got replaced by a demon lawyer',
      },
    ],
  },
  {
    title: 'Scene 2: The ?Favor?',
    lines: [
      {
        speaker: 'Cutaway',
        content: 'Kiba, Shino, and half of Team 10 peek around a corner.',
      },
      { speaker: 'Kiba', content: 'Yo, she?s finally cashing in that debt. Man?s doomed.' },
      {
        speaker: 'Shino',
        content: 'Observation: Naruto?s social naivety is about to cost him his dignity.',
      },
      { speaker: 'Kiba', content: 'You mean his freedom.' },
      { speaker: 'Cutaway', content: 'Meanwhile ? back at the ambush site.' },
      { speaker: 'Hinata', content: 'Okay Naruto, here?s what I want.' },
      { speaker: 'Naruto', content: 'Oh boy.' },
      { speaker: 'Hinata', content: 'Pretend to be my boyfriend for a week.' },
      { speaker: 'Naruto', content: 'Wha?WHAT?! WHY?!' },
      { speaker: 'Hinata', content: 'Ino won?t stop teasing me about not having a boyfriend.' },
      { speaker: 'Naruto', content: 'So I?m just? what? your decoy?' },
      { speaker: 'Hinata', content: 'No. My promise-fulfillment partner.' },
      { speaker: 'Naruto', content: '...That sounds legally terrifying.' },
    ],
  },
  {
    title: 'Scene 3: The Chaos Multi',
    lines: [
      { speaker: 'Ino', content: 'Hold up ? boyfriend audit time.' },
      { speaker: 'Kiba', aside: '(whispering to Shino)', content: 'This is better than the Chunin Exams.' },
      { speaker: 'Shikamaru', content: 'Troublesome... but statistically inevitable.' },
      { speaker: 'Hinata', content: 'Rule one: Hand-holding during public encounters.' },
      { speaker: 'Naruto', aside: '(turning very red)', content: 'Public... how public?' },
      { speaker: 'Ino', content: 'Very. We start at Ichiraku. Tonight.' },
      { speaker: 'Teuchi (off-screen)', content: 'We do couples discounts now?' },
      { speaker: 'Naruto', content: 'This escalated faster than my Rasengan.' },
    ],
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const total = scenes.length;
  const scene = scenes[index];

  return (
    <main className="container">
      <div className="header">
        <div className="title">Naruto ? Hinata ? Promise-Fulfillment Partners</div>
        <span className="badge">Web short ? 3 scenes</span>
      </div>

      <section className="card">
        <header className="scene-head">
          <div className="scene-title">{scene.title}</div>
          <div className="scene-steps" aria-label="scene progress">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className={"step" + (i === index ? ' active' : '')} />
            ))}
          </div>
        </header>

        <div className="content">
          {scene.lines.map((l, i) => (
            <div key={i} className="line">
              <div className="meta">
                <span className="speaker">{l.speaker}</span>
                {l.aside ? <span className="aside"> &nbsp;{l.aside}</span> : null}
              </div>
              <div>{l.content}</div>
            </div>
          ))}
        </div>

        <footer className="actions">
          <button
            className="button ghost"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            aria-label="Previous scene"
          >
            ? Previous
          </button>
          <button
            className={"button primary"}
            onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
            disabled={index === total - 1}
            aria-label="Next scene"
          >
            Next ?
          </button>
        </footer>
      </section>

      <p className="footer-note">Fandom tribute. Non-commercial fan work.</p>
    </main>
  );
}
