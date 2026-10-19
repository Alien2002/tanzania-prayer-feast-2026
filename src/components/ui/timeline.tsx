import { Icon, type IconName } from "./icon";
export type TimelineItem = {
  icon: IconName;
  title: string;
  description: string;
  time?: string;
};
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="tl">
      {items.map((item) => (
        <li key={item.title}>
          <span className="ic">
            <Icon name={item.icon} />
          </span>
          <div className="box">
            {item.time && <time>{item.time}</time>}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
