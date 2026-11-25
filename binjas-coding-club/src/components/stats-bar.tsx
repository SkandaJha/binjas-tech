import { stats } from "@/content/site";
import { StatGlyph } from "./icons";
import { Container, IconTile } from "./primitives";

/**
 * One panel, four columns, thin dividers between. Stats with no verified value
 * are skipped — and the section disappears entirely if none are set, so the site
 * never shows an invented number.
 */
export function StatsBar() {
  const filled = stats.filter((stat) => stat.value !== null);
  if (filled.length === 0) return null;

  return (
    <section aria-label="Club at a glance" className="pb-6 sm:pb-8">
      <Container>
        <div className="panel grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x dark:divide-slate-800">
          {filled.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 px-5 py-6 sm:px-6">
              <IconTile tone={stat.icon} size="lg">
                <StatGlyph tone={stat.icon} className="size-5" />
              </IconTile>
              <div className="min-w-0">
                <p className="text-xl font-semibold text-ink sm:text-2xl dark:text-white">{stat.value}</p>
                <p className="mt-0.5 truncate text-[13px] text-muted dark:text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
