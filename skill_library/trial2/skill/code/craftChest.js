async function craftChest(bot) {
  const requiredPlanks = 8;
  const planksCount = bot.inventory.count(mcData.itemsByName.spruce_planks.id);
  if (planksCount < requiredPlanks) {
    bot.chat("Not enough spruce_planks. Mining a spruce_log and crafting more...");
    await mineBlock(bot, "spruce_log", 1);
    await craftItem(bot, "spruce_planks", 1);
    bot.chat("Spruce_planks crafted.");
  }
  const craftingTable = bot.findBlock({
    matching: mcData.blocksByName.crafting_table.id,
    maxDistance: 32
  });
  if (!craftingTable) {
    const craftingTablePosition = bot.entity.position.offset(1, 0, 0);
    await placeItem(bot, "crafting_table", craftingTablePosition);
    bot.chat("Crafting_table placed.");
  }
  bot.chat("Crafting a chest...");
  await craftItem(bot, "chest", 1);
  bot.chat("Chest crafted.");
}
