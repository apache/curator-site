# Tech Note 6

Friends don't let friends write ZooKeeper recipes

## Details

Writing ZooKeeper code is on par with the difficulty in writing concurrent language code. As we all know [Concurrency is Hard](https://www.google.com/search?q=concurrency+is+hard&aq=f&oq=concurrency+is+hard)! For ZooKeeper in particular, there are numerous edge case and undocumented behaviors that you must know in order to write correct recipes. In light of this, we **strongly** suggest you use one of the existing [Curator pre-built recipes](recipes.md) instead of writing raw ZooKeeper code yourself. At minimum, use a Curator recipe as a base for your work.
