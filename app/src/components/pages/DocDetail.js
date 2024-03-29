import React from "react";
import { useParams } from "react-router-dom";

function DocDetail() {
  // useParamsフックで、MyRouterで渡したURLパラメーターを取得
  const { param } = useParams();

  return (
    <div>
      <p>閲覧対象: {param}</p>
    </div>
  );
}

export default DocDetail;
