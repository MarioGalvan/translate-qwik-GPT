import { component$, createContextId, PropFunction } from "@builder.io/qwik";
import styles from "./hero.module.css";
export const CTX: any = createContextId("hero");
interface HeroProps {
  translateText: PropFunction<(text: string) => void>;
}
export default component$((props: HeroProps) => {
  return (
    <>
      <div class={styles.hero}>
        <h1>Traduce tu ingles</h1>
        <input
          class={styles.searchInput}
          type="search"
          // value={props.translateText}
          onKeyUp$={(event: any) => {
            props.translateText(event?.target?.value);
          }}
          onClick$={(event: any) => {
            if (event?.target?.value.length === 0) {
              props.translateText("");
            }
          }}
          onSearch$={(event: any) => {
            props.translateText(event?.target?.value);
          }}
          placeholder="Ingresa tu texto"
        />
      </div>
    </>
  );
});
