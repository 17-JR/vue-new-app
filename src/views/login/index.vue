<template>
  <div class="login-container">
    <Header :title="title"></Header>
    <van-form @submit="login" ref="login-Fromref">
      <van-field
        v-model="user.moblie"
        name="mobile"
        placeholder="手机号"
        left-icon="phone-o"
        validate-trigger="onBlur"
        :rules="[{ required: true, message: '请填写正确的手机号' , pattern}]"
      />
      <van-field
        v-model="user.code"
        left-icon="coupon-o"
        name="code"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' ,validator: asyncValidator}]"
      >
        <!-- 验证码插槽 -->
        <template #button>
          <!-- 大小 圆边 -->
          <van-button size="small" round @click.prevent ="sendCode" v-if='isshow'>发送验证码</van-button>
          <van-count-down :time="10*1000" format="ss s" v-else @finish="isshow = true"/>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 头部组件
import Header from '@/components/header'
// 请求封装
import { login, sendCode } from '@/api/user'
// 信息提示
import { Toast } from 'vant'
export default {
  name: 'Login',
  components: {
    Header
  },
  props: {

  },
  data () {
    return {
      title: '登录',
      // 登录信息
      user: {
        // 手机
        moblie: '',
        // 验证码
        code: '246810'
      },
      pattern: /^1[3|4|5|7|8][0-9]{9}$/,
      isshow: true
    }
  },
  methods: {
    // 登录请求
    async login () {
      // 登录提示
      Toast.loading({
        message: '登录中...',
        forbidClick: true,
        loadingType: 'spinner'
      })
      // 1.找到数据接口
      // 2.封装请求方法
      // 3.调用请求方法
      try {
        const res = await login(this.user)
        // 4.响应处理结果
        Toast.success('成功文案')
        console.log(res)
      } catch (error) {
        console.log(error)
        Toast.fail('失败文案')
      }
    },
    // 验证码校验函数
    asyncValidator (val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    },
    // 发送验证码
    async sendCode () {
      // 校验手机
      // 验证通过，获取验证码
      try {
        // 验证成功
        await this.$refs['login-Fromref'].validate('mobile')
        // 获取验证码
        const res = await sendCode(this.user.mobile)
        console.log(res)
      } catch (err) {
        // try 里面的任何代码错误都会进入catch
        // 不同的错误需要不同提示，需要进行判断
        // 定义一个变量存储提示信息
        let message = ''
        // 判断
        if (err && err.response && err.response.statu === 429) {
          // 发送频繁
          message = '发送频繁'
        } else if (err.name === 'mobile') {
        // 验证失败
          message = err.message
        } else {
        // 未知错误
          message = '发送失败，请稍后重试'
          // 倒计时开始，隐藏发送按钮
          this.isshow = false
          // 倒计时结束，隐藏倒计时
        }
        // 发出提示
        this.$toast(
          {
            message, // 提示信息
            position: 'top'// 消息提示位置
          }
        )
      }
    }
  }
}
</script>

<style>
</style>
