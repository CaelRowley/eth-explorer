import styles from '@/app/ui/triforce.module.css';

export default function Logo() {
  return (
    <div >
      <div
        className={styles.triforce}
      />
      <p className={`text-xl text-gray-800 md:text-xl md:leading-normal flex justify-center`}>
        <strong>Eth Explorer</strong>
      </p>
    </div>
  );
}
