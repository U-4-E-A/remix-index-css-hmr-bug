import TestComponent from "../components/TestComponent";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.index}>
      _index.tsx
      <TestComponent />
    </div>
  );
}
