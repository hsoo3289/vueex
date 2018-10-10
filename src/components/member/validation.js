export default {
  email: {
    validation: {
      reqiured: {
        event: ["keyup"],
        method: function (e){
          let val = e.target.value;
          return val.trim() !== "";
        },
        error: "값을 입력해주세요."
      },
    },
    props: {
      input: {
        placeholder: "이메일을 입력 하시오.",
        id: "email",
        name: "username",
        type: "text"
      },
      label: {
        innerText: "아이디",
        for: "email",
        
      }
    }
  },
  password: {
    validation: {
      length: {
        event: ["keyup"],
        method: function (e) {
          let val = e.target.value;
          return val.trim().length >= 8;
        },
        error: "길이가 8이상이어야 합니다."
      }
    },
    props: {
      input: {
        placeholder: "비밀번호를 입력해 주세요.",
        id: "password",
        name: "password",
        type: "password"
      },
      label: {
        innerText: "비밀번호",
        for: "password",
      }
    }
  }
};