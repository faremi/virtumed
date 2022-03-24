import styles from "../styles/ItemList.module.css";

function ItemList(params) {
  return (
    <section className="xl:mx-40 font-sans">
      <div className={styles.card}>
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full text-center">
          <div className="flex flex-col relative h-full bg-teal-50">
            <img src="/../item1.jpeg" className="h-2/3"></img>
            <div className="flex mt-10">
              Accusamus atque occaecati sed commodi repellendus dolor. Adipisci
              corrupti ratione dolorum. Molestias ullam quas. Voluptate
              quibusdam a quia sit quam inventore. Impedit quam qui voluptatem
              tempore omnis dolores.
            </div>
          </div>
          <div className="flex flex-col relative bg-teal-50  h-full text-center">
            <img src="/../item2.jpeg" className="h-2/3"></img>
            <div className="flex mt-10">
              Accusamus atque occaecati sed commodi repellendus dolor. Adipisci
              corrupti ratione dolorum. Molestias ullam quas. Voluptate
              quibusdam a quia sit quam inventore. Impedit quam qui voluptatem
              tempore omnis dolores.
            </div>
          </div>
          <div className="flex flex-col relative bg-teal-50  h-full text-center">
            <img src="/../item3.jpeg" className="h-2/3"></img>
            <div className="flex mt-10">
              Accusamus atque occaecati sed commodi repellendus dolor. Adipisci
              corrupti ratione dolorum. Molestias ullam quas. Voluptate
              quibusdam a quia sit quam inventore. Impedit quam qui voluptatem
              tempore omnis dolores.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemList;
