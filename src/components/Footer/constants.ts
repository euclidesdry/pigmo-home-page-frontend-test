export const bannersData = [
  {
    name: "discord",
    icon: "/assets/icons/discord.svg",
    text: "Join <strong>Discord&apos;s largest community</strong> of players now!",
  },
  {
    name: "telegram",
    icon: "/assets/icons/telegram.svg",
    text: "Pigmo is also on Telegram. <strong>Discover more now</strong>",
  },
  {
    name: "x",
    icon: "/assets/icons/x.svg",
    text: "<strong>Follow us on X</strong> and keep up everything about us",
  },
] as const;

export const links = [
  { title: "Platform", list: ["About", "Support", "Provably Fair"] },
  { title: "Policy", list: ["Terms of Service", "Privacy Policy", "License"] },
  {
    title: "Community",
    list: [
      ["Twitter", "Instagram", "Facebook"],
      ["Telegram", "Discord", "Zealy"],
    ],
  },
] as const;
