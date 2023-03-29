import { $, component$, useContextProvider, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero, { CTX } from "~/components/starter/hero/hero";

export default component$(() => {
  const stateTextTranslate = useStore({
    text: "Escribe algo para traducir...",
  });

  useContextProvider(CTX, {
    textTranslate: "",
  });

  const handleChange$ = $((text: string) => {
    stateTextTranslate.text = text;
  });

  return (
    <>
      <Hero translateText={handleChange$} />
      <div class="section bright">
        <div class="container center">
          <h2 class="typing" >
            {stateTextTranslate?.text
              ? stateTextTranslate?.text
              : "Escribe algo para traducir..."}
          </h2>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Translate your english to spanish",
  meta: [
    {
      name: "description",
      content: "Translate your english to spanish",
    },
  ],
};
