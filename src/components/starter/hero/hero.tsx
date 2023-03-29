import { component$, createContextId, PropFunction } from "@builder.io/qwik";
import styles from "./hero.module.css";
export const CTX: any = createContextId("hero");
interface HeroProps {
  translateText: PropFunction<(text: string) => void>;
}
export default component$((props: HeroProps) => {
  return (
    <div class={styles.hero}>
      <h1>Traduce tu ingles con AI</h1>
      <input
        class={styles.searchInput}
        type="search"
        onKeyUp$={(event: any) => {
          props.translateText(event?.target?.value);
        }}
        
        placeholder="Ingresa tu texto"
      />
    </div>
  );
});
