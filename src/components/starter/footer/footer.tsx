import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();
  console.log("serverTime.value", serverTime.value);

  console.log(":::Asd");
  return (
    <footer>
      <a
        href="https://co.linkedin.com/in/mdmontero?trk=profile-badge"
        target="_blank"
        class={styles.anchor}
      >
        <img
          src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
          alt="Logo"
          class={styles.logo}
          width={50}
        />
        Hecho por Mario Montero 😎
        {/* <span class={styles.spacer}>|</span> */}
        {/* <span>{serverTime.value.date.toLocaleLowerCase()}</span> */}
      </a>
    </footer>
  );
});
