import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth } from "../../firebase";

function DocDetail() {
  // useParamsフックで、MyRouterで渡したURLパラメーターを取得
  const { param } = useParams();
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <div>
        <h1>Error: ログインしていません</h1>
        <p>このページを表示するにはログインが必要です。</p>
      </div>
    );
  }

  return (
    <div>
      <p>編集対象: {param}</p>
    </div>
  );
}

export default DocDetail;
