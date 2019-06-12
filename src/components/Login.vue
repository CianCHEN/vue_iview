<style>
html,body {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
}
.login {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
    position: relative;
}
.login .from-wrap{
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -150px;
    width: 400px;
    height: 240px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
}
.login h2 {
    text-align: center;
    margin-bottom: 20px;
}
.login FormItem {
    margin-bottom: 15px;
}
.login .form-footer {
    text-align: right;
}
.ivu-form-item-required .ivu-form-item-label:before {
    display: none;
}
</style>
<template>
    <div class="login">
        <div class="from-wrap">
            <h2>登录</h2>
            <Form ref="loginData" :model="loginData" :rules="ruleValidate" :label-width="80">
                <FormItem label="Account" prop="acct">
                    <Input prefix="md-person" v-model="loginData.acct" placeholder="请输入账号"></Input>
                </FormItem>
                <FormItem label="Password" prop="pass">
                    <Input prefix="md-lock" type="password" v-model="loginData.pass" placeholder="请输入密码" @keyup.enter.native="handleSubmit('loginData')"></Input>
                </FormItem>
                <FormItem class="form-footer">
                    <Button type="primary" @click="handleSubmit('loginData')">Submit</Button>
                    <Button  @click="handleReset('loginData')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </div>
<!--
        <div ref="testDom">11111</div>
        <button @click="getTest('testDom')">获取test节点</button>
-->
    </div>
</template>
<script>
export default {
  data () {
    return {
      loginData: {
        acct:'',
        pass:''
      },
      ruleValidate: {
        acct: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 16, message: '账号长度3-16个字符', trigger: 'blur' }
        ],
        pass: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          //console.log(this.loginData.acct)
          //this.$Message.success('提交成功!')
          if (this.loginData.acct == 'admin' && this.loginData.pass == '123456'){
              this.$Message.success('登录成功!')
              this.$router.push({
                   path: '/'
              });
              console.log(this.loginData.acct)
          } else {
             this.$Message.error('用户名或者密码错误!!!')
            }
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
        console.log(this.$refs[name])
    },
   getTest(name) {
      console.log(this.$refs[name])  //如果不传参数的话 console.log(this.$refs.testDom)
    }
  }
}
</script>
