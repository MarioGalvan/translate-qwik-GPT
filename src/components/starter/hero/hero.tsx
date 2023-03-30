import { $, component$, createContextId, PropFunction } from "@builder.io/qwik";
import styles from "./hero.module.css";
export const CTX: any = createContextId("hero");
const BASE_URL_API_GPT = "https://translategpt.up.railway.app";
interface HeroProps {
  translateText: PropFunction<(text: string) => void>;
}

export default component$((props: HeroProps) => {
  const handleGPT$ = $(async (text: string) => {
    const response = await fetch(
      `${BASE_URL_API_GPT}/translate?english_word=${text}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    props.translateText(data?.spanish);
  });

  return (
    <>
      <div class={styles.hero}>
        <h1>
          <strong>Traduce con GPT 🤖</strong>
        </h1>
        <input
          class={styles.searchInput}
          type="search"
          // value={props.translateText}
          onKeyUp$={(event: any) => {
            const text = event?.target?.value;
            handleGPT$(text);
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
