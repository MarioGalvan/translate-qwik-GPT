import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();
  console.log("serverTime.value",serverTime.value)

  console.log(":::Asd")
  return (
    <footer>
      <a href="https://github.com/MarioGalvan" target="_blank" class={styles.anchor}>
        Hecho por Mario Montero 😎
        {/* <span class={styles.spacer}>|</span> */}
        {/* <span>{serverTime.value.date.toLocaleLowerCase()}</span> */}
      </a>
    </footer>
  );
});
