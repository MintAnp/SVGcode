import{i as n,F as o}from"./index.2e5f385d.js";import{s as r}from"./vendor.741bd9a9.js";window.launchQueue.setConsumer(async e=>{if(!!e.files.length)for(const t of e.files){const s=await t.getFile();if(s.type.startsWith("image/")){const i=URL.createObjectURL(s);n.addEventListener("load",()=>{URL.revokeObjectURL(i)},{once:!0}),n.src=i,await r(o,t);return}}});