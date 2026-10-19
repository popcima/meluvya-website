"use client";

import { useRef, type KeyboardEvent } from "react";

type Option = { id: string; label: string };

type ChoiceTabsProps = {
  options: readonly Option[];
  value: string;
  onChange: (value: string) => void;
  idPrefix: string;
  label: string;
  className?: string;
};

export function ChoiceTabs({ options, value, onChange, idPrefix, label, className = "" }: ChoiceTabsProps) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % options.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + options.length) % options.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else return;
    event.preventDefault();
    onChange(options[next].id);
    buttons.current[next]?.focus();
  }

  return <div className={`choice-tabs ${className}`} role="tablist" aria-label={label}>
    {options.map((option, index) => <button
      key={option.id}
      ref={(button) => { buttons.current[index] = button; }}
      type="button"
      role="tab"
      id={`${idPrefix}-tab-${option.id}`}
      aria-selected={value === option.id}
      aria-controls={`${idPrefix}-panel-${option.id}`}
      tabIndex={value === option.id ? 0 : -1}
      onClick={() => onChange(option.id)}
      onKeyDown={(event) => onKeyDown(event, index)}
    >{option.label}</button>)}
  </div>;
}
