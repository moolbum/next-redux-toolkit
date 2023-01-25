import { RootState } from "@/store";
import { setCpAdd, setCpList } from "@/store/slice/charger/operate/cp";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const cpDto = useSelector(
    (state: RootState) => state.charger.operateReducers.cp
  );

  const cp = useSelector((state: RootState) => state);

  console.log("cp>>>>>>>>>", cp);
  console.log("cpDto>>>>>>", cpDto);

  useEffect(() => {
    dispatch(setCpList({ name: "cp 리스트 디스 패치", content: 123 }));
    dispatch(setCpAdd({ name: "cp 추가 디스 패치", content: 12300000 }));
  }, [dispatch]);

  return <div>Login View</div>;
}

export default Login;
