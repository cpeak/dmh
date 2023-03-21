
        <section className="">
          {data
              .sort((a, b) => a.order - b.order)
              .map((creature) => (
                <Creature
                  key = {creature.id}
                  npc = {creature.npc}
                  name = {creature.name}
                  pc = {creature.pc}
                  level = {creature.level}
                  hp = {creature.hp}
                  ac = {creature.ac}
                  pp = {creature.pp}
                  str = {creature.str}
                  dex = {creature.dex}
                  const = {creature.const}
                  int = {creature.int}
                  wis = {creature.wis}
                  cha = {creature.cha}
                />
              ))}
        </section>

