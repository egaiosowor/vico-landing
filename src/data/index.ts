export interface FeatureMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

export interface Feature {
  label: string;
  title: string;
  body: string;
  icon: string;
  media: FeatureMedia;
}

export const features: Feature[] = [
  {
    label: "Radar",
    title: "Your area at a glance",
    body: "See nearby incidents and the people in your Circle.",
    // Heroicons outline: map-pin
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
    media: { type: "image", src: "/assets/screenshots/map.png", alt: "Radar map" },
  },
  {
    label: "Video-first",
    title: "Stay informed",
    body: "Get updates on incidents happening around you.",
    // play-circle
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z",
    media: { type: "video", src: "/assets/reels.mp4", poster: "/assets/screenshots/reels.png" },
  },
  {
    label: "Report",
    title: "Report in seconds",
    body: "Share what you see with your community.",
    // camera
    icon: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
    media: { type: "video", src: "/assets/report.mp4", poster: "/assets/screenshots/report.png" },
  },
  {
    label: "Circles",
    title: "Stay connected",
    body: "Keep the people you trust informed.",
    // user-group
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    media: { type: "video", src: "/assets/chat.mp4", poster: "/assets/screenshots/circles.png" },
  },
];

