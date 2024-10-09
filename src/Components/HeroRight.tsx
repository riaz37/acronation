import IconCloud from "@/Components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function HeroRight() {
  return (
    <div className="heroR relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-17 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
