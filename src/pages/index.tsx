import { Link } from 'umi';
import styles from './index.less';
import { studyLog } from '../../config/routes';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>目录</h1>
      {studyLog?.map((i) => (
        <Link className={styles.logLink} to={i.path}>
          {i.title}
        </Link>
      ))}
    </div>
  );
}
