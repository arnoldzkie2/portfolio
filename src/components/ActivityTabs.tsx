'use client'

import { useId, useRef, useState } from 'react'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Icon } from '@/components/ui/icon'
import CodingActivityChart from './CodingActivityChart'
import WeeklyActivityAverage from './WeeklyActivityAverage'

const tabs = [
  {
    name: 'Wakapi',
    icon: faCode,
    unit: 'hrs',
    description: 'Daily coding hours',
    colors: ['#1a1e1b', '#475333', '#74883f', '#a1bd59', '#cef273'],
    endpoint: '/api/coding-activity',
    label: 'Arnold’s daily coding activity over the last 365 days. Hover over a day to see hours coded.',
    href: 'https://wakapi.dev/leaderboard',
    linkLabel: 'View Leaderboard',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    unit: 'contributions',
    description: 'Daily GitHub contributions',
    colors: ['#1a1e1b', '#50643a', '#7e9d4a', '#a5c961', '#cef273'],
    endpoint: '/api/github-activity',
    label: 'GitHub contributions for facelessuum over the past 365 days. Hover over a day to see the contribution count.',
    href: 'https://github.com/facelessuum',
    linkLabel: 'View GitHub profile',
  },
]

export default function ActivityTabs() {
  const [selected, setSelected] = useState(0)
  const id = useId()
  const buttons = useRef<(HTMLButtonElement | null)[]>([])

  return (
    <div className="relative mt-12 min-w-0 overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-[0_16px_48px_-32px_rgba(0,0,0,0.6)] sm:p-7">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mb-6 grid grid-cols-1 items-center gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr]">
        <div>
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">A little progress, every day</p>
          <h3 className="text-xl font-medium tracking-[-0.04em]">Coding activity<span className="text-accent">.</span></h3>
        </div>
        <div className="row-start-3 sm:col-span-2 sm:row-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
          <WeeklyActivityAverage key={tabs[selected].name} endpoint={tabs[selected].endpoint} unit={tabs[selected].unit} />
        </div>
        <div role="tablist" aria-label="Activity source" className="row-start-2 inline-flex w-full gap-1 rounded-xl border border-border bg-card p-1 sm:col-start-2 sm:row-start-1 sm:w-auto sm:justify-self-end lg:col-start-3">
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              ref={element => { buttons.current[index] = element }}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-panel-${index}`}
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={event => {
                let next: number
                if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
                else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length
                else if (event.key === 'Home') next = 0
                else if (event.key === 'End') next = tabs.length - 1
                else return
                event.preventDefault()
                setSelected(next)
                buttons.current[next]?.focus()
              }}
              className={`inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${selected === index ? 'border-accent/20 bg-accent/10 text-accent shadow-sm' : 'border-transparent text-muted-foreground hover:bg-background/60 hover:text-foreground'}`}
            >
              <Icon icon={tab.icon} width={14} height={14} aria-hidden="true" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.name}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={selected !== index}
          tabIndex={0}
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          {selected === index && (
            <>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-4 text-[10px] text-muted-foreground">
                <p>{tab.description} <span aria-hidden="true" className="mx-1 text-border">/</span> Past 365 days</p>
                <span className="inline-flex items-center gap-1.5" title="Updates every five minutes while this tab is open">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent/70" /> Updates every 5 min
                </span>
              </div>
              <CodingActivityChart endpoint={tab.endpoint} service={tab.name} label={tab.label} />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <a href={tab.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-accent/25 bg-accent/[0.06] px-3 py-2 text-xs font-medium text-accent transition-colors hover:border-accent/50 hover:bg-accent/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  {tab.linkLabel} <Icon icon={faArrowUpRightFromSquare} width={12} height={12} aria-hidden="true" />
                </a>
                <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground" aria-label={`${tab.description}: darker squares mean less activity, brighter squares mean more.`}>
                  <span className="mr-1">Less</span>
                  {tab.colors.map(color => <span key={color} aria-hidden="true" className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: color }} />)}
                  <span className="ml-1">More</span>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
