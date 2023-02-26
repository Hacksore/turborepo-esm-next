import type { Activity } from "@acme/types";
// import { Client, GatewayIntentBits } from "discord.js";

// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildPresences,
//     GatewayIntentBits.GuildMembers,
//     GatewayIntentBits.GuildVoiceStates,
//   ],
// });

const a: Activity = {
  name: "test",
}

console.log(a.name);