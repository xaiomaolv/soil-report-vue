<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-card class="profile-card">
        <div slot="header" class="clearfix">
          <h2>公司介绍</h2>
        </div>
        <el-col :sm="24" :lg="16">
          <p>云南恩捷科技发展有限公司成立于1997年，注册资金1000万，主要从事企业级软件开发，销售，系统集成和网络解决方案以及商品销售等业务。公司成立至今，始终坚持以推广高科技产品，提供友善的技术支持为经营方向，团结奋进、不断进取，随时跟踪国内外最新技术的发展，确保产品与服务的先进性、可靠性、及时性。公司的客户涉及金融、政府、制造等行业，在金融科技应用和支付领域有丰富的行业经验和竞争力。</p>
          <p>
            多年来，公司以
            <span class="emphasis">“售前明服务，售后有保障”</span>为宗旨，为银行提供金融科技服务；为政府及企业提供系统集成综合服务；为教育行业提供智慧校园云平台建设服务，通过先进的技术方法切实为各类型客户解决难题。
          </p>
          <p>
            <span class="emphasis">“以客户为中心，坚持本地化服务”</span>是恩捷公司自身成功和使客户满意以及合作伙伴成功的关键。
          </p>
        </el-col>
        <el-col :sm="24" :lg="8">
          <img
            :src="require('@/assets/images/company-1.png')"
            style="width: 65%;margin:-10px 20px 0"
          >
        </el-col>
      </el-card>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>主营产品和业务</h2>
        <p>
          公司主要从事企业级软件开发，销售，系统集成和网络解决方案以及商品销售等业务。
          坚持推广高科技产品，提供友善的技术支持，随时跟踪国内外最新技术的发展，确保产品与服务的先进性、可靠性、及时性，客户涉及金融、政府、制造等行业。
          现已为数家银行、学校和企业原创开发个性化应用软件，并自主研发和销售生物信息身份认证终端。同时，公司代理销售IT产品。
        </p>
        <p>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-cloudy"
            plain
            @click="goTarget('https://git.ynejkj.com:9999/develop/soil-vue')"
            >访问GitLab</el-button
          >
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul style="line-height:25px">
              <li>SpringBoot</li>
              <li>Spring Security</li>
              <li>JWT</li>
              <li>MyBatis</li>
              <li>Druid</li>
              <li>Fastjson</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul style="line-height:25px">
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>联系信息</span>
          </div>
          <div class="body">
            <p>
              <i class="el-icon-s-promotion"></i> 官网：
              <a href="https://ynejkj.com">https://ynejkj.com</a>
            </p>
            <p>
              <i class="el-icon-user-solid"></i> 
              <a href="javascript:;">公司邮箱：work@ynejkj.com</a>
            </p>
            <p>
              <i class="el-icon-chat-dot-round"></i> 联系电话：<a
                href="javascript:;"
                >0871-63636222</a
              >
            </p>
            <p>
              <i class="el-icon-money"></i> 公司地址：<a
                href="javascript:;"
                class="支付宝信息"
                >云南省昆明市人民中路右弼大厦14楼B2座</a
              >
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // 版本号
      version: "3.4.0",
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }
  p{
    line-height:25px;
    font-size:15px;
    text-indent:2em;
  }
  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
.emphasis {
  color: #1140c4dc;
  font-size: 20px;
  font-weight: bold;
}
</style>

